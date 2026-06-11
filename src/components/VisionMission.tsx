import { Eye, Target } from "lucide-react";

const VisionMission = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex gap-5">
          <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
            <Eye className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading Chartered Accountancy firm recognized for our commitment to excellence, innovation, and ethical practices. We aspire to be the trusted financial partner for businesses of all sizes, helping them achieve sustainable growth and success.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
            <Target className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide comprehensive, high-quality financial services that add value to our clients' businesses. We are dedicated to maintaining the highest standards of professional integrity while fostering long-term relationships built on trust and mutual respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
