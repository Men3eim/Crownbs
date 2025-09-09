import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Business Solutions": [
      { name: "Grow RevPAR", href: "/solutions/revenue-optimization" },
      { name: "Reduce Time-to-Resolution", href: "/solutions/operational-excellence" },
      { name: "Increase Uptime", href: "/solutions/asset-infrastructure" },
      { name: "Data & Analytics", href: "/solutions/business-intelligence" },
      { name: "Profitable Channel Mix", href: "/solutions/global-distribution" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Portfolio", href: "/portfolio" },
      { name: "Careers", href: "/contact" },
    ],
    Support: [
      { name: "Contact Us", href: "/contact" },
      { name: "24/7 Emergency", href: "tel:+442071234568" },
      { name: "Client Portal", href: "/contact" },
      { name: "Documentation", href: "/contact" },
      { name: "Help Center", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Data Protection", href: "#" },
    ],
  };

  // Removed global offices listing per request

  return (
    <motion.footer 
      className="bg-charcoal text-platinum"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gold-light rounded-2xl p-2 flex items-center justify-center" style={{width: '140px', height: '140px'}}>
                <motion.img
                  src="/logos/Crownbs.png"
                  alt="Crown Business Solutions Logo"
                  className="w-32 h-32 object-contain drop-shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive business solutions, born in hospitality and now adapted for multiple industries,
              driving optimization and excellence worldwide.
            </p>

            {/* Primary Contact */}
            <div className="relative rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-50/5 to-white/5 p-5 mb-6 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 10%, #f59e0b 0%, transparent 40%), radial-gradient(circle at 80% 50%, #fbbf24 0%, transparent 40%)',
                }}
              />
              <div className="relative space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z" />
                      <circle cx="12" cy="11" r="2.5" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">Location</p>
                    <address className="not-italic text-platinum font-medium">
                      Kafr-Abdou Villa 75 Khalil AlMasry Street
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6l8 6 8-6" />
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">Mail</p>
                    <a href="mailto:info@crownbs.com" className="text-amber-300 hover:text-amber-400 font-semibold">
                      info@crownbs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Global offices section removed */}

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[ 
                { href: "https://www.instagram.com/crownbs75/", path: "M7.001 2C4.243 2 2 4.243 2 7.001v9.998C2 19.757 4.243 22 7.001 22h9.998C19.757 22 22 19.757 22 17V7.001C22 4.243 19.757 2 17 2H7.001zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.505 4.505 0 0 1 12 7.5zm0 1.5a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm4.75-.75a.75.75 0 1 1-.75.75.751.751 0 0 1 .75-.75z" },
                { href: "https://www.linkedin.com/company/crown-business-solutions/", path: "M4.983 3.5C4.983 4.604 4.1 5.5 3 5.5S1.017 4.604 1.017 3.5C1.017 2.395 1.9 1.5 3 1.5s1.983.895 1.983 2zM1.5 8.5h3V22h-3zM9.5 8.5h2.878v1.84h.041c.401-.76 1.38-1.559 2.842-1.559 3.04 0 3.6 2.004 3.6 4.612V22h-3v-5.967c0-1.424-.026-3.255-1.985-3.255-1.987 0-2.293 1.553-2.293 3.157V22h-3z" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path}/>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <motion.h4 
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 }}
              >
                {category}
              </motion.h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                      whileHover={{ x: 5, color: "#f59e0b" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              © {currentYear} Crown Business Solutions. All rights reserved.
            </motion.div>
            <motion.div />
          </motion.div>
          {/* Removed global operations blurb */}
        </motion.div>
      </div>
    </motion.footer>
  );
}
