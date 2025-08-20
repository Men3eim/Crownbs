import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Partnerships from "./components/Partnerships";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import RevenueManagement from "./pages/RevenueManagement";
import HotelOperations from "./pages/HotelOperations";
import EngineeringMaintenance from "./pages/EngineeringMaintenance";
import CustomerExcellence from "./pages/CustomerExcellence";

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white animate-pagefade">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/revenue-management" element={<RevenueManagement />} />
            <Route path="/services/hotel-operations" element={<HotelOperations />} />
            <Route path="/services/engineering-maintenance" element={<EngineeringMaintenance />} />
            <Route path="/services/customer-excellence" element={<CustomerExcellence />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
