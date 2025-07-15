import type { Metadata } from "next"
import { Bot, Calendar, Clock, ArrowRight, User, Tag, Image as ImageIcon, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Testing The Dynamic Blog Page | ContentCraft",
  description: "This post is a test to confirm that the new dynamic blog listing page correctly discovers and displays new content.",
  authors: [{ name: "ContentCraft Team" }],
  openGraph: {
    title: "Testing The Dynamic Blog Page",
    description: "This post is a test to confirm that the new dynamic blog listing page correctly discovers and displays new content.",
    url: "https://contentcraft.ai/blog/testing-the-dynamic-blog-page",
    type: "article",
    publishedTime: "2025-07-03T00:00:00.000Z",
    authors: ["ContentCraft Team"],
    images: [{ url: "/images/blog/default.jpg", width: 1200, height: 630, alt: "Testing The Dynamic Blog Page" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testing The Dynamic Blog Page",
    description: "This post is a test to confirm that the new dynamic blog listing page correctly discovers and displays new content.",
    images: ["/images/blog/default.jpg"],
  },
  alternates: {
    canonical: "https://contentcraft.ai/blog/testing-the-dynamic-blog-page",
  },
}

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <a href="/" className="text-2xl font-bold text-gray-900">ContentCraft</a>
          </div>
          <Button variant="outline"><a href="/book-meeting">Book a Meeting</a></Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-gray-600">
            <a href="/blog" className="hover:text-blue-600">Blog</a>
            <span className="mx-2">/</span>
            <span>Testing The Dynamic Blog Page</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Testing The Dynamic Blog Page</h1>
          <p className="text-xl text-gray-600 mb-8">This post is a test to confirm that the new dynamic blog listing page correctly discovers and displays new content.</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-500 text-sm mb-8 border-t border-b py-4">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> ContentCraft Team</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> <time dateTime="2025-07-03">{new Date("2025-07-03").toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/blog/default.jpg"
              alt="Testing The Dynamic Blog Page"
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>This is the beginning of your blog post. Write something amazing!</p>
            
            <h2>Introduction</h2>
            <p>Start with a compelling introduction that grabs the reader's attention.</p>
            
            <h3>Key Point 1</h3>
            <p>Elaborate on your first main point. Use examples and data to support your claims.</p>
            
            <h3>Key Point 2</h3>
            <p>Discuss your second main point. How does it relate to the overall topic?</p>
            
            <h2>Conclusion</h2>
            <p>Summarize your key points and provide a strong concluding thought. What should the reader take away from this post?</p>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 mr-2 text-gray-500" />
            <span key="Testing" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Testing</span>
            <span key="Automation" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Automation</span>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ContentCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
