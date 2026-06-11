import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Ashok Pandit & Co.</h4>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
            A professionally managed Chartered Accountancy firm providing quality financial services since 1990.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-navy-light rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {[
              { label: "Business Management", href: "/services/business-management" },
              { label: "Project Finance", href: "/services/project-finance" },
              { label: "Tax Advisory", href: "/services/tax-advisory" },
              { label: "Audit & Assurance", href: "/services/audit-assurance" },
            ].map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-primary transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Office Info</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/70">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              123, Business Centre, Fort, Mumbai – 400 011, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              +91 22 XXXX XX00
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" />
              admin@ashokpanditaca.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-light py-4">
      <p className="text-center text-sm text-secondary-foreground/50">
        © 2015 Ashok Pandit & Co. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
