import { motion } from "framer-motion";
import { Zap, Target, Award } from "lucide-react";

const highlights = [
  { icon: Zap, title: "Creative Vision", desc: "Every design tells a story that resonates with your audience." },
  { icon: Target, title: "Pixel Perfect", desc: "Obsessive attention to detail in every project delivered." },
  { icon: Award, title: "Award-Level Quality", desc: "Designs that stand out in the competitive esports landscape." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">About Me</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting Visual<br />
              <span className="gold-gradient-text">Experiences</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Adhiraj Singh — a GFX designer with over 2 years of experience specializing in esports and gaming visuals. I work with content creators, esports organizations, and gaming brands to bring their vision to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From tournament posters to YouTube thumbnails, every design is crafted with precision and purpose. My goal is to create visuals that don't just look good — they dominate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="glass-card p-5 flex items-start gap-4 hover-gold-glow group"
              >
                <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
