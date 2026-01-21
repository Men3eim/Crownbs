import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CountUpNumber from '../components/CountUpNumber';
import { containerVariants, itemVariants, floatingVariants, statsVariants } from '../utils/animations';
import { usePageMeta } from '../hooks/usePageMeta';

export default function About() {
  usePageMeta(
    'Our Story | Crown Business Solutions',
    'From family startup to major hospitality enterprise: A £50M+ portfolio, 120+ UK hotels, and 120+ person team delivering enterprise-level excellence while maintaining family-built values.'
  );

  // Carousel state for headquarters images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const headquartersImages = [
    {
      src: '/work-environment/villa75.jpg',
      alt: 'Villa 75 - Crown Business Solutions Alexandria headquarters',
      title: 'Villa 75 Headquarters',
      description: 'Premium workspace in Alexandria\'s business district',
      features: ['Modern Facilities', 'Strategic Location'],
      badge: '🏛️',
      badgeText: 'Premium Location'
    },
    {
      src: '/work-environment/Meeting.jpeg',
      alt: 'Professional meeting room at Crown Business Solutions',
      title: 'Professional Meeting Spaces',
      description: 'State-of-the-art conference rooms for collaboration',
      features: ['Advanced Technology', 'Collaborative Environment'],
      badge: '💼',
      badgeText: 'Professional'
    }
  ];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === headquartersImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [headquartersImages.length]);

  // Formatters for count animations
  const formatters = {
    currency: (value: number) => `£${value}M+`,
    percentage: (value: number) => `${value}%`,
    plus: (value: number) => `${value}+`,
    decimal: (value: number) => `${(value / 10).toFixed(1)}%`,
  };


  const milestones = [
    {
      year: "2017",
      title: "The Beginning",
      description: "Two founders in the UK start answering guest calls for Airbnb and OTAs, laying the foundation for what would become a comprehensive business solution."
    },
    {
      year: "2018",
      title: "Family Expansion",
      description: "Recruited family members in Egypt to handle customer service, marking the start of our family-built culture and international operations."
    },
    {
      year: "2019-2020",
      title: "Operational Excellence",
      description: "Evolved from simple call handling to comprehensive operational management, including cleaner tracking and customer service excellence."
    },
    {
      year: "2020-2021",
      title: "COVID Adaptation",
      description: "Paused operations during COVID but used the opportunity to acquire UK hotels at favorable prices, expanding our portfolio significantly."
    },
    {
      year: "2021-2023",
      title: "Full Operations Transfer",
      description: "Successfully transferred all operations from UK to Alexandria, Egypt, establishing our headquarters and building a 120+ person team."
    },
    {
      year: "2024-2025",
      title: "Enterprise Excellence",
      description: "Achieved major enterprise status with £50M+ portfolio value, 150%+ revenue growth, and seven specialized departments managing 120+ UK hotels with industry-leading operational excellence."
    }
  ];

  const departments = [
    {
      name: "Customer Service",
      description: "24/7 guest support and communication management",
      icon: "🎧"
    },
    {
      name: "Accounting",
      description: "Complete financial management and payment processing",
      icon: "💰"
    },
    {
      name: "Revenue Management",
      description: "Dynamic pricing and revenue optimization strategies",
      icon: "📈"
    },
    {
      name: "Marketing",
      description: "Digital marketing and brand awareness campaigns",
      icon: "📢"
    },
    {
      name: "Data & Analytics",
      description: "Business intelligence and performance insights",
      icon: "📊"
    },
    {
      name: "Maintenance",
      description: "Property upkeep and preventive maintenance",
      icon: "🔧"
    },
    {
      name: "Software Engineering",
      description: "Custom solutions and technology development",
      icon: "💻"
    }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
            <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide uppercase">Our Story</span>
          </motion.div>

          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 px-2">
            <AnimatedText
              text="From Family Foundation to Enterprise Excellence"
              highlightWords={["Family", "Enterprise"]}
              delay={0.3}
            />
          </div>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            What began as a family venture answering guest calls has grown into a major hospitality enterprise—managing 120+ UK hotels with a 120+ person team across seven specialized departments, all while maintaining our family-built culture of excellence.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-3 px-4">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUpNumber 
                    endValue={50} 
                    format={formatters.currency} 
                    delay={500}
                    duration={2000}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Portfolio Value</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUpNumber 
                    endValue={100} 
                    format={formatters.plus} 
                    delay={700}
                    duration={2000}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">UK Hotels</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUpNumber 
                    endValue={120} 
                    format={formatters.plus} 
                    delay={900}
                    duration={2000}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Team Members</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUpNumber 
                    endValue={999} 
                    format={formatters.decimal} 
                    delay={1100}
                    duration={2000}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Uptime</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                From Family Roots to <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Enterprise Success</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                What began as a family venture with two founders answering guest calls has transformed into a major hospitality enterprise. 
                Our family-built foundation provided the trust, dedication, and personal touch that enabled us to scale from a small operation 
                to managing a £50M+ portfolio of 120+ UK hotels with a 120+ person team.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're a full-scale hospitality enterprise operating seven specialized departments from our Alexandria headquarters. 
                While we've grown exponentially, our family-built culture remains at our core—ensuring every team member's voice matters 
                while delivering enterprise-level operational excellence that rivals the industry's largest players.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Scale</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Portfolio Value</span>
                    <span className="font-bold text-amber-600">
                      <CountUpNumber 
                        endValue={50} 
                        format={formatters.currency} 
                        delay={200}
                        duration={2000}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Revenue Growth</span>
                    <span className="font-bold text-amber-600">
                      <CountUpNumber 
                        endValue={150} 
                        format={formatters.plus} 
                        delay={400}
                        duration={2000}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Operational Uptime</span>
                    <span className="font-bold text-amber-600">
                      <CountUpNumber 
                        endValue={999} 
                        format={formatters.decimal} 
                        delay={600}
                        duration={2000}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="font-bold text-amber-600">
                      <CountUpNumber 
                        endValue={98} 
                        format={formatters.percentage} 
                        delay={800}
                        duration={2000}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8 border border-gray-200/50">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "We've grown from a family operation to a major hospitality enterprise, but our family-built values remain our competitive advantage—delivering enterprise-level results with the personal touch that only comes from our unique culture."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    HA
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Hassan Arif</div>
                    <div className="text-sm text-gray-600">Chief Executive Officer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Crown Business Solutions, our mission is to:
              </p>
              <ul className="text-gray-600 leading-relaxed text-lg mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span><strong>Support & Streamline:</strong> Deliver seamless solutions across customer service, finance, revenue management, and maintenance, tailored to the unique needs of each hotel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span><strong>Empower People:</strong> Equip our teams and partners with the tools, training, and opportunities to grow, thrive, and deliver exceptional results.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span><strong>Innovate & Automate:</strong> Continuously improve our systems and software to reduce complexity, enhance accuracy, and give hoteliers more time to focus on their guests.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">•</span>
                  <span><strong>Transform the Market:</strong> Provide UK small and medium hotels with accessible, scalable solutions that raise operational standards and unlock long-term sustainability.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To redefine hotel operations for small and medium-sized properties in the UK by creating smarter, 
                automated, and people-empowered solutions that set new standards for efficiency, service, and growth.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                We envision a future where every independent hotelier has access to enterprise-level technology 
                and operational expertise, enabling them to compete effectively with larger chains while maintaining 
                their unique character and personal touch. Through our innovative approach, we're building a new 
                ecosystem where technology serves people, automation enhances human connection, and every hotel 
                can achieve sustainable growth and exceptional guest experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today: A <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Major Enterprise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While we honor our family roots, we've evolved into a significant player in the hospitality industry with impressive scale and achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200/50 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-4">
                <CountUpNumber 
                  endValue={50} 
                  format={formatters.currency} 
                  delay={300}
                  duration={2000}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Value</h3>
              <p className="text-gray-600">Total value of managed hotel properties across the UK</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200/50 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-4">
                <CountUpNumber 
                  endValue={150} 
                  format={formatters.plus} 
                  delay={500}
                  duration={2000}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600">Year-over-year growth in annual revenue</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200/50 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-br from-amber-600 to-amber-700 bg-clip-text text-transparent mb-4">
                <CountUpNumber 
                  endValue={98} 
                  format={formatters.percentage} 
                  delay={700}
                  duration={2000}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Client satisfaction rating across all managed properties</p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Enterprise-Level Operations, Family Values</h3>
            <p className="text-xl text-amber-100 leading-relaxed max-w-4xl mx-auto">
              We've successfully scaled from a family operation to a major hospitality enterprise while maintaining the personal touch, 
              dedication, and trust that only comes from our family-built culture. Our growth proves that family values and enterprise 
              excellence aren't mutually exclusive—they're our competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Growth Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From family startup to major enterprise—our remarkable journey of scaling while maintaining our core values and culture.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/80">
                    <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Operating Footprint */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Operating Footprint</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seven specialized departments working in harmony to deliver operational excellence across our UK hotel portfolio.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 leading-relaxed">{dept.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Excellence Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-400/5 to-amber-600/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-amber-400/20 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Professional Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built on a foundation of family values, we've evolved into a world-class operation that delivers enterprise-level results with personal touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Modern Infrastructure</h3>
                    <p className="text-gray-300 text-lg">State-of-the-art facilities in Alexandria, Egypt, equipped with cutting-edge technology and collaborative workspaces designed for maximum productivity and innovation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Global Operations</h3>
                    <p className="text-gray-300 text-lg">Managing a growing UK hotel portfolio from our Alexandria headquarters, demonstrating our ability to deliver world-class service across international markets.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Innovation Hub</h3>
                    <p className="text-gray-300 text-lg">Continuous investment in AI, automation, and modern technology solutions that keep us at the forefront of operational excellence and industry innovation.</p>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">120+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">120+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">UK Hotels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">£50M+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Portfolio Value</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual Elements */}
              <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative space-y-6">
                {/* Animated Headquarters Carousel */}
                <div className="relative group">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                    <motion.img 
                      key={currentImageIndex}
                      src={headquartersImages[currentImageIndex].src}
                      alt={headquartersImages[currentImageIndex].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Enhanced Overlay with info */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl flex items-end"
                    key={`overlay-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">{headquartersImages[currentImageIndex].title}</h4>
                      <p className="text-gray-200 text-lg mb-3">{headquartersImages[currentImageIndex].description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        {headquartersImages[currentImageIndex].features.map((feature, index) => (
                          <span key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced floating badge */}
                  <motion.div 
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-white/20"
                    key={`badge-${currentImageIndex}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="text-white text-sm sm:text-lg md:text-2xl">{headquartersImages[currentImageIndex].badge}</span>
                  </motion.div>
                  
                  {/* Additional floating element */}
                  <motion.div 
                    className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                    key={`badge-text-${currentImageIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {headquartersImages[currentImageIndex].badgeText}
                  </motion.div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {headquartersImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-amber-400 w-8' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Team Culture Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/work-environment/movie-night.jpg" 
                      alt="Team building and cultural activities at Crown Business Solutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Team Culture</h4>
                      <p className="text-gray-200 text-lg">Building connections through shared experiences</p>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm sm:text-base md:text-xl">🎬</span>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    AI-Powered Systems
                  </span>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    Global Connectivity
                  </span>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                    Collaborative Spaces
                  </span>
                </div>
              </div>
              </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Join Our Professional Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}