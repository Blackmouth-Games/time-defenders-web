import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Trophy, Coins } from "lucide-react";
import telegramImage from "@/assets/telegram-image.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Strategic Defense",
      description: "Place your defenses wisely to protect against waves of mutants"
    },
    {
      icon: Zap,
      title: "Upgrade & Evolve",
      description: "Collect resources to upgrade towers and unlock new abilities"
    },
    {
      icon: Trophy,
      title: "Climb Leaderboards",
      description: "Compete with players worldwide for exclusive rewards"
    },
    {
      icon: Coins,
      title: "Earn Rewards",
      description: "Win airdrops and exclusive prizes as you progress"
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={telegramImage} 
                alt="Domenation Time Defenders Gameplay" 
                className="w-full rounded-2xl shadow-2xl glow-blue"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-game-title text-4xl md:text-5xl text-foreground mb-4">
                ABOUT THE GAME
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Domenation: Time Defenders is a tower defense game set in the Domenation universe, 
                available on Telegram. With every level, the challenge grows — unlock new skills, 
                take on tougher enemies, and climb the leaderboards to earn exclusive rewards!
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card-game p-5 group hover:border-primary/50 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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
