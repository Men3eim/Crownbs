import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants, floatingVariants } from '../utils/animations';

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
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              transition: {
                delay: 1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
            animate={{
              y: [-25, 25, -25],
              rotate: [0, 180, 360],
              transition: {
                delay: 2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">Global Portfolio</span>
          </motion.div>

          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
            <AnimatedText
              text="Our Global Portfolio"
              highlightWords={["Global", "Portfolio"]}
              delay={0.5}
            />
          </div>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Discover our diverse collection of premium properties across international markets,
            each delivering exceptional returns and guest satisfaction.
          </motion.p>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-3 px-4">
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Properties Worldwide</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">89%</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Avg Occupancy Rate</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">$150M</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Annual Revenue</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Property Types We Manage
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {propertyTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "#fef3c7",
                  boxShadow: "0 10px 25px rgba(245, 158, 11, 0.2)"
                }}
              >
                <motion.div 
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {type.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-amber-600 mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {type.count}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{type.type}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Properties</h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {properties.slice(0, 6).map((property, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our properties span across major international markets, from bustling city centers 
              to exotic vacation destinations.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "United Kingdom", "United States", "Singapore", "Switzerland", 
              "Maldives", "France", "Germany", "Australia", "Japan", "Canada",
              "Italy", "Spain"
            ].map((country, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: "#fef3c7",
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.15)"
                }}
              >
                <div className="font-semibold text-gray-900">{country}</div>
              </motion.div>
            ))}
          </motion.div>
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
    </PageWrapper>
  );
}
