import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function RevenueManagement() {
  const properties = useQuery(api.properties.list, { featured: true });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revenue <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Management</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Maximize your property's revenue potential with our advanced analytics, dynamic pricing strategies, 
              and comprehensive market intelligence solutions designed for the global hospitality industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Revenue Analysis
              </a>
              <a
                href="/portfolio"
                className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">35%</div>
              <div className="text-gray-600">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">92%</div>
              <div className="text-gray-600">Occupancy Rate Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-gray-50">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                  <span className="font-bold text-green-600">+28.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">£185</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Occupancy Rate</span>
                  <span className="font-bold text-blue-600">89.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">RevPAR Growth</span>
                  <span className="font-bold text-green-600">+32.1%</span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                <div className="text-2xl font-bold text-green-600 mb-4">{study.result}</div>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
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
    </div>
  );
}
