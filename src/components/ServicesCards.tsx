import { Link } from "react-router-dom";
import { servicePages } from "@/data/services";

const ServicesCards = () => (
  <section id="services" className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicePages.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="bg-card border border-border rounded p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block"
          >
            <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
              <s.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCards;
