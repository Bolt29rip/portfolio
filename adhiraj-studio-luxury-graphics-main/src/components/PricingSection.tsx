import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "Perfect for small projects",
    features: ["1 Design Concept", "2 Revisions", "Source Files", "3-Day Delivery"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    desc: "Best for content creators",
    features: ["3 Design Concepts", "Unlimited Revisions", "Source Files + Mockups", "Priority Support", "2-Day Delivery"],
    featured: true,
  },
  {
    name: "Premium",
    price: "$199",
    desc: "Full branding packages",
    features: ["5 Design Concepts", "Unlimited Revisions", "Full Brand Kit", "Social Media Package", "1-Day Rush Available", "Dedicated Support"],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Simple <span className="gold-gradient-text">Pricing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-7 flex flex-col ${plan.featured ? "gold-glow border-primary/30 relative" : ""}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient-bg text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-lg text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
              <p className="font-display text-4xl font-black gold-gradient-text mb-6">
                {plan.price}<span className="text-base font-normal text-muted-foreground">/project</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? "gold-gradient-bg text-primary-foreground gold-glow hover:gold-glow-strong"
                    : "border border-border hover:border-primary/50 text-foreground hover-gold-glow"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
