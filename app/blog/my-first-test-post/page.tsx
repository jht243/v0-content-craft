import type { Metadata } from "next"
import { Bot, Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "My First Test Post | ContentCraft",
  description: "This is a test to see if the script works correctly.",
  keywords: [],
  authors: [{ name: "ContentCraft Team" }],
  openGraph: {
    title: "My First Test Post",
    description: "This is a test to see if the script works correctly.",
    url: "https://contentcraft.ai/blog/my-first-test-post",
    type: "article",
    publishedTime: "2025-07-03T16:25:40.583Z",
    authors: ["ContentCraft Team"],
    images: [
      {
        url: "/og-blog-post.jpg",
        width: 1200,
        height: 630,
        alt: "My First Test Post",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My First Test Post",
    description: "This is a test to see if the script works correctly.",
    images: ["/og-blog-post.jpg"],
  },
  alternates: {
    canonical: "https://contentcraft.ai/blog/my-first-test-post",
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My First Test Post</h1>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                  <time dateTime="2025-07-03">July 2, 2025</time>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span>5 min read</span>
                </div>
              </header>

              {/* Article Body */}
              <div className="prose lg:prose-xl max-w-none">
                <p>This is a test to see if the script works correctly.</p>
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
            <p>&copy; 2025 ContentCraft. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}