export default function CustomerExcellence() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Customer <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Deliver exceptional guest experiences through personalized service, advanced guest intelligence, 
              and comprehensive customer relationship management solutions that drive loyalty and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Enhance Guest Experience
              </a>
              <a
                href="/portfolio"
                className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                View Guest Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">9.6/10</div>
              <div className="text-gray-600">Guest Satisfaction Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Guest Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">&lt;2min</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Excellence Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Guest Experience Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guest Intelligence Platform",
                description: "Advanced guest profiling and preference management for personalized experiences.",
                features: ["Guest preference tracking", "Behavioral analytics", "Personalization engine", "Loyalty integration"]
              },
              {
                title: "Omnichannel Communication",
                description: "Seamless communication across all touchpoints with consistent, personalized messaging.",
                features: ["Multi-channel messaging", "Real-time chat support", "Voice assistance", "Social media integration"]
              },
              {
                title: "Service Excellence Training",
                description: "Comprehensive staff training programs focused on delivering exceptional guest experiences.",
                features: ["Service standards training", "Cultural sensitivity", "Problem resolution", "Upselling techniques"]
              },
              {
                title: "Guest Feedback Management",
                description: "Real-time feedback collection and analysis with automated response and improvement tracking.",
                features: ["Feedback automation", "Sentiment analysis", "Response management", "Improvement tracking"]
              },
              {
                title: "Loyalty & Retention",
                description: "Advanced loyalty programs and retention strategies to maximize guest lifetime value.",
                features: ["Loyalty program design", "Retention campaigns", "Reward optimization", "VIP management"]
              },
              {
                title: "Crisis Management",
                description: "Comprehensive crisis response protocols to maintain guest satisfaction during challenging situations.",
                features: ["Emergency protocols", "Communication plans", "Recovery strategies", "Reputation management"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Guest Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Complete Guest Journey Optimization
          </h2>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  phase: "Pre-Arrival",
                  title: "Anticipation Building",
                  description: "Personalized pre-arrival communications and preference collection",
                  color: "from-purple-400 to-purple-500"
                },
                {
                  phase: "Arrival",
                  title: "Seamless Check-in",
                  description: "Express check-in with personalized welcome and room customization",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  phase: "Stay",
                  title: "Exceptional Service",
                  description: "Proactive service delivery and real-time guest satisfaction monitoring",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  phase: "Departure",
                  title: "Memorable Farewell",
                  description: "Efficient checkout with personalized thank you and future booking incentives",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  phase: "Post-Stay",
                  title: "Lasting Relationships",
                  description: "Follow-up communications and loyalty program engagement",
                  color: "from-purple-800 to-purple-900"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">{phase.phase}</p>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Customer Excellence Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                property: "Grand Hotel Paris",
                improvement: "+2.3 Points",
                metric: "Guest Satisfaction Score",
                description: "Implemented comprehensive guest experience program resulting in industry-leading satisfaction scores.",
                results: ["Review Score: 9.8/10", "Repeat Guests: +65%", "Referrals: +80%"]
              },
              {
                property: "Resort Maldives",
                improvement: "+45%",
                metric: "Guest Retention Rate",
                description: "Developed personalized service protocols and loyalty program for luxury resort guests.",
                results: ["Retention: 95%", "Upsells: +55%", "Revenue per Guest: +32%"]
              },
              {
                property: "Business Hotel Tokyo",
                improvement: "98%",
                metric: "Service Recovery Rate",
                description: "Created proactive service recovery system that turns complaints into loyalty opportunities.",
                results: ["Recovery Rate: 98%", "Complaint Resolution: <1hr", "Guest Advocacy: +70%"]
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.property}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">{story.improvement}</div>
                <p className="text-purple-600 font-medium mb-4">{story.metric}</p>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="space-y-2">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Guest Experience
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your guest relationships with our proven customer excellence strategies and technologies.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Guest Experience Transformation
          </a>
        </div>
      </section>
    </div>
  );
}
