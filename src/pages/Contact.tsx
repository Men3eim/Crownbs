import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
import Contact from "../components/Contact";
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, floatingVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

const InteractiveMap = React.lazy(() => import('../components/InteractiveMap'));

export default function ContactPage() {
  usePageMeta(
    'Contact Us | Crown Business Solutions',
    'Get in touch with our global team of experts for a personalized consultation on how we can transform your business.'
  );

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <motion.div
            className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
            variants={itemVariants}
          >
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">Contact Us</span>
          </motion.div>

          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
            <AnimatedText
              text="Get in Touch"
              highlightWords={["Touch"]}
              delay={0.5}
            />
          </div>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            Ready to transform your business?
            Connect with our global team of experts for a personalized consultation on our industry-adaptable solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-3 px-4">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Global Support</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">&lt;1hr</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Response Time</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Languages Supported</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Location</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visit us at our head office for a personal consultation.
            </p>
          </div>
          <Suspense fallback={<div className="h-[400px] w-full bg-gray-800 rounded-2xl flex items-center justify-center text-white">Loading Map...</div>}>
            <InteractiveMap />
          </Suspense>
        </div>
      </section>

    </PageWrapper>
  );
}
