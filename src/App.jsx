import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./utils/NavBar";
import { HeroSection } from "./pages/frontPage/HeroSection";
import { ServicesSection } from "./pages/frontPage/ServicesSection";
import { Work } from "./pages/frontPage/Work";
import { Footer } from "./pages/frontPage/Footer";
import { Contact } from "./pages/seperatePages/Contact";
import Team from "./pages/seperatePages/Team";
import RealWork from "./pages/seperatePages/RealWork";

const Home = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <Work />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-semibold ">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<RealWork />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
};

export default App;
