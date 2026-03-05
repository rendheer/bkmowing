import heroImg from "@/assets/project-photo7.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Beautiful lawn maintained by BK Mowing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">Richmond, Virginia</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Professional Lawn Care & Tree Services
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl font-light mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Transforming outdoor spaces across Richmond with expert mowing, landscaping, and tree care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a href="#contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
            Get a Free Estimate
          </a>
          <a href="tel:804-426-1704" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
