import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./utils/NavBar";
import { HeroSection } from "./pages/frontPage/HeroSection";
import { MoStrip } from "./pages/frontPage/MoStrip";
import { Work } from "./pages/frontPage/Work";
import { ClientProof } from "./pages/frontPage/ClientProof";
import { StudioStatement } from "./pages/frontPage/StudioStatement";
import { ServicesSection } from "./pages/frontPage/ServicesSection";
import { ProcessSection } from "./pages/frontPage/ProcessSection";
import { QuestionsSection } from "./pages/frontPage/QuestionsSection";
import { InvitationSection } from "./pages/frontPage/InvitationSection";
import { Footer } from "./pages/frontPage/Footer";

import { Contact } from "./pages/seperatePages/Contact";
import Team from "./pages/seperatePages/Team";
import RealWork from "./pages/seperatePages/RealWork";
import Service from "./pages/seperatePages/Service";
import ClientWords from "./pages/frontPage/ClientWord";

const Home = () => (
  <>
    <HeroSection />
    <MoStrip />
    <Work />
    <ClientProof />
    <StudioStatement />
    <ServicesSection />
    <ProcessSection />
    <QuestionsSection />
    <InvitationSection />
    <ClientWords/>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f3ec] font-[Arial,Helvetica,sans-serif] text-[#141815]">
        <NavBar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/work" element={<RealWork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
