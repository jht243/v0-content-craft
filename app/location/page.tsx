
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Moonrise Café</h1>
            <p className="text-xl font-light">Where every sunrise brings fresh possibilities</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the heart of Willowbrook's historic district, Moonrise Café has been serving 
                the community with artisanal coffee and fresh pastries since 2018. Come experience our 
                warm atmosphere and exceptional hospitality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    247 Maple Grove Avenue<br />
                    Willowbrook, CA 94582<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 847-2936</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@moonrisecafe.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Location Visual */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 relative">
                {/* Placeholder Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Moonrise Café</p>
                    <p className="text-sm text-gray-500">247 Maple Grove Ave</p>
                  </div>
                </div>
                
                {/* Decorative elements to simulate a map */}
                <div className="absolute top-4 left-4 w-20 h-1 bg-gray-300 rounded"></div>
                <div className="absolute top-8 left-4 w-16 h-1 bg-gray-300 rounded"></div>
                <div className="absolute bottom-4 right-4 w-24 h-1 bg-gray-300 rounded"></div>
                <div className="absolute bottom-8 right-4 w-20 h-1 bg-gray-300 rounded"></div>
                
                {/* Simulate streets */}
                <div className="absolute inset-x-0 top-1/3 h-2 bg-gray-200 opacity-50"></div>
                <div className="absolute inset-y-0 left-1/3 w-2 bg-gray-200 opacity-50"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Getting Here</h3>
                <p className="text-gray-600 text-sm">
                  We're conveniently located on Maple Grove Avenue, just two blocks from 
                  Willowbrook Central Park. Street parking is available, and we're accessible 
                  by public transit via the Willowbrook Metro Line.
                </p>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">What Makes Us Special</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Locally sourced, organic coffee beans</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Fresh pastries baked daily on-site</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Free Wi-Fi and cozy workspace areas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Pet-friendly outdoor seating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Visit?</h3>
            <p className="text-gray-600 mb-6">
              Stop by for your morning coffee, afternoon treat, or evening study session. 
              We can't wait to welcome you to the Moonrise family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Directions
              </button>
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}