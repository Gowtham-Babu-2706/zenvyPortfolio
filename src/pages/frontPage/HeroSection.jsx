import React from "react";
import { Link } from "react-router-dom";
import FrontPoster from "../../assets/FrontPagePoster.jpg";

export const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-[#F9FFA4] pb-0 pt-7" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        {/* Context / Issue line */}
         <div className=" pt-5 text-[10px] font-bold uppercase tracking-[.07em]">
            <p>
              
              WEBSITES &amp; DIGITAL MEDIA STUDIO / CHENNAI &amp; GLOBAL
            </p>
          </div>

        {/* Heading & Schematic Drawing */}
        <div className="flex gap-2 py-14 flex-col">  
          <h1 id="hero-title" className=" text-[clamp(4.5rem,13vw,14rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            WEB & MEDIA 
          </h1>
          <div className="flex gap-x-8">
            <h1 className="text-[clamp(4.5rem,12vw,16rem)] font-black uppercase leading-[.88] tracking-[-.075em]">STUDIO<span className="text-[#2463eb] ">.</span></h1>
            <svg
              className="hidden order-3 col-span-full w-[40vw] fill-none stroke-[#141815] stroke-[1.3] lg:order-none md:block"
              viewBox="0 0 680 172"
              aria-hidden="true"
            >
              {/* Panel 1: Website */}
              <path d="M14 18h236v124H14zM14 38h236" />
              <circle cx="26" cy="28" r="2.6" className="fill-[#141815]" />
              <circle cx="36" cy="28" r="2.6" className="fill-[#141815]" />
              <circle cx="46" cy="28" r="2.6" className="fill-[#141815]" />
              <path d="M30 58h70M30 70h92M30 82h58" />
              <path d="M142 52h92v62h-92zM142 104l22-20 16 12 20-24 34 32" />
              <rect className="fill-none stroke-[#000]" x="30" y="96" width="56" height="16" />
              <path d="M30 128h204" />

              {/* Panel 2: Automation & Content */}
              <path d="M296 34h60v90h-60zM296 50h60" />
              <path d="M306 64h40M306 76h32M306 88h38M306 100h26M306 112h34" />
              <path d="M362 79h16M372 73l6 6-6 6" />
              <path d="M384 34h68v90h-68zM384 50h68" />
              <path d="M394 62l3 3 6-7M410 62h32M394 78l3 3 6-7M410 78h28M394 94l3 3 6-7M410 94h32" />
              <rect className=" stroke-[#000]" x="394" y="104" width="48" height="12" />

              {/* Panel 3: Identity & Brand */}
              <path d="M470 26l92 8v112l-92-8zM562 34l96-8v112l-96 8z" />
              <path d="M482 46h66v40h-66zM482 98h60M482 110h44" />
              <path d="M574 44h72v56h-72zM574 72h72M604 44v56" />
              <path d="M574 116h56M574 128h40" />

              <text className=" text-[10px]  tracking-[.17em]" x="14" y="166">WEBSITE</text>
              <text className="text-[10px]  tracking-[.17em]" x="296" y="166">GROWTH &amp; SOCIAL</text>
              <text className="text-[10px]  tracking-[.17em]" x="470" y="166">BRAND &amp; DESIGN</text>
            </svg>
          </div>

          {/* Lede + CTAs */}
          <div className="flex flex-col gap-7 mt-10">
            <p className="text-l ">
              Websites, brand identities, and high-performance digital media,
              designed and built for ambitious businesses.
            </p>

            <div>
              <div className="flex flex-wrap gap-3 text-xl leading-[1.42]">
                <Link to="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#141815] px-6 py-4 text-sm font-bold text-[#f5f3ec] transition-colors hover:bg-[#2463eb]">
                  Let’s talk <span aria-hidden="true">↗</span>
                </Link>
                <a href="#work" className="inline-flex min-h-14 items-center justify-center border border-[#141815] px-6 py-4 text-sm font-bold transition-colors hover:bg-[#141815] hover:text-[#f5f3ec]">
                  See our work
                </a>
              </div>
              <p className="mt-6 text-right font-serif text-lg italic leading-snug">
                <span>“All that I need and it’s outstanding.”</span>
                <strong className="mt-2 block font-sans text-sm not-italic tracking-normal">Ken Simon, Strategic Partner</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Featured Case Study Cover */}
        <Link to="/work" className="grid border-t border-[#141815] bg-[#141815] text-[#f5f3ec] lg:grid-cols-[1.48fr_.52fr] mb-10">
          <div className="bg-[#c8cf65] p-5 sm:p-9">
            <div className="overflow-hidden border-2 border-[#141815] bg-[#f5f3ec] shadow-[10px_10px_0_0_#141815]">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[#141815] px-3 py-2">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                </div>
                <div className="truncate text-center text-[9px] font-bold text-[#59605a]">zenvymedia.com/cases/nova-platform</div>
                <div></div>
              </div>
              <div className="overflow-hidden h-72 md:h-96">
                <img
                  src={FrontPoster}
                  alt="Nova Platform Case Study"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex min-h-full flex-col justify-between gap-16 p-6 sm:p-9">
            <div>
              <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#F9B2D7]">Featured project</span>
              <h2 className="text-[clamp(2.8rem,4.4vw,5rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
                NOVA &amp; <br />
                <em>Partners Platform</em>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#f5f3ec]/70">
                A custom digital presence with high-converting landing pages,
                brand system, and automated inquiry distribution.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#f5f3ec]/30 pt-4 text-[10px] font-bold uppercase tracking-[.06em] text-[#F9B2D7]">
              <span>Digital Platform</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
