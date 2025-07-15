import fs from 'fs';
import path from 'path';

// Helper to parse command line arguments
function getArg(argName) {
  const arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));
  if (!arg) return null;
  // Handles arguments with and without quotes
  return arg.split('=')[1].replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
}

// Helper to create a URL-friendly slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

function createBlogPost() {
  const title = getArg('title');
  const excerpt = getArg('excerpt');

  if (!title || !excerpt) {
    console.error('Error: --title and --excerpt are mandatory.');
    console.log('Example: node scripts/create-blog-post.mjs --title="My New Post" --excerpt="A summary of the post."');
    process.exit(1);
  }

  const slug = getArg('slug') || slugify(title);
  const canonicalUrl = getArg('canonical') || `https://contentcraft.ai/blog/${slug}`;
  const tags = getArg('tags')?.split(',') || [];
  const author = getArg('author') || 'ContentCraft Team';
  const featuredImage = getArg('image') || '/og-blog-post.jpg'; // Default image

  const postDir = path.join(process.cwd(), 'app', 'blog', slug);

  if (fs.existsSync(postDir)) {
    console.error(`Error: A blog post with the slug '${slug}' already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(postDir, { recursive: true });

  const today = new Date();
  const date = today.toISOString().split('T')[0];
  const fullDate = today.toISOString();

  const template = `
import type { Metadata } from "next"
import { Bot, Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "${title} | ContentCraft",
  description: "${excerpt}",
  keywords: [${tags.map(t => `"${t.trim()}"`).join(', ')}],
  authors: [{ name: "${author}" }],
  openGraph: {
    title: "${title}",
    description: "${excerpt}",
    url: "${canonicalUrl}",
    type: "article",
    publishedTime: "${fullDate}",
    authors: ["${author}"],
    images: [
      {
        url: "${featuredImage}",
        width: 1200,
        height: 630,
        alt: "${title}",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${excerpt}",
    images: ["${featuredImage}"],
  },
  alternates: {
    canonical: "${canonicalUrl}",
  },
}

export default function BlogPostPage() {
  return (
    <>
      {/* You can add JSON-LD schema here if needed */}
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <a href="/" className="text-2xl font-bold text-gray-900">ContentCraft</a>
            </div>
            <Button variant="outline">
              <a href="/book-meeting">Book a Meeting</a>
            </Button>
          </div>
        </header>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back to Blog */}
              <div className="mb-8">
                <Button variant="ghost" className="p-0 h-auto">
                  <a href="/blog" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
                    Back to Blog
                  </a>
                </Button>
              </div>

              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${title}</h1>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                  <time dateTime="${date}">${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span>5 min read</span>
                </div>
              </header>

              {/* Article Body */}
              <div className="prose lg:prose-xl max-w-none">
                <p>${excerpt}</p>
                <p>
                  <strong>This is a placeholder for your blog post content.</strong> Edit this file to add your own
                  text, images, and other elements.
                </p>
                {/* Add more content here */}
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; ${new Date().getFullYear()} ContentCraft. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
`;

  const pageFilePath = path.join(postDir, 'page.tsx');
  fs.writeFileSync(pageFilePath, template.trim());

  const metadata = {
    title,
    excerpt,
    date,
    slug,
    author,
    tags,
    featuredImage,
  };

  const metadataFilePath = path.join(postDir, 'metadata.json');
  fs.writeFileSync(metadataFilePath, JSON.stringify(metadata, null, 2));

  console.log(`✅ Successfully created new blog post:`);
  console.log(`   - ${path.relative(process.cwd(), pageFilePath)}`);
  console.log(`   - ${path.relative(process.cwd(), metadataFilePath)}`);
}

createBlogPost();
