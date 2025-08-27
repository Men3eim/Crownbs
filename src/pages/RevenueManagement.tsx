import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, floatingVariants } from '../utils/animations';

export default function RevenueManagement() {
  const properties = useQuery(api.properties.list, { featured: true });

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-yellow-50/30">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.8'%3E%3Cpath d='M60 60L0 0h120v120L60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-amber-100/80 overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45 animate-spin-slow"></div>
        </div>

        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm animate-fade-in-up">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-amber-800 text-xs sm:text-sm font-semibold tracking-wide uppercase">Premium Revenue Solutions</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
              <AnimatedText
                text="Revenue Management"
                highlightWords={["Management"]}
                delay={0.5}
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light animate-fade-in-up-delay-2 px-4">
              Maximize your property's revenue potential with our advanced analytics, dynamic pricing strategies,
              and comprehensive market intelligence solutions designed for the global hospitality industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:from-amber-700 hover:via-yellow-600 hover:to-amber-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Get Revenue Analysis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="/portfolio"
                className="group border-2 border-amber-600/60 text-amber-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-700 hover:text-white hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/50 w-full sm:w-auto text-center"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent mb-2">35%</div>
              <div className="text-gray-700 font-medium">Average Revenue Increase</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent mb-2">92%</div>
              <div className="text-gray-700 font-medium">Occupancy Rate Optimization</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Real-time Monitoring</div>
            </div>
            <div className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-700 font-medium">Properties Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-amber-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Revenue Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dynamic Pricing Strategy",
                description: "AI-powered pricing algorithms that adjust rates in real-time based on demand, competition, and market conditions.",
                features: ["Real-time market analysis", "Competitor rate monitoring", "Demand forecasting", "Seasonal optimization"]
              },
              {
                title: "Revenue Analytics",
                description: "Comprehensive reporting and analytics to track performance across all channels and identify optimization opportunities.",
                features: ["Performance dashboards", "Revenue forecasting", "Channel analysis", "ROI tracking"]
              },
              {
                title: "Channel Management",
                description: "Optimize distribution across all OTA platforms and direct booking channels for maximum revenue capture.",
                features: ["Multi-channel distribution", "Rate parity management", "Inventory optimization", "Commission analysis"]
              },
              {
                title: "Market Intelligence",
                description: "Deep market insights and competitive analysis to inform strategic pricing and positioning decisions.",
                features: ["Competitive benchmarking", "Market trend analysis", "Demand patterns", "Pricing recommendations"]
              },
              {
                title: "Yield Optimization",
                description: "Advanced yield management techniques to maximize revenue per available room across all property types.",
                features: ["Occupancy optimization", "Length of stay controls", "Upselling strategies", "Package optimization"]
              },
              {
                title: "Financial Reporting",
                description: "Detailed financial analysis and reporting to track revenue performance and identify growth opportunities.",
                features: ["P&L analysis", "Budget forecasting", "Variance reporting", "KPI tracking"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Advanced Revenue Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                AI-Powered Revenue Engine
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Machine Learning Algorithms</h4>
                    <p className="text-gray-600">Advanced ML models analyze historical data, market trends, and booking patterns to predict optimal pricing strategies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real-time Optimization</h4>
                    <p className="text-gray-600">Instant rate adjustments based on live market conditions, competitor pricing, and demand fluctuations.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
                    <p className="text-gray-600">Forecast future demand and revenue opportunities with 95% accuracy using advanced statistical models.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Revenue Performance Dashboard</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Current Month Revenue</span>
                  <span className="font-bold text-amber-600">+28.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">£185</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Occupancy Rate</span>
                  <span className="font-bold text-amber-600">89.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">RevPAR Growth</span>
                  <span className="font-bold text-amber-600">+32.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Revenue Optimization Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "Comprehensive analysis of your market position, competitor landscape, and demand patterns."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Custom revenue strategy tailored to your property type, location, and business objectives."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy advanced pricing algorithms and channel optimization across all distribution platforms."
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Ongoing monitoring, analysis, and refinement to ensure sustained revenue growth."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Revenue Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                property: "Luxury Hotel London",
                type: "5-Star Hotel",
                result: "+45% Revenue Growth",
                description: "Implemented dynamic pricing strategy resulting in significant revenue increase while maintaining high occupancy rates.",
                metrics: ["RevPAR: +42%", "ADR: +28%", "Occupancy: 91%"]
              },
              {
                property: "Boutique Resort Dubai",
                type: "Resort & Spa",
                result: "+38% RevPAR Increase",
                description: "Optimized channel mix and pricing strategy for seasonal demand patterns in the Middle East market.",
                metrics: ["Revenue: +38%", "Direct Bookings: +55%", "Guest Satisfaction: 9.2/10"]
              },
              {
                property: "Business Hotel Singapore",
                type: "Business Hotel",
                result: "+52% Profit Margin",
                description: "Restructured pricing model and optimized corporate rates for consistent business travel demand.",
                metrics: ["Profit: +52%", "Corporate Bookings: +67%", "Repeat Guests: +43%"]
              }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{study.property}</h3>
                  <p className="text-amber-600 font-medium">{study.type}</p>
                </div>
                <div className="text-2xl font-bold text-amber-600 mb-4">{study.result}</div>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Maximize Your Revenue?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free revenue analysis and discover how much more your property could be earning.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Free Revenue Analysis
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
