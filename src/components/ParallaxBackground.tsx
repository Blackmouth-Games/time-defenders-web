import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 gradient-sky" />
      
      {/* Radial light rays */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 opacity-40"
      >
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[200%] h-[200%]"
          style={{
            background: "radial-gradient(ellipse at center, hsl(195 100% 70% / 0.4) 0%, transparent 60%)"
          }}
        />
      </motion.div>

      {/* Floating gears - Layer 1 */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-[10%] left-[3%] w-20 h-20 opacity-60">
          <GearSVG className="w-full h-full text-primary rotate-slow" />
        </div>
        <div className="absolute top-[20%] right-[5%] w-28 h-28 opacity-50">
          <GearSVG className="w-full h-full text-primary rotate-slow" style={{ animationDirection: "reverse" }} />
        </div>
        <div className="absolute top-[55%] left-[8%] w-24 h-24 opacity-40">
          <GearSVG className="w-full h-full text-primary rotate-slow" />
        </div>
        <div className="absolute top-[80%] right-[12%] w-16 h-16 opacity-45">
          <GearSVG className="w-full h-full text-primary rotate-slow" style={{ animationDuration: "25s" }} />
        </div>
      </motion.div>

      {/* Floating gears - Layer 2 */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="absolute top-[40%] right-[15%] w-12 h-12 opacity-50">
          <GearSVG className="w-full h-full text-primary rotate-slow" style={{ animationDuration: "15s" }} />
        </div>
        <div className="absolute top-[70%] left-[20%] w-14 h-14 opacity-35">
          <GearSVG className="w-full h-full text-primary rotate-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
        </div>
        <div className="absolute top-[85%] right-[25%] w-10 h-10 opacity-40">
          <GearSVG className="w-full h-full text-primary rotate-slow" />
        </div>
      </motion.div>

      {/* Floating crystals */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-[30%] left-[15%] floating">
          <CrystalSVG className="w-8 h-8 text-gem-pink" />
        </div>
        <div className="absolute top-[50%] right-[10%] floating-delayed">
          <CrystalSVG className="w-6 h-6 text-gem-pink" />
        </div>
        <div className="absolute top-[75%] left-[5%] floating-slow">
          <CrystalSVG className="w-10 h-10 text-gem-pink" />
        </div>
        <div className="absolute top-[20%] right-[20%] floating">
          <CrystalSVG className="w-5 h-5 text-gem-pink" />
        </div>
      </motion.div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />
    </div>
  );
};

const GearSVG = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} style={style}>
    <path d="M50 10c-2.8 0-5 2.2-5 5v5.1c-3.7.7-7.2 2-10.4 3.8l-3.6-3.6c-2-2-5.1-2-7.1 0s-2 5.1 0 7.1l3.6 3.6c-1.8 3.2-3.1 6.7-3.8 10.4H15c-2.8 0-5 2.2-5 5s2.2 5 5 5h8.7c.7 3.7 2 7.2 3.8 10.4l-3.6 3.6c-2 2-2 5.1 0 7.1s5.1 2 7.1 0l3.6-3.6c3.2 1.8 6.7 3.1 10.4 3.8V80c0 2.8 2.2 5 5 5s5-2.2 5-5v-5.1c3.7-.7 7.2-2 10.4-3.8l3.6 3.6c2 2 5.1 2 7.1 0s2-5.1 0-7.1l-3.6-3.6c1.8-3.2 3.1-6.7 3.8-10.4H85c2.8 0 5-2.2 5-5s-2.2-5-5-5h-5.1c-.7-3.7-2-7.2-3.8-10.4l3.6-3.6c2-2 2-5.1 0-7.1s-5.1-2-7.1 0l-3.6 3.6c-3.2-1.8-6.7-3.1-10.4-3.8V15c0-2.8-2.2-5-5-5zm0 25c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"/>
  </svg>
);

const CrystalSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L3 9l9 13 9-13-9-7zM12 4.5L18 9l-6 8.5L6 9l6-4.5z" opacity="0.7"/>
    <path d="M12 6L7 10l5 7 5-7-5-4z"/>
  </svg>
);

export default ParallaxBackground;
