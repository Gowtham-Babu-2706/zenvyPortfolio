import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const projects = [
  {
    title: "Short Video 1",
    category: "Shorts",
    type: "mp4",
    video:
      "",
    gridClass: "col-span-1",
    addClass:"object-contain",
  },
  {
    title: "Video Promotion",
    category: "Promotion",
    type: "mp4",
    video:
      "https://zenvymediabucket.s3.ap-south-1.amazonaws.com/artiverse%20final.mp4",
    gridClass: " col-span-2 md:col-span-2",
    addClass:"rotate-270 object-cover",
  },
  {
    title: "Logo Animation",
    category: "Logo Designing",
    type: "mp4",
    video:
      "https://zenvymediabucket.s3.ap-south-1.amazonaws.com/project1.mp4",
    gridClass: "col-span-2 md:col-span-2",
    addClass:"object-contain",
  },
  {
    title: "Thinkfinite Promo",
    category: "Promo",
    type: "mp4",
    video:
      "https://zenvymediabucket.s3.ap-south-1.amazonaws.com/THINKFINITE%20PROMO.mp4",
    gridClass: "col-span-1",
    addClass:"object-contain",
  },
];

export const Work = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
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
      }
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
              className="text-4xl md:text-5xl font-bold text-textPrimary "
            >
              Work
            </h2>

            <p className="mt-6 text-lg text-textSecondary">
              A collection of our most impactful projects where we've helped
              brands redefine their digital presence.
            </p>
          </div>

          <button className="text-lg font-bold border-b-2 border-borderPrimary text-textPrimary pb-1">
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
              <div className=" border-2 border-borderPrimary relative aspect-16/10 rounded-3xl overflow-hidden mb-6">
                {project.type === "mp4" ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full  ${project.addClass} border-borderPrimary   transition-transform duration-700 `}
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&modestbranding=1`}
                    title={project.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover  border-borderPrimary "
                  />
                )}

              </div>

              {/* TEXT */}
              <p className="text-sm font-medium text-textSecondary uppercase tracking-widest mb-2">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold text-textSecondary dark:text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
