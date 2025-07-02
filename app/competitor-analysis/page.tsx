<Thinking>
The user wants me to create a competitor analysis page comparing ContentCraft to a fictional competitor called ContentWise. This should be a new page at `/competitor-analysis` route, so I need to create `app/competitor-analysis/page.tsx`.

Key requirements:
1. Overview of both platforms
2. Feature comparison table
3. Pricing comparison
4. Use cases and target markets
5. Technical capabilities
6. Customer support
7. Hero section with key differentiators and CTA
8. Professional design with Tailwind CSS
9. Clear visual comparisons

I'll structure this as a comprehensive comparison page with:
- Hero section with key differentiators
- Platform overviews
- Detailed comparison table
- Pricing comparison
- Use cases section
- Technical capabilities
- Customer support comparison
- Call-to-action section

I'll use a professional color scheme and make sure the comparisons are fair but highlight ContentCraft's advantages where appropriate.
</Thinking>

```tsx file="app/competitor-analysis/page.tsx"
import { Check, X, Star, Users, Zap, Shield, HeadphonesIcon, Clock } from 'lucide-react'

export default function CompetitorAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ContentCraft vs ContentWise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A comprehensive comparison of leading AI content platforms for small businesses
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Zap className="h-8 w-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Advanced AI Technology</h3>
                <p className="text-sm text-blue-100">Latest GPT-4 integration with custom fine-tuning</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-8 w-8 text-green-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Small Business Focus</h3>
                <p className="text-sm text-blue-100">Purpose-built for SMB needs and budgets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-blue-100">Bank-level encryption and data protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Platform Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ContentCraft */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ContentCraft</h3>
                  <p className="text-purple-600 font-medium">AI-Powered Content Creation Platform</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                ContentCraft is a comprehensive AI content creation platform designed specifically for small businesses. 
                Our platform combines cutting-edge AI technology with intuitive design to help businesses create 
                professional content across multiple channels without requiring technical expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Founded in 2023, serving 10,000+ businesses</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Specialized in small business content needs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">99.9% uptime with enterprise-grade security</span>
                </div>
              </div>
            </div>

            {/* ContentWise */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-gray-600 text-white p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ContentWise</h3>
                  <p className="text-gray-600 font-medium">General AI Content Assistant</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                ContentWise is a general-purpose AI writing assistant that offers basic content generation 
                capabilities. While it provides fundamental AI writing tools, it lacks the specialized 
                features and business-focused approach that small businesses require for comprehensive content marketing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Launched in 2022, 5,000+ users</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">General-purpose writing assistance</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic AI content generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Feature Comparison</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">ContentCraft</th>
                    <th className="px-6 py-4 text-center font-semibold">ContentWise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">AI Content Generation</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Multi-Channel Publishing</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Brand Voice Customization</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-medium">Limited</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">SEO Optimization</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Content Calendar</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Analytics & Insights</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-medium">Basic</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Team Collaboration</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">API Integration</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">White-label Options</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-medium">Business Hours</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pricing Comparison</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* ContentCraft Pricing */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ContentCraft</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-