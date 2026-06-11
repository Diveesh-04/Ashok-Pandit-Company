import { User } from "lucide-react";

const team = [
  { name: "Ashok Pandit", qualifications: "B.Com, FCA" },
  { name: "Vikas S Mahdale", qualifications: "B.Com, FCA" },
];

const TeamSection = () => (
  <section id="team" className="py-20 bg-muted">
    <div className="container mx-auto px-4 text-center">
      <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">OUR TEAM</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12">
        OUR PROFESSIONAL TEAM
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto justify-items-center">
        {team.map((m) => (
          <div
            key={m.name}
            className="w-full max-w-xs bg-card border border-border rounded p-8 hover:shadow-lg transition-shadow text-center"
          >
            <div className="w-24 h-24 mx-auto mb-5 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="text-primary" size={40} />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground leading-snug">{m.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{m.qualifications}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
