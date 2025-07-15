import type { Metadata } from "next"
import { Bot, ArrowRight, Calendar, Clock, Search, Tag, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Marketing Automation Blog - ContentCraft",
  description:
    "Stay updated with the latest trends in AI marketing automation, small business growth strategies, and expert insights from ContentCraft. Learn how to save 20+ hours per week with AI.",
  keywords: [
    "AI marketing blog",
    "marketing automation tips",
    "small business marketing",
    "AI content creation",
    "marketing strategy",
    "business growth blog",
    "automation insights",
    "digital marketing trends",
  ],
  openGraph: {
    title: "ContentCraft Blog - AI Marketing Automation Insights",
    description:
      "Expert insights on AI marketing automation, growth strategies, and tips to help small businesses save time and increase results.",
    url: "https://contentcraft.ai/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "ContentCraft Blog - AI Marketing Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://contentcraft.ai/blog",
  },
}

// Sample blog posts data
const featuredPost = {
  id: "ai-marketing-automation-small-business",
  title: "How AI Marketing Automation Can Transform Your Small Business",
  excerpt:
    "Discover how artificial intelligence is revolutionizing marketing for small businesses, from automated outreach to personalized content creation. Learn the key strategies that can save you 20+ hours per week.",
  category: "Marketing Automation",
  categoryColor: "blue",
  author: "Sarah Johnson",
  authorInitials: "SJ",
  date: "2024-12-30",
  readTime: "8 min read",
  featured: true,
  tags: ["AI", "Automation", "Small Business", "Growth"],
}

const recentPosts = [
  {
    id: "reddit-marketing-guide",
    title: "The Complete Guide to Authentic Reddit Marketing for Small Businesses",
    excerpt:
      "Learn how to engage authentically on Reddit without being spammy. Our AI-powered approach helps you build genuine relationships and drive real traffic.",
    category: "Social Media",
    categoryColor: "green",
    author: "Mike Chen",
    authorInitials: "MC",
    date: "2024-12-28",
    readTime: "6 min read",
    tags: ["Reddit", "Social Media", "Engagement"],
  },
  {
    id: "reporter-outreach-automation",
    title: "5 Ways AI Reporter Outreach Beats Traditional PR",
    excerpt:
      "Traditional PR is expensive and time-consuming. Discover how AI-powered reporter outreach can get you better media coverage at a fraction of the cost.",
    category: "PR & Outreach",
    categoryColor: "purple",
    author: "Emily Rodriguez",
    authorInitials: "ER",
    date: "2024-12-26",
    readTime: "5 min read",
    tags: ["PR", "Media", "Automation"],
  },
  {
    id: "social-media-automation-best-practices",
    title: "Social Media Automation: What to Automate (and What Not To)",
    excerpt:
      "Not everything should be automated. Learn the perfect balance between automation and human touch for maximum social media engagement.",
    category: "Social Media",
    categoryColor: "green",
    author: "David Park",
    authorInitials: "DP",
    date: "2024-12-24",
    readTime: "7 min read",
    tags: ["Social Media", "Automation", "Strategy"],
  },
  {
    id: "link-building-ai-strategies",
    title: "AI-Powered Link Building: The Future of SEO",
    excerpt:
      "Manual link building is dead. Discover how AI can identify the best link opportunities and automate outreach for better SEO results.",
    category: "SEO",
    categoryColor: "orange",
    author: "Lisa Thompson",
    authorInitials: "LT",
    date: "2024-12-22",
    readTime: "9 min read",
    tags: ["SEO", "Link Building", "AI"],
  },
  {
    id: "small-business-marketing-automation-roi",
    title: "Calculating ROI: Is Marketing Automation Worth It for Small Businesses?",
    excerpt:
      "Break down the real costs and benefits of marketing automation. See actual ROI calculations from small businesses using AI marketing tools.",
    category: "Business Strategy",
    categoryColor: "indigo",
    author: "James Wilson",
    authorInitials: "JW",
    date: "2024-12-20",
    readTime: "6 min read",
    tags: ["ROI", "Strategy", "Small Business"],
  },
  {
    id: "content-creation-ai-tools",
    title: "10 AI Content Creation Tools Every Marketer Should Know",
    excerpt:
      "From blog posts to social media content, these AI tools will revolutionize your content creation process and save hours of work.",
    category: "Content Creation",
    categoryColor: "pink",
    author: "Anna Martinez",
    authorInitials: "AM",
    date: "2024-12-18",
    readTime: "10 min read",
    tags: ["Content", "AI Tools", "Productivity"],
  },
]

const categories = [
  { name: "Marketing Automation", count: 12, color: "blue" },
  { name: "Social Media", count: 8, color: "green" },
  { name: "SEO", count: 6, color: "orange" },
  { name: "PR & Outreach", count: 5, color: "purple" },
  { name: "Business Strategy", count: 4, color: "indigo" },
  { name: "Content Creation", count: 7, color: "pink" },
]

function getCategoryColorClasses(color: string) {
  const colorMap: { [key: string]: string } = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    orange: "text-orange-600 bg-orange-100",
    purple: "text-purple-600 bg-purple-100",
    indigo: "text-indigo-600 bg-indigo-100",
    pink: "text-pink-600 bg-pink-100",
  }
  return colorMap[color] || "text-gray-600 bg-gray-100"
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "ContentCraft Blog",
            description: "AI marketing automation insights and strategies for small businesses",
            url: "https://contentcraft.ai/blog",
            publisher: {
              "@type": "Organization",
              name: "ContentCraft",
              logo: {
                "@type": "ImageObject",
                url: "https://contentcraft.ai/logo.png",
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="text-2xl font-bold text-gray-900">ContentCraft</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
                Blog
              </Link>
              <Button>
                <Link href="/book-meeting">Book a Meeting</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Marketing Automation
                <span className="text-blue-600 block">Insights & Strategies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Stay ahead with expert insights on AI marketing automation, growth strategies, and proven tactics to
                help your small business save time and increase results.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="search" placeholder="Search articles..." className="pl-10 py-3 text-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most popular and impactful content</p>
            </div>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className={`mb-4 ${getCategoryColorClasses(featuredPost.categoryColor)}`}>
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      <Link href={`/blog/${featuredPost.id}`} className="hover:text-blue-600">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold text-sm">{featuredPost.authorInitials}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <time dateTime={featuredPost.date}>December 30, 2024</time>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button>
                        <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8 text-center">
                    <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Most Popular Article</p>
                    <p className="text-sm text-gray-600 mt-2">Read by 10,000+ marketers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${getCategoryColorClasses(category.color)}`}
                    >
                      <Tag className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">Fresh insights and strategies</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="hover:shadow-lg transition-shadow">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Badge className={`mb-3 w-fit ${getCategoryColorClasses(post.categoryColor)}`}>
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
                        <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                            <span className="text-gray-600 font-bold text-xs">{post.authorInitials}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              <time dateTime={post.date}>Dec {post.date.split("-")[2]}</time>
                              <span className="mx-1">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest AI marketing automation insights delivered straight to your inbox. Join 5,000+ marketers
              who trust our weekly newsletter.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white" />
              <Button variant="secondary" className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">No spam, unsubscribe anytime</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Bot className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <span className="text-xl font-bold">ContentCraft</span>
                </Link>
                <p className="text-gray-400">
                  Automate your marketing with AI-powered tools designed for small businesses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/features" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="hover:text-white">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/privacy" className="hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="hover:text-white">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ContentCraft. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
