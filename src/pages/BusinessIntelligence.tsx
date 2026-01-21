import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function BusinessIntelligence() {
  usePageMeta(
    'Business Intelligence & Analytics | Crown Business Solutions',
    'Data-driven insights, performance analytics, and strategic decision support that transforms raw data into actionable business intelligence.'
  );

  const capabilities = [
    {
      title: "Advanced Analytics",
      description: "Custom reporting solutions and advanced analytics to uncover hidden insights in your business data",
      icon: "📈"
    },
    {
      title: "Real-time Dashboards",
      description: "Interactive performance dashboards and KPI visualization for instant business intelligence",
      icon: "📊"
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning forecasting and predictive analytics to anticipate future trends and opportunities",
      icon: "🔮"
    },
    {
      title: "Strategic Decision Support",
      description: "Scenario modeling and strategic decision support tools to guide business planning",
      icon: "🎯"
    },
    {
      title: "Data Integration",
      description: "Comprehensive data integration and warehouse management for unified business intelligence",
      icon: "🔗"
    },
    {
      title: "Performance Benchmarking",
      description: "Business performance benchmarking and competitive analysis for market positioning",
      icon: "📋"
    }
  ];

  const industryApplications = [
    {
      industry: "Hospitality",
      applications: [
        "Guest behavior analysis and personalization insights",
        "Market intelligence and competitive positioning",
        "Revenue optimization insights and forecasting",
        "Operational performance tracking and optimization"
      ]
    },
    {
      industry: "Corporate",
      applications: [
        "Operational KPIs and performance tracking",
        "Strategic planning support and scenario modeling",
        "Employee productivity and engagement analytics",
        "Financial performance analysis and forecasting"
      ]
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="See Issues Early, Decide Faster" highlightWords={["Decide", "Faster"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Detect anomalies early, forecast accurately, and shorten decision time—
            with data quality SLAs and alerts routed to Revenue and Operations.
          </p>
        </div>
      </section>

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
              Key <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive business intelligence solutions designed to unlock the power of your data.
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
              Industry <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our business intelligence solutions adapt to your industry's unique data challenges and opportunities.
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
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="bg-white rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOPs & SLAs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Daily data quality checks and freshness SLAs</li>
                <li>Source of truth definitions and access controls</li>
                <li>Report change control and versioning</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Ingest → Validate → Model → Publish → Monitor</li>
                <li>Alerting to Revenue/Operations on anomalies</li>
                <li>Weekly review of KPIs and forecast deltas</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Data freshness and pipeline success rate</li>
                <li>Forecast accuracy and alert precision</li>
                <li>Decision lead time and adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-12 border border-purple-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Transform your business with data-driven insights and intelligent analytics solutions.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get Data Assessment
              </motion.a>
              <motion.a
                href="/solutions"
                className="border border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200"
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
