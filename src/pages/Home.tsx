import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import OTAMarquee from "../components/OTAMarquee";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <OTAMarquee />
      <Testimonials />
      
      {/* Quick Contact CTA */}
      <section className="relative py-20 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45 animate-spin-slow"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Join property owners worldwide who trust Crown Business Solutions
            to maximize their revenue and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
            <a
              href="/contact"
              className="group relative bg-white text-amber-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-amber-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="/portfolio"
              className="group relative border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
