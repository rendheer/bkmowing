import logo from "@/assets/logo.jpg";
import { Facebook } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61571841825200#", label: "Facebook" },
  // Add more social links here, e.g.:
  // { icon: Instagram, href: "https://instagram.com/bkmowing", label: "Instagram" },
  // { icon: Twitter, href: "https://twitter.com/bkmowing", label: "Twitter" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="BK Mowing" className="h-10 w-10 object-contain brightness-0 invert" />
        <span className="font-display font-bold text-primary-foreground">BK Mowing</span>
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${s.label === 'Facebook' ? 'bg-[#1877F2] hover:bg-[#166FE5]' : 'bg-primary-foreground/10 hover:bg-primary-foreground/20'}`}>
            <s.icon className="w-5 h-5 text-white" />
          </a>
        ))}
      </div>
      <p className="text-sm">© {new Date().getFullYear()} BK Mowing. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
