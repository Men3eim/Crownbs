import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
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
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            Ready to transform your business?
            Connect with our global team of experts for a personalized consultation on our industry-adaptable solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form removed per request */}

      {/* Contact Details - Modern Panel */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-amber-100/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
              <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Alexandria Headquarters</h3>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 border border-amber-200">Since 2018</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z"/><circle cx="12" cy="11" r="2.5" strokeWidth="1.5"/></svg>
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-500">Address</p>
                      <p className="text-gray-800 font-medium">Kafr-Abdou Villa 75</p>
                      <p className="text-gray-800">Khalil AlMasry Street, Alexandria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6l8 6 8-6"/><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5"/></svg>
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-500">Email</p>
                      <a href="mailto:info@crownbs.com" className="text-amber-700 hover:text-amber-800 font-semibold">info@crownbs.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-500">Phone</p>
                      <a href="tel:+2031234567" className="text-gray-800 font-medium">+20 3 123 4567</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-500">Hours</p>
                      <p className="text-gray-800">24/7 Customer Operations</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a href="https://maps.app.goo.gl/NyS1QVxEd9yAB4aV8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">Get Directions</a>
                  <a href="mailto:info@crownbs.com" className="inline-flex items-center px-4 py-2 rounded-lg border border-amber-300 text-amber-700 font-semibold hover:bg-amber-50 transition-colors">Email Us</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8 bg-white/60 backdrop-blur-md border border-amber-200/60">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Why reach out</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Operations assessment and tailored roadmap</li>
                <li>Portfolio onboarding and due‑diligence support</li>
                <li>Partnerships and distribution opportunities</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">Prefer a call back? Submit the form and choose “Call Back” in the message—we will get in touch within 1 hour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our family-built team and be part of our journey in transforming hospitality operations with modern luxury.
            </p>
          </motion.div>

          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Joining Our Team?</h3>
            <p className="text-gray-600 mb-8">Visit our careers page to explore current opportunities.</p>
            <a
              href="/careers"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Career Opportunities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
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

