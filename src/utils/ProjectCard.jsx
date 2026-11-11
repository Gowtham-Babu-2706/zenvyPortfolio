import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, category, year, image, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e1e4db]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#141815]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-1 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/70">
                {category} • {year}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F9B2D7]">
              <ArrowUpRight className="h-5 w-5 text-[#141815]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="mb-1 text-lg font-medium text-[#141815]">
          {title}
        </h3>
        <p className="text-sm text-[#59605a]">
          {category}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
