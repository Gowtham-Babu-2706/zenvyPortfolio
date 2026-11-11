import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    index: "01",
    title: "Websites & Development",
    desc: "Custom, responsive websites designed and built for your business, optimized for speed, search ranking, and effortless conversion.",
    link: "/contact",
  },
  {
    index: "02",
    title: "Social Media Marketing",
    desc: "Full-service social media management: engaging posts, reels, community interaction, and strategic profile optimization to grow real leads.",
    link: "/contact",
  },
  {
    index: "03",
    title: "Branding & Visual Identity",
    desc: "Distinctive logo design, typography systems, color palettes, and comprehensive brand guidelines crafted for longevity.",
    link: "/contact",
  },
  {
    index: "04",
    title: "Paid Advertising & SEO",
    desc: "Data-driven ad campaigns on Meta and Google paired with on-page SEO to capture high-intent customers when they search.",
    link: "/contact",
  },
  {
    index: "05",
    title: "Video Editing & Motion Graphics",
    desc: "High-impact visual editing in Premiere Pro and After Effects, creating smooth, engaging videos with strong storytelling and motion design.",
    link: "/contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-22 sm:py-32">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="mb-16 grid gap-5 md:grid-cols-[1fr_.78fr] md:items-start">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a] md:col-span-2">What we do</span>
          <h2 className="text-[clamp(3.4rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">SERVICES.</h2>
          <p className="max-w-[20rem] self-end text-base leading-[1.45] text-[#59605a]">
            Websites, brand identities, and digital media production tailored for businesses of every scale.
          </p>
        </div>

        <div className="border-t border-[#141815]">
          {services.map((item) => (
            <Link
              key={item.index}
              to={item.link}
              className="group grid gap-4 border-b border-[#141815] py-7 transition-colors hover:bg-[#F9B2D7] sm:grid-cols-[3.5rem_1fr_1.15fr_auto] sm:items-center sm:px-4"
            >
              <span className="text-[11px] font-bold">{item.index}</span>
              <h3 className="text-2xl font-black uppercase tracking-[-.05em]">{item.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-[#59605a]">{item.desc}</p>
              <span className="text-3xl text-[#2463eb] transition-transform group-hover:translate-x-2" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
