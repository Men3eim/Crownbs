import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import { containerVariants, itemVariants, floatingVariants, statsVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function About() {
  usePageMeta(
    'Our Story | Crown Business Solutions',
    'A family-built journey from two founders answering guest calls to a fully managed hospitality operation leading with modern luxury and operational excellence.'
  );
  const team = [
    {
      name: "Hassan Arif",
      position: "Chief Executive Officer",
      bio: "Co‑founder of CBS. Led the evolution from guest communications to fully managed hotel operations across the UK, powered from Alexandria, Egypt.",
      initials: "HA"
    },
    {
      name: "Sarah Chen",
      position: "Chief Operating Officer",
      bio: "Former VP of Operations at leading global hospitality company, specializing in business solutions and operational excellence.",
      initials: "SC"
    },
    {
      name: "David Rodriguez",
      position: "Head of Revenue Management",
      bio: "Revenue optimization expert with proven track record of increasing business performance across diverse international markets.",
      initials: "DR"
    },
    {
      name: "Emma Thompson",
      position: "Director of Partnerships",
      bio: "Strategic partnership specialist with extensive network across global hospitality and technology sectors.",
      initials: "ET"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every aspect of business solutions, delivering results that exceed expectations."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "Our international experience enables us to navigate diverse markets and cultural nuances effectively."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We leverage cutting-edge technology and innovative strategies to stay ahead of industry trends."
    }
  ];

  const milestones = [
    {
      year: "2017–2018",
      event: "The Beginning in the UK",
      description: "Two founders handle guest calls on Airbnb and OTAs, setting a standard of personal service and responsiveness."
    },
    {
      year: "2018",
      event: "Family-Powered Operations",
      description: "Family in Alexandria, Egypt joins to manage guest communications, reviews, and day-to-day decisions—creating a trusted, always-on operations core."
    },
    {
      year: "2019",
      event: "Operational Excellence",
      description: "From answering calls to running operations: tracking cleaners, closing feedback loops from reviews, and building playbooks that scale."
    },
    {
      year: "2020",
      event: "Resilience During COVID",
      description: "Paused growth, stayed united, and strategically acquired hotels in the UK while the market was down."
    },
    {
      year: "2021–2022",
      event: "Scaling the Portfolio",
      description: "Released and onboarded more hotels; expanded the operations team and shifted core functions to Egypt for 24/7 coverage."
    },
    {
      year: "2023–2025",
      event: "UK Portfolio Expansion",
      description: "Fully manage a growing UK hotel portfolio end‑to‑end from Alexandria with a 120+ in‑office team across Accounting, Customer Service, and Revenue Management."
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Luxury Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/15 to-amber-700/15 rounded-full blur-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1, duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2, duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-16 h-16 border border-amber-400/30 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
              variants={itemVariants}
            >
              <motion.div
                className="w-2 h-2 bg-amber-500 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">About Our Company</span>
            </motion.div>

            <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
              <AnimatedText
                text="A Family-Built Journey of Modern Luxury and Operational Mastery"
                highlightWords={["Modern Luxury", "Journey"]}
                delay={0.5}
              />
            </div>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              From two founders answering every guest call to a fully orchestrated operations engine—now 120+ strong—managing a growing UK hotel portfolio from Alexandria with modern luxury and operational precision.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
            variants={containerVariants}
          >
            {[
              { value: "2017", label: "Started in UK" },
              { value: "100+", label: "Hotels in Portfolio" },
              { value: "1M+", label: "Operational Tasks Resolved" },
              { value: "120+", label: "Team Members (Alexandria)" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={statsVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div
                  className="text-gray-600 text-sm uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story (Redesigned) */}
      <section className="py-24 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -top-20 -right-10 w-72 h-72 bg-gradient-to-br from-amber-300/12 to-amber-600/12 rounded-full blur-3xl" />
          <motion.div className="absolute -bottom-24 -left-16 w-80 h-80 bg-gradient-to-br from-amber-200/10 to-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Timeline */}
            <div className="lg:col-span-7">
              <div className="text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 mt-3">From two founders to a portfolio run with precision—crafted in the UK, orchestrated from Alexandria.</p>
              </div>
              <div className="relative">
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-amber-200 to-transparent" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative pl-12 sm:pl-16">
                      <div className="absolute left-0 sm:left-2 top-2 w-8 h-8 rounded-full bg-white border-2 border-amber-400 shadow flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-xl p-5 hover:shadow-md transition-shadow">
                        <div className="text-amber-600 font-semibold text-sm mb-1">{m.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{m.event}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-5 space-y-8">
              {/* By the Numbers */}
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
                <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">By the Numbers</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">2025</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { k: "100+", v: "Hotels in UK" },
                      { k: "120+", v: "Team in Alexandria" },
                      { k: "24/7", v: "Customer Operations" },
                      { k: "End‑to‑End", v: "Accounting • CS • Revenue" }
                    ].map((stat) => (
                      <div key={stat.v} className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                        <div className="text-2xl font-bold text-amber-700">{stat.k}</div>
                        <div className="text-xs font-medium text-gray-600 mt-1">{stat.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CEO Quote */}
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
                <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-6">
                  <div className="text-sm text-gray-500 mb-2">From the CEO</div>
                  <blockquote className="text-gray-900 text-lg leading-relaxed">
                    “Discipline builds delight. We scaled by doing the unglamorous work perfectly—so guests feel the glamour.”
                  </blockquote>
                  <div className="mt-3 text-sm text-amber-700 font-semibold">Hassan Arif, Chief Executive Officer</div>
                </div>
              </div>

              {/* Operating Model */}
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
                <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How We Operate</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>UK guest experience, Egypt command center</li>
                    <li className="flex items-start"><svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Playbooks from reviews to revenue</li>
                    <li className="flex items-start"><svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Accounting, Customer Service, and Revenue aligned daily</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 right-16 w-64 h-64 bg-gradient-to-br from-amber-300/10 to-amber-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/10 to-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
              <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 border border-amber-200">Growth by Craft</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We grow people through real operations. Everyone who joins CBS earns hands‑on, end‑to‑end experience—decision‑making, accountability, and ownership—so they can lead teams, run units, and one day build businesses of their own.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Practical learning through live hotel operations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ownership mindset—financial discipline, service standards, outcomes
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    A path from operator to leader, from teammate to builder
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-200/60 via-amber-400/40 to-amber-600/40">
              <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200/60 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 border border-amber-200">Story‑Led</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A world where a family‑built, Egypt‑orchestrated operation powers modern luxury across a growing UK portfolio—turning disciplined operations into guest delight, and teams into the next generation of leaders.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Luxury experienced in the UK, orchestrated from Alexandria
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Systems that scale quality, not just size
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    People who grow into founders, not just titles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our success worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Capabilities aligned to our story */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Marketing</h3>
              <p className="text-sm text-gray-700">Demand generation, brand standards, OTA merchandising, and campaign ROI tied to occupancy and ADR.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data & Analytics</h3>
              <p className="text-sm text-gray-700">Performance dashboards, pacing vs. target, cohort analysis, and decision support for pricing and ops.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-sm text-gray-700">Preventive schedules, response SLAs, vendor oversight, and quality checks linked to guest reviews.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Software Engineering</h3>
              <p className="text-sm text-gray-700">Internal tools, integrations, automations, and reliability—systems that scale quality, not just size.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI‑Enhanced Workflow</h3>
              <p className="text-sm text-gray-700">Routing, summarization, anomaly detection, and forecasting embedded across operations for speed and consistency.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Operations Enablement</h3>
              <p className="text-sm text-gray-700">Playbooks, training, and QA loops connecting reviews → actions → results—our family‑built standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Crown Business Solutions to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Footprint (replaces duplicate Journey) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Operating Footprint</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where excellence happens every day—functions aligned, standards enforced, outcomes measured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Service</h3>
              <p className="text-sm text-gray-700 mb-4">24/7 guest support, issue resolution, refunds and relocations, SLA‑driven response.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Omnichannel: OTAs, phone, email</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Post‑stay reviews loop</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Escalation playbooks</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accounting</h3>
              <p className="text-sm text-gray-700 mb-4">Spend discipline, vendor payments, reconciliations, and unit‑level P&L visibility.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Controls and approvals</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Forecast vs. actual tracking</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Cash flow stewardship</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue</h3>
              <p className="text-sm text-gray-700 mb-4">Pricing, distribution, targets and pacing—daily alignment with ops for outcomes.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />OTA strategy and parity</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Yield management</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2" />Weekly target reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Partner with us and experience the difference that hospitality-proven expertise and dedication can make.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Custom Business Solutions
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
