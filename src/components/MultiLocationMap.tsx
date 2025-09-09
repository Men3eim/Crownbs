import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveMap from './InteractiveMap';

interface Location {
  id: string;
  name: string;
  position: [number, number];
  address: string[];
  city: string;
  phone: string;
  email: string;
  services: string[];
  timezone: string;
  established: string;
}

const locations: Location[] = [
  {
    id: 'alexandria',
    name: 'Alexandria Office',
    city: 'Alexandria, Egypt',
    position: [31.223274316515734, 29.949945216958934],
    address: ['Kafr-Abdou Villa 75', 'Khalil AlMasry Street'],
    phone: '+20 3 123 4567',
    email: 'alexandria@crownbs.com',
    services: ['Property Management', 'Asset Optimization', 'Revenue Solutions'],
    timezone: 'EET (UTC+2)',
    established: '2018'
  }
];

export default function MultiLocationMap() {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);

  return (
    <div className="w-full">
        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                activeLocation.id === location.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 border border-amber-200/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {location.city}
            </motion.button>
          ))}
        </div>

      {/* Map Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <InteractiveMap location={activeLocation} />
          </motion.div>
        </AnimatePresence>

        {/* Location Info Overlay */}
        <motion.div
          className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-amber-200/50 max-w-sm z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg text-gray-900">{activeLocation.name}</h3>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
              Est. {activeLocation.established}
            </span>
          </div>

          <p className="text-amber-600 font-medium mb-3">{activeLocation.city}</p>

          <div className="space-y-2 mb-4">
            {activeLocation.address.map((line, index) => (
              <p key={index} className="text-sm text-gray-600">{line}</p>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-3 space-y-2">
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-700">{activeLocation.phone}</span>
            </div>

            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-700">{activeLocation.email}</span>
            </div>

            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700">{activeLocation.timezone}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <p className="text-xs font-medium text-gray-500 mb-2">Services Offered:</p>
            <div className="flex flex-wrap gap-1">
              {activeLocation.services.map((service, index) => (
                <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-md border border-amber-200">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
