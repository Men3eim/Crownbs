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
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="Grow RevPAR with Precision Pricing" highlightWords={["Grow", "RevPAR"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Lift RevPAR 6–12% with daily pricing playbooks, parity audits, and forecast‑driven rules—
            executed within SLA windows and aligned with Operations and Accounting.
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