import AdminOTAs from "../components/AdminOTAs";
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';

export default function AdminPage() {
  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Luxury Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-amber-700/10 rounded-full blur-lg animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/8 to-amber-500/8 rounded-full blur-2xl animate-float-fast"></div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-amber-800 text-xs sm:text-sm font-medium tracking-wide">Admin Panel</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 px-2">
              <AnimatedText
                text="Admin Dashboard"
                highlightWords={["Dashboard"]}
                delay={0.5}
                highlightClassName="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent"
              />
            </div>
            <p className="text-gray-600 px-2">Manage your website content and settings</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 relative">
        <div className="animate-fade-in-up-delay-1">
          <AdminOTAs />
        </div>
      </div>
    </PageWrapper>
  );
}
