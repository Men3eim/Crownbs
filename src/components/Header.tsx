import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
  <header className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-sm z-50 border-b border-platinum">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/Crownbs.png"
                alt="Crown Business Solutions Logo"
                width={128}
                height={128}
                decoding="async"
                fetchPriority="high"
                className="w-32 h-32 object-contain mr-3 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-gold border-b-2 border-gold"
                      : "text-platinum hover:text-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-2 rounded-full font-semibold border border-platinum shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal overflow-hidden group"
            >
              <span>Get Started</span>
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="relative group inline-flex items-center justify-center gap-2 w-full bg-gold text-charcoal px-4 py-2 rounded-full font-semibold border border-platinum shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
