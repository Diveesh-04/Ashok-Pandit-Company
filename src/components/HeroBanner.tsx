import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg-1.jpg";

const slides = [
  {
    image: heroBg,
    subtitle: "CHARTERED ACCOUNTANTS | MUMBAI, INDIA",
    title: "ASHOK PANDIT & CO.",
    description:
      "We are a professionally managed firm of Chartered Accountants providing quality services in the field of Audit & Assurance, Taxation, Corporate Advisory, and Business Management.",
  },
  {
    image: heroBg,
    subtitle: "TRUSTED FINANCIAL PARTNERS",
    title: "35+ YEARS OF EXCELLENCE",
    description:
      "With decades of experience, we have established ourselves as one of the most trusted CA firms in Mumbai, serving over 400 satisfied clients.",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-4">
            {slide.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary-foreground mb-6 leading-tight">
            {slide.title}
          </h1>
          <p className="text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
            {slide.description}
          </p>
          <a
            href="#about"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 tracking-wider transition-colors"
          >
            KNOW MORE
          </a>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 hover:bg-primary text-secondary-foreground p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 hover:bg-primary text-secondary-foreground p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-secondary-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
