import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import logo from "@/assets/logo.png";
import finalBoss from "@/assets/final-boss.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Video Background with gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
        <div className="absolute inset-0 bg-sky-dark/40 z-[5]" />
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
              className="w-full max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            />

            {/* Tagline */}
            <motion.div
              className="inline-block bg-primary/90 px-8 py-3 rounded-lg mb-6 transform -rotate-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-game-subtitle text-2xl md:text-3xl text-primary-foreground">
                DEFEND, UPGRADE, EARN!
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-foreground/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A tower defense game in the Domenation universe. 
              Strategically place defenses, fight waves of mutants, and earn exclusive rewards!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://t.me/Domenation_bot/domenation_time_defenders"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-play flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                PLAY ON TELEGRAM
              </motion.a>
            </motion.div>

            {/* Airdrop Badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-3 bg-secondary/20 border border-secondary/50 rounded-full px-6 py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-gem-pink font-bold text-xl animate-pulse">💎</span>
              <span className="text-foreground font-bold">Up to $20K in Airdrops!</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Character */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src={finalBoss}
              alt="Time Defenders Boss"
              className="w-full max-w-md mx-auto floating drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 40px hsl(280 60% 35% / 0.5))"
              }}
            />
            
            {/* Glow effect behind character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-primary scroll-hint" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
