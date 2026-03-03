import { motion } from "framer-motion";
import { Image, Youtube, Palette, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Image,
    title: "Esports Posters & Tournament Graphics",
    desc: "Eye-catching tournament visuals and match-day graphics that hype up your community.",
  },
  {
    icon: Youtube,
    title: "YouTube Thumbnails",
    desc: "Click-worthy thumbnails designed to boost your CTR and stand out in the feed.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Bold, memorable logos and brand identities for teams, streamers, and gaming orgs.",
  },
  {
    icon: LayoutGrid,
    title: "Banners & Social Media Kits",
    desc: "Complete social media packages — Twitter, YouTube, Discord banners and more.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What I <span className="gold-gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover-gold-glow cursor-default"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3 text-sm md:text-base">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
