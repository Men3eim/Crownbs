import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  const services = [
    {
      title: "Revenue Management",
      description: "Advanced analytics and dynamic pricing strategies to maximize your property's revenue potential across all channels.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Dynamic Pricing", "Market Analysis", "Channel Optimization", "Performance Analytics"],
      link: "/services/revenue-management",
      color: "from-amber-600 via-yellow-500 to-amber-700",
      hoverColor: "hover:from-amber-700 hover:via-yellow-600 hover:to-amber-800",
      bgGradient: "from-amber-50/80 via-yellow-50/60 to-amber-100/80",
      borderColor: "border-amber-200/60",
      textAccent: "text-amber-700",
      shadowColor: "shadow-amber-500/20"
    },
    {
      title: "Hotel Operations",
      description: "Comprehensive operational management solutions to streamline daily operations and enhance efficiency.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Front Desk Management", "Housekeeping Coordination", "Staff Scheduling", "Quality Control"],
      link: "/services/hotel-operations",
      color: "from-slate-600 via-slate-700 to-slate-800",
      hoverColor: "hover:from-slate-700 hover:via-slate-800 hover:to-slate-900",
      bgGradient: "from-slate-50/80 via-gray-50/60 to-slate-100/80",
      borderColor: "border-slate-200/60",
      textAccent: "text-slate-700",
      shadowColor: "shadow-slate-500/20"
    },
    {
      title: "Engineering & Technology",
      description: "Advanced engineering solutions, predictive maintenance, and cutting-edge automation technologies.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ["Predictive Maintenance", "Building Automation", "IoT Integration", "Workflow Automation"],
      link: "/services/engineering-maintenance",
      color: "from-emerald-600 via-teal-600 to-emerald-700",
      hoverColor: "hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800",
      bgGradient: "from-emerald-50/80 via-teal-50/60 to-emerald-100/80",
      borderColor: "border-emerald-200/60",
      textAccent: "text-emerald-700",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      title: "Customer Excellence",
      description: "Exceptional guest experience management through personalized service and advanced guest intelligence.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ["Guest Intelligence", "Service Training", "Feedback Management", "Loyalty Programs"],
      link: "/services/customer-excellence",
      color: "from-rose-600 via-pink-600 to-rose-700",
      hoverColor: "hover:from-rose-700 hover:via-pink-700 hover:to-rose-800",
      bgGradient: "from-rose-50/80 via-pink-50/60 to-rose-100/80",
      borderColor: "border-rose-200/60",
      textAccent: "text-rose-700",
      shadowColor: "shadow-rose-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Luxury Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-amber-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-gradient-to-br from-amber-500/15 to-transparent rotate-12 animate-pulse-luxury"></div>
      </div>

      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-amber-200/50 mb-8 backdrop-blur-sm"
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Premium Services</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            variants={itemVariants}
          >
            Our <motion.span
              className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Comprehensive property management solutions designed to maximize revenue,
            optimize operations, and deliver exceptional guest experiences worldwide.
          </motion.p>
        </motion.div>

        {/* Services Alternating Layout */}
        <motion.div
          className="space-y-24 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden premium-card ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>

                {/* Content Side */}
                <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'} space-y-8`}>
                  {/* Icon */}
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-xl ${service.shadowColor}`}>
                    {service.icon}
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className={`text-4xl md:text-5xl font-bold ${service.textAccent} mb-6 group-hover:text-opacity-90 transition-all duration-300 tracking-tight leading-tight`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-8 leading-relaxed text-xl font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 group/feature hover:text-gray-900 transition-colors duration-200">
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200`} />
                        <span className="font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={service.link}
                      className={`relative inline-flex items-center bg-gradient-to-r ${service.color} text-white px-10 py-5 rounded-2xl font-semibold ${service.hoverColor} transition-all duration-300 shadow-xl hover:scale-105 overflow-hidden group/btn text-lg`}
                    >
                      <span className="relative z-10">Discover More</span>
                      <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'} relative`}>
                  <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-12 border ${service.borderColor} ${service.shadowColor} shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden min-h-[400px] flex items-center justify-center`}>

                    {/* Luxury Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                    {/* Premium Border Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Service Visual/Icon Display */}
                    <div className="text-center space-y-6">
                      <div className={`w-36 h-36 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto shadow-2xl ${service.shadowColor} group-hover:scale-105 transition-all duration-500`}>
                        <div className="scale-[1.8]">
                          {service.icon}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className={`text-2xl font-bold ${service.textAccent}`}>Premium Service</h4>
                        <p className="text-gray-600 font-medium">Luxury Property Management</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us - Luxury Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl p-12 md:p-16 shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Luxury Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M30 30L0 0h60v60L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Why Choose <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Crown Business Solutions</span>?
            </h3>
            <p className="text-slate-300 text-lg text-center mb-12 max-w-3xl mx-auto font-light">
              Experience the pinnacle of luxury property management with our world-class expertise and unmatched dedication to excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-300 transition-colors duration-300">Proven Excellence</h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Over 500 properties worldwide trust our solutions, with an average 35% increase in revenue and 98% client satisfaction rate.
                </p>
              </div>

              <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-500/30 group-hover:shadow-slate-500/50 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-slate-300 transition-colors duration-300">Global Support</h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Round-the-clock global support team ensuring your operations run smoothly across all time zones and markets.
                </p>
              </div>

              <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-rose-500/30 group-hover:shadow-rose-500/50 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-rose-300 transition-colors duration-300">Innovation First</h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Cutting-edge technology solutions and proprietary automation platforms that keep you ahead of industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
