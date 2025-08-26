export default function HotelOperations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50/30">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-slate-100/80 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-100/80 to-gray-100/80 border border-slate-200/50 mb-8 backdrop-blur-sm">
              <svg className="w-5 h-5 text-slate-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-slate-700 text-sm font-semibold tracking-wide uppercase">Operational Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Hotel <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Streamline your hotel operations with our comprehensive management solutions,
              from front desk operations to housekeeping coordination and guest experience optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white px-10 py-4 rounded-2xl font-semibold hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-slate-500/40 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Optimize Operations</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="/portfolio"
                className="group border-2 border-slate-600/60 text-slate-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 hover:text-white hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/50"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence Metrics */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-700 font-medium">Guest Satisfaction</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-2">15min</div>
              <div className="text-gray-700 font-medium">Average Check-in Time</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-2">99.5%</div>
              <div className="text-gray-700 font-medium">Operational Uptime</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operations */}
      <section className="py-20 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Complete Operational Management
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Front Desk Operations",
                description: "Streamlined check-in/check-out processes, guest registration, and concierge services management.",
                features: ["Digital check-in/out", "Guest profile management", "Concierge coordination", "VIP guest handling"]
              },
              {
                title: "Housekeeping Management",
                description: "Efficient room cleaning schedules, inventory management, and quality control systems.",
                features: ["Room status tracking", "Cleaning schedules", "Inventory management", "Quality inspections"]
              },
              {
                title: "Guest Experience",
                description: "Comprehensive guest journey optimization from arrival to departure and beyond.",
                features: ["Guest preferences", "Service personalization", "Feedback management", "Loyalty programs"]
              },
              {
                title: "Staff Coordination",
                description: "Efficient staff scheduling, training programs, and performance management systems.",
                features: ["Shift scheduling", "Training modules", "Performance tracking", "Communication tools"]
              },
              {
                title: "Inventory Control",
                description: "Real-time inventory tracking for amenities, supplies, and equipment across all departments.",
                features: ["Stock monitoring", "Automated reordering", "Supplier management", "Cost optimization"]
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive quality control systems to maintain consistent service standards.",
                features: ["Service audits", "Guest feedback analysis", "Staff evaluations", "Improvement tracking"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Smart Operations Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Operations Dashboard</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Rooms Ready</span>
                  <span className="font-bold text-slate-600">156/160</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Check-ins Today</span>
                  <span className="font-bold text-slate-600">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Staff on Duty</span>
                  <span className="font-bold text-slate-600">24/28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Guest Satisfaction</span>
                  <span className="font-bold text-slate-600">9.4/10</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Integrated Operations Platform
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unified Dashboard</h4>
                    <p className="text-gray-600">Single interface for managing all hotel operations, from reservations to maintenance requests.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real-time Communication</h4>
                    <p className="text-gray-600">Instant messaging and task coordination between all departments and staff members.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automated Workflows</h4>
                    <p className="text-gray-600">Intelligent automation for routine tasks, reducing manual work and improving efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Hotel Operations
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Discover how our operational excellence solutions can enhance efficiency and guest satisfaction.
          </p>
          <a
            href="/contact"
            className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Operations Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
