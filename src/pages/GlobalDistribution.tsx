import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function GlobalDistribution() {
  usePageMeta(
    'Global Distribution & Partnerships | Crown Business Solutions',
    'Multi-channel distribution strategies and strategic partnership development that expands market reach and drives sustainable growth.'
  );

  const capabilities = [
    {
      title: "Multi-Channel Distribution",
      description: "Optimize distribution across multiple channels with integrated strategy and performance tracking",
      icon: "🌐"
    },
    {
      title: "Strategic Partnerships",
      description: "Develop and manage strategic partnerships that drive mutual growth and market expansion",
      icon: "🤝"
    },
    {
      title: "Global Market Expansion",
      description: "Comprehensive market expansion and localization strategies for international growth",
      icon: "🌍"
    },
    {
      title: "Distribution Network Optimization",
      description: "Optimize distribution networks for maximum reach and performance efficiency",
      icon: "📊"
    },
    {
      title: "Partner Relationship Management",
      description: "Comprehensive partner relationship management and support systems",
      icon: "💼"
    },
    {
      title: "Cross-Border Commerce",
      description: "Cross-border commerce solutions and international market entry strategies",
      icon: "✈️"
    }
  ];

  const industryApplications = [
    {
      industry: "Hospitality",
      applications: [
        "OTA management and travel partnerships optimization",
        "Global booking platform integration and management",
        "Distribution channel performance optimization",
        "International market expansion strategies"
      ]
    },
    {
      industry: "B2B",
      applications: [
        "Channel partner management and development",
        "Reseller network development and support",
        "Strategic alliances and joint ventures",
        "Global partner ecosystem management"
      ]
    },
    {
      industry: "Technology",
      applications: [
        "Integration partnerships and API management",
        "Global reseller networks and channel programs",
        "Technology partnerships and alliances",
        "Platform ecosystem development"
      ]
    }
  ];

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100/50 border border-indigo-200/50 mb-8 backdrop-blur-sm shadow-lg">
              <span className="text-6xl mr-4">🌐</span>
              <span className="text-indigo-800 text-sm font-medium tracking-wide">Profitable Channel Mix</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-2">
              <AnimatedText
                text="Fill Calendars with Profitable Channel Mix"
                highlightWords={["Profitable", "Channel"]}
                highlightClassName="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 bg-clip-text text-transparent"
                delay={0.3}
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Fill calendars profitably with content standards, parity checks, and promotions cadence—
              monitored by conversion, parity error rate, and channel mix profitability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Capabilities */}
      <motion.section 
        className="py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive global distribution solutions designed to expand your market reach and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industry Applications */}
      <motion.section 
        className="py-16 sm:py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our global distribution solutions adapt to your industry's unique market expansion needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((item) => (
              <motion.div
                key={item.industry}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.industry}</h3>
                <ul className="space-y-3">
                  {item.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Operations Playbook */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOPs & SLAs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Channel content standards and audit cadence</li>
                <li>Rate/availability parity checks with SLAs</li>
                <li>Partner response times and contact matrix</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Updates → Channel sync → QA → Monitor</li>
                <li>Promotions calendar and blackout rules</li>
                <li>Escalation to partners for systemic issues</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Content score and conversion rate</li>
                <li>Parity error rate and time to resolution</li>
                <li>Channel mix profitability</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-12 border border-indigo-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Expand Globally?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Accelerate your global growth with our comprehensive distribution and partnership solutions.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get Distribution Strategy
              </motion.a>
              <motion.a
                href="/solutions"
                className="border border-indigo-500 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View All Solutions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
