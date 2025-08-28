import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { containerVariants, itemVariants, cardVariants, floatingVariants } from '../utils/animations';

// Images for portfolio highlights
import globalHospitalityImg from '../pages/images/Global Hospitality Management.jpg';
import strategicPartnershipImg from '../pages/images/Strategic Partnership Network.jpg';
import revenueOptimizationImg from '../pages/images/Revenue Optimization Solutions.jpg';

export default function Portfolio() {
  const featuredProperties = useQuery(api.properties.list, { featured: true });

  // Real portfolio showcase - Focus on our actual services and achievements
  const portfolioHighlights = [
    {
      title: "Global Hospitality Management",
      type: "Service Excellence",
      location: "Worldwide Operations",
      description: "Comprehensive hospitality management solutions delivering exceptional guest experiences across international markets.",
      achievement: "98% Client Satisfaction",
      metric: "50+ Countries",
      services: ["Revenue Management", "Operations", "Guest Experience", "Global Distribution"],
      image: globalHospitalityImg,
    },
    {
      title: "Strategic Partnership Network",
      type: "Business Development",
      location: "International Markets",
      description: "Exclusive partnerships with industry leaders including Stayz, Irwin Estates, and key strategic partners.",
      achievement: "200+ Partners",
      metric: "24/7 Support",
      services: ["Partnership Development", "Market Expansion", "Strategic Consulting", "Business Growth"],
      image: strategicPartnershipImg,
    },
    {
      title: "Revenue Optimization Solutions",
      type: "Financial Performance",
      location: "Global Portfolio",
      description: "Advanced revenue management strategies and pricing optimization delivering measurable results for our clients.",
      achievement: "35% Revenue Increase",
      metric: "89% Occupancy",
      services: ["Dynamic Pricing", "Market Analysis", "Performance Optimization", "Financial Consulting"],
      image: revenueOptimizationImg,
    }
  ];

  const portfolioData = featuredProperties && featuredProperties.length > 0 ? featuredProperties : portfolioHighlights;

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Luxury Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-gradient-to-br from-amber-300/15 to-amber-500/15 rounded-full blur-2xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-12 w-16 h-16 border border-amber-400/25 rotate-45 animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-amber-200/50 mb-8 backdrop-blur-sm"
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Global Portfolio</span>
          </motion.div>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-2"
            variants={itemVariants}
          >
            <AnimatedText
              text="Our Global Portfolio"
              highlightWords={["Global", "Portfolio"]}
              highlightClassName="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
              delay={0.3}
            />
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover our diverse collection of premium properties across international markets,
            each delivering exceptional returns and guest satisfaction.
          </motion.p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { value: "500+", label: "Properties Under Management" },
            { value: "89%", label: "Average Occupancy Rate" },
            { value: "$150M", label: "Annual Revenue Generated" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg premium-card group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative">
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {portfolioData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg premium-card group animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                {/* Prefer item.image (static highlights) then item.imageUrl (Convex data) */}
                {(item as any).image || (item as any).imageUrl ? (
                  <img
                    src={(item as any).image || (item as any).imageUrl}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium opacity-90">{item.type}</div>
                  <div className="text-xs opacity-75">{item.location}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title || item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">
                      {item.achievement || `${item.occupancyRate}%`}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.achievement ? "Achievement" : "Occupancy"}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">
                      {item.metric || `$${((item.revenue || 0) / 1000000).toFixed(1)}M`}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.metric ? "Global Reach" : "Annual Revenue"}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(item.services || item.amenities)?.slice(0, 3).map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                    >
                      {service}
                    </span>
                  ))}
                  {(item.services || item.amenities) && (item.services || item.amenities).length > 3 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                      +{(item.services || item.amenities).length - 3} more
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
