import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, cardVariants, floatingVariants, statsVariants } from '../utils/animations';

export default function About() {
  const team = [
    {
      name: "Michael Crown",
      position: "Chief Executive Officer",
      bio: "20+ years in international hospitality business solutions with expertise in operational excellence and revenue optimization.",
      initials: "MC"
    },
    {
      name: "Sarah Chen",
      position: "Chief Operating Officer",
      bio: "Former VP of Operations at leading global hospitality company, specializing in business solutions and operational excellence.",
      initials: "SC"
    },
    {
      name: "David Rodriguez",
      position: "Head of Revenue Management",
      bio: "Revenue optimization expert with proven track record of increasing business performance across diverse international markets.",
      initials: "DR"
    },
    {
      name: "Emma Thompson",
      position: "Director of Partnerships",
      bio: "Strategic partnership specialist with extensive network across global hospitality and technology sectors.",
      initials: "ET"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every aspect of business solutions, delivering results that exceed expectations."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "Our international experience enables us to navigate diverse markets and cultural nuances effectively."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We leverage cutting-edge technology and innovative strategies to stay ahead of industry trends."
    }
  ];

  const milestones = [
    { year: "2015", event: "Founded Crown Business Solutions", description: "Started with a vision to revolutionize property management" },
    { year: "2017", event: "International Expansion", description: "Expanded operations to 10 countries across Europe and Asia" },
    { year: "2019", event: "Technology Partnership", description: "Formed strategic alliances with leading hospitality technology providers" },
    { year: "2021", event: "Global Network", description: "Delivered 500+ business solutions across international markets" },
    { year: "2023", event: "Industry Recognition", description: "Awarded 'Global Property Management Company of the Year'" },
    { year: "2024", event: "Continued Growth", description: "Expanding into new markets with innovative service offerings" }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1, duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2, duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
              variants={itemVariants}
            >
              <motion.div
                className="w-2 h-2 bg-amber-500 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">About Our Company</span>
            </motion.div>

            <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
              <AnimatedText
                text="About Crown Business Solutions"
                highlightWords={["Crown", "Business", "Solutions"]}
                delay={0.5}
              />
            </div>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4"
              variants={itemVariants}
            >
              A global leader in property and hotel management, delivering exceptional results
              through innovative strategies, cutting-edge technology, and unparalleled expertise
              across international markets.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
            variants={containerVariants}
          >
            {[
              { value: "2015", label: "Founded" },
              { value: "500+", label: "Business Solutions" },
              { value: "1M+", label: "Bookings Managed" },
              { value: "200+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={statsVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div
                  className="text-gray-600 text-sm uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-amber-50/20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To revolutionize property and hotel management by delivering innovative solutions
                that maximize revenue, enhance guest experiences, and create sustainable value
                for property owners worldwide.
              </p>
              <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50 premium-card">
                <h3 className="font-semibold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-700 text-sm">
                  We're committed to setting new standards in hospitality management across
                  diverse cultures and markets, ensuring every property reaches its full potential.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To be the world's most trusted property management partner, known for our
                expertise, innovation, and commitment to delivering exceptional results
                across every market we serve.
              </p>
              <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50 premium-card">
                <h3 className="font-semibold text-gray-900 mb-2">Future Focus</h3>
                <p className="text-gray-700 text-sm">
                  We're building the future of hospitality business solutions through technology innovation,
                  sustainable practices, and global collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our success worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Crown Business Solutions to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global leader in property management
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Industry Leaders?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join the Crown Business Solutions family and experience the difference 
            that expertise and dedication can make.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
