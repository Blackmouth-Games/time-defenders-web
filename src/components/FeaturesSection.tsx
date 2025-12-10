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
      description: "Strategic gameplay with real rewards"
    },
    {
      image: screenshot2,
      title: "Collect Gems",
      description: "Earn valuable resources"
    },
    {
      image: screenshot3,
      title: "Complete Quests",
      description: "Earn rewards with every mission"
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

        {/* Screenshots Carousel with enhanced effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -15 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "inset 0 0 40px hsl(45 100% 55% / 0.3)"
                  }}
                />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-game-subtitle text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 text-sm font-medium">
                    {item.description}
                  </p>
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
