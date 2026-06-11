import { Link } from "react-router-dom";
import { Handshake, Newspaper, CalendarDays, Clock } from "lucide-react";

const links = [
  {
    icon: Handshake,
    title: "Work With Us",
    text: "Explore career opportunities and join our team of professionals.",
    href: "/careers",
  },
  {
    icon: Newspaper,
    title: "What's New",
    text: "Stay updated with the latest financial news and regulatory changes.",
    href: "/articles",
  },
  {
    icon: CalendarDays,
    title: "Event Calendar",
    text: "View upcoming seminars, workshops, and important dates.",
    href: "/#contact",
  },
  {
    icon: Clock,
    title: "Timesheet",
    text: "Access your timesheet and project tracking tools.",
    href: "/#contact",
  },
];

const QuickLinks = () => (
  <section className="py-16 bg-muted">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((l) => (
          <Link
            key={l.title}
            to={l.href}
            className="bg-card border border-border rounded p-6 hover:shadow-lg hover:border-primary/30 transition-all group block"
          >
            <l.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-heading font-bold text-foreground mb-2">{l.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{l.text}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default QuickLinks;
