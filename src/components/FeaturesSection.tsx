import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import gearIcon from "@/assets/gear-icon.png";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screenshots = [
    {
      image: screenshot1,
      title: "Play & Defend",
      description: "Strategic gameplay with real rewards",
      badge: "ACTION",
      badgeColor: "bg-red-500"
    },
    {
      image: screenshot2,
      title: "Collect Gems",
      description: "Earn valuable resources",
      badge: "GEMS",
      badgeColor: "bg-purple-500"
    },
    {
      image: screenshot3,
      title: "Complete Quests",
      description: "Earn rewards with every mission",
      badge: "QUESTS",
      badgeColor: "bg-green-500"
    }
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden">
      {/* Floating decorations */}
      <motion.img 
        src={gearIcon}
        alt=""
        className="absolute top-10 left-10 w-20 h-20 opacity-40 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-game-title text-4xl md:text-5xl text-foreground mb-4">
            GAME FEATURES
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-medium">
            Whether you're a casual player or a strategic mastermind, Time Defenders offers 
            fun, action-packed gameplay that keeps you coming back for more.
          </p>
        </motion.div>

        {/* Screenshots with WHITE CARD style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -15 }}
              className="group cursor-pointer"
            >
              {/* White card container */}
              <div className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl p-3 shadow-2xl border-2 border-white/50 overflow-hidden">
                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -skew-x-12 z-20 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    ease: "easeInOut",
                    delay: index * 0.8 
                  }}
                />
                
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px hsl(45 100% 55% / 0.25), 0 0 50px hsl(45 100% 55% / 0.2)"
                  }}
                />
                
                {/* Badge */}
                <motion.span
                  className={`absolute top-5 right-5 ${item.badgeColor} text-xs text-white font-bold px-3 py-1 rounded-full shadow-lg z-30`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                >
                  {item.badge}
                </motion.span>
                
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-video object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.h3 
                      className="text-game-subtitle text-xl text-white mb-1 drop-shadow-lg"
                      initial={{ y: 10, opacity: 0.8 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-white/80 text-sm font-medium drop-shadow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
