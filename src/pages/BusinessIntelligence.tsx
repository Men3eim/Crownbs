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
      industry: "E-commerce",
      applications: [
        "Customer analytics and segmentation strategies",
        "Sales optimization and conversion funnel analysis",
        "Inventory forecasting and demand planning",
        "Marketing ROI analysis and campaign optimization"
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
    },
    {
      industry: "Retail",
      applications: [
        "Customer insights and shopping behavior analysis",
        "Inventory optimization and demand forecasting",
        "Market trend analysis and competitive intelligence",
        "Store performance comparison and optimization"
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-purple-100/50 border border-purple-200/50 mb-8 backdrop-blur-sm shadow-lg">
              <span className="text-6xl mr-4">📊</span>
              <span className="text-purple-800 text-sm font-medium tracking-wide">Business Intelligence & Analytics</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-2">
              <AnimatedText
                text="Transform Data Into Insights"
                highlightWords={["Data", "Insights"]}
                highlightClassName="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent"
                delay={0.3}
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Data-driven insights, performance analytics, and strategic decision support 
              that transforms raw data into actionable business intelligence.
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
