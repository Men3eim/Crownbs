import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { usePageMeta } from '../hooks/usePageMeta';

export default function SoftwareEngineering() {
  usePageMeta(
    'Technology | Crown Business Solutions',
    'Technology that improves hospitality operations: integrations, automation, data, reliability, and security that protect the guest experience and drive performance.'
  );

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
            <AnimatedText text="Technology That Improves the Business" highlightWords={["Technology", "Business"]} delay={0.3} />
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We build and run the systems behind distribution, revenue, guest service, finance, and maintenance—
            turning SOPs into reliable workflows, connecting tools into one ecosystem, and delivering clear operational visibility.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology That Makes Operations Run Better
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Software is the delivery mechanism—but our focus is business outcomes: fewer manual touches, faster resolution,
              cleaner data, better channel performance, and a consistent guest experience across the portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Turn SOPs into automated workflows: ticketing, approvals, escalations, QA sign‑offs, and follow-ups—so teams move faster with less friction.',
                icon: '🧠'
              },
              {
                title: 'Systems Integration',
                description: 'Connect PMS, channel manager, OTAs, payments, CRM, and internal tools—so data stays consistent and actions happen in the right system, automatically.',
                icon: '⚡'
              },
              {
                title: 'Data & Visibility',
                description: 'A single source of truth for occupancy, revenue, service performance, and compliance—delivered through dashboards and alerts people actually use.',
                icon: '💎'
              },
              {
                title: 'Reliability & Monitoring',
                description: 'Uptime, observability, and incident response: monitoring, alerting, runbooks, and change control that keep critical workflows running 24/7.',
                icon: '📊'
              },
              {
                title: 'Security & Compliance',
                description: 'Protect guest and payment data with secure design, least-privilege access, audit trails, and compliance controls aligned to hospitality requirements.',
                icon: '🔗'
              },
              {
                title: 'Continuous Improvement',
                description: 'Iterate what matters: measure outcomes, remove bottlenecks, and ship improvements that reduce costs, protect reviews, and support growth.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Apply Technology in the Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical, operations-first technology—built to reduce manual work, improve accuracy, and keep teams aligned across departments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔗</span>
                  Integrations & APIs
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Connect PMS/channel manager/OTAs so rates, availability, and content stay consistent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Automate handoffs between departments (Revenue → CS → Ops → Finance)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Reduce errors with validation, retries, and audit trails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Standardize integrations so new properties onboard faster</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚙️</span>
                  Automation & Orchestration
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Workflow templates aligned to SOPs (triage, escalation, QA, sign‑off)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Queue-based processing for reliability under load</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Automated reminders and follow-ups to reduce leakage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Role-based approvals and documentation for compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Data, Reporting & Controls
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Dashboards for occupancy, revenue, service KPIs, and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Alerts for exceptions: parity issues, SLA breaches, and repeat faults</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Daily/weekly controls packs for management review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Clean data pipelines for consistent decision-making</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  Reliability & Security
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Monitoring, alerting, and runbooks for critical systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Secure access control and audit trails for sensitive actions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Compliance controls aligned to GDPR and PCI requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▶</span>
                    <span>Change management to reduce incidents and regressions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Measurable Operational Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Technology is only valuable when it improves outcomes—speed, accuracy, compliance, and guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '99.9%', label: 'System Uptime', description: 'Monitoring, alerting, and resilient workflows' },
              { metric: '2x', label: 'Faster Resolution', description: 'Automated triage, escalation, and visibility' },
              { metric: '30%', label: 'Fewer Manual Touches', description: 'Integrations and standardized automation' },
              { metric: '24/7', label: 'Operational Coverage', description: 'Always-on workflows for critical operations' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">
                  {stat.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-400 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Tech-Enabled Operations?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            See how integrations, automation, and clear reporting can reduce friction, protect the guest experience,
            and help the business scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
              Explore Our Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}


