import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string };

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Partners", href: "/#team" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Business Management", href: "/services/business-management" },
      { label: "Project Finance", href: "/services/project-finance" },
      { label: "Tax Advisory", href: "/services/tax-advisory" },
      { label: "Audit & Assurance", href: "/services/audit-assurance" },
    ],
  },
  {
    label: "Knowledge Bank",
    href: "/articles",
    children: [
      { label: "Articles", href: "/articles" },
      { label: "Newsletters", href: "/newsletters" },
    ],
  },
  
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
            CA
          </div>
          <span className="text-secondary-foreground font-heading font-bold text-lg hidden sm:block">
            Ashok Pandit & Co.
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <a
                href={link.href}
                className="text-secondary-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.children && <ChevronDown size={14} />}
              </a>
              {link.children && dropdown === link.label && (
                <div className="absolute top-full left-0 bg-secondary border border-navy-light rounded shadow-lg min-w-[180px] py-1 z-50">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-navy-light hover:text-primary transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-secondary border-t border-navy-light pb-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                className="block px-6 py-2 text-secondary-foreground hover:text-primary text-sm font-medium"
                onClick={() => !link.children && setOpen(false)}
              >
                {link.label}
              </a>
              {link.children?.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-10 py-1.5 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
