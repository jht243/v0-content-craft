import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import { promises as fs } from 'fs';
import path from 'path';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  tags?: string[];
  featuredImage?: string;
}

const createPageTemplate = (title: string, excerpt: string, slug: string, author: string, date: string, tags: string[] = [], featuredImage: string = '') => {
  return `import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "${title}",
  description: "${excerpt}",
};

export default function BlogPost() {
  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <h1>${title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>By ${author}</span>
        <span className="mx-2">•</span>
        <time dateTime="${new Date(date).toISOString()}">
          ${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
      
      {featuredImage && (
        <div className="mb-8">
          <img 
            src={featuredImage} 
            alt="${title}" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      <div className="prose prose-lg">
        <p>${excerpt}</p>
        {/* Your blog post content will be rendered here */}
      </div>
      
      {tags.length > 0 && (
        <div className="mt-8 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {${JSON.stringify(tags)}.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
`;
};

export async function POST(request: Request) {
  try {
    // Verify authorization
    const authToken = request.headers.get("Authorization");
    if (authToken !== `Bearer ${process.env.ZAPIER_SECRET_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { title, excerpt, author, tags = [], featuredImage = '' } = await request.json() as BlogPost;
    
    if (!title || !excerpt || !author) {
      return NextResponse.json(
        { error: "Missing required fields: title, excerpt, and author are required" },
        { status: 400 }
      );
    }

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();

    const date = new Date().toISOString();
    const postDir = path.join(process.cwd(), 'app/blog', slug);
    
    // Create metadata
    const metadata = {
      title,
      excerpt,
      slug,
      date,
      author,
      tags,
      featuredImage,
    };

    // Create page content
    const pageContent = createPageTemplate(title, excerpt, slug, author, date, tags, featuredImage);

    if (process.env.NODE_ENV === 'production' && process.env.GH_TOKEN) {
      // In production, commit to GitHub
      const octokit = new Octokit({ auth: process.env.GH_TOKEN });
      const owner = process.env.GITHUB_OWNER || 'jht243';
      const repo = process.env.GITHUB_REPO || 'v0-content-craft';
      const branch = process.env.GITHUB_BRANCH || 'main';
      const baseTree = await octokit.git.getCommit({
        owner,
        repo,
        commit_sha: await octokit.repos.getBranch({
          owner,
          repo,
          branch,
        }).then(res => res.data.commit.sha)
      }).then(res => res.data.tree.sha);

      // Create blobs for the new files
      const metadataBlob = await octokit.git.createBlob({
        owner,
        repo,
        content: JSON.stringify(metadata, null, 2),
        encoding: 'utf-8',
      });

      const pageBlob = await octokit.git.createBlob({
        owner,
        repo,
        content: Buffer.from(pageContent).toString('base64'),
        encoding: 'base64',
      });

      // Create a new tree with the blobs
      const newTree = await octokit.git.createTree({
        owner,
        repo,
        base_tree: baseTree,
        tree: [
          {
            path: `app/blog/${slug}/metadata.json`,
            mode: '100644',
            type: 'blob',
            sha: metadataBlob.data.sha,
          },
          {
            path: `app/blog/${slug}/page.tsx`,
            mode: '100644',
            type: 'blob',
            sha: pageBlob.data.sha,
          },
        ],
      });

      // Create a new commit
      const newCommit = await octokit.git.createCommit({
        owner,
        repo,
        message: `Add new blog post: ${title}`,
        tree: newTree.data.sha,
        parents: [await octokit.repos.getBranch({
          owner,
          repo,
          branch,
        }).then(res => res.data.commit.sha)],
      });

      // Update the branch reference
      await octokit.git.updateRef({
        owner,
        repo,
        ref: `heads/${branch}`,
        sha: newCommit.data.sha,
      });

      console.log(`Successfully committed blog post ${slug} to GitHub`);
    } else {
      // In development, write to local filesystem
      await fs.mkdir(postDir, { recursive: true });
      await fs.writeFile(
        path.join(postDir, 'metadata.json'),
        JSON.stringify(metadata, null, 2)
      );
      await fs.writeFile(
        path.join(postDir, 'page.tsx'),
        pageContent
      );
      console.log(`Successfully created blog post at ${postDir}`);
    }

    return NextResponse.json({ 
      success: true, 
      slug,
      message: process.env.NODE_ENV === 'production' 
        ? 'Blog post created and committed to GitHub' 
        : 'Blog post created locally'
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
