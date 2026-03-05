import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="BK Mowing" className="h-10 w-10 object-contain brightness-0 invert" />
        <span className="font-display font-bold text-primary-foreground">BK Mowing</span>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} BK Mowing. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
