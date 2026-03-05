import { Scissors, TreePine, Flower2, Fence } from "lucide-react";

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Regular mowing with precision striping to keep your lawn looking its best year-round." },
  { icon: TreePine, title: "Tree Services", desc: "Professional tree trimming, pruning, and removal by experienced climbers." },
  { icon: Flower2, title: "Landscaping", desc: "Garden bed maintenance, mulching, and seasonal clean-ups for a polished look." },
  { icon: Fence, title: "Property Maintenance", desc: "Complete outdoor care including edging, leaf removal, and property upkeep." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
