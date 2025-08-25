import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function OTAPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const otasFromDB = useQuery(api.otas.list, { featured: true });

  // Professional fallback OTAs - exactly 5
  const fallbackOTAs = [
    {
      name: "Booking.com",
      logoUrl: "/logos-ota/booking.svg",
      website: "https://booking.com",
      description: "World's leading accommodation booking platform with global reach"
    },
    {
      name: "Expedia",
      logoUrl: "/logos-ota/expedia.svg",
      website: "https://expedia.com",
      description: "Premier travel technology company and booking platform"
    },
    {
      name: "Agoda",
      logoUrl: "/logos-ota/agoda.svg",
      website: "https://agoda.com",
      description: "Asia-Pacific's leading online travel agency and booking platform"
    },
    {
      name: "Hotels.com",
      logoUrl: "/logos-ota/hotels.svg",
      website: "https://hotels.com",
      description: "Trusted hotel booking platform with worldwide coverage"
    },
    {
      name: "Airbnb",
      logoUrl: "/logos-ota/airbnb.svg",
      website: "https://airbnb.com",
      description: "Global vacation rental and unique stays marketplace"
    }
  ];

  const otas = otasFromDB && otasFromDB.length > 0 ? otasFromDB : fallbackOTAs;

  // Auto-rotate every 8 seconds (slow and professional)
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % otas.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [otas.length, isAutoPlaying, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 15 seconds
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % otas.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + otas.length) % otas.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">OTA Channels</span> we list on
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We advertise and manage listings for client properties across major online travel agency (OTA) platforms
            to maximize visibility and bookings. These OTAs are independent platforms we list on — not our partners.
          </p>
        </div>

        {/* Professional Carousel */}
        <div 
          className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16 py-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="relative h-80 md:h-96">
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {otas.map((ota, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center p-8 md:p-16"
                >
                  <div className="text-center max-w-2xl mx-auto">
                    {/* Logo Container */}
                    <div className="mb-8">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center mx-auto shadow-lg border border-gray-200">
                        <img
                          src={ota.logoUrl || undefined}
                          alt={`${ota.name} logo`}
                          className="max-h-20 md:max-h-24 max-w-full object-contain transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'text-3xl font-bold text-gray-700';
                            fallback.textContent = ota.name;
                            target.parentNode?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {ota.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {ota.description || `We list select properties on ${ota.name} to enhance distribution and revenue performance.`}
                    </p>
                    
                    {/* Partnership Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">24/7</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Integration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">Real-time</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Sync</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">Global</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Reach</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-1000 ease-linear"
              style={{ width: `${((currentIndex + 1) / otas.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mb-16 space-x-3">
          {otas.map((ota, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-500 ${
                index === currentIndex ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-gray-700 shadow-lg shadow-gray-500/50'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`} />
              
              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                  {ota.name}
                </div>
                <div className="w-2 h-2 bg-gray-900 transform rotate-45 mx-auto -mt-1"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Floating Logos Animation */}
        <div className="relative h-24 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-scroll space-x-12">
              {[...otas, ...otas, ...otas].map((ota, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/50 flex items-center justify-center"
                >
                  <img
                    src={ota.logoUrl || undefined}
                    alt={`${ota.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width={80}
                    height={32}
                    className="max-h-8 max-w-20 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-xs font-bold text-gray-700';
                      fallback.textContent = ota.name;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mb-16">Logos shown are trademarks of their respective owners. We list properties on these independent OTA platforms and do not claim any partnership or endorsement.</p>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Distribution</h3>
            <p className="text-gray-600">Seamless integration with premium booking platforms worldwide, ensuring maximum property exposure across all major markets.</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Optimization</h3>
            <p className="text-gray-600">Advanced dynamic pricing strategies and real-time rate optimization across all connected channels to maximize your revenue potential.</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Unified Management</h3>
            <p className="text-gray-600">Centralized dashboard for managing inventory, rates, and availability across all OTA channels with real-time synchronization.</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results Across All Channels
            </h3>
            <p className="text-amber-100 text-lg max-w-2xl mx-auto">
              Our strategic OTA partnerships deliver measurable results for property owners worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150%</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Average Booking Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Channel Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;5min</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Rate Update Speed</div>
            </div>
          </div>
        </div>

        {/* All Partners Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Partner Network
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {otas.map((ota, index) => (
              <div
                key={index}
                className={`group text-center cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className={`rounded-2xl p-4 h-20 flex items-center justify-center mb-3 transition-all duration-300 border ${
                  index === currentIndex 
                    ? 'bg-amber-50 border-amber-200 shadow-lg' 
                    : 'bg-gray-50 border-gray-100 group-hover:bg-amber-50 group-hover:border-amber-200'
                }`}>
                  <img
                    src={ota.logoUrl || undefined}
                    alt={`${ota.name} logo`}
                    className={`max-h-10 max-w-full object-contain transition-all duration-300 ${
                      index === currentIndex ? '' : 'filter grayscale group-hover:grayscale-0'
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-sm font-bold text-amber-600';
                      fallback.textContent = ota.name;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
                <h4 className={`font-semibold text-xs transition-colors ${
                  index === currentIndex 
                    ? 'text-amber-600' 
                    : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  {ota.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Maximize Your OTA Performance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our experts optimize your presence across all major booking platforms and unlock your property's full revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get OTA Strategy Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/partnerships"
                className="inline-flex items-center border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200"
              >
                View All Partnerships
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
