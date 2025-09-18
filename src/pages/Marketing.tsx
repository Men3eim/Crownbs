import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function Marketing() {
  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="Marketing Excellence That Drives Growth" highlightWords={["Excellence"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Where strategic marketing meets hospitality mastery. Our elite marketing team transforms properties 
            into revenue-generating destinations through intelligent brand positioning, multi-channel acquisition, and market expertise.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Marketing Excellence That Drives Reservations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our marketing department is the strategic engine that drives reservations and revenue growth 
              across all properties, delivering measurable value through intelligent market positioning and guest acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Revenue Growth Engine',
                description: 'Strategic pricing optimization, demand generation, and market penetration strategies that directly impact RevPAR, occupancy rates, and overall profitability across all properties.',
                icon: '📈'
              },
              {
                title: 'Brand Authority & Market Position',
                description: 'Luxury brand positioning and market differentiation that builds premium brand recognition, competitive advantage, and guest loyalty in the hospitality marketplace.',
                icon: '👑'
              },
              {
                title: 'Guest Acquisition & Conversion',
                description: 'Multi-channel acquisition strategies, conversion optimization, and guest journey mapping powered by AI-driven personalization and targeted marketing campaigns.',
                icon: '🎯'
              },
              {
                title: 'Market Intelligence & Insights',
                description: 'Data-driven market analysis, competitor intelligence, and trend forecasting that enables strategic decision-making based on market dynamics and guest behavior patterns.',
                icon: '🔍'
              },
              {
                title: 'Partnership & Distribution Mastery',
                description: 'Strategic OTA relationships, affiliate networks, and distribution optimization that maximizes reach while maintaining brand integrity and profitability across all channels.',
                icon: '🤝'
              },
              {
                title: 'Digital Innovation & Technology',
                description: 'Cutting-edge marketing technology, automation, and digital transformation initiatives that leverage AI-powered tools and predictive analytics for superior performance.',
                icon: '💻'
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

      {/* Strategic Capabilities */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Marketing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage advanced marketing expertise and cutting-edge technology to deliver 
              comprehensive solutions that drive reservations and maximize revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Advanced Analytics & Intelligence
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Comprehensive market research and competitive analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Guest segmentation and behavioral pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Predictive modeling and revenue forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Real-time performance monitoring and optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎨</span>
                  Brand & Creative Leadership
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Luxury brand development and positioning strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Creative direction and visual identity design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Content strategy and storytelling excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Guest experience design and touchpoint optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🌐</span>
                  Multi-Channel Marketing Excellence
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>OTA optimization and listing management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Direct booking strategies and conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Social media mastery and community building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Content marketing and SEO expertise</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  Performance Marketing & ROI
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Paid advertising optimization and budget allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Conversion tracking and performance measurement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Measurable ROI and performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Strategic campaign management and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology-Driven Marketing Innovation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We harness cutting-edge marketing technology and AI-powered tools to deliver 
              superior performance and measurable results across all marketing initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AI-Powered Automation',
                description: 'Intelligent marketing automation that optimizes campaigns, personalizes guest experiences, and maximizes conversion rates.',
                icon: '🤖'
              },
              {
                title: 'Advanced Analytics',
                description: 'Comprehensive business intelligence and data visualization platforms that transform marketing data into actionable insights.',
                icon: '📈'
              },
              {
                title: 'Marketing Technology Stack',
                description: 'Enterprise-grade marketing tools and platforms that enable seamless campaign management and performance tracking.',
                icon: '⚙️'
              },
              {
                title: 'Data-Driven Decisions',
                description: 'Evidence-based marketing strategies powered by real-time data analysis and predictive modeling capabilities.',
                icon: '🎯'
              }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-slate-400">
                  {tech.description}
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
            Ready to Transform Your Marketing Strategy?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Discover how our marketing excellence can drive reservations, increase revenue, 
            and elevate your property's market position through strategic marketing innovation.
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


