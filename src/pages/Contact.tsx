import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45 animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg animate-fade-in-up">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-amber-800 text-sm font-medium tracking-wide">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up-delay-1">
            Get in <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent animate-gradient-x">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up-delay-2">
            Ready to transform your property management experience?
            Connect with our global team of experts for a personalized consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-3">
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
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-amber-50/20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl animate-float-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-amber-200/50 mb-8 backdrop-blur-sm animate-fade-in-up">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Worldwide Presence</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 animate-fade-in-up-delay-1">Global Offices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "London",
                country: "United Kingdom",
                address: "25 Cavendish Square, London W1G 0PN",
                phone: "+44 20 7123 4567",
                email: "london@crownbs.com"
              },
              {
                city: "New York",
                country: "United States",
                address: "350 Fifth Avenue, New York, NY 10118",
                phone: "+1 212 555 0123",
                email: "newyork@crownbs.com"
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "1 Raffles Place, Singapore 048616",
                phone: "+65 6123 4567",
                email: "singapore@crownbs.com"
              },
              {
                city: "Dubai",
                country: "United Arab Emirates",
                address: "Dubai International Financial Centre",
                phone: "+971 4 123 4567",
                email: "dubai@crownbs.com"
              }
            ].map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-amber-600 font-medium mb-4">{office.country}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

    </div>
  );
}
