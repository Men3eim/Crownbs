import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function Marketing() {
  return (
    <PageWrapper className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedText text="Marketing" highlightWords={["Marketing"]} delay={0.3} />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Raise conversion and direct share with OTA merchandising, brand standards, and performance spend—
            paced to occupancy and ADR targets, with AI assist and human QA.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'OTA Merchandising',
                desc: 'Listing optimization, content standards, photo sequencing, amenity accuracy, and parity checks.'
              },
              {
                title: 'Performance Marketing',
                desc: 'Paid and organic across OTAs and direct, with pacing tied to occupancy and ADR targets.'
              },
              {
                title: 'Brand & Content',
                desc: 'Tone of voice, collateral, and guest communications consistent with modern luxury.'
              },
              {
                title: 'Partnerships',
                desc: 'Distribution, affiliates, and local partners to drive shoulder periods and events.'
              },
              {
                title: 'CRM & Retention',
                desc: 'Lifecycle messaging, review loops, and return-stay incentives aligned to seasonality.'
              },
              {
                title: 'Analytics Alignment',
                desc: 'Workflows with Revenue and Data teams to translate insights into action.'
              }
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels & KPIs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Channels</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>OTAs: Booking, Airbnb, Expedia, Agoda</li>
                <li>Meta: Google Hotel Ads (when applicable)</li>
                <li>Direct: SEO + performance campaigns</li>
                <li>Partnerships: events, corporate, and local demand</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPIs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Occupancy, ADR, RevPAR contribution</li>
                <li>Conversion rate and CPC/CPA on paid</li>
                <li>Listing quality and review sentiment</li>
                <li>Return-stay and direct booking share</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Workflow */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI in Marketing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Creative variants and copy suggestions with human QA</li>
              <li>Trend detection on reviews and demand signals</li>
              <li>Budget pacing alerts tied to occupancy forecasts</li>
              <li>Image curation guidelines checked against brand standards</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}


