import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';

export default function Portfolio() {
  const partnerships = useQuery(api.partnerships.list, { featured: true });
  const isLoading = partnerships === undefined;

  // Strategic Partners - Real Partnership Data
  const strategicPartners = [
    {
      name: "Stayz",
      alt: "Stayz",
      src: "/logos-partnerships/Stayz.png",
      website: "https://www.stayzltd.com/",
      description: "Premium hospitality management and luxury accommodation solutions",
      category: "Hospitality Management",
      services: ["Luxury Accommodations", "Property Management", "Guest Experience"]
    },
    {
      name: "HFS",
      alt: "HFS",
      src: "/logos-partnerships/HFS.png",
      website: "https://www.hfs.london/" ,
      description: "Strategic hospitality and facilities management partnership",
      category: "Facilities Management",
      services: ["Facilities Management", "Operational Excellence", "Strategic Consulting"]
    },
    {
      name: "Irwin Estates",
      alt: "Irwin",
      src: "/logos-partnerships/Irwin.png",
      website: "https://irwin-estates.com/",
      description: "Premium real estate development and property investment solutions",
      category: "Real Estate Development",
      services: ["Property Development", "Investment Solutions", "Real Estate Consulting"]
    },
    {
      name: "KMA",
      alt: "KMA",
      src: "/logos-partnerships/KMA.png",
      website: null,
      description: "Key strategic partnership in hospitality and business solutions",
      category: "Business Solutions",
      services: ["Strategic Planning", "Business Development", "Operational Support"]
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-20 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360]
            }}
            transition={{
              delay: 1,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
              variants={itemVariants}
            >
              <AnimatedText
                text="Global Partnerships"
                highlightWords={["Partnerships"]}
                highlightClassName="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
                delay={0.3}
              />
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              Our success is built on strong relationships with industry leaders worldwide, 
              creating unparalleled value for our clients through collaborative excellence.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4"
            variants={containerVariants}
          >
            {[
              { number: "200+", label: "Strategic Partners" },
              { number: "1M+", label: "Bookings Managed" },
              { number: "100+", label: "Business Solutions" },
              { number: "24/7", label: "Performance & Operations Focus" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partnership Categories */}
      {!isLoading && (
        <motion.section 
          className="py-16 sm:py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4" variants={containerVariants}>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🏨</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Hotel Groups</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Global hotel chains and independent properties</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🌐</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">OTA Distribution Channels</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Listing channels we use to advertise properties</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🏢</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Property Firms</h3>
                <p className="text-gray-600 text-xs sm:text-sm">International real estate and property management</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">⚡</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Global hospitality technology providers</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Featured Partners */}
      <motion.section 
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="w-full px-4">
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
            variants={itemVariants}
          >
            Our Global Partners
          </motion.h3>
          {/* Animated Logo Scroll */}
          <div className="relative h-24 sm:h-32 md:h-36 overflow-hidden bg-white mb-6 sm:mb-8 w-full rounded-2xl">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll space-x-8 sm:space-x-12 md:space-x-16" style={{ minWidth: '100vw' }}>
                {/* First set of logos */}
                {strategicPartners.map((partner, idx) => (
                  <div
                    key={partner.alt + idx}
                    className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.src}
                      alt={`${partner.alt} logo`}
                      loading="lazy"
                      decoding="async"
                      width={144}
                      height={80}
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-24 sm:max-w-28 md:max-w-36 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {strategicPartners.map((partner, idx) => (
                  <div
                    key={partner.alt + "repeat" + idx}
                    className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.src}
                      alt={`${partner.alt} logo`}
                      loading="lazy"
                      decoding="async"
                      width={144}
                      height={80}
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-24 sm:max-w-28 md:max-w-36 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Partners Showcase */}
      <motion.section
        className="py-16 sm:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Strategic <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Partnership</span> Portfolio
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our exclusive network of premium partners, each bringing specialized expertise
              and luxury solutions to elevate your hospitality experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
            variants={containerVariants}
          >
            {strategicPartners.map((partner) => (
              <motion.div
                key={partner.name}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Partner Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mr-4 sm:mr-6">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="max-h-12 sm:max-h-16 max-w-12 sm:max-w-16 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{partner.name}</h4>
                    <p className="text-sm sm:text-base text-amber-600 font-medium">{partner.category}</p>
                  </div>
                </div>

                {/* Partner Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Services</h5>
                  <div className="flex flex-wrap gap-2">
                    {partner.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-xs sm:text-sm font-medium rounded-full border border-amber-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Website Link */}
                {partner.website ? (
                  <motion.a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Visit Website
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                ) : (
                  <div className="inline-flex items-center text-gray-400 text-sm sm:text-base">
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Strategic Partnership
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partnership Benefits */}
      <motion.section 
        className="py-16 sm:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4" variants={containerVariants}>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Global Distribution</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Access to premium channels and exclusive booking platforms worldwide</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Revenue Optimization</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Advanced pricing strategies through international partner insights</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Market Intelligence</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Real-time global market data and competitive insights</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center px-4">
          <motion.div 
            className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8 border border-amber-200 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
              variants={itemVariants}
            >
              Join Our Global Partner Network
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Become part of an exclusive network of industry leaders and unlock new opportunities 
              for growth and collaboration worldwide.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
