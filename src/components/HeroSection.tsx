import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Adhiraj Studio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 text-balance">
            Designs That<br />
            <span className="gold-gradient-text">Dominate</span> the Arena
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Premium graphic design for esports teams, content creators, and gaming brands that demand excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base flex items-center gap-2 gold-glow hover:gold-glow-strong transition-all duration-500 group"
          >
            Work With Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="border border-border hover:border-primary/50 text-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 hover-gold-glow"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "150+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold gold-gradient-text">{stat.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
