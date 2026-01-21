import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { containerVariants, itemVariants, cardVariants, floatingVariants } from '../utils/animations';

export default function Testimonials() {
  const testimonials = useQuery(api.testimonials.list, { featured: true });

  // Example testimonials for demonstration - Global focus
  const exampleTestimonials = [
    {
      clientName: "Sarah Mitchell",
      company: "Heritage Hotels International",
      position: "Managing Director",
      content: "Crown Business Solutions transformed our revenue management strategy across 15 properties in 8 countries. Their expertise in global OTA optimization increased our bookings by 40% within six months.",
      rating: 5
    },
    {
      clientName: "James Thompson",
      company: "Metropolitan Properties Global",
      position: "CEO",
      content: "The level of professionalism and attention to detail CBS brings to international property management is unmatched. Our occupancy rates have never been higher across all markets.",
      rating: 5
    },
    {
      clientName: "Emma Richardson",
      company: "Luxury Stays Worldwide",
      position: "Operations Director",
      content: "CBS's 24/7 global customer service and operational excellence have elevated our guest satisfaction scores to industry-leading levels across three continents.",
      rating: 5
    },
    {
      clientName: "Chen Wei",
      company: "Asia Pacific Resorts",
      position: "Regional Manager",
      content: "Working with CBS has been transformative for our Asian market expansion. Their understanding of regional nuances and global best practices is exceptional.",
      rating: 5
    },
    {
      clientName: "Maria Santos",
      company: "European Boutique Collection",
      position: "Portfolio Director",
      content: "CBS helped us standardize operations across 12 European cities while maintaining each property's unique character. Revenue increased 35% in the first year.",
      rating: 5
    },
    {
      clientName: "Ahmed Al-Rashid",
      company: "Middle East Hospitality Group",
      position: "Chairman",
      content: "The strategic business solutions CBS provided opened new market opportunities we never thought possible. Our international business growth doubled within 18 months.",
      rating: 5
    }
  ];

  const testimonialData = testimonials || exampleTestimonials;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Luxury Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-12 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-24 right-20 w-36 h-36 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-18 h-18 border border-amber-400/20 rotate-45 animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Client Testimonials</span>
          </motion.div>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-2"
            variants={itemVariants}
          >
            <AnimatedText
              text="Global Success Stories"
              highlightWords={["Success"]}
              highlightClassName="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
              delay={0.3}
            />
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover how Crown Business Solutions has helped property owners and hotel groups worldwide
            achieve exceptional results and sustainable growth across international markets.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialData.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 premium-card"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.clientName}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-amber-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Success Metrics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proven Results Across Global Markets
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">96%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Meeting Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">35%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Avg Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">96%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24h</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Response Time</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Global Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you achieve exceptional results and transform your property management experience worldwide.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
