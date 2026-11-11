import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#141815] pt-14 text-[#f5f3ec]">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="grid gap-8 border-b border-[#f5f3ec]/30 pb-14 md:grid-cols-[1fr_1.5fr_1fr] md:items-start">
          <Link to="/" className="text-[clamp(1.9rem,3vw,3.1rem)] font-black leading-none tracking-[-.09em] text-[#F9B2D7]">
            Zenvy<span>.</span>
          </Link>

          <p className="text-sm leading-relaxed text-[#f5f3ec]/70">
            Websites, brand design, and digital media studio. <br />
            Crafted with precision for forward-thinking businesses.
          </p>

          <div>
            <a className="text-sm font-medium text-[#F9B2D7] underline decoration-[#F9B2D7] underline-offset-4"
              href="mailto:hello@zenvymedia.com"
            >
              hello@zenvymedia.com
            </a>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-4 border-b border-[#f5f3ec]/30 py-9 text-sm font-bold sm:grid-cols-4" aria-label="Footer navigation">
          <Link className="transition-colors hover:text-[#F9B2D7]" to="/services">Services</Link>
          <a className="transition-colors hover:text-[#F9B2D7]" href="/#work">Selected work</a>
          <Link className="transition-colors hover:text-[#F9B2D7]" to="/team">Team</Link>
          <Link className="transition-colors hover:text-[#F9B2D7]" to="/work">All projects</Link>
          <Link className="transition-colors hover:text-[#F9B2D7]" to="/contact">Contact</Link>
          <a className="transition-colors hover:text-[#F9B2D7]" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="transition-colors hover:text-[#F9B2D7]" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-[#F9B2D7]" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </nav>

        <div className="overflow-hidden py-6 text-[19vw] font-black leading-[.68] tracking-[-.11em] text-[#F9B2D7]" aria-hidden="true">
          ZENVY<span className="text-[#2463eb]">.</span>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-[#f5f3ec]/30 py-6 text-[11px] text-[#f5f3ec]/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Zenvy Media Studio. All rights reserved.</span>
          <span>Designed in Chennai. Built for the web.</span>
        </div>
      </div>
    </footer>
  );
};
