export default function LuxuryScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex flex-col items-center space-y-3 animate-fade-in-up-delay-4">
        <div className="text-gray-600 text-xs uppercase tracking-[0.2em] font-medium text-center">
          Scroll to Explore
        </div>
        <div className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full mt-2 animate-scroll-dot"></div>
        </div>
        <svg
          className="w-4 h-4 text-gray-400 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
