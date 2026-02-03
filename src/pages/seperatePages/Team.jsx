import { motion } from "framer-motion";
import ProfileCards from "../../utils/ProfileCards";


const teamMembers = [
  {
    name: "Adhwaith",
    role: "Video Editor & Logo Animtor",
    image:
      "https://res.cloudinary.com/ditni9lzn/image/upload/IMG_20260120_153651_oytcph",
    bio: "Skilled video editor specializing in high-impact visuals using Adobe Premiere Pro, After Effects, and Photoshop. Known for crafting smooth, engaging, and high-quality videos with strong storytelling and creative effects.",
  },
  {
    name: "Hema Chandran",
    role: "Graphic & Logo Designer",
    image: "https://res.cloudinary.com/ditni9lzn/image/upload/WhatsApp_Image_2026-01-20_at_3.38.56_PM_fjn2pk", 
    bio: "Creative graphic and logo designer with experience in branding and visual editing. Proficient in Adobe Photoshop, Illustrator, InDesign, and Figma, delivering clean, modern, and impactful design solutions for digital and print media.",
  },
  {
    name: "Gopinath",
    role: "Video Editor & Content Creator",
    image: "https://res.cloudinary.com/ditni9lzn/image/upload/IMG_20251020_193310_891_yqattr", 
    bio: "Versatile video editor and content creator skilled in Photoshop, CapCut, and DaVinci Resolve. Also has basic web development knowledge, enabling a strong understanding of digital platforms and creating content optimized for online audiences.",
  },
  {
    name: "Sathya Sai",
    role: "Communication & Content Analyst",
    image: "https://res.cloudinary.com/dzdpectc1/image/upload/sathya_sai_ci35xk", 
    bio: "Talented in communication, content writing, and digital marketing analysis. Skilled at crafting engaging messages, analyzing trends, and supporting marketing strategies to maximize impact and audience engagement.",
  },
  {
    name: "Gowtham Babu",
    role: "Full Stack Web Developer",
    image: "https://res.cloudinary.com/dzdpectc1/image/upload/Gemini_Generated_Image_pczfj4pczfj4pczf_aeipsh", 
    bio: "Full Stack Web Developer specializing in Java, React, and Spring Boot. Skilled in complete web design and development, responsible for building and maintaining all company websites with modern, responsive, and scalable solutions.",
  },
];


const Team = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-textPrimary tracking-tight leading-[1.1] mb-6">
            Meet Our Team
          </h1>

          <p className="text-lg text-textPrimary text-muted-foreground leading-relaxed max-w-xl">
            A dedicated team of professionals committed to delivering
            exceptional results and driving meaningful innovation.
          </p>
        </motion.header>

        {/* Divider */}
        <div className="section-divider mb-12 lg:mb-16" />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <ProfileCards
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              delay={0.08 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
