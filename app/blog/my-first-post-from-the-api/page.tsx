import type { Metadata } from "next"
import { Bot, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: `My First Post from the API | ContentCraft`,
  description: `This post was created automatically by sending a request to the new API endpoint.`,
  authors: [{ name: `Zapier Test` }],
  openGraph: {
    title: `My First Post from the API`,
    description: `This post was created automatically by sending a request to the new API endpoint.`,
    url: `https://contentcraft.ai/blog/my-first-post-from-the-api`,
    type: "article",
    publishedTime: `2025-07-03T00:00:00.000Z`,
    authors: [`Zapier Test`],
    images: [{ url: `/images/blog/default.jpg`, width: 1200, height: 630, alt: `My First Post from the API` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `My First Post from the API`,
    description: `This post was created automatically by sending a request to the new API endpoint.`,
    images: [`/images/blog/default.jpg`],
  },
  alternates: {
    canonical: `https://contentcraft.ai/blog/my-first-post-from-the-api`,
  },
}

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
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
          <div className="mb-4 text-sm text-gray-600">
            <a href="/blog" className="hover:text-blue-600">Blog</a>
            <span className="mx-2">/</span>
            <span>My First Post from the API</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My First Post from the API</h1>
          <p className="text-xl text-gray-600 mb-8">This post was created automatically by sending a request to the new API endpoint.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-500 text-sm mb-8 border-t border-b py-4">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> Zapier Test</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> <time dateTime="2025-07-03">July 2, 2025</time></div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</div>
          </div>
          <div className="mb-8">
            <Image
              src="/images/blog/default.jpg"
              alt="My First Post from the API"
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <p>This is the beginning of your blog post. Write something amazing!</p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 mr-2 text-gray-500" />
            <span key="API" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">API</span>
            <span key="Automation" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Automation</span>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ContentCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
