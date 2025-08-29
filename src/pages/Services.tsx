import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants, floatingVariants, statsVariants } from '../utils/animations';

export default function Services() {
  const services = [
    {
      icon: "📊",
      title: "Revenue Management",
      description: "Advanced pricing strategies and yield optimization across all OTA channels to maximize your property's revenue potential.",
      features: ["Dynamic Pricing", "Channel Management", "Market Analysis", "Performance Reporting"],
      benefits: [
        "Increase revenue by up to 35%",
        "Optimize pricing across 50+ channels",
        "Real-time market intelligence",
        "Automated rate adjustments"
      ]
    },
    {
      icon: "🏨",
      title: "Hotel Operations",
      description: "Comprehensive operational management ensuring seamless guest experiences and operational efficiency.",
      features: ["Guest Services", "Housekeeping Management", "Quality Assurance", "Staff Training"],
      benefits: [
        "Improve guest satisfaction scores",
        "Streamline daily operations",
        "Reduce operational costs",
        "24/7 operational support"
      ]
    },
    {
      icon: "🔧",
      title: "Engineering & Maintenance",
      description: "Proactive maintenance and engineering solutions to keep your properties in pristine condition.",
      features: ["Preventive Maintenance", "Emergency Response", "Facility Upgrades", "Compliance Management"],
      benefits: [
        "Reduce maintenance costs by 25%",
        "Prevent costly emergency repairs",
        "Ensure regulatory compliance",
        "Extend asset lifespan"
      ]
    },
    {
      icon: "🤝",
      title: "Customer Excellence",
      description: "World-class customer service that builds lasting relationships and drives repeat business.",
      features: ["24/7 Support", "Guest Relations", "Complaint Resolution", "Loyalty Programs"],
      benefits: [
        "Increase repeat bookings by 40%",
        "Improve online reviews",
        "Reduce complaint resolution time",
        "Build customer loyalty"
      ]
    },
    {
      icon: "🌐",
      title: "Global Distribution",
      description: "Expand your reach with our extensive network of international booking platforms and travel agencies.",
      features: ["Multi-Channel Distribution", "Global OTA Management", "Regional Partnerships", "Market Expansion"],
      benefits: [
        "Access to 100+ booking channels",
        "Expand to new markets",
        "Increase international bookings",
        "Localized marketing strategies"
      ]
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Data-driven insights and analytics to make informed decisions and drive strategic growth.",
      features: ["Performance Analytics", "Market Research", "Competitive Analysis", "Forecasting"],
      benefits: [
        "Make data-driven decisions",
        "Identify growth opportunities",
        "Track KPI performance",
        "Predict market trends"
      ]
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1, duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2, duration: 3, repeat: Infinity }}
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
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">Our Services</span>
          </motion.div>

          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
            <AnimatedText
              text="Our Services"
              highlightWords={["Services"]}
              delay={0.5}
            />
          </div>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
            variants={itemVariants}
          >
            Comprehensive property and hotel management solutions designed to maximize revenue,
            enhance guest satisfaction, and streamline operations across global markets.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-3 px-4">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Properties Managed</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1M+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Bookings Managed</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Global Support</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-amber-50/20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 premium-card group"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results from day one
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { step: "01", title: "Assessment", description: "Comprehensive property and market analysis" },
              { step: "02", title: "Strategy", description: "Custom management plan development" },
              { step: "03", title: "Implementation", description: "Seamless system integration and setup" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12 border border-amber-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Maximize Your Property's Potential?
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let our experts create a customized management strategy that drives results 
              and exceeds your expectations.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href="/portfolio"
                className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Case Studies
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
