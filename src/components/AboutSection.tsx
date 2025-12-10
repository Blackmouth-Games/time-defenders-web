import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Trophy, Coins } from "lucide-react";
import telegramImage from "@/assets/telegram-image.png";
import gemPurple from "@/assets/gem-purple.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Strategic Defense",
      description: "Place your defenses wisely to protect against waves of mutants",
      iconColor: "text-blue-500",
      badgeColor: "bg-blue-500",
      badge: "CORE"
    },
    {
      icon: Zap,
      title: "Upgrade & Evolve",
      description: "Collect resources to upgrade towers and unlock new abilities",
      iconColor: "text-yellow-500",
      badgeColor: "bg-yellow-500",
      badge: "POWER"
    },
    {
      icon: Trophy,
      title: "Climb Leaderboards",
      description: "Compete with players worldwide for exclusive rewards",
      iconColor: "text-purple-500",
      badgeColor: "bg-purple-500",
      badge: "RANK"
    },
    {
      icon: Coins,
      title: "Earn Rewards",
      description: "Win prizes and exclusive items as you progress",
      iconColor: "text-green-500",
      badgeColor: "bg-green-500",
      badge: "EARN"
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Floating decoration */}
      <motion.img 
        src={gemPurple}
        alt=""
        className="absolute top-20 right-10 w-16 h-16 opacity-50 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image with enhanced effects */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src={telegramImage} 
                  alt="Domenation Time Defenders Gameplay" 
                  className="w-full rounded-2xl shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px hsl(195 100% 50% / 0.3)"
                  }}
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-game-title text-4xl md:text-5xl text-foreground mb-6">
                ABOUT THE GAME
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                Domenation: Time Defenders is a tower defense game set in the Domenation universe, 
                available on Telegram. With every level, the challenge grows — unlock new skills, 
                take on tougher enemies, and climb the leaderboards to earn exclusive rewards!
              </p>
            </motion.div>

            {/* Feature Grid with WHITE ANIMATED CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group cursor-pointer"
                >
                  {/* White card with shimmer */}
                  <div className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl p-5 shadow-xl border-2 border-white/50 overflow-hidden">
                    {/* Animated shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 4,
                        ease: "easeInOut",
                        delay: index * 0.5 
                      }}
                    />
                    
                    {/* Glow effect on hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{
                        boxShadow: "inset 0 0 30px hsl(195 100% 50% / 0.2), 0 0 40px hsl(195 100% 50% / 0.15)"
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Badge */}
                      <motion.span
                        className={`absolute -top-1 right-2 ${feature.badgeColor} text-[10px] text-white font-bold px-2 py-0.5 rounded-full shadow-lg`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.2 }}
                      >
                        {feature.badge}
                      </motion.span>
                      
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3"
                      >
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                        >
                          <feature.icon className={`w-10 h-10 ${feature.iconColor} drop-shadow-md`} strokeWidth={1.5} />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
