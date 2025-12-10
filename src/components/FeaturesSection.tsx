import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screenshots = [
    {
      image: screenshot1,
      title: "Play, Defend, Earn",
      description: "Strategic gameplay with real rewards"
    },
    {
      image: screenshot2,
      title: "$20K in Airdrops",
      description: "Collect gems and win exclusive prizes"
    },
    {
      image: screenshot3,
      title: "Complete Quests",
      description: "Earn rewards with every mission"
    }
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Whether you're a casual player or a strategic mastermind, Time Defenders offers 
            fun, action-packed gameplay that keeps you coming back for more.
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-game-subtitle text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 text-sm">
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
