import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Partnerships() {
  const partnerships = useQuery(api.partnerships.list, { featured: true });

  // Partner logos for the carousel
  const partnerLogos = [
    { src: "/logos-partnerships/HFS.png", alt: "HFS" },
    { src: "/logos-partnerships/Irwin.png", alt: "Irwin" },
    { src: "/logos-partnerships/KMA.png", alt: "KMA" },
    { src: "/logos-partnerships/Stayz.png", alt: "Stayz" }
  ];



  // Loading state: only show fallback if query is undefined (not loading or error)
  const isLoading = partnerships === undefined;

  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Global <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our success is built on strong relationships with industry leaders worldwide,
            creating unparalleled value for our clients through collaborative excellence.
          </p>
        </div>

        {/* Partnership Categories */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🏨</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Hotel Groups</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Global hotel chains and independent properties</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🌐</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">OTA Distribution Channels</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Listing channels we use to advertise properties</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🏢</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Property Firms</h3>
              <p className="text-gray-600 text-xs sm:text-sm">International real estate and property management</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Global hospitality technology providers</p>
            </div>
          </div>
        )}

        {/* Featured Partners */}
        <div className="w-full px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Global Partners</h3>
          {/* Animated Logo Scroll */}
          <div className="relative h-24 sm:h-32 md:h-36 overflow-hidden bg-white mb-6 sm:mb-8 w-full rounded-2xl">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll space-x-8 sm:space-x-12 md:space-x-16" style={{ minWidth: '100vw' }}>
                {/* First set of logos */}
                {partnerLogos.map((logo, idx) => (
                  <div
                    key={logo.alt + idx}
                    className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      loading="lazy"
                      decoding="async"
                      width={144}
                      height={80}
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-24 sm:max-w-28 md:max-w-36 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {partnerLogos.map((logo, idx) => (
                  <div
                    key={logo.alt + "repeat" + idx}
                    className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      loading="lazy"
                      decoding="async"
                      width={144}
                      height={80}
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-24 sm:max-w-28 md:max-w-36 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* End Animated Logo Scroll */}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Global Distribution</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Access to premium channels and exclusive booking platforms worldwide</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Revenue Optimization</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Advanced pricing strategies through international partner insights</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Market Intelligence</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Real-time global market data and competitive insights</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8 border border-amber-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Join Our Global Partner Network
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Become part of an exclusive network of industry leaders and unlock new opportunities
              for growth and collaboration worldwide.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Explore Partnership
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
