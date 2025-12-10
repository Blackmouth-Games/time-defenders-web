import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gearIcon from "@/assets/gear-icon.png";
import gemPurple from "@/assets/gem-purple.png";
import hourglass from "@/assets/hourglass.png";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background image pattern */}
      <div 
        className="absolute inset-0 parallax-bg opacity-90"
        style={{
          backgroundSize: "cover",
        }}
      />
      
      {/* Light rays overlay */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 opacity-50"
      >
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[250%] h-[250%]"
          style={{
            background: "radial-gradient(ellipse at center, hsl(195 100% 70% / 0.3) 0%, transparent 50%)"
          }}
        />
      </motion.div>

      {/* Floating Game Icons - Layer 1 (Gears) */}
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[8%] left-[3%]">
        <img 
          src={gearIcon} 
          alt="" 
          className="w-20 h-20 md:w-28 md:h-28 opacity-80 drop-shadow-lg" 
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-[15%] right-[5%]">
        <motion.img 
          src={gearIcon} 
          alt="" 
          className="w-16 h-16 md:w-24 md:h-24 opacity-70 drop-shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[60%] left-[5%]">
        <motion.img 
          src={gearIcon} 
          alt="" 
          className="w-14 h-14 md:w-20 md:h-20 opacity-60 drop-shadow-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[80%] right-[8%]">
        <img 
          src={gearIcon} 
          alt="" 
          className="w-12 h-12 md:w-16 md:h-16 opacity-65 drop-shadow-lg" 
        />
      </motion.div>

      {/* Floating Gems */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute top-[25%] left-[12%]"
      >
        <motion.img 
          src={gemPurple} 
          alt="" 
          className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y2 }} 
        className="absolute top-[45%] right-[15%]"
      >
        <motion.img 
          src={gemPurple} 
          alt="" 
          className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y1 }} 
        className="absolute top-[70%] left-[20%]"
      >
        <motion.img 
          src={gemPurple} 
          alt="" 
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y3 }} 
        className="absolute top-[35%] right-[25%]"
      >
        <motion.img 
          src={gemPurple} 
          alt="" 
          className="w-6 h-6 md:w-10 md:h-10 drop-shadow-lg"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.div>

      {/* Floating Hourglasses */}
      <motion.div 
        style={{ y: y2 }} 
        className="absolute top-[50%] left-[8%]"
      >
        <motion.img 
          src={hourglass} 
          alt="" 
          className="w-14 h-14 md:w-20 md:h-20 drop-shadow-lg opacity-80"
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y1 }} 
        className="absolute top-[20%] right-[20%]"
      >
        <motion.img 
          src={hourglass} 
          alt="" 
          className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg opacity-70"
          animate={{ 
            y: [0, -22, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y3 }} 
        className="absolute top-[85%] left-[30%]"
      >
        <motion.img 
          src={hourglass} 
          alt="" 
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg opacity-75"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>

      {/* Extra gems for depth */}
      <motion.div 
        style={{ y: y2 }} 
        className="absolute top-[90%] right-[35%]"
      >
        <motion.img 
          src={gemPurple} 
          alt="" 
          className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg opacity-60"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
      </motion.div>

      {/* Particle effects overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
