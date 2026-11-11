import React from "react";

const teamMembers = [
  {
    name: "Adhwaith",
    role: "Video Editor & Logo Animator",
    image:
      "https://res.cloudinary.com/ditni9lzn/image/upload/IMG_20260120_153651_oytcph",
    bio: "Skilled video editor specializing in high-impact visuals using Premiere Pro, After Effects, and Photoshop. Crafting smooth, engaging visual storytelling with creative effects.",
  },
  {
    name: "Hema Chandran",
    role: "Graphic & Logo Designer",
    image:
      "https://res.cloudinary.com/ditni9lzn/image/upload/WhatsApp_Image_2026-01-20_at_3.38.56_PM_fjn2pk",
    bio: "Creative graphic designer with experience in branding and typography. Proficient in Photoshop, Illustrator, and Figma, delivering impactful solutions for digital and print media.",
  },
  {
    name: "Gopinath",
    role: "Video Editor & Content Creator",
    image:
      "https://res.cloudinary.com/ditni9lzn/image/upload/IMG_20251020_193310_891_yqattr",
    bio: "Versatile video editor and content creator skilled in DaVinci Resolve and Photoshop. Building digital narratives optimized for high engagement across online platforms.",
  },
  {
    name: "Sathya Sai",
    role: "Communication & Content Analyst",
    image:
      "https://res.cloudinary.com/dzdpectc1/image/upload/sathya_sai_ci35xk",
    bio: "Talented in brand messaging, content writing, and digital marketing analytics. Crafting engaging copy and data-informed strategies that maximize audience reach.",
  },
  {
    name: "Gowtham Babu",
    role: "Full Stack Web Developer",
    image:
      "https://res.cloudinary.com/dzdpectc1/image/upload/Gemini_Generated_Image_pczfj4pczfj4pczf_aeipsh",
    bio: "Full Stack Web Developer specializing in React, modern JavaScript, and clean frontend architecture. Responsible for engineering responsive, fast, and scalable web solutions.",
  },
];

const Team = () => {
  return (
    <section className="min-h-[80vh] py-22 sm:py-32">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
        <div className="mb-16 grid gap-5 md:grid-cols-[1fr_.78fr] md:items-start">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a] md:col-span-2">The people behind Zenvy</span>
          <h2 className="text-[clamp(3.4rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            MEET THE <br />
            <em>team.</em>
          </h2>
          <p className="max-w-[20rem] self-end text-base leading-[1.45] text-[#59605a]">
            A dedicated collective of designers, developers, and media creators
            committed to delivering exceptional digital craftsmanship.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <article key={idx} className="overflow-hidden border border-[#141815] bg-[#f5f3ec]">
              <div className="aspect-[4/4.5] overflow-hidden bg-[#e1e4db]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-black uppercase leading-[.88] tracking-[-.075em]">{member.name}</h3>
                <span className="mt-2 block text-sm font-bold text-[#2463eb]">{member.role}</span>
                <p className="mt-4 text-sm leading-relaxed text-[#59605a]">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
