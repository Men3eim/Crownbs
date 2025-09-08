import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import BusinessSolutions from "../components/BusinessSolutions";
import Portfolio from "../components/Portfolio";
import OTAMarquee from "../components/OTAMarquee";
import Testimonials from "../components/Testimonials";
import AnimatedText from "../components/AnimatedText";
import PageWrapper from "../components/PageWrapper";
import { usePageMeta } from '../hooks/usePageMeta';


export default function Home() {
  usePageMeta(
    'Family‑Built. Professionally Orchestrated. | Crown Business Solutions',
    'Born answering guest calls, now a 120+ team orchestrating a growing UK hotel portfolio from Alexandria, Egypt—modern luxury with operational precision.'
  );

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />

        {/* Family-built story + 2025 footprint */}
        <section className="py-12 bg-gradient-to-br from-white via-amber-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-amber-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">A Family‑Built Operation</h2>
                <p className="text-gray-700 text-sm sm:text-base">From two founders answering every guest call to a fully orchestrated operations engine—running a growing UK hotel portfolio from Alexandria. We align Accounting, Customer Service, Revenue, Marketing, Data, Maintenance, and Software to one standard: guest delight through discipline.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: '100+', v: 'Hotels in UK' },
                  { k: '120+', v: 'Team in Alexandria' },
                  { k: '24/7', v: 'Customer Operations' },
                  { k: 'End‑to‑End', v: 'Accounting • CS • Revenue' },
                ].map((s) => (
                  <div key={s.v} className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                    <div className="text-2xl font-bold text-amber-700">{s.k}</div>
                    <div className="text-xs font-medium text-gray-600 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <BusinessSolutions />
        <Portfolio />
        <OTAMarquee />
        <Testimonials />

        {/* Quick Contact CTA */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 overflow-hidden">
          {/* Simplified Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 border border-white/20 rotate-45" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              <AnimatedText
                text="Ready to Transform Your Business Operations?"
                highlightWords={["Transform", "Business", "Operations"]}
                highlightClassName="text-amber-100"
                delay={0.2}
              />
            </div>

            <p className="text-lg sm:text-xl text-amber-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join businesses worldwide who trust Crown Business Solutions
              to maximize their revenue and operational efficiency with our hospitality-proven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="group relative bg-white text-amber-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10">Transform Your Business Today</span>
              </a>

              <a
                href="/portfolio"
                className="group relative border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg backdrop-blur-sm bg-white/10 shadow-lg overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">Discover Our Methods</span>
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
}
