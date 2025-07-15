import type { Metadata } from "next"
import {
  Bot,
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  Share2,
  Link,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Shield,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Marketing Automation Features - ContentCraft",
  description:
    "Discover ContentCraft's powerful AI marketing features: automated reporter outreach, social media management, Reddit engagement, link building, and custom tools for your industry.",
  keywords: [
    "AI marketing features",
    "automated reporter outreach",
    "social media automation",
    "Reddit marketing tools",
    "link building automation",
    "custom AI marketing tools",
    "marketing automation platform",
    "small business marketing features",
  ],
  openGraph: {
    title: "ContentCraft Features - AI Marketing Automation Tools",
    description:
      "Explore all the powerful AI marketing automation features that save small businesses 20+ hours per week.",
    url: "https://contentcraft.ai/features",
    images: [
      {
        url: "/og-features.jpg",
        width: 1200,
        height: 630,
        alt: "ContentCraft Features - AI Marketing Automation Tools",
      },
    ],
  },
  alternates: {
    canonical: "https://contentcraft.ai/features",
  },
}

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ContentCraft Features",
            description: "AI marketing automation features for small businesses",
            url: "https://contentcraft.ai/features",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "ContentCraft",
              applicationCategory: "BusinessApplication",
              featureList: [
                "AI Reporter Outreach",
                "Social Media Automation",
                "Reddit Engagement",
                "Link Building Automation",
                "Custom AI Tools",
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <a href="/" className="text-2xl font-bold text-gray-900">
                ContentCraft
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <a href="/features" className="text-blue-600 font-medium">
                Features
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <Button>
                <a href="/book-meeting">Book a Meeting</a>
              </Button>
            </nav>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li className="mx-2">/</li>
              <li className="text-gray-900">Features</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful AI Features
              <span className="text-blue-600 block">Built for Small Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how ContentCraft's AI-powered marketing automation features can transform your business, save you
              20+ hours per week, and deliver results that actually matter.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              <a href="/book-meeting" className="flex items-center">
                See Features in Action
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20" id="core-features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core AI Marketing Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four powerful tools that work together to automate your entire marketing workflow
              </p>
            </div>

            <div className="space-y-20">
              {/* AI Reporter Outreach */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">AI Reporter Outreach</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Stop spending hours researching journalists and crafting pitches. Our AI identifies relevant
                    reporters, analyzes their recent work, and creates personalized outreach that gets responses.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Smart Journalist Discovery:</strong> Find reporters who cover your industry and beat
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Personalized Pitches:</strong> AI crafts unique pitches referencing their recent
                        articles
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Automated Follow-ups:</strong> Smart timing for follow-up messages that don't annoy
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Response Tracking:</strong> Monitor open rates, responses, and media coverage
                      </span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Real Result:</strong> TechStart Inc. increased media mentions by 300% in 3 months
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">Sample AI-Generated Pitch</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Subject:</strong> Following up on your AI automation piece - small business angle
                      </p>
                      <p>
                        <strong>Hi Sarah,</strong>
                      </p>
                      <p>
                        I read your recent article about AI automation in enterprise companies and found your insights
                        on implementation challenges particularly insightful.
                      </p>
                      <p>
                        I thought you might be interested in a different angle - how small businesses are now using AI
                        marketing automation to compete with larger companies...
                      </p>
                      <p className="text-blue-600 text-xs">✨ Personalized based on journalist's recent work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Automation */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">AI Content Calendar</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">LinkedIn Post - Industry Insights</span>
                        <span className="text-xs text-green-600">Scheduled</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Twitter Thread - Tips Series</span>
                        <span className="text-xs text-blue-600">Optimized</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Instagram Story - Behind Scenes</span>
                        <span className="text-xs text-purple-600">Auto-posted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Share2 className="h-8 w-8 text-purple-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Social Media Automation</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Never run out of content again. Our AI creates, schedules, and optimizes posts across all your
                    social media platforms while maintaining your unique brand voice.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Multi-Platform Publishing:</strong> LinkedIn, Twitter, Instagram, Facebook in one go
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Brand Voice Learning:</strong> AI adapts to your tone and messaging style
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Optimal Timing:</strong> Posts when your audience is most active
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Content Repurposing:</strong> One idea becomes multiple platform-specific posts
                      </span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Real Result:</strong> Local Eats Restaurant saw 400% increase in social engagement
                    </p>
                  </div>
                </div>
              </div>

              {/* Smart Reddit Responses */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-8 w-8 text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Smart Reddit Responses</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Build authentic relationships on Reddit without the spam. Our AI finds relevant conversations and
                    crafts helpful responses that naturally showcase your expertise.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Conversation Discovery:</strong> Find relevant discussions in your industry subreddits
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Authentic Responses:</strong> Helpful answers that don't feel like marketing
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Spam Prevention:</strong> Built-in filters to maintain Reddit community standards
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Karma Building:</strong> Gradually build reputation and trust in communities
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Why It Works:</strong> Reddit users value authentic help over promotional content
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">Sample Reddit Response</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p className="text-xs text-gray-500">r/smallbusiness • 2h ago</p>
                      <p>
                        <strong>Question:</strong> "How do you handle social media when you're swamped with other work?"
                      </p>
                      <div className="bg-gray-50 p-3 rounded mt-2">
                        <p>
                          <strong>AI Response:</strong> I struggled with this exact issue for months. What finally
                          worked was batching content creation - I spend 2 hours every Sunday planning the whole week's
                          posts.
                        </p>
                        <p className="mt-2">
                          Also found that repurposing content across platforms saves tons of time. One blog post can
                          become 5-6 different social posts...
                        </p>
                        <p className="text-green-600 text-xs mt-2">✨ Helpful first, promotional never</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automated Link Building */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">Link Building Pipeline</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">TechCrunch - Broken Link Found</span>
                        <span className="text-xs text-orange-600">Outreach Sent</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Industry Blog - Guest Post</span>
                        <span className="text-xs text-green-600">Link Acquired</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Resource Page - Listing</span>
                        <span className="text-xs text-blue-600">Under Review</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Link className="h-8 w-8 text-orange-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Automated Link Building</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Build high-quality backlinks without the manual grunt work. Our AI finds opportunities, crafts
                    outreach emails, and tracks your link building progress automatically.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Opportunity Discovery:</strong> Find broken links, resource pages, and guest post
                        opportunities
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Personalized Outreach:</strong> Custom emails for each website owner or editor
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Quality Focus:</strong> Target high-authority sites in your industry
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">
                        <strong>Progress Tracking:</strong> Monitor outreach success and link acquisition
                      </span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Real Result:</strong> Design Studio doubled website traffic in 3 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Tools Section */}
        <section className="py-20 bg-gray-50" id="custom-tools">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom AI Tools for Your Industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every business is unique. That's why we create specialized AI marketing tools tailored to your specific
                industry, niche, and business model.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Healthcare, legal, e-commerce, SaaS, restaurants - we understand the unique marketing challenges and
                    compliance requirements of your industry.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• HIPAA-compliant healthcare marketing</li>
                    <li>• Legal industry thought leadership</li>
                    <li>• E-commerce product promotion</li>
                    <li>• SaaS customer acquisition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Workflows</h3>
                  <p className="text-gray-600 mb-6">
                    We build AI workflows that match your existing processes and integrate seamlessly with your current
                    tools and systems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• CRM integration and lead nurturing</li>
                    <li>• Custom content templates</li>
                    <li>• Automated reporting dashboards</li>
                    <li>• Multi-location business support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Optimization</h3>
                  <p className="text-gray-600 mb-6">
                    Your custom tools evolve with your business. We continuously optimize and update your AI marketing
                    automation based on performance data.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Performance monitoring and tuning</li>
                    <li>• A/B testing of messaging</li>
                    <li>• Seasonal campaign adjustments</li>
                    <li>• New feature development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <a href="/book-meeting" className="flex items-center">
                  Discuss Your Custom Needs
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why ContentCraft Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built specifically for small businesses who need results, not complexity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Save 20+ Hours/Week</h3>
                <p className="text-gray-600">
                  Automate repetitive marketing tasks so you can focus on running your business
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">300% more media mentions, 400% social engagement, 2x website traffic</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-gray-600">Get started in minutes, not months. No technical expertise required</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated team to help you succeed with ongoing optimization and support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See These Features in Action?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation to see exactly how ContentCraft's AI marketing automation can transform your
              business.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <a href="/book-meeting" className="flex items-center">
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-blue-200 mt-4">Free consultation • Custom demo • No commitment required</p>
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
                    <a href="/features" className="hover:text-white">
                      Features
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/about" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/support" className="hover:text-white">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/privacy" className="hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="hover:text-white">
                      Security
                    </a>
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
