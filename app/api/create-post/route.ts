import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

// Function to convert title to a URL-friendly slug
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with a hyphen
    .replace(/[^ء-ي٠-٩a-z0-9-]/g, '') // Remove any non-alphanumeric characters except for Arabic letters and numbers
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single one
}

export async function POST(req: NextRequest) {
  // 1. Authenticate the request
  const authHeader = req.headers.get('authorization');
  const apiKey = authHeader?.split(' ')[1];

  if (apiKey !== process.env.ZAPIER_API_KEY) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 2. Parse the request body
    const { title, description, content } = await req.json();

    if (!title || !description || !content) {
      return NextResponse.json({ message: 'Missing required fields: title, description, and content are required.' }, { status: 400 });
    }

    const slug = toSlug(title);
    const postDir = path.join(process.cwd(), 'app', 'blog', slug);
    const pagePath = path.join(postDir, 'page.tsx');
    const metadataPath = path.join(postDir, 'metadata.json');

    // 3. Create the necessary files
    await fs.mkdir(postDir, { recursive: true });
    await fs.writeFile(pagePath, content);
    await fs.writeFile(metadataPath, JSON.stringify({ title, description }, null, 2));

    // 4. Commit and push the changes to GitHub
    // Note: This requires git to be configured on the Vercel deployment environment.
    try {
      execSync('git config --global user.name "Automated Content Publisher"');
      execSync('git config --global user.email "ci@your-domain.com"');
      execSync(`git pull`); // Ensure we have the latest changes
      execSync(`git add ${pagePath} ${metadataPath}`);
      execSync(`git commit -m "feat: add new blog post '${title}'"`);
      execSync('git push');
    } catch (gitError) {
      console.error('Git operation failed:', gitError);
      // Don't block the response for git errors, but log them.
      return NextResponse.json({ message: 'Post created, but failed to push to GitHub.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Post created and published successfully!', slug: slug }, { status: 201 });

  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
