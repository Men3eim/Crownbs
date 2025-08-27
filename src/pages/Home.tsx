import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import OTAMarquee from "../components/OTAMarquee";
import Testimonials from "../components/Testimonials";
import AnimatedText from "../components/AnimatedText";
import PageWrapper from "../components/PageWrapper";
import { containerVariants, itemVariants, floatingVariants } from "../utils/animations";

export default function Home() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
        <Services />
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
                text="Ready to Transform Your Property Management?"
                highlightWords={["Transform", "Property", "Management"]}
                highlightClassName="text-amber-100"
                delay={0.2}
              />
            </div>

            <p className="text-lg sm:text-xl text-amber-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join property owners worldwide who trust Crown Business Solutions
              to maximize their revenue and operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="group relative bg-white text-amber-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10">Get Free Consultation</span>
              </a>

              <a
                href="/portfolio"
                className="group relative border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg backdrop-blur-sm bg-white/10 shadow-lg overflow-hidden w-full sm:w-auto text-center hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">View Our Work</span>
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
}
