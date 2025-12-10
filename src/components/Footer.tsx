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
    <footer className="relative py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
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
                className="text-primary hover:underline"
              >
                Blackmouth Games
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm">
            © 2023 Blackmouth Games. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
