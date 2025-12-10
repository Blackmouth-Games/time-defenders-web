import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import chest from "@/assets/chest.png";
import gemsCart from "@/assets/gems-cart.png";
import hourglass from "@/assets/hourglass.png";
import { Gift, Star, Gem, Sparkles } from "lucide-react";

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rewards = [
    {
      icon: Gem,
      title: "Daily Gems",
      description: "Collect free gems every day",
      value: "+10"
    },
    {
      icon: Gift,
      title: "Lucky Chests",
      description: "Open chests for rare items",
      value: "RARE"
    },
    {
      icon: Star,
      title: "Leaderboard Prizes",
      description: "Top players earn exclusive rewards",
      value: "TOP 100"
    },
    {
      icon: Sparkles,
      title: "Special Events",
      description: "Participate in limited-time events",
      value: "NEW"
    }
  ];

  return (
    <section id="rewards" ref={ref} className="relative py-24 overflow-hidden">
      {/* Floating hourglass decoration */}
      <motion.img 
        src={hourglass}
        alt=""
        className="absolute top-20 right-20 w-16 h-16 opacity-50 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-game-title text-4xl md:text-5xl text-foreground mb-4">
            EARN REWARDS
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-medium">
            Play, complete quests, and climb the leaderboards to earn amazing rewards!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left - Chest Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={chest} 
              alt="Treasure Chest" 
              className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </motion.div>

          {/* Center - Rewards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="card-game p-5 text-center group cursor-pointer"
              >
                <div className="relative inline-block mb-3">
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <reward.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <motion.span
                    className="absolute -top-2 -right-2 bg-gem-pink text-xs text-foreground font-bold px-2 py-0.5 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {reward.value}
                  </motion.span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{reward.title}</h3>
                <p className="text-muted-foreground text-sm">{reward.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right - Gems Cart Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={gemsCart} 
              alt="Gems Cart" 
              className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
