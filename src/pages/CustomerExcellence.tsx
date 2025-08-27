import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function CustomerExcellence() {
  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-rose-50/30 via-white to-pink-50/30">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e11d48' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-rose-100/80 overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-rose-500/15 to-rose-700/15 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-rose-300/10 to-rose-500/10 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 border border-rose-400/30 rotate-45 animate-spin-slow"></div>
        </div>

        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-rose-100/80 to-pink-100/80 border border-rose-200/50 mb-6 sm:mb-8 backdrop-blur-sm">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-rose-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-rose-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">Guest Experience Excellence</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
              <AnimatedText
                text="Customer Excellence"
                highlightWords={["Excellence"]}
                delay={0.5}
                highlightClassName="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4">
              Deliver exceptional guest experiences through personalized service, advanced guest intelligence,
              and comprehensive customer relationship management solutions that drive loyalty and satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:from-rose-700 hover:via-pink-700 hover:to-rose-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-rose-500/40 hover:-translate-y-1 overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Enhance Guest Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="/portfolio"
                className="group border-2 border-rose-600/60 text-rose-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 hover:text-white hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/50 w-full sm:w-auto text-center"
              >
                View Guest Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Metrics */}
      <section className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-2">9.6/10</div>
              <div className="text-gray-700 font-medium">Guest Satisfaction Score</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-700 font-medium">Guest Retention Rate</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-2">&lt;2min</div>
              <div className="text-gray-700 font-medium">Average Response Time</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-700 font-medium">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Excellence Services */}
      <section className="py-20 bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-rose-100/80">
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
                      <svg className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                  color: "from-rose-400 to-rose-500"
                },
                {
                  phase: "Arrival",
                  title: "Seamless Check-in",
                  description: "Express check-in with personalized welcome and room customization",
                  color: "from-rose-500 to-rose-600"
                },
                {
                  phase: "Stay",
                  title: "Exceptional Service",
                  description: "Proactive service delivery and real-time guest satisfaction monitoring",
                  color: "from-rose-600 to-rose-700"
                },
                {
                  phase: "Departure",
                  title: "Memorable Farewell",
                  description: "Efficient checkout with personalized thank you and future booking incentives",
                  color: "from-rose-700 to-rose-800"
                },
                {
                  phase: "Post-Stay",
                  title: "Lasting Relationships",
                  description: "Follow-up communications and loyalty program engagement",
                  color: "from-rose-800 to-rose-900"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-rose-600 font-medium mb-3">{phase.phase}</p>
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
                <div className="text-3xl font-bold text-rose-600 mb-2">{story.improvement}</div>
                <p className="text-rose-600 font-medium mb-4">{story.metric}</p>
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
      <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Guest Experience
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Transform your guest relationships with our proven customer excellence strategies and technologies.
          </p>
          <a
            href="/contact"
            className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Guest Experience Transformation
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
