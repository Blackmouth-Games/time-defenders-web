import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import finalBoss from "@/assets/final-boss.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Video Background with gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-sky-dark/30 z-[5]" />
        <iframe
          className="absolute top-1/2 left-1/2 min-w-[177.77vh] min-h-[56.25vw] w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-125"
          src="https://www.youtube.com/embed/yrxZhSRiIzY?autoplay=1&mute=1&loop=1&playlist=yrxZhSRiIzY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Domenation Time Defenders"
              className="w-full max-w-lg mx-auto lg:mx-0 mb-8 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
            />

            {/* Tagline with animated background */}
            <motion.div
              className="inline-block bg-primary/95 px-10 py-4 rounded-xl mb-8 transform -rotate-1 shadow-lg"
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              <h2 className="text-game-subtitle text-2xl md:text-4xl text-primary-foreground tracking-wide">
                DEFEND, UPGRADE, EARN!
              </h2>
            </motion.div>

            {/* Description with staggered animation */}
            <motion.p
              className="text-foreground/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A tower defense game in the Domenation universe. 
              Strategically place defenses, fight waves of mutants, and earn exclusive rewards!
            </motion.p>
          </motion.div>

          {/* Right Content - Character with enhanced animations */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <motion.img
                src={finalBoss}
                alt="Time Defenders Boss"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 60px hsl(280 60% 45% / 0.6))"
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
            
            {/* Multiple glow effects */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/30 rounded-full blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-2xl -z-10"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10 text-primary drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
