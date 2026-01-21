import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AssetInfrastructure() {
  usePageMeta(
    'Asset & Infrastructure Management | Crown Business Solutions',
    'Hospitality-focused facility management, preventive maintenance, and asset lifecycle controls that protect the guest experience and maximize operational uptime.'
  );

  const capabilities = [
    {
      title: "Hospitality Facility Standards",
      description: "Brand-standard facility routines and room-readiness controls to protect guest experience across the estate",
      icon: "🏗️"
    },
    {
      title: "Preventive Maintenance Programs",
      description: "Planned preventive schedules that reduce downtime, extend asset life, and keep rooms sale-ready",
      icon: "🔧"
    },
    {
      title: "Asset Lifecycle Controls",
      description: "Lifecycle tracking for FF&E and critical systems with budgets, renewals, and replacement planning",
      icon: "📋"
    },
    {
      title: "Guest Safety & Compliance",
      description: "Safety checks, statutory compliance, and audit trails that reduce risk and improve incident readiness",
      icon: "🛡️"
    },
    {
      title: "Energy & Utilities Optimization",
      description: "Energy and utilities monitoring to reduce waste while maintaining comfort and service levels",
      icon: "🌱"
    },
    {
      title: "Vendor Management",
      description: "Vendor SLAs, performance tracking, and cost control for consistent service delivery and quality",
      icon: "🤝"
    }
  ];

  const industryApplications = [
    {
      industry: "Hospitality",
      applications: [
        "Room-readiness standards and preventative maintenance to reduce out-of-order rooms",
        "Guest safety checks, statutory compliance, and documented audit trails",
        "Ticketing workflows, SLA tracking, and quality assurance sign‑offs",
        "Utilities and energy controls to reduce cost without compromising comfort",
        "Vendor management and service quality assurance across property partners"
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200/50 mb-8 backdrop-blur-sm shadow-lg">
              <span className="text-6xl mr-4">🔧</span>
              <span className="text-green-800 text-sm font-medium tracking-wide">Increase Uptime</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-2">
              <AnimatedText
                text="Protect the Guest Experience. Reduce Downtime."
                highlightWords={["Guest", "Downtime"]}
                highlightClassName="bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent"
                delay={0.3}
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Hospitality-first maintenance that keeps rooms sale-ready and protects reviews.
              We implement preventive schedules, vendor SLAs, and lifecycle controls—tracked with MTTR, preventive/reactive ratio, and cost per room.
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
              Key <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive asset and infrastructure management solutions designed to maximize value and minimize costs.
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
              Industry <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our asset and infrastructure management solutions adapt to your industry's unique asset requirements.
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
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="bg-white rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOPs & SLAs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Room-readiness checks and preventive schedules by asset class</li>
                <li>Response times by severity (guest-impact first)</li>
                <li>Safety, statutory compliance, and inspection logs</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Ticket → Triage → Assign → Resolve → QA → Sign‑off</li>
                <li>Vendor dispatch with SLA and cost controls</li>
                <li>Lifecycle updates for FF&E and critical systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Out-of-order rooms, uptime, and MTTR</li>
                <li>Preventive vs. reactive ratio and repeat-fault rate</li>
                <li>Cost per room and vendor SLA hit rate</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-12 border border-green-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Improve Property Uptime?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Keep rooms sale-ready, reduce downtime, and improve compliance with a hospitality-first maintenance and asset program.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Request a Maintenance Audit
              </motion.a>
              <motion.a
                href="/solutions"
                className="border border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
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
