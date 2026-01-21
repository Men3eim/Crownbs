import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function OperationalExcellence() {
  usePageMeta(
    'Operational Excellence Solutions | Crown Business Solutions',
    'End-to-end operational efficiency, quality management, and performance optimization that drives sustainable business growth and customer satisfaction.'
  );

  const capabilities = [
    {
      title: "Process Optimization",
      description: "Streamline workflows and standardize processes to eliminate inefficiencies and reduce operational costs",
      icon: "⚙️"
    },
    {
      title: "Quality Management Systems",
      description: "Implement comprehensive quality frameworks and compliance systems to ensure consistent excellence",
      icon: "🏆"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time KPI dashboards and performance tracking systems for data-driven decision making",
      icon: "📊"
    },
    {
      title: "Customer Experience Optimization",
      description: "Journey mapping and experience optimization to enhance customer satisfaction and loyalty",
      icon: "😊"
    },
    {
      title: "Staff Training & Development",
      description: "Comprehensive training programs and development initiatives to enhance team capabilities",
      icon: "🎓"
    },
    {
      title: "Cost Reduction & Efficiency",
      description: "Identify and implement cost-saving opportunities while maintaining service quality",
      icon: "💰"
    }
  ];

  const industryApplications = [
    {
      industry: "Hospitality",
      applications: [
        "Guest experience management and service delivery optimization",
        "Staff productivity enhancement and training programs",
        "Quality assurance and brand standard compliance",
        "Operational cost reduction without compromising service"
      ]
    },
    {
      industry: "Corporate",
      applications: [
        "Office operations streamlining and workflow optimization",
        "Employee experience improvement initiatives",
        "Workflow automation and digital transformation",
        "Performance management and productivity enhancement"
      ]
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="Reduce Time‑to‑Resolution, Raise Standards" highlightWords={["Reduce", "Standards"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Cut time‑to‑resolution, reduce repeat issues, and raise standards with SOPs, checklists,
            and escalation paths—measured by response/resolve SLAs and review sentiment.
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
              Key <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive operational excellence solutions designed to optimize every aspect of your business operations.
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
              Industry <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our operational excellence solutions adapt to your industry's unique operational challenges and requirements.
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
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="bg-white rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOPs & SLAs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Response times by case severity</li>
                <li>Housekeeping and maintenance checklists</li>
                <li>Brand standards audits and QA loops</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Open ticket → Diagnose → Resolve → QA → Close</li>
                <li>Customer comms templates with escalation</li>
                <li>Daily standups; weekly ops review</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>First response and resolution times</li>
                <li>Repeat issues and rework rate</li>
                <li>Review sentiment and NPS</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-16 sm:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our operational excellence solutions and approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you only work with hospitality businesses?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While hospitality is our core expertise, our business solutions methodology applies to any industry requiring complex operations, customer experience management, and revenue optimization.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can I hire you for just engineering or maintenance services?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide comprehensive business solutions that may include facilities management, but we don't offer standalone engineering services. Our approach is holistic business transformation.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How do your hospitality solutions apply to other industries?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hospitality demands 24/7 operations, complex stakeholder management, and exceptional customer experience—skills that translate to virtually any customer-facing business.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What makes your approach different?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our solutions are battle-tested in hospitality's demanding environment, where operational excellence, customer satisfaction, and revenue optimization must work seamlessly together.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How do you measure operational excellence success?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We track key performance indicators including operational efficiency, cost reduction, customer satisfaction scores, and employee productivity metrics to ensure measurable improvements.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's the typical timeline for operational improvements?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Initial improvements are often visible within 30-60 days, with comprehensive operational transformation typically achieved within 6-12 months depending on complexity and scope.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Achieve Operational Excellence?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Transform your operations with our proven methodologies and drive sustainable business growth.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get Operations Assessment
              </motion.a>
              <motion.a
                href="/solutions"
                className="border border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
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
