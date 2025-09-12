import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/solutions", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Story", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesDropdown = [
    { name: "Grow RevPAR", href: "/solutions/revenue-optimization" },
    { name: "Reduce Time-to-Resolution", href: "/solutions/operational-excellence" },
    { name: "Increase Uptime", href: "/solutions/asset-infrastructure" },
    { name: "Data & Analytics", href: "/solutions/business-intelligence" },
    { name: "Profitable Channel Mix", href: "/solutions/global-distribution" },
    { name: "Marketing", href: "/solutions/marketing" },
    { name: "Software Engineering", href: "/solutions/software-engineering" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => location.pathname.startsWith('/solutions');

  return (
    <motion.header
      className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-sm z-50 border-b border-platinum"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src="/logos/Crownbs.png"
                alt="Crown Business Solutions Logo"
                width={96}
                height={96}
                decoding="async"
                fetchPriority="high"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain mr-2 sm:mr-3 drop-shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${isServicesActive()
                          ? "text-gold border-b-2 border-gold"
                          : "text-platinum hover:text-gold"
                          }`}
                      >
                        {item.name}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                          >
                            {servicesDropdown.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                        ? "text-gold border-b-2 border-gold"
                        : "text-platinum hover:text-gold"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-2 rounded-full font-semibold border border-platinum shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal overflow-hidden group"
              >
                <span>Schedule Assessment</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-amber-400 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="px-3 pt-3 pb-4 space-y-2 bg-charcoal text-platinum border-t border-platinum/20 rounded-b-2xl shadow-xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.07 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${isServicesActive() ? "text-gold bg-white/5" : "text-platinum hover:text-gold hover:bg-white/5"}`}
                          onClick={() => setMobileServicesOpen((s) => !s)}
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services"
                        >
                          <span>{item.name}</span>
                          <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              id="mobile-services"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="ml-2 pl-2 border-l border-platinum/20 mt-1 space-y-1"
                            >
                              {servicesDropdown.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block px-3 py-2 text-sm rounded-md text-platinum hover:text-amber-400 hover:bg-white/5"
                                  onClick={() => { setIsMenuOpen(false); setMobileServicesOpen(false); }}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 text-base font-medium rounded-lg ${isActive(item.href) ? "text-gold bg-white/5" : "text-platinum hover:text-gold hover:bg-white/5"}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.07 }}
                >
                  <Link
                    to="/contact"
                    className="relative group inline-flex items-center justify-center gap-2 w-full bg-gold text-charcoal px-4 py-2 rounded-full font-semibold border border-platinum shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Schedule Assessment</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full" aria-hidden="true" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
