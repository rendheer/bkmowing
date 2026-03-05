import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Yard?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <a href="tel:804-426-1704" className="flex flex-col items-center text-center p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Phone className="w-10 h-10 mb-4 text-accent" />
            <h3 className="font-bold text-lg mb-1">Call Us</h3>
            <p className="text-primary-foreground/80">(804) 426-1704</p>
          </a>
          <a href="mailto:bkmowing804@gmail.com" className="flex flex-col items-center text-center p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Mail className="w-10 h-10 mb-4 text-accent" />
            <h3 className="font-bold text-lg mb-1">Email Us</h3>
            <p className="text-primary-foreground/80">bkmowing804@gmail.com</p>
          </a>
          <div className="flex flex-col items-center text-center p-8 rounded-xl bg-primary-foreground/10">
            <MapPin className="w-10 h-10 mb-4 text-accent" />
            <h3 className="font-bold text-lg mb-1">Service Area</h3>
            <p className="text-primary-foreground/80">Richmond, Virginia</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="tel:804-426-1704" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Call for a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
