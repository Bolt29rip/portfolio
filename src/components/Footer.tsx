const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-bold gold-gradient-text">
          Adhiraj Studio
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Adhiraj Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
