import { motion } from "framer-motion";

const filters = ["All", "Branding", "Digital", "Architecture", "Product"];

const WorksFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="py-8 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 md:gap-8"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 pb-2 ${
                activeFilter === filter
                  ? "text-foreground border-b-2 border-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksFilter;
