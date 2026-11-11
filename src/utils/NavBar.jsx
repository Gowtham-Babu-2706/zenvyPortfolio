import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#141815] bg-[#F6FFA4]" data-enhanced="true">
      <div className="mx-auto flex min-h-[94px] w-full max-w-[1512px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-14">
        <Link to="/" className="text-[clamp(1.9rem,3vw,3.1rem)] font-black leading-none tracking-[-.09em]" aria-label="Zenvy Media Home">
          Zenvy<span className="text-[#2463eb]">.</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center gap-2 text-sm font-bold lg:hidden"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Main navigation">
          <Link className="transition-colors hover:text-[#2463eb]" to="/services">Services</Link>
          <button className="transition-colors hover:text-[#2463eb]" onClick={() => handleNavClick("#work")}>Selected work</button>
          <Link className="transition-colors hover:text-[#2463eb]" to="/team">Team</Link>
          <Link className="transition-colors hover:text-[#2463eb]" to="/work">All projects</Link>
          <Link to="/contact" className="inline-flex min-h-12 items-center gap-3 bg-[#141815] px-5 text-[#f5f3ec] transition-colors hover:bg-[#2463eb]">
            Let’s talk <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-[#141815] bg-[#F9FFA4] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="border-b border-[#141815] py-2"
            >
              Services
            </Link>
            <button
              onClick={() => handleNavClick("#work")}
              className="border-b border-[#141815] py-2 text-left"
            >
              Selected work
            </button>
            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className="border-b border-[#141815] py-2"
            >
              Team
            </Link>
            <Link
              to="/work"
              onClick={() => setIsOpen(false)}
              className="border-b border-[#141815] py-2"
            >
              All projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-3 bg-[#141815] px-5 text-[#f5f3ec] transition-colors hover:bg-[#2463eb]"
            >
              Let’s talk <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
