import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-secondary text-secondary-foreground text-sm py-2">
    <div className="container mx-auto flex justify-end gap-6 px-4">
      <a className="flex items-center gap-2 hover:text-primary transition-colors">
        <Phone size={14} /> +91 22 XXXX XX00
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@ashokpanditaca.in"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Mail size={14} /> admin@ashokpanditaca.in
      </a>
    </div>
  </div>
);

export default TopBar;
