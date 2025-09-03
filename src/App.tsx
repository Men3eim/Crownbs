import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BusinessSolutions from "./pages/BusinessSolutions";
import RevenueOptimization from "./pages/RevenueOptimization";
import OperationalExcellence from "./pages/OperationalExcellence";
import AssetInfrastructure from "./pages/AssetInfrastructure";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import GlobalDistribution from "./pages/GlobalDistribution";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import { usePageAnimations } from "./hooks/usePageAnimations";

export default function App() {
  function AnimatedRoutes() {
    const location = useLocation();
    usePageAnimations(); // Use our custom hook for consistent animations

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<BusinessSolutions />} />
            <Route path="/solutions/revenue-optimization" element={<RevenueOptimization />} />
            <Route path="/solutions/operational-excellence" element={<OperationalExcellence />} />
            <Route path="/solutions/asset-infrastructure" element={<AssetInfrastructure />} />
            <Route path="/solutions/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="/solutions/global-distribution" element={<GlobalDistribution />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
