import React, { useState } from "react";
import project1 from "../../assets/FrontPagePoster.jpg";

const allProjects = [
  {
    index: "01",
    title: "Nova Platform",
    category: "Websites",
    year: "2024",
    image: project1,
    desc: "A custom digital presence with high-converting landing pages and automated client routing.",
    bgClass: "bg-[#e2e4de]",
  },
  {
    index: "02",
    title: "Ethereal Brand System",
    category: "Branding",
    year: "2024",
    image: project1,
    desc: "Comprehensive brand guidelines, custom typography pairings, and digital identity toolkit.",
    bgClass: "bg-[#dce5f9]",
  },
  {
    index: "03",
    title: "Fintech Growth Portal",
    category: "Digital Products",
    year: "2024",
    image: project1,
    desc: "Responsive web portal with real-time dashboard analytics and conversion tracking.",
    bgClass: "bg-[#dedcd2]",
  },
  {
    index: "04",
    title: "Prism Creative Studio",
    category: "Branding",
    year: "2023",
    image: project1,
    desc: "Brand identity, print collateral, and interactive web portfolio for an art agency.",
    bgClass: "bg-[#dadad7]",
  },
  {
    index: "05",
    title: "Zenith Operations Hub",
    category: "Websites",
    year: "2023",
    image: project1,
    desc: "Custom high-speed website with integrated booking and client intake workflows.",
    bgClass: "bg-[#e4e6e2]",
  },
  {
    index: "06",
    title: "Pulse Digital Campaign",
    category: "Digital Products",
    year: "2024",
    image: project1,
    desc: "High-impact social campaign creatives and motion design assets.",
    bgClass: "bg-[#e9edf4]",
  },
];

const categories = ["All", "Websites", "Branding", "Digital Products"];

const RealWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="min-h-[85vh] py-22 sm:py-32">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="mb-16 grid gap-5 md:grid-cols-[1fr_.78fr] md:items-start">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a] md:col-span-2">Our portfolio</span>
          <h2 className="text-[clamp(3.4rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            SELECTED <br />
            <em>projects.</em>
          </h2>
          <p className="max-w-[20rem] self-end text-base leading-[1.45] text-[#59605a]">
            A curated collection of websites, brand identities, and digital products
            we have delivered for clients worldwide.
          </p>

          {/* Filter Pills */}
          <div className="col-span-full mt-1 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`border border-[#141815] px-4 py-2 text-[13px] font-bold transition-colors ${activeFilter === cat ? "bg-[#141815] text-white" : "text-[#59605a] hover:bg-[#F9B2D7]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.index} className="group">
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
                    <div className="truncate text-center text-[9px] font-bold text-[#59605a]">zenvymedia.com/{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                    <div></div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[260px] w-full object-cover"
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
                  <p className="mt-2 text-sm leading-relaxed text-[#59605a]">{project.category} · {project.year}</p>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-[#59605a]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWork;
