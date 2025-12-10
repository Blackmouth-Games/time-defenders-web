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
      value: "+10",
      badgeColor: "bg-green-500",
      iconColor: "text-yellow-500"
    },
    {
      icon: Gift,
      title: "Lucky Chests",
      description: "Open chests for rare items",
      value: "RARE",
      badgeColor: "bg-secondary",
      iconColor: "text-yellow-500"
    },
    {
      icon: Star,
      title: "Leaderboard Prizes",
      description: "Top players earn exclusive rewards",
      value: "TOP 100",
      badgeColor: "bg-pink-500",
      iconColor: "text-yellow-400"
    },
    {
      icon: Sparkles,
      title: "Special Events",
      description: "Participate in limited-time events",
      value: "NEW",
      badgeColor: "bg-green-400",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <section id="rewards" ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Floating hourglass decoration */}
      <motion.img 
        src={hourglass}
        alt=""
        className="absolute top-20 right-20 w-12 md:w-16 h-12 md:h-16 opacity-50 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
            EARN REWARDS
          </h2>
          <p className="text-foreground/80 text-base md:text-lg max-w-2xl mx-auto font-medium px-2">
            Play, complete quests, and climb the leaderboards to earn amazing rewards!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left - Chest Image */}
          <motion.div
            className="flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={chest} 
              alt="Treasure Chest" 
              className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </motion.div>

          {/* Center - Rewards Grid - NOW WITH WHITE CARDS */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="relative group cursor-pointer"
              >
                {/* White/Light card with gradient border */}
                <div className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl p-5 text-center shadow-xl border-2 border-white/50 overflow-hidden">
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut",
                      delay: index * 0.5 
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{
                      boxShadow: "inset 0 0 30px hsl(45 100% 55% / 0.3), 0 0 40px hsl(45 100% 55% / 0.2)"
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Badge */}
                    <motion.span
                      className={`absolute -top-1 right-2 ${reward.badgeColor} text-xs text-white font-bold px-2 py-1 rounded-full shadow-lg`}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    >
                      {reward.value}
                    </motion.span>
                    
                    {/* Icon with animation */}
                    <motion.div
                      className="mb-3 flex justify-center"
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2 
                        }}
                      >
                        <reward.icon className={`w-10 h-10 ${reward.iconColor} drop-shadow-md`} strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                    
                    <h3 className="font-bold text-slate-800 mb-1 text-sm md:text-base">{reward.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm">{reward.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Gems Cart Image */}
          <motion.div
            className="flex justify-center order-3"
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={gemsCart} 
              alt="Gems Cart" 
              className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-lg"
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
