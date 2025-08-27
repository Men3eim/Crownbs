import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import RevenueManagement from "./pages/RevenueManagement";
import HotelOperations from "./pages/HotelOperations";
import EngineeringMaintenance from "./pages/EngineeringMaintenance";
import CustomerExcellence from "./pages/CustomerExcellence";
import { usePageAnimations, pageAnimationConfig } from "./hooks/usePageAnimations";

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
            <Route path="/services" element={<Services />} />
            <Route path="/services/revenue-management" element={<RevenueManagement />} />
            <Route path="/services/hotel-operations" element={<HotelOperations />} />
            <Route path="/services/engineering-maintenance" element={<EngineeringMaintenance />} />
            <Route path="/services/customer-excellence" element={<CustomerExcellence />} />
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
