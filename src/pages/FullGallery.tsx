import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import photo1 from "@/assets/project-photo1.jpg";
import photo2 from "@/assets/project-photo2.jpg";
import photo3 from "@/assets/project-photo3.jpg";
import photo4 from "@/assets/project-photo4.jpg";
import photo5 from "@/assets/project-photo5.jpg";
import photo6 from "@/assets/project-photo6.jpg";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const photos = [
  { src: photo4, label: "Lawn Care" },
  { src: photo2, label: "Lawn Care" },
  { src: photo6, label: "Lawn Care" },
  { src: photo1, label: "Tree Service" },
  { src: photo3, label: "Tree Service" },
  { src: photo5, label: "Tree Service" },
];

const FullGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/#gallery" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Full Project Gallery</h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Browse all of our completed lawn care and tree service projects across Richmond, Virginia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {photos.map((p, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                onClick={() => setSelected(p.src)}
              >
                <img src={p.src} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                  <span className="text-primary-foreground font-semibold p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {selected && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="Project photo" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain" />
        </div>
      )}
    </div>
  );
};

export default FullGallery;
