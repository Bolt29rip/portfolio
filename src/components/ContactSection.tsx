import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site — could wire to a service later
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Let's <span className="gold-gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="gold-gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 gold-glow hover:gold-glow-strong transition-all duration-500 w-full justify-center"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-4">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MessageCircle size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Discord</p>
                    <p className="text-xs text-muted-foreground">Chat with me directly</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/_adhiraj18_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Instagram</p>
                    <p className="text-xs text-muted-foreground">Follow my latest work</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary font-medium">Response time:</span> Usually within 24 hours. For urgent projects, reach out on Discord.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
