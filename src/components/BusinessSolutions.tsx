import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { containerVariants, itemVariants, cardVariants } from '../utils/animations';
import { businessPillars } from '../data/pillars';

export default function BusinessSolutions() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-md"
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Business Solution Pillars</span>
          </motion.div>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight px-2"
            variants={itemVariants}
          >
            <AnimatedText
              text="Core Pillars of Business Transformation"
              highlightWords={["Pillars", "Transformation"]}
              highlightClassName="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent"
              delay={0.3}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our solutions are built on five core pillars, combining deep industry expertise with adaptable strategies to drive success across any business landscape.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {businessPillars.map((pillar, index) => (
            <motion.div
              key={index}
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
  );
}
