import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const projects = [
  {
    title: "Nova Platform",
    category: "Product Design",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    gridClass: "col-span-1 md:col-span-2",
  },
  {
    title: "Ethereal App",
    category: "Mobile UI",
    video: "https://www.youtube.com/embed/wiSCV_ZAbJ8?autoplay=1&mute=1&loop=1&playlist=wiSCV_ZAbJ8&controls=0&modestbranding=1",
    gridClass: "col-span-1",
  },
  {
    title: "Prism Branding",
    category: "Identity",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    gridClass: "col-span-1",
  },
  {
    title: "Zenith Dashboard",
    category: "UX Research",
    video: "https://www.w3schools.com/html/movie.mp4",
    gridClass: "col-span-1 md:col-span-2",
  },
];



export const Work = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      },
    );
  }, []);

  return (
    <section id="work" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Selected Work
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              A collection of our most impactful projects where we've helped
              brands redefine their digital presence.
            </p>
          </div>

          <button className="text-lg font-bold border-b-2 border-black dark:border-white pb-1">
            View all projects
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${project.gridClass} group cursor-pointer`}
            >
              {/* VIDEO */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-8 py-3 rounded-full font-bold">
                    View Project
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
