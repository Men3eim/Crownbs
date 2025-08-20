import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to transform your property management experience? 
            Connect with our global team of experts for a personalized consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">&lt;1hr</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Global Offices</h2>
          
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
