import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";



import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentionslegales";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "80px" }}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      
      <Footer />

    </>
  );
}

export default App;




  













