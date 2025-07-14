
import { CheckCircle, XCircle, Star, Users, Zap, Shield, HeadphonesIcon, Clock, DollarSign } from 'lucide-react'

export default function CompetitorAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              ContentCraft vs ContentWise
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive comparison of two leading content management platforms to help you make an informed decision.
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-8 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CC</span>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">ContentCraft</h2>
              </div>
              <p className="text-gray-700">
                Modern, AI-powered content management platform designed for teams who need speed, 
                flexibility, and intelligent automation in their content workflows.
              </p>
              <div className="mt-4 flex items-center text-green-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 font-semibold">Our Recommendation</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CW</span>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">ContentWise</h2>
              </div>
              <p className="text-gray-700">
                Established content management solution with traditional workflows and 
                comprehensive feature set for enterprise-level content operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Feature Comparison
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">ContentCraft</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">ContentWise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AI-Powered Content Generation</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Real-time Collaboration</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Advanced Analytics</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-yellow-500 text-sm">Limited</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">API Integration</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Mobile App</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Custom Workflows</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-yellow-500 text-sm">Basic</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Multi-language Support</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Version Control</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pricing Comparison
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">ContentCraft</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-green-600">$29</span>
                  <span className="text-gray-600">/user/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Billed annually</p>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI content generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">API access</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-green-100 rounded-lg p-4">
                <div className="flex items-center text-green-700">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="font-semibold">30% more cost-effective</span>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">ContentWise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-600">$42</span>
                  <span className="text-gray-600">/user/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Billed annually</p>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to 50 projects</span>
                </li>
                <li className="flex items-center">
                  <XCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-400">No AI features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Business hours support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Limited API calls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ideal Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6">ContentCraft Excels For:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast-Growing Startups</h4>
                                        <p className="text-gray-600">Need to scale content quickly with AI assistance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}