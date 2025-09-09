import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
import Contact from "../components/Contact";
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, floatingVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

const MultiLocationMap = React.lazy(() => import('../components/MultiLocationMap'));

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
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -180, -360],
              transition: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 180],
              transition: { delay: 2, duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
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

      {/* Location Details Cards */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-amber-100/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alexandria Office',
              city: 'Alexandria, Egypt',
              address: ['Kafr-Abdou Villa 75', 'Khalil AlMasry Street'],
              phone: '+20 3 123 4567',
              email: 'alexandria@crownbs.com',
              services: ['Property Management', 'Asset Optimization', 'Revenue Solutions'],
              timezone: 'EET (UTC+2)',
              established: '2018'
            }
          ].map((location) => (
            <div key={location.name} className="bg-white rounded-xl p-6 shadow-lg border border-amber-200/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900">{location.name}</h3>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                  Est. {location.established}
                </span>
              </div>
              <p className="text-amber-600 font-medium mb-3">{location.city}</p>
              <div className="space-y-2 mb-4">
                {location.address.map((line, index) => (
                  <p key={index} className="text-sm text-gray-600">{line}</p>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-3 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{location.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{location.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{location.timezone}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-xs font-medium text-gray-500 mb-2">Services Offered:</p>
                <div className="flex flex-wrap gap-1">
                  {location.services.map((service, index) => (
                    <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-md border border-amber-200">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/3 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50/10 to-amber-100/10 border border-amber-400/20 backdrop-blur-sm mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-amber-300 text-sm font-medium tracking-wide">Our Alexandria Location</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Alexandria</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visit our headquarters in Alexandria, Egypt.
            </p>
          </motion.div>

          <Suspense fallback={
            <div className="h-[400px] w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-amber-500/20">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
                <span>Loading Interactive Map...</span>
              </div>
            </div>
          }>
            <MultiLocationMap />
          </Suspense>
        </div>
      </section>

    </PageWrapper>
  );
}
