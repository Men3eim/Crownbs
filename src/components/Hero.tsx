import LuxuryScrollIndicator from './LuxuryScrollIndicator';

export default function Hero() {
  return (
    <section className="relative pb-16 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden min-h-screen flex items-center">
      {/* Luxury Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golden Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-fast"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-transparent rotate-12 animate-pulse-luxury"></div>

        {/* Luxury Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.4'%3E%3Cpath d='M50 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M25 25m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3Cpath d='M75 75m-1 0a1 1 0 1 1 2 0a1 1 0 1 1-2 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg animate-fade-in-up">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-amber-800 text-sm font-medium tracking-wide">Global Property & Hotel Management Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up-delay-1">
            <span className="inline-block animate-slide-in-left">Elevating</span>
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent animate-gradient-x inline-block animate-slide-in-up"> Hospitality </span>
            <span className="inline-block animate-slide-in-right">Worldwide</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Crown Business Solutions delivers unparalleled revenue management, operational excellence,
            and strategic partnerships across global property and hotel portfolios.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto animate-fade-in-up-delay-3">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Properties Managed</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">$150M+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Revenue Generated</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Global Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-4">
            <a
              href="/contact"
              className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Partner With Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="/services"
              className="group relative border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl font-semibold text-lg hover:border-amber-500 hover:text-amber-600 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <LuxuryScrollIndicator />
    </section>
  );
}
