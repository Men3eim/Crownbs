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
    },
    {
      name: "Beachfront Villas",
      type: "Vacation Rentals",
      location: "Maldives",
      description: "Exclusive overwater villas with private pools and butler service.",
      revenue: 1800000,
      occupancyRate: 96,
      amenities: ["Private Pool", "Butler Service", "Water Sports", "Fine Dining"]
    },
    {
      name: "Urban Loft Collection",
      type: "Boutique Apartments",
      location: "New York, USA",
      description: "Modern loft-style apartments in Manhattan's trendy neighborhoods.",
      revenue: 2800000,
      occupancyRate: 91,
      amenities: ["Rooftop Terrace", "Fitness Center", "Co-working Space", "Pet-Friendly"]
    },
    {
      name: "Heritage Castle Hotel",
      type: "Historic Hotel",
      location: "Edinburgh, Scotland",
      description: "Historic castle hotel combining traditional charm with modern luxury.",
      revenue: 1900000,
      occupancyRate: 85,
      amenities: ["Historic Tours", "Fine Dining", "Event Spaces", "Spa"]
    }
  ];

  const properties = featuredProperties || exampleProperties;

  const propertyTypes = [
    { type: "Luxury Hotels", count: 125, icon: "🏨" },
    { type: "Serviced Apartments", count: 89, icon: "🏢" },
    { type: "Resort Properties", count: 67, icon: "🏖️" },
    { type: "Vacation Rentals", count: 156, icon: "🏡" },
    { type: "Commercial Properties", count: 43, icon: "🏬" },
    { type: "Boutique Hotels", count: 78, icon: "✨" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Global <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our diverse collection of premium properties across international markets, 
            each delivering exceptional returns and guest satisfaction.
          </p>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Properties Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">89%</div>
              <div className="text-gray-600 text-sm">Avg Occupancy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">$150M</div>
              <div className="text-gray-600 text-sm">Annual Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Property Types We Manage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {propertyTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                <div className="text-3xl mb-3">{type.icon}</div>
                <div className="text-2xl font-bold text-amber-600 mb-1">{type.count}</div>
                <div className="text-sm text-gray-600 font-medium">{type.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Properties</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.slice(0, 6).map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold">{property.name}</div>
                    <div className="text-sm opacity-90">{property.type}</div>
                    <div className="text-xs opacity-75">{property.location}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-medium">{property.occupancyRate}% Occupied</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{property.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">
                        {property.occupancyRate}%
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Occupancy Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">
                        ${((property.revenue || 0) / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Annual Revenue</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 4).map((amenity, amenityIndex) => (
                      <span
                        key={amenityIndex}
                        className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our properties span across major international markets, from bustling city centers 
              to exotic vacation destinations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "United Kingdom", "United States", "Singapore", "Switzerland", 
              "Maldives", "France", "Germany", "Australia", "Japan", "Canada",
              "Italy", "Spain"
            ].map((country, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                <div className="font-semibold text-gray-900">{country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Add Your Property to Our Portfolio?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join our global network of successful property owners and start maximizing your returns today.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
