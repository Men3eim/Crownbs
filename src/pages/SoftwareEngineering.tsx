import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function SoftwareEngineering() {
  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="Software Engineering Excellence" highlightWords={["Excellence"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Where cutting-edge technology meets operational mastery. Our elite software engineering team 
            transforms hospitality through intelligent automation, AI-driven insights, and seamless digital experiences.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Engineering Excellence That Drives Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our software engineering department is the technological backbone that powers every aspect 
              of our hospitality operations, delivering measurable value through innovation and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Operational Intelligence',
                description: 'Advanced AI and machine learning algorithms that analyze real-time operational data, predict guest behavior patterns, and optimize resource allocation across all properties.',
                icon: '🧠'
              },
              {
                title: 'Seamless Automation',
                description: 'Sophisticated workflow automation that eliminates manual processes, reduces human error, and accelerates response times across guest services and internal operations.',
                icon: '⚡'
              },
              {
                title: 'Digital Guest Experience',
                description: 'Revolutionary guest interaction platforms powered by conversational AI, predictive analytics, and personalized service delivery that exceeds luxury expectations.',
                icon: '💎'
              },
              {
                title: 'Business Intelligence',
                description: 'Advanced data analytics and visualization platforms that transform raw operational data into actionable insights, driving strategic decisions and revenue optimization.',
                icon: '📊'
              },
              {
                title: 'Integration Mastery',
                description: 'Seamless connectivity between all systems - from OTAs and PMS to CRM and payment platforms - creating a unified ecosystem that operates flawlessly.',
                icon: '🔗'
              },
              {
                title: 'Innovation Leadership',
                description: 'Continuous research and development of next-generation hospitality technologies, staying ahead of industry trends and setting new standards for excellence.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technology Arsenal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced technologies and methodologies to deliver enterprise-grade solutions 
              that scale with our business and exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🤖</span>
                  AI & Machine Learning
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Predictive analytics for revenue optimization and demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Natural language processing for enhanced guest communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Computer vision for property management and quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Intelligent automation for dynamic pricing and inventory management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚙️</span>
                  Advanced Automation
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Intelligent workflow orchestration across all operational touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Real-time monitoring and automated incident response systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Smart resource allocation and capacity optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Automated quality assurance and compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📱</span>
                  Digital Innovation
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Next-generation guest mobile applications with AI-powered features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Immersive virtual reality property tours and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Voice-activated concierge services and smart room controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Blockchain-based loyalty programs and secure transactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  Enterprise Security
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Zero-trust security architecture with advanced threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>End-to-end encryption for all guest data and communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Compliance automation for GDPR, PCI-DSS, and industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Continuous security monitoring and automated vulnerability management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Measurable Impact on Operations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our software engineering excellence translates directly into operational improvements 
              and business value across all properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '95%', label: 'Operational Efficiency Increase', description: 'Through intelligent automation and process optimization' },
              { metric: '40%', label: 'Faster Response Times', description: 'Automated systems and AI-powered decision making' },
              { metric: '99.9%', label: 'System Uptime', description: 'Enterprise-grade reliability and monitoring' },
              { metric: '60%', label: 'Cost Reduction', description: 'Streamlined workflows and automated resource management' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">
                  {stat.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-400 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Engineering Excellence?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Discover how our software engineering expertise can transform your hospitality operations 
            and deliver unprecedented value through technology innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
              Explore Our Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}


