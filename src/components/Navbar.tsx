import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="BK Mowing logo" className="h-12 w-12 object-contain" />
          <span className="font-display text-xl font-bold text-primary">BK Mowing</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:804-426-1704" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" /> (804) 426-1704
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground/80 hover:text-primary font-medium">
              {l.label}
            </a>
          ))}
          <a href="tel:804-426-1704" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold">
            <Phone className="w-4 h-4" /> (804) 426-1704
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
