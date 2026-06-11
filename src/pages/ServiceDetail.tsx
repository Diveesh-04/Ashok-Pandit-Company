import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { servicePagesBySlug } from "@/data/services";
import NotFound from "@/pages/NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicePagesBySlug[slug] : undefined;

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;

  return (
    <SiteLayout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">OUR SERVICES</p>
          <div className="w-16 h-16 mx-auto mb-5 bg-primary/20 rounded-full flex items-center justify-center">
            <Icon className="text-primary" size={32} />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-secondary-foreground uppercase">
            {service.title}
          </h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">{service.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="space-y-6 mb-12">
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-5">What We Offer</h2>
              <ul className="space-y-3">
                {service.offerings.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted border border-border rounded p-6 md:p-8">
              <h2 className="font-heading font-bold text-xl text-foreground mb-5">Why Clients Choose Us</h2>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 text-center">
            <p className="text-muted-foreground text-sm mb-6">
              Speak with our team to discuss how {service.title.toLowerCase()} can support your organization.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 tracking-wider transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServiceDetail;
