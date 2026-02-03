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
      <div className="team-card overflow-hidden rounded-lg bg-primary border border-textPrimary transition-all duration-300 hover:border-muted-foreground/30">
        
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        </div>

        {/* Info */}
        <div className="p-5 space-y-3 text-textPrimary">
          <div>
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              {name}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              {role}
            </p>
          </div>

          {/* Bio - visible on hover */}
          <div className="overflow-hidden">
            <p className="text-sm text-muted-foreground leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCards;
