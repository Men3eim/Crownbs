import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Portfolio() {
  const featuredProperties = useQuery(api.properties.list, { featured: true });

  // Example data for demonstration - Global properties
  const exampleProperties = [
    {
      name: "The Grand Metropolitan",
      type: "Luxury Hotel",
      location: "London, United Kingdom",
      description: "A prestigious 5-star hotel in the heart of London's financial district.",
      revenue: 2500000,
      occupancyRate: 92,
      amenities: ["Spa", "Fine Dining", "Business Center", "Concierge"]
    },
    {
      name: "Marina Bay Residences",
      type: "Serviced Apartments",
      location: "Singapore",
      description: "Premium waterfront apartments with stunning city skyline views.",
      revenue: 3200000,
      occupancyRate: 94,
      amenities: ["Infinity Pool", "Gym", "Concierge", "Valet Parking"]
    },
    {
      name: "Alpine Resort & Spa",
      type: "Resort Hotel",
      location: "Swiss Alps, Switzerland",
      description: "Luxury mountain resort offering world-class skiing and wellness facilities.",
      revenue: 4100000,
      occupancyRate: 88,
      amenities: ["Ski Access", "Spa", "Multiple Restaurants", "Conference Center"]
    }
  ];

  const properties = featuredProperties || exampleProperties;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse collection of premium properties across international markets, 
            each delivering exceptional returns and guest satisfaction.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Properties Under Management</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">89%</div>
            <div className="text-gray-600 font-medium">Average Occupancy Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">$150M</div>
            <div className="text-gray-600 font-medium">Annual Revenue Generated</div>
          </div>
        </div>

        {/* Featured Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {properties.slice(0, 3).map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium opacity-90">{property.type}</div>
                  <div className="text-xs opacity-75">{property.location}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{property.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{property.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">
                      {property.occupancyRate}%
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Occupancy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">
                      ${((property.revenue || 0) / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Annual Revenue</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                    <span
                      key={amenityIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Full Portfolio
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
