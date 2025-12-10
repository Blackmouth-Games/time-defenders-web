import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import symbolWhite from "@/assets/symbol-white.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5" 
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img src={symbolWhite} alt="Domenation Symbol" className="w-10 h-10" />
          <span className="text-game-subtitle text-xl text-foreground hidden sm:block">
            TIME DEFENDERS
          </span>
        </motion.a>

        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#rewards">Rewards</NavLink>
        </nav>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2, scale: 1.05 }}
    className="text-foreground/80 hover:text-primary font-bold transition-colors relative group text-sm md:text-base"
  >
    {children}
    <motion.span 
      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

export default Navbar;
