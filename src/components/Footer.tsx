import { motion } from "framer-motion";
import symbolWhite from "@/assets/symbol-white.png";
import { Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Send,
      href: "https://t.me/Domenation_bot",
      label: "Telegram"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/domenation_game/",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/blackmouth",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="relative py-16 border-t border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <motion.div 
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img src={symbolWhite} alt="Domenation" className="w-12 h-12" />
              <div>
                <span className="text-game-subtitle text-xl text-foreground block">
                  TIME DEFENDERS
                </span>
                <span className="text-muted-foreground text-sm">by Domenation</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-md">
              Developed by{" "}
              <a 
                href="https://blackmouthgames.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold"
              >
                Blackmouth Games
              </a>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="mt-12 pt-8 border-t border-border/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm font-medium">
            © 2023 Blackmouth Games. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
