
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function EngineeringMaintenance() {
  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-emerald-100/80 overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-emerald-700/15 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-emerald-300/10 to-emerald-500/10 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 border border-emerald-400/30 rotate-45 animate-spin-slow"></div>
        </div>

        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-emerald-100/80 to-teal-100/80 border border-emerald-200/50 mb-6 sm:mb-8 backdrop-blur-sm">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-emerald-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">Advanced Technology</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
              <AnimatedText
                text="Engineering & Technology"
                highlightWords={["Technology"]}
                delay={0.5}
                highlightClassName="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4">
              Advanced engineering consulting, predictive maintenance intelligence, and cutting-edge automation
              technologies that revolutionize hospitality business workflows and operational performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Explore Technology Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="/portfolio"
                className="group border-2 border-emerald-600/60 text-emerald-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 hover:text-white hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/50 w-full sm:w-auto text-center"
              >
                View Implementations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Metrics */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-2">85%</div>
              <div className="text-gray-700 font-medium">Maintenance Cost Reduction</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-2">99.8%</div>
              <div className="text-gray-700 font-medium">System Reliability</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Automated Monitoring</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-700 font-medium">Automation Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crown BS Technology Solutions */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-emerald-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Crown BS Proprietary Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "CrownFlow™ Automation Platform",
                description: "Our flagship workflow automation system that intelligently manages property operations end-to-end.",
                features: [
                  "AI-powered task prioritization",
                  "Cross-department workflow automation",
                  "Real-time resource allocation",
                  "Predictive maintenance scheduling",
                  "Automated reporting and analytics"
                ],
                benefits: "Reduces manual tasks by 75% and improves operational efficiency by 60%"
              },
              {
                title: "SmartMaintenance™ AI System",
                description: "Predictive maintenance platform that prevents equipment failures before they occur.",
                features: [
                  "IoT sensor integration",
                  "Machine learning failure prediction",
                  "Automated work order generation",
                  "Vendor management automation",
                  "Cost optimization algorithms"
                ],
                benefits: "Prevents 90% of equipment failures and reduces maintenance costs by 40%"
              },
              {
                title: "CrownConnect™ Integration Hub",
                description: "Universal integration platform connecting all property systems and third-party services.",
                features: [
                  "API-first architecture",
                  "Real-time data synchronization",
                  "Legacy system integration",
                  "Cloud-native scalability",
                  "Security-first design"
                ],
                benefits: "Eliminates data silos and improves decision-making speed by 80%"
              },
              {
                title: "IntelliGuest™ Experience Engine",
                description: "AI-driven guest experience platform that personalizes every interaction and service.",
                features: [
                  "Guest preference learning",
                  "Automated service recommendations",
                  "Dynamic room customization",
                  "Predictive service delivery",
                  "Sentiment analysis integration"
                ],
                benefits: "Increases guest satisfaction by 45% and repeat bookings by 35%"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">Proven Results:</h4>
                  <p className="text-emerald-700 text-sm">{tech.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Intelligent Automation Workflows
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Maintenance",
                description: "AI algorithms monitor equipment health and predict failures before they occur.",
                automations: [
                  "HVAC system monitoring",
                  "Elevator performance tracking", 
                  "Plumbing leak detection",
                  "Electrical system diagnostics",
                  "Fire safety system checks"
                ]
              },
              {
                title: "Energy Management",
                description: "Smart energy optimization systems that reduce costs while maintaining guest comfort.",
                automations: [
                  "Smart thermostat control",
                  "Lighting automation",
                  "Water heating optimization",
                  "Peak demand management",
                  "Renewable energy integration"
                ]
              },
              {
                title: "Security & Access",
                description: "Advanced security systems with automated access control and monitoring capabilities.",
                automations: [
                  "Keyless entry systems",
                  "Facial recognition access",
                  "Automated security patrols",
                  "Emergency response protocols",
                  "Guest safety monitoring"
                ]
              }
            ].map((workflow, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{workflow.title}</h3>
                <p className="text-gray-600 mb-6">{workflow.description}</p>
                <ul className="space-y-2">
                  {workflow.automations.map((automation, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Innovation & R&D
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cutting-Edge Research & Development
              </h3>
              <p className="text-gray-600 mb-8">
                Our dedicated R&D team continuously develops new technologies and automation solutions 
                to stay ahead of industry trends and provide our clients with competitive advantages.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
                    <p className="text-gray-600">Advanced AI algorithms for predictive analytics, automated decision-making, and intelligent resource optimization.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">IoT Integration</h4>
                    <p className="text-gray-600">Comprehensive IoT sensor networks for real-time monitoring of all building systems and environmental conditions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile-First Solutions</h4>
                    <p className="text-gray-600">Native mobile applications for staff and management with offline capabilities and real-time synchronization.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Technology Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">System Uptime</span>
                  <span className="font-bold text-emerald-600">99.98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <span className="font-bold text-emerald-600">&lt;200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Automation Coverage</span>
                  <span className="font-bold text-emerald-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="font-bold text-emerald-600">£2.3M/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Engineering Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Preventive Maintenance",
                description: "Proactive maintenance programs that extend equipment life and prevent costly breakdowns.",
                features: ["Scheduled inspections", "Equipment lifecycle tracking", "Maintenance planning", "Performance monitoring"]
              },
              {
                title: "Emergency Response",
                description: "24/7 emergency engineering support with rapid response times and expert technicians.",
                features: ["24/7 hotline", "Emergency protocols", "Rapid deployment", "Crisis management"]
              },
              {
                title: "Energy Efficiency",
                description: "Comprehensive energy audits and optimization programs to reduce operational costs.",
                features: ["Energy audits", "Efficiency upgrades", "Smart controls", "Sustainability reporting"]
              },
              {
                title: "Building Automation",
                description: "Advanced building management systems for centralized control of all property systems.",
                features: ["HVAC automation", "Lighting control", "Security integration", "Environmental monitoring"]
              },
              {
                title: "Technology Integration",
                description: "Seamless integration of new technologies with existing property management systems.",
                features: ["System integration", "API development", "Data migration", "Staff training"]
              },
              {
                title: "Compliance Management",
                description: "Ensure all engineering systems meet local regulations and international standards.",
                features: ["Regulatory compliance", "Safety audits", "Certification management", "Documentation"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Automation Showcase */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Workflow Automation Excellence
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Our proprietary automation solutions eliminate manual processes and create seamless,
              intelligent workflows that adapt to your property's unique operational needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Room Management",
                description: "Automated room status updates, cleaning schedules, and maintenance alerts",
                icon: "🏠"
              },
              {
                title: "Guest Journey Automation",
                description: "Personalized guest experiences from booking to checkout with zero manual intervention",
                icon: "🎯"
              },
              {
                title: "Inventory Intelligence",
                description: "Predictive inventory management with automated ordering and supplier coordination",
                icon: "📦"
              },
              {
                title: "Financial Automation",
                description: "Automated invoicing, payment processing, and financial reporting across all channels",
                icon: "💰"
              }
            ].map((automation, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{automation.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{automation.title}</h3>
                <p className="text-emerald-100 text-sm">{automation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Discover how our engineering and automation solutions can transform your business operational efficiency.
          </p>
          <a
            href="/contact"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Technology Consultation
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
