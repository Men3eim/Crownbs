import { useMemo } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { containerVariants, itemVariants } from '../utils/animations';

type OTA = { name: string; logoUrl?: string };

export default function OTAMarquee() {
  const otasFromDB = useQuery(api.otas.list, { featured: true }) as OTA[] | undefined;

  // Fallback OTAs
  const fallbackOTAs: OTA[] = [
    { name: "Booking.com", logoUrl: "/logos-ota/booking.svg" },
    { name: "Expedia", logoUrl: "/logos-ota/expedia.svg" },
    { name: "Agoda", logoUrl: "/logos-ota/agoda.svg" },
    { name: "Hotels.com", logoUrl: "/logos-ota/hotels.svg" },
    { name: "Airbnb", logoUrl: "/logos-ota/airbnb.svg" }
  ];

  const otas = (otasFromDB && otasFromDB.length > 0 ? otasFromDB : fallbackOTAs).map(
    (o) => ({ name: o.name, logoUrl: o.logoUrl })
  );

  // Utility: Fisher-Yates shuffle
  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Build three randomized rows. Ensure no same item at row ends to avoid
  // a duplicate at the loop join when we concatenate [...row, ...row].
  const rows: OTA[][] = useMemo(() => {
    const makeRow = () => {
      if (otas.length <= 1) return [...otas];
      let r = shuffle(otas);
      // Ensure first and last aren't the same
      if (r[0]?.name === r[r.length - 1]?.name) {
        r.push(r.shift()!);
      }
      return r;
    };
    return [makeRow(), makeRow(), makeRow()];
  }, [otas]);

  // Randomize per-row durations slightly for organic movement
  const durations = useMemo(() => (
    rows.map(() => 48 + Math.floor(Math.random() * 16)) // 48s–63s
  ), [rows]);

  return (
    <section
      aria-label="Distribution channels"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
          variants={itemVariants}
        >
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full mr-3"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-blue-800 text-xs sm:text-sm font-medium tracking-wide">Global Distribution</span>
        </motion.div>

        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-2"
          variants={itemVariants}
        >
          <AnimatedText
            text="Worldwide Channel Partners"
            highlightWords={["Worldwide", "Channel", "Partners"]}
            highlightClassName="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
            delay={0.3}
          />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          variants={itemVariants}
        >
          We partner with leading global distribution channels to maximize your property's visibility and bookings across international markets.
        </motion.p>
      </motion.div>

      {/* Full-width, edge-faded marquee container */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Edge fades for smoothness */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* 3 rows with alternating directions, randomized order and duration */}
        <div className="space-y-6">
          {/* Row 1 - left */}
          <div className="relative h-24 md:h-28 lg:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div
                aria-hidden="true"
                className="flex animate-marquee-left gap-6 md:gap-8 lg:gap-10 [will-change:transform] px-6"
                style={{ animationDuration: `${durations[0]}s` }}
              >
                {[...rows[0], ...rows[0]].map((ota, index) => (
                  <div
                    key={`r1-${index}`}
                    className="flex-shrink-0 w-52 h-24 md:w-64 md:h-28 lg:w-72 lg:h-32 rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur ring-1 ring-gray-200/60 shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={ota.logoUrl || undefined}
                      alt={`${ota.name} logo`}
                      className="max-h-8 md:max-h-10 lg:max-h-12 max-w-[75%] object-contain opacity-95"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        const fb = document.createElement('div');
                        fb.className = 'text-gray-500 text-base md:text-lg font-semibold';
                        fb.textContent = ota.name;
                        t.parentNode?.appendChild(fb);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - right */}
          <div className="relative h-24 md:h-28 lg:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div
                aria-hidden="true"
                className="flex animate-marquee-right gap-6 md:gap-8 lg:gap-10 [will-change:transform] px-6"
                style={{ animationDuration: `${durations[1]}s` }}
              >
                {[...rows[1], ...rows[1]].map((ota, index) => (
                  <div
                    key={`r2-${index}`}
                    className="flex-shrink-0 w-52 h-24 md:w-64 md:h-28 lg:w-72 lg:h-32 rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur ring-1 ring-gray-200/60 shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={ota.logoUrl || undefined}
                      alt={`${ota.name} logo`}
                      className="max-h-8 md:max-h-10 lg:max-h-12 max-w-[75%] object-contain opacity-95"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        const fb = document.createElement('div');
                        fb.className = 'text-gray-500 text-base md:text-lg font-semibold';
                        fb.textContent = ota.name;
                        t.parentNode?.appendChild(fb);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 - left */}
          <div className="relative h-24 md:h-28 lg:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div
                aria-hidden="true"
                className="flex animate-marquee-left gap-6 md:gap-8 lg:gap-10 [will-change:transform] px-6"
                style={{ animationDuration: `${durations[2]}s` }}
              >
                {[...rows[2], ...rows[2]].map((ota, index) => (
                  <div
                    key={`r3-${index}`}
                    className="flex-shrink-0 w-52 h-24 md:w-64 md:h-28 lg:w-72 lg:h-32 rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur ring-1 ring-gray-200/60 shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={ota.logoUrl || undefined}
                      alt={`${ota.name} logo`}
                      className="max-h-8 md:max-h-10 lg:max-h-12 max-w-[75%] object-contain opacity-95"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        const fb = document.createElement('div');
                        fb.className = 'text-gray-500 text-base md:text-lg font-semibold';
                        fb.textContent = ota.name;
                        t.parentNode?.appendChild(fb);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}