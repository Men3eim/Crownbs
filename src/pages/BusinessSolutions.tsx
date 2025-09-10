import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';
import { businessPillars } from '../data/pillars';

export default function BusinessSolutions() {
  usePageMeta(
    'Business Solutions | Crown Business Solutions',
    'Explore our five pillars of business transformation: Revenue Optimization, Operational Excellence, Asset Management, Business Intelligence, and Global Distribution.'
  );

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
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
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
            <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide uppercase">Business Solution Pillars</span>
          </motion.div>

          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
            <AnimatedText
              text="Core Pillars of Business Transformation"
              highlightWords={["Pillars", "Transformation"]}
              delay={0.3}
            />
          </div>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
            variants={itemVariants}
          >
            Our solutions are built on five core pillars, combining deep industry expertise with adaptable strategies to drive success across any business landscape.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {businessPillars.map((pillar) => (
              <motion.div
                id={pillar.id}
                key={pillar.id}
                className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{pillar.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Industry Applications:</h4>
                  <ul className="space-y-2">
                    {pillar.applications.map((app, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* One Platform, Multiple Industries */}
      <motion.section 
        id="industry-adaptability" 
        className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Born in Hospitality, <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Proven Across Industries</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto font-light">
              Our business solutions were developed and refined in the demanding hospitality sector—one of the most complex, customer-focused industries. This foundation gives us unique expertise in:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Multi-stakeholder operations",
              "24/7 performance requirements",
              "Customer experience optimization",
              "Revenue complexity management",
              "Global market dynamics",
              "Real-time decision making"
            ].map(item => (
              <div key={item} className="flex items-center text-slate-200">
                <svg className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-300 text-lg">
            These capabilities translate powerfully to other industries requiring sophisticated business solutions.
          </p>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section 
        id="industries" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Transform</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Built in hospitality, our playbooks scale across travel portfolios and adjacent asset‑heavy operations.</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {/* Enhanced Primary Card - Hospitality */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600" />
              <div className="relative p-8 md:p-10 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold mb-2">🏨 Hospitality & Travel</h3>
                  <p className="text-amber-100 font-semibold">Our core expertise</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">We operate</h4>
                  <ul className="space-y-2 text-amber-50 list-disc list-inside">
                    <li>Hotels, aparthotels, vacation rentals</li>
                    <li>Distribution via OTAs and direct</li>
                    <li>Front‑desk, housekeeping, maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcomes</h4>
                  <ul className="space-y-2 text-amber-50 list-disc list-inside">
                    <li>RevPAR growth with daily pricing cadence</li>
                    <li>Lower MTTR and higher uptime</li>
                    <li>Faster resolutions and higher review scores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven, collaborative methodology that delivers results from day one.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { step: "01", title: "Assessment", description: "Comprehensive property and market analysis" },
              { step: "02", title: "Strategy", description: "Custom solution and strategy development" },
              { step: "03", title: "Implementation", description: "Seamless system integration and setup" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4"
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

      {/* Solution Clarification */}
      <motion.section 
        id="solution-clarification" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Solutions, Not Individual Services</h2>
            <p className="text-gray-600 mb-8">
              We don't provide standalone engineering services or isolated consulting. Instead, we deliver comprehensive business transformation solutions that may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-lg mx-auto mb-8">
              {[
                "Strategic planning and implementation",
                "Technology integration and optimization",
                "Operational process redesign",
                "Performance monitoring and optimization",
                "Ongoing strategic partnership"
              ].map(item => (
                <li key={item} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-semibold text-gray-800">
              Each solution is tailored to your industry while leveraging our hospitality-proven methodologies.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12 border border-amber-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Explore Custom Solutions for Your Industry
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              Discover how our hospitality-proven methods can be adapted to drive success in your specific business environment.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Schedule a Strategic Assessment
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
