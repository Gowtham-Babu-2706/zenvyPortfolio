import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    index: "01",
    title: "Nova Platform",
    category: "Website & Product Design",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    bgClass: "bg-[#e2e4de]",
  },
  {
    index: "02",
    title: "Ethereal Mobile",
    category: "Mobile UI & Identity",
    video: "https://www.w3schools.com/html/movie.mp4",
    bgClass: "bg-[#dce5f9]",
  },
  {
    index: "03",
    title: "Prism Branding",
    category: "Brand Identity & Direction",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    bgClass: "bg-[#dedcd2]",
  },
  {
    index: "04",
    title: "Zenith Operations",
    category: "UX Research & Dashboard",
    video: "https://www.w3schools.com/html/movie.mp4",
    bgClass: "bg-[#dadad7]",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-22 sm:py-32">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="mb-16 grid gap-5 md:grid-cols-[1fr_.78fr] md:items-start">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a] md:col-span-2">Selected work</span>
          <h2 className="text-[clamp(3.4rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            SELECTED <br />
            <em>work.</em>
          </h2>
          <p className="max-w-[20rem] self-end text-base leading-[1.45] text-[#59605a]">
            Websites, identities, and digital products we have designed and built.
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.index}
              to="/work"
              className="group block"
            >
              <div
                className={`${project.bgClass} p-5 sm:p-7`}
              >
                <div className="overflow-hidden border-2 border-[#141815] bg-[#f5f3ec]">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[#141815] px-3 py-2">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#141815]"></span>
                    </div>
                    <div className="truncate text-center text-[9px] font-bold text-[#59605a]">zenvymedia.com/work/{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                    <div></div>
                  </div>
                  <video className="h-56 w-full object-cover sm:h-[22rem]"
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[3rem_1fr] gap-4">
                <span className="pt-1 text-[11px] font-bold">{project.index}</span>
                <div>
                  <h3 className="flex items-start justify-between gap-4 text-[clamp(1.5rem,2.1vw,2.25rem)] font-black uppercase leading-none tracking-[-.055em]">
                    <span>{project.title}</span>
                    <span className="text-[#2463eb] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#59605a]">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
