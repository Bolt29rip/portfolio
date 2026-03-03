import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex 'StormX' Chen",
    role: "Esports Team Manager",
    text: "Adhiraj delivered stunning tournament graphics that elevated our brand to the next level. The attention to detail was insane.",
  },
  {
    name: "Sarah Mitchell",
    role: "YouTube Creator (500K+)",
    text: "My click-through rates jumped 40% after Adhiraj redesigned my thumbnails. He truly understands the gaming audience.",
  },
  {
    name: "RavenGG",
    role: "Twitch Streamer",
    text: "The full rebrand Adhiraj created for my channel was exactly what I needed. Professional, bold, and unforgettable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Client <span className="gold-gradient-text">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-gold-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-primary text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
