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
    { name: "Agoda", category: "OTA Platform", description: "Asia-Pacific market leader partnership" }
  ];

  const partnerData = partnerships || examplePartnerships;

  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our success is built on strong relationships with industry leaders worldwide, 
            creating unparalleled value for our clients through collaborative excellence.
          </p>
        </div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hotel Groups</h3>
            <p className="text-gray-600 text-sm">Global hotel chains and independent properties</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">OTA Platforms</h3>
            <p className="text-gray-600 text-sm">Leading online travel agencies worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Firms</h3>
            <p className="text-gray-600 text-sm">International real estate and property management</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology</h3>
            <p className="text-gray-600 text-sm">Global hospitality technology providers</p>
          </div>
        </div>

        {/* Featured Partners */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Global Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerData.slice(0, 6).map((partner, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h4>
                <p className="text-xs text-gray-500">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Distribution</h3>
            <p className="text-gray-600 text-sm">Access to premium channels and exclusive booking platforms worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Optimization</h3>
            <p className="text-gray-600 text-sm">Advanced pricing strategies through international partner insights</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Intelligence</h3>
            <p className="text-gray-600 text-sm">Real-time global market data and competitive insights</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Global Partner Network
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Become part of an exclusive network of industry leaders and unlock new opportunities 
              for growth and collaboration worldwide.
            </p>
            <a
              href="/partnerships"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Partnership
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
