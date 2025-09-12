import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Careers() {
  usePageMeta(
    'Careers | Crown Business Solutions',
    'Join our family-built team in Alexandria, Egypt. Build your career with us as we manage a growing UK hotel portfolio with operational excellence and modern luxury.'
  );

  const careerHighlights = [
              {
                icon: "🏠",
                title: "Family Culture",
                description: "Built by family, for family. We foster a supportive environment where everyone's voice matters and personal growth is prioritized."
              },
              {
                icon: "🚀",
                title: "Growth Opportunities",
                description: "From answering calls to managing portfolios—our team members grow with the company, taking on increasing responsibilities and leadership roles."
              },
              {
                icon: "🌍",
                title: "Global Impact",
                description: "Manage a growing UK hotel portfolio from Alexandria, Egypt. Make a real impact on international hospitality operations."
              },
              {
                icon: "💡",
                title: "Innovation Focus",
                description: "We embrace AI, modern technology, and cutting-edge solutions to stay ahead in the competitive hospitality industry."
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description: "Flexible working arrangements, competitive benefits, and a modern office environment that supports both productivity and well-being."
              },
              {
                icon: "🎯",
                title: "Operational Excellence",
                description: "Learn from the best. Our proven methodologies and attention to detail create a culture of continuous improvement and excellence."
              }
  ];

  const departments = [
    {
      name: "Customer Service",
      description: "24/7 guest support and communication management",
      icon: "🎧",
      openings: "5+ Openings"
    },
    {
      name: "Revenue Management",
      description: "Dynamic pricing and revenue optimization strategies",
      icon: "📈",
      openings: "3+ Openings"
    },
    {
      name: "Software Engineering",
      description: "Custom solutions and technology development",
      icon: "💻",
      openings: "4+ Openings"
    },
    {
      name: "Data & Analytics",
      description: "Business intelligence and performance insights",
      icon: "📊",
      openings: "2+ Openings"
    },
    {
      name: "Marketing",
      description: "Digital marketing and brand awareness campaigns",
      icon: "📢",
      openings: "3+ Openings"
    },
    {
      name: "Operations",
      description: "End-to-end operational management",
      icon: "⚙️",
      openings: "6+ Openings"
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-400/5 to-amber-600/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-amber-400/20 rotate-45" />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30 mb-8 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
            <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">Join Our Team</span>
          </motion.div>

          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 px-4">
            <AnimatedText
              text="Build Your Future With Us"
              highlightWords={["Future", "Us"]}
              highlightClassName="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent"
              delay={0.3}
            />
          </div>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 px-4 leading-relaxed"
            variants={itemVariants}
          >
            Join our family-built team in Alexandria, Egypt. From managing a growing UK hotel portfolio to embracing modern luxury—build your career with operational excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="https://recruit.crownbs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Opportunities</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#departments"
              className="group relative border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm bg-white/10 shadow-lg overflow-hidden hover:scale-105 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Departments</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { number: '120+', label: 'Team Members', icon: '👥' },
              { number: '100+', label: 'UK Hotels', icon: '🏨' },
              { number: '24/7', label: 'Operations', icon: '⏰' },
              { number: '7', label: 'Departments', icon: '🏢' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Work With <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Crown Business Solutions</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a family-built company that values growth, innovation, and operational excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {careerHighlights.map((benefit, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore opportunities across our seven specialized departments, each playing a crucial role in our operational excellence.
            </p>
          </motion.div>

            <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
            {departments.map((dept, index) => (
                <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full">
                    {dept.openings}
                        </span>
                      </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{dept.description}</p>
                <a
                  href="https://recruit.crownbs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 group-hover:translate-x-1 transform"
                    >
                  View Openings
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                    </a>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* Work Environment Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Work Environment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our modern Alexandria headquarters where innovation meets family values.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Modern Office Space</h3>
                    <p className="text-gray-600">State-of-the-art facilities in Alexandria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Collaborative Culture</h3>
                    <p className="text-gray-600">Open communication and teamwork</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Latest Technology</h3>
                    <p className="text-gray-600">Cutting-edge tools and systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="text-xl font-medium">Our Alexandria Headquarters</div>
                  <div className="text-sm text-gray-400 mt-2">Replace with actual office photos</div>
            </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✨</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-32 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Join Our
              <br />
              <span className="text-amber-100">Family-Built Team?</span>
            </h2>
            <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover exciting career opportunities and be part of our journey in transforming hospitality operations with modern luxury and operational excellence.
            </p>
            
          <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href="https://recruit.crownbs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-amber-600 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore All Opportunities</span>
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                href="/about"
                className="group relative border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl backdrop-blur-sm bg-white/10 shadow-lg overflow-hidden hover:scale-105 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn About Our Story</span>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}