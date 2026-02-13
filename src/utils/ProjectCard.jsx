import { motion } from "framer-motion";

const ProjectCard = ({ title, image, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group border-2 border-borderPrimary flex items-center justify-center flex-col cursor-pointer p-4 rounded-2xl"
    >
      <div className="relative overflow-hidden rounded-xs bg-card aspect-4/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"/>
      </div>

      <div className="mt-4 ">
        <h3 className="text-lg font-display font-bold text-textPrimary mb-1">
          {title}
        </h3>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
