import { motion } from 'framer-motion';
import LuxuryScrollIndicator from './LuxuryScrollIndicator';
import AnimatedText from './AnimatedText';
import { containerVariants, itemVariants, floatingVariants, wordVariants, statsVariants, buttonVariants } from '../utils/animations';

export default function Hero() {
  return (
    <section className="relative pb-16 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden min-h-screen flex items-center">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Golden Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl" />

        {/* Static Geometric Shapes */}
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-transparent rotate-12" />

        {/* Luxury Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.4'%3E%3Cpath d='M50 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M25 25m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3Cpath d='M75 75m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
            <span className="text-amber-800 text-sm font-medium tracking-wide">Global Property & Hotel Management Excellence</span>
          </div>

          {/* Main Heading */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-2">
            <AnimatedText
              text="Elevating Hospitality Worldwide"
              highlightWords={["Hospitality"]}
              highlightClassName="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"
              delay={0.3}
            />
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Crown Business Solutions delivers unparalleled revenue management, operational excellence,
            and strategic partnerships across global property and hotel portfolios.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 max-w-4xl mx-auto px-4">
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "$150M+", label: "Revenue Generated" },
              { value: "50+", label: "Countries Served" },
              { value: "24/7", label: "Global Support" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a
              href="/contact"
              className="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <span className="relative z-10">Partner With Us</span>
            </a>

            <a
              href="/services"
              className="relative border-2 border-gray-300 text-gray-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg backdrop-blur-sm bg-white/50 shadow-lg overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600 transition-all duration-300"
            >
              <span className="relative z-10">Explore Services</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Luxury Scroll Indicator */}
      <LuxuryScrollIndicator />
    </section>
  );
}
