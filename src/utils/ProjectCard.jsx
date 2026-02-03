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
      <div className="relative overflow-hidden rounded-sm bg-card aspect-4/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category} • {year}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-display font-medium text-foreground mb-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {category}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
