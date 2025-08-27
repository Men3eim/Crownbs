import { motion } from 'framer-motion';
import LuxuryScrollIndicator from './LuxuryScrollIndicator';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 180, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pb-16 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden min-h-screen flex items-center">
      {/* Luxury Floating Elements with Framer Motion */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golden Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1, duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2, duration: 3, repeat: Infinity }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-transparent rotate-12"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Luxury Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.4'%3E%3Cpath d='M50 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M25 25m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3Cpath d='M75 75m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg"
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-sm font-medium tracking-wide">Global Property & Hotel Management Excellence</span>
          </motion.div>

          {/* Main Heading with Word-based Split Text Effect */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight px-2">
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2">
              {["Elevating", "Hospitality", "Worldwide"].map((word, index) => (
                <motion.span
                  key={word}
                  className={`inline-block ${
                    word === "Hospitality"
                      ? "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"
                      : ""
                  }`}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Crown Business Solutions delivers unparalleled revenue management, operational excellence,
            and strategic partnerships across global property and hotel portfolios.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 max-w-4xl mx-auto px-4"
            variants={containerVariants}
          >
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "$150M+", label: "Revenue Generated" },
              { value: "50+", label: "Countries Served" },
              { value: "24/7", label: "Global Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={statsVariants}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div
                  className="text-gray-600 text-sm uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            variants={itemVariants}
          >
            <motion.a
              href="/contact"
              className="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto text-center"
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="relative z-10">Partner With Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20 transform -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>

            <motion.a
              href="/services"
              className="relative border-2 border-gray-300 text-gray-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg backdrop-blur-sm bg-white/50 shadow-lg overflow-hidden w-full sm:w-auto text-center"
              whileHover={{
                scale: 1.05,
                y: -4,
                borderColor: "rgb(245 158 11)",
                color: "rgb(217 119 6)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="relative z-10">Explore Services</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Luxury Scroll Indicator */}
      <LuxuryScrollIndicator />
    </section>
  );
}
