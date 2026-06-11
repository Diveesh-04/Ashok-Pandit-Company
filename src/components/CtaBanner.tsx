import ctaImg from "@/assets/cta-image.jpg";

const CtaBanner = () => (
  <section className="grid md:grid-cols-2">
    <img src={ctaImg} alt="Business partnership" className="w-full h-[300px] object-cover" />
    <div className="bg-secondary flex items-center justify-center p-12 text-center">
      <div>
        <h2 className="font-heading font-bold text-3xl text-secondary-foreground mb-6">
          NEED MORE INFORMATION?
        </h2>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 tracking-wider transition-colors"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
