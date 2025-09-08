import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function SoftwareEngineering() {
  return (
    <PageWrapper className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedText text="Software Engineering" highlightWords={["Engineering"]} delay={0.3} />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Internal tools, integrations, automations, and reliability—systems that scale quality, not just size.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Integrations', desc: 'OTAs, PMS, CRM, payments, and internal data pipelines.' },
              { title: 'Automation', desc: 'Cleaner tracking, ticket routing, anomaly alerts, and reporting.' },
              { title: 'Internal Tools', desc: 'Dashboards, checklists, and playbooks for daily ops.' },
              { title: 'Reliability', desc: 'Monitoring, error budgets, and on-call runbooks.' },
              { title: 'Security', desc: 'Least privilege access, audit trails, and data retention.' },
              { title: 'Developer Experience', desc: 'CI/CD, code quality, and shared component libraries.' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDLC & Tooling */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SDLC</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Discovery → Design → Build → Review → Release</li>
                <li>Weekly cadence; small, reversible changes</li>
                <li>Observability tied to KPIs (SLAs, latency, error rates)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tooling</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Convex for backend + storage; Vite/React for frontend</li>
                <li>Automation via schedulers and webhooks</li>
                <li>Testing & CI for quality gates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI in Engineering */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI in Engineering</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Auto-summarization of incidents and postmortems</li>
              <li>Anomaly detection for revenue and ops signals</li>
              <li>Assistive code generation with review gates</li>
              <li>Content and image QA against brand standards</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}


