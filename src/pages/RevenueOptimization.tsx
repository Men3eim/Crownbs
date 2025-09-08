import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function RevenueOptimization() {
  usePageMeta(
    'Revenue Optimization Solutions | Crown Business Solutions',
    'Advanced pricing strategies, yield management, and multi-channel revenue optimization that maximizes profitability while maintaining competitive positioning.'
  );

  const capabilities = [
    {
      title: "Dynamic Pricing Algorithms",
      description: "Real-time yield management systems that adjust pricing based on demand, competition, and market conditions",
      icon: "📈"
    },
    {
      title: "Multi-Channel Revenue Strategies",
      description: "Optimize revenue across all distribution channels with integrated pricing and inventory management",
      icon: "🌐"
    },
    {
      title: "Market Intelligence & Analysis",
      description: "Advanced competitive analysis and market intelligence to inform strategic pricing decisions",
      icon: "🔍"
    },
    {
      title: "Partnership Revenue Optimization",
      description: "Maximize revenue from partnerships through optimized commission structures and performance tracking",
      icon: "🤝"
    },
    {
      title: "Demand Forecasting",
      description: "Predictive analytics for accurate demand forecasting and inventory optimization",
      icon: "📊"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive revenue performance analytics and KPI tracking dashboards",
      icon: "📋"
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg">
              <span className="text-6xl mr-4">🎯</span>
              <span className="text-amber-800 text-sm font-medium tracking-wide">Grow RevPAR</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-2">
              <AnimatedText
                text="Grow RevPAR with Precision Pricing"
                highlightWords={["Grow", "RevPAR"]}
                highlightClassName="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"
                delay={0.3}
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Lift RevPAR 6–12% with daily pricing playbooks, parity audits, and forecast‑driven rules—
              executed within SLA windows and aligned with Operations and Accounting.
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
              Key <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive revenue optimization tools and strategies designed to maximize your business potential.
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
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOPs & SLAs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Daily pricing review at set time windows</li>
                <li>Event/shoulder detection with playbook actions</li>
                <li>Parity checks and OTA rate accuracy audits</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Forecast → Pacing → Price rules → Publish</li>
                <li>Exceptions routed to Revenue/CS for action</li>
                <li>Weekly target review with Accounting ops</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Occupancy, ADR, RevPAR vs. target</li>
                <li>Pickup velocity and cancellation rates</li>
                <li>Channel mix and gross-to-net capture</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}