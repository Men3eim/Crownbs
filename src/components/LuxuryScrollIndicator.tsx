export default function LuxuryScrollIndicator() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex flex-col items-center space-y-2 sm:space-y-3 animate-fade-in-up-delay-4 max-[380px]:scale-90">
        <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-center px-4">
          Scroll to Explore
        </div>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400/60 rounded-full flex justify-center relative overflow-hidden gpu-accelerated">
          {/* Animated dot */}
          <div className="absolute top-1.5 sm:top-2 w-0.5 sm:w-1 h-2 sm:h-3 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full animate-scroll-dot" />
        </div>
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
