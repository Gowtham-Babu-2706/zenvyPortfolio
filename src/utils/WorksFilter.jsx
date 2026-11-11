import { motion } from "framer-motion";

const filters = ["All", "Branding", "Digital", "Architecture", "Product"];

const WorksFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="border-b border-[#141815] py-8">
      <div className="mx-auto w-full max-w-[1512px] px-6 lg:px-12">
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
                  ? "border-b-2 border-[#2463eb] text-[#141815]"
                  : "text-[#59605a] hover:text-[#141815]"
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
