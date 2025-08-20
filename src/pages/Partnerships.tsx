import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Partnerships() {
  const partnerships = useQuery(api.partnerships.list, { featured: true });

  // Example partnerships for demonstration - Global focus
  const examplePartnerships = [
    { name: "Marriott International", category: "Hotel Group", description: "Global hotel chain partnership" },
    { name: "Hilton Worldwide", category: "Hotel Group", description: "Strategic alliance with luxury hotel brand" },
    { name: "Booking.com", category: "OTA Platform", description: "Premier global distribution partner" },
    { name: "Expedia Group", category: "OTA Platform", description: "Strategic distribution alliance" },
    { name: "Airbnb", category: "OTA Platform", description: "Preferred property management partner" },
    { name: "Agoda", category: "OTA Platform", description: "Asia-Pacific market leader partnership" },
    { name: "Oracle Hospitality", category: "Technology", description: "PMS and technology integration" },
    { name: "Salesforce", category: "Technology", description: "CRM and customer experience platform" }
  ];

  const partnerData = partnerships || examplePartnerships;

  const partnerCategories = [
    {
      title: "Hotel Groups",
      icon: "🏨",
      description: "Global hotel chains and independent luxury properties",
      partners: partnerData.filter(p => p.category === "Hotel Group")
    },
    {
      title: "OTA Platforms",
      icon: "🌐",
      description: "Leading online travel agencies and booking platforms worldwide",
      partners: partnerData.filter(p => p.category === "OTA Platform")
    },
    {
      title: "Technology Partners",
      icon: "⚡",
      description: "Cutting-edge hospitality and property management technology",
      partners: partnerData.filter(p => p.category === "Technology")
    },
    {
      title: "Regional Partners",
      icon: "🌍",
      description: "Local market experts and regional service providers",
      partners: partnerData.filter(p => p.category === "Regional")
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Global <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our success is built on strong relationships with industry leaders worldwide, 
            creating unparalleled value through collaborative excellence across international markets.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-gray-600 text-sm">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Distribution Channels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Partnership Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.partners.slice(0, 4).map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{partner.name}</div>
                        <div className="text-sm text-gray-600">{partner.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic alliances deliver measurable value across every aspect of property management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Distribution</h3>
              <p className="text-gray-600 mb-4">Access to premium channels and exclusive booking platforms worldwide</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 100+ global booking channels</li>
                <li>• Priority placement on major OTAs</li>
                <li>• Exclusive partnership rates</li>
                <li>• Multi-language support</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Optimization</h3>
              <p className="text-gray-600 mb-4">Advanced pricing strategies through global partner insights</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Dynamic pricing algorithms</li>
                <li>• Market intelligence data</li>
                <li>• Competitive rate analysis</li>
                <li>• Yield optimization tools</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Intelligence</h3>
              <p className="text-gray-600 mb-4">Real-time global market data and competitive insights</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Global market trends</li>
                <li>• Regional demand forecasting</li>
                <li>• Competitor benchmarking</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Hotel Chain Partnership</h3>
              <p className="text-gray-600 mb-6">
                Partnered with a major international hotel chain to optimize revenue across 50+ properties 
                in 15 countries, resulting in a 45% increase in direct bookings.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-600">45%</div>
                  <div className="text-xs text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">50+</div>
                  <div className="text-xs text-gray-600">Properties</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">15</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">OTA Distribution Network</h3>
              <p className="text-gray-600 mb-6">
                Expanded a boutique hotel group's reach through strategic OTA partnerships, 
                increasing international bookings by 200% within 12 months.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-600">200%</div>
                  <div className="text-xs text-gray-600">Booking Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">25+</div>
                  <div className="text-xs text-gray-600">New Markets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">12</div>
                  <div className="text-xs text-gray-600">Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Global Partner Network
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Become part of an exclusive network of industry leaders and unlock new opportunities 
            for growth and collaboration worldwide.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
