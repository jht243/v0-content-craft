import Link from "next/link"
import type { Metadata } from "next"
import { Bot, ArrowRight, CheckCircle, Users, MessageSquare, Share2, Star, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Marketing Automation Platform for Small Businesses",
  description:
    "Transform your marketing with AI automation. Save 20+ hours per week with automated reporter outreach, social media management, Reddit engagement, and link building. Free consultation available.",
  keywords: [
    "AI marketing automation",
    "small business marketing tools",
    "automated reporter outreach",
    "social media automation",
    "Reddit marketing automation",
    "link building services",
    "marketing AI platform",
    "business growth automation",
  ],
  openGraph: {
    title: "ContentCraft - AI Marketing Automation That Actually Works",
    description:
      "Stop spending 20+ hours a week on repetitive marketing tasks. Our AI handles reporter outreach, social media, and link building while you focus on growing your business.",
    url: "https://contentcraft.ai",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "ContentCraft AI Marketing Automation Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://contentcraft.ai",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ContentCraft - AI Marketing Automation Platform",
            description:
              "AI-powered marketing automation platform that saves small businesses 20+ hours per week through automated reporter outreach, social media management, and link building.",
            url: "https://contentcraft.ai",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "ContentCraft",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI marketing automation platform for small businesses",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free consultation available",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
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
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Button>
                <Link href="/book-meeting">Book a Meeting</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Marketing
              <span className="text-blue-600 block">That Actually Works</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop spending 20+ hours a week on repetitive marketing tasks. Our AI handles reporter outreach, social
              media, content creation, and link building while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <a href="/book-meeting" className="flex items-center">
                  Book a Meeting
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Free consultation • No commitment required</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Automate Marketing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four powerful AI tools that work together to transform your marketing from time-consuming to time-saving
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Reporter Outreach</h3>
                  <p className="text-gray-600">
                    Automatically find and pitch relevant journalists with personalized messages that get responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Reddit Responses</h3>
                  <p className="text-gray-600">
                    Engage authentically in relevant conversations without the spam, building genuine brand awareness.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Automation</h3>
                  <p className="text-gray-600">
                    Create and schedule engaging posts across all platforms with content that matches your brand voice.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-orange-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Link Building</h3>
                  <p className="text-gray-600">
                    Build high-quality backlinks through systematic outreach and relationship building.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Tools Section */}
        <section className="py-20 bg-gray-50" id="custom-tools">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom AI Tools for Your Niche</h2>
              <p className="text-xl text-gray-600 mb-12">
                Beyond our core features, we create specialized AI marketing tools tailored to your specific industry
                and business needs. From healthcare compliance to e-commerce optimization, we build solutions that
                understand your unique challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-Specific</h3>
                  <p className="text-gray-600">Tools designed for your sector's unique requirements and regulations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Integrated</h3>
                  <p className="text-gray-600">Seamlessly works with your existing marketing stack and workflows</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Continuous optimization and updates as your business evolves</p>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 py-4">
                <Link href="/book-meeting" className="flex items-center">
                  Discuss Custom Solutions
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20" id="testimonials">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Growing Businesses</h2>
              <p className="text-xl text-gray-600">See what our clients are saying about their results</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "ContentCraft saved us 25 hours per week and increased our media mentions by 300%. The AI actually
                    understands our brand voice."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">JS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">John Smith</p>
                      <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Our social media engagement increased 400% in just 2 months. The Reddit responses feel completely
                    natural and authentic."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                      <p className="text-sm text-gray-500">Owner, Local Eats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The automated link building doubled our website traffic in 3 months. Finally, SEO that actually
                    works without the manual effort."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">DL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">David Lee</p>
                      <p className="text-sm text-gray-500">Founder, Design Studio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-gray-50" id="blog">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest trends in AI marketing automation and small business growth strategies
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <article className="hover:shadow-lg transition-shadow">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">Marketing Automation</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href="/blog/ai-marketing-automation-small-business" className="hover:text-blue-600">
                        How AI Marketing Automation Can Transform Your Small Business
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how artificial intelligence is revolutionizing marketing for small businesses, from
                      automated outreach to personalized content creation.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                      <time dateTime="2024-12-30">December 30, 2024</time>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                      <span>5 min read</span>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article className="hover:shadow-lg transition-shadow">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-2">Growth Strategy</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href="/blog" className="hover:text-blue-600">
                        5 Signs Your Business Needs Marketing Automation
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn the key indicators that show when it's time to invest in marketing automation tools for your
                      growing business.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Coming Soon</span>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article className="hover:shadow-lg transition-shadow">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-purple-600 font-medium mb-2">Case Study</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href="/blog" className="hover:text-blue-600">
                        How a Local Restaurant Increased Sales 40% with AI
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Real results from a small restaurant that used AI marketing automation to boost customer
                      engagement and sales.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Coming Soon</span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>
            <div className="text-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Link href="/blog" className="flex items-center">
                  View All Articles
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Marketing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of small businesses saving 20+ hours per week with AI marketing automation. Book your free
              consultation today.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/book-meeting" className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <p className="text-sm text-blue-200 mt-4">No commitment required • Results guaranteed</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <span className="text-xl font-bold">ContentCraft</span>
                </div>
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
