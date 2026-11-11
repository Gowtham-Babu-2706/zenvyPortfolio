import { motion } from "framer-motion";

const ProfileCards = ({
  name,
  role,
  image,
  bio,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group"
    >
      <div className="overflow-hidden border border-[#141815] bg-[#f5f3ec] transition-colors duration-300 hover:border-[#2463eb]">
        
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e1e4db]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141815]/60 via-transparent to-transparent opacity-60" />
        </div>

        {/* Info */}
        <div className="space-y-3 p-5 text-[#141815]">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#59605a]">
              {role}
            </p>
          </div>

          {/* Bio - visible on hover */}
          <div className="overflow-hidden">
            <p className="max-h-0 text-sm leading-relaxed text-[#59605a] opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCards;
