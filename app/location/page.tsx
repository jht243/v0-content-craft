<Thinking>
The user wants me to create a fictional location for a business and create a page showing that location with dummy contact information. I need to:

1. Create a fictional business location with address, email, and phone number
2. Build a page that displays this location information
3. Since they mentioned "showing the location", I should probably include a map or at least a visual representation of the location

I'll create a fictional coffee shop or restaurant as an example business, with a made-up address, and build a contact/location page. I'll use Next.js with app router, Tailwind CSS for styling, and make it responsive.

Let me think of a good fictional business:
- Name: "Moonbeam Café"
- Location: Let's say it's in a fictional town called "Willowbrook"
- Address: 425 Maple Street, Willowbrook, CA 94025
- Phone: (555) 123-4567
- Email: hello@moonbeamcafe.com

I'll create a location page that includes:
- Hero section with the business name
- Contact information
- A placeholder for a map (since I can't embed real maps)
- Hours of operation
- Maybe some additional details

I should make it look professional and include proper semantic HTML and accessibility features.
</Thinking>

I'll create a fictional café location page with contact information and location details.

<CodeProject>
<file path="app/location/page.tsx">
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Moonbeam Café
          </h1>
          <p className="text-xl md:text-2xl text-amber-100">
            Your neighborhood coffee sanctuary
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Us Today
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Willowbrook, we're your perfect spot for 
                artisanal coffee, fresh pastries, and a cozy atmosphere to work or relax.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    425 Maple Street<br />
                    Willowbrook, CA 94025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a 
                    href="tel:+15551234567" 
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:hello@moonbeamcafe.com" 
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    hello@moonbeamcafe.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>7:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-80 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 max-w-xs">
                    Map showing our location at 425 Maple Street, Willowbrook
                  </p>
                </div>
                {/* Decorative elements to simulate a map */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-amber-200 rounded-full opacity-40"></div>
              </div>
              <div className="p-4 bg-white">
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Getting Here
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Free parking available on Maple Street</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Bus stop #42 directly across the street</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Bike racks available at front entrance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Wheelchair accessible entrance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Visit?
            </h2>
            <p className="text-gray-600 mb-6">
              Come experience our carefully crafted coffee and warm atmosphere. 
              We can't wait to serve you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors font-medium"
              >
                Call Now
              </a>
              <a 
                href="mailto:hello@moonbeamcafe.com"
                className="border border-amber-600 text-amber-600 px-6 py-3 rounded-md hover:bg-amber-50 transition-colors font-medium"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
</file>
</CodeProject>

I've created a location page for "Moonbeam Café," a fictional coffee shop in Willowbrook, CA. The page includes:

**Fictional Business Details:**
- **Name**: Moonbeam Café
- **Address**: 425 Maple Street, Willowbrook, CA 94025
- **Phone**: (555) 123-4567
- **Email**: hello@moonbeamcafe.com

**Page Features:**
- Responsive design that works on all devices
- Hero section with business branding
- Contact information with clickable phone and email links
- Business hours display
- Map placeholder with decorative elements
- Transportation and accessibility information
- Call-to-action section

The design uses a warm amber and orange color scheme appropriate for a café, includes proper semantic HTML for accessibility, and provides a professional yet welcoming appearance. The contact information is properly formatted with clickable links for phone and email.