import type { Metadata } from "next"
import { Bot, Mail, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us - ContentCraft AI Marketing Automation",
  description:
    "Get in touch with ContentCraft for AI marketing automation solutions. Book a free consultation or contact our team for custom AI marketing tools for your small business.",
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact ContentCraft",
            description: "Contact ContentCraft for AI marketing automation solutions and free consultations",
            url: "https://contentcraft.ai/contact",
            mainEntity: {
              "@type": "Organization",
              name: "ContentCraft",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "jonathan@pipelinemarketing.io",
                availableLanguage: "English",
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
              <Link href="/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
              <Button>
                <Link href="/book-meeting">Book a Meeting</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="text-blue-600 block">We're Here to Help</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your marketing with AI automation? Contact our team for a free consultation and
              discover how to save 20+ hours per week.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Get in touch via email for detailed inquiries</p>
                  <a
                    href="mailto:jonathan@pipelinemarketing.io"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    jonathan@pipelinemarketing.io
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600 mb-4">We typically respond within</p>
                  <p className="text-green-600 font-bold text-lg">24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600 mb-4">Book a free strategy session</p>
                  <Button className="w-full">
                    <Link href="/book-meeting">Schedule Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Tell us about your business and marketing challenges. We'll get back to you with a customized
                  solution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>

                {/* Why Contact Us */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Free Strategy Session</h4>
                        <p className="text-gray-600">
                          Get a personalized assessment of your current marketing and discover automation opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
                        <p className="text-gray-600">
                          We build AI marketing tools tailored to your specific industry and business needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                        <p className="text-gray-600">
                          Join hundreds of businesses saving 20+ hours per week with our AI marketing automation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                        <p className="text-gray-600">
                          Get continuous optimization and updates as your business grows and evolves.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-4">
                      Book a free 30-minute consultation to discuss your marketing automation needs.
                    </p>
                    <Button className="w-full">
                      <Link href="/book-meeting">Book Free Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Quick answers to common questions</p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">How quickly can I see results?</h3>
                    <p className="text-gray-600">
                      Most clients see initial results within 2-4 weeks of implementation. Full automation benefits
                      typically manifest within 30-60 days.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Do you work with all business sizes?</h3>
                    <p className="text-gray-600">
                      We specialize in small to medium businesses (1-50 employees) but can customize solutions for
                      larger organizations as well.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What industries do you serve?</h3>
                    <p className="text-gray-600">
                      We work across all industries, with specialized experience in SaaS, e-commerce, professional
                      services, and local businesses.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
                    <p className="text-gray-600">
                      Setup costs vary based on your specific needs. We provide transparent pricing during your free
                      consultation with no hidden fees.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
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
