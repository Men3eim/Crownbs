import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Business Solutions": [
      { name: "Revenue Optimization", href: "/solutions/revenue-optimization" },
      { name: "Operational Excellence", href: "/solutions/operational-excellence" },
      { name: "Asset & Infrastructure", href: "/solutions/asset-infrastructure" },
      { name: "Business Intelligence", href: "/solutions/business-intelligence" },
      { name: "Global Distribution", href: "/solutions/global-distribution" },
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
                { href: "#", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                { href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { href: "#", path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
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
