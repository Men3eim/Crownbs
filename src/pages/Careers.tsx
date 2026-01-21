import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Careers() {
  usePageMeta(
    'Careers | Crown Business Solutions',
    'Join our family-built team in Alexandria, Egypt. Build your career with us as we manage a growing UK hotel portfolio with operational excellence and modern luxury.'
  );

  // Carousel state for work environment images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const workEnvironmentImages = [
    {
      src: '/work-environment/Meeting.jpeg',
      alt: 'Professional meeting room at Crown Business Solutions',
      title: 'Professional Meeting Spaces',
      description: 'Collaborative environment for career development',
      features: ['Team Collaboration', 'Professional Growth'],
      badge: '💼',
      badgeText: 'Career Ready'
    },
    {
      src: '/work-environment/training.jpg',
      alt: 'Training and development sessions at Crown Business Solutions',
      title: 'Training & Development',
      description: 'Continuous learning opportunities for your career growth',
      features: ['Skill Development', 'Professional Training'],
      badge: '🎓',
      badgeText: 'Learn & Grow'
    },
    {
      src: '/work-environment/office1.jpg',
      alt: 'Modern office workspace at Crown Business Solutions',
      title: 'Modern Workspace',
      description: 'State-of-the-art office environment designed for productivity',
      features: ['Ergonomic Design', 'Modern Technology'],
      badge: '💻',
      badgeText: 'Productivity'
    },
    {
      src: '/work-environment/office2.jpg',
      alt: 'Collaborative office space at Crown Business Solutions',
      title: 'Collaborative Spaces',
      description: 'Open and flexible workspace encouraging teamwork and innovation',
      features: ['Team Collaboration', 'Flexible Layout'],
      badge: '🤝',
      badgeText: 'Teamwork'
    },
    {
      src: '/work-environment/office3.jpg',
      alt: 'Modern office environment at Crown Business Solutions',
      title: 'Professional Environment',
      description: 'Contemporary workspace designed for focus and collaboration',
      features: ['Modern Design', 'Professional Atmosphere'],
      badge: '✨',
      badgeText: 'Excellence'
    }
  ];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === workEnvironmentImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [workEnvironmentImages.length]);

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
      name: "Accounting",
      description: "Financial management, bookkeeping, and financial reporting",
      icon: "📊",
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
              { number: '120+', label: 'UK Hotels', icon: '🏨' },
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

      {/* Perks and Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Perks & Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in taking care of our team members with comprehensive benefits and perks that support both personal and professional growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: "💰",
                title: "Competitive Pay",
                description: "Attractive salary packages that reflect your skills and experience, with regular performance reviews and market adjustments."
              },
              {
                icon: "📈",
                title: "Performance Raises",
                description: "Regular salary increases based on performance, achievements, and contributions to the team's success."
              },
              {
                icon: "🛡️",
                title: "Social Insurance",
                description: "Comprehensive social insurance coverage including retirement benefits, disability protection, and unemployment insurance."
              },
              {
                icon: "🏥",
                title: "Health Insurance",
                description: "Full health insurance coverage for you and your family, including medical, dental, and vision care."
              },
              {
                icon: "🏖️",
                title: "Paid Vacation",
                description: "Generous paid time off policy including annual leave, sick days, and personal days to maintain work-life balance."
              },
              {
                icon: "🍽️",
                title: "Food Vouchers",
                description: "Monthly food vouchers to help with meal expenses, ensuring you're well-nourished and energized at work."
              },
              {
                icon: "🏆",
                title: "Rewards & Recognition",
                description: "Regular recognition programs, performance bonuses, and achievement awards to celebrate your contributions and milestones."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-amber-100/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Benefits Highlight */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Plus Additional Perks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-2">Professional Development</h4>
                <p className="text-amber-100">Training programs, conferences, and skill development opportunities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-xl font-bold mb-2">Modern Workspace</h4>
                <p className="text-amber-100">State-of-the-art office facilities in Alexandria with all amenities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-bold mb-2">Global Exposure</h4>
                <p className="text-amber-100">Work with international clients and gain global business experience</p>
              </div>
            </div>
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


      {/* Work Environment Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-400/5 to-amber-600/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-amber-400/20 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Your Work Environment</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the professional excellence and collaborative culture that makes Crown Business Solutions the perfect place to build your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
          <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Career Growth</h3>
                    <p className="text-gray-300 text-lg">Join a team where your professional development is prioritized. From entry-level to leadership roles, we provide the mentorship and opportunities you need to excel.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Collaborative Culture</h3>
                    <p className="text-gray-300 text-lg">Work in an environment where teamwork, innovation, and mutual support drive success. Our family-built culture ensures every voice is heard and valued.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Innovation & Learning</h3>
                    <p className="text-gray-300 text-lg">Access cutting-edge technology, continuous training programs, and opportunities to work on projects that shape the future of hospitality operations.</p>
                  </div>
                </div>
              </div>

              {/* Career Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">120+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">7</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">120+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">UK Hotels</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual Elements */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative space-y-6">
                {/* Animated Work Environment Carousel */}
                <div className="relative group">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                    <motion.img 
                      key={currentImageIndex}
                      src={workEnvironmentImages[currentImageIndex].src}
                      alt={workEnvironmentImages[currentImageIndex].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Enhanced Overlay with info */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl flex items-end"
                    key={`overlay-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">{workEnvironmentImages[currentImageIndex].title}</h4>
                      <p className="text-gray-200 text-lg mb-3">{workEnvironmentImages[currentImageIndex].description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        {workEnvironmentImages[currentImageIndex].features.map((feature, index) => (
                          <span key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced floating badge */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20"
                    key={`badge-${currentImageIndex}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="text-white text-2xl">{workEnvironmentImages[currentImageIndex].badge}</span>
                  </motion.div>
                  
                  {/* Additional floating element */}
                  <motion.div 
                    className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                    key={`badge-text-${currentImageIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {workEnvironmentImages[currentImageIndex].badgeText}
                  </motion.div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {workEnvironmentImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-amber-400 w-8' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Team Culture Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/work-environment/movie-night.jpg" 
                      alt="Team building and cultural activities at Crown Business Solutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Team Culture</h4>
                      <p className="text-gray-200 text-lg">Building lasting relationships through shared experiences</p>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🎬</span>
            </div>
              </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    Career Development
                  </span>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    Team Collaboration
                  </span>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    Professional Growth
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://recruit.crownbs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Career Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
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