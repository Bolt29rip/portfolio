import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolioThumbnail from "@/assets/portfolio-thumbnail.jpg";
import portfolioLogo from "@/assets/portfolio-logo.png";

const projects = [
  { title: "Sniper Tournament Highlights", category: "Thumbnails", image: portfolioThumbnail },
  { title: "Adhiraj — Logo Design", category: "Logos", image: portfolioLogo },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="gold-gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group cursor-pointer hover-gold-glow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                  <ExternalLink size={24} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="font-display font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
