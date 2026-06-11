import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "admin@ashokpanditaca.in";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", city: "", email: "", mobile: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCity: ${form.city}\nEmail: ${form.email}\nMobile: ${form.mobile}\n\nMessage:\n${form.message}`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    toast({
      title: "Opening Gmail",
      description: "Sign in if needed, then send the draft. We will get back to you soon.",
    });
    setForm({ name: "", city: "", email: "", mobile: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">CONTACT</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">GET IN TOUCH WITH US</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <div className="bg-muted rounded overflow-hidden h-[400px] flex items-center justify-center border border-border">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted"
            />
            <Input
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="bg-muted"
            />
            <Input
              type="email"
              placeholder="E-Mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted"
            />
            <Input
              placeholder="Mobile"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="bg-muted"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-muted"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold py-3 tracking-wider transition-colors"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
