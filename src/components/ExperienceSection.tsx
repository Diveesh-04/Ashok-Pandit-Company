import { Users, UserCheck, Settings } from "lucide-react";
import meetingImg from "@/assets/meeting.jpg";

const stats = [
  { icon: Users, value: "3+", label: "Team Members" },
  { icon: UserCheck, value: "400+", label: "Clients Served" },
  { icon: Settings, value: "3+", label: "Our Services" },
];

const ExperienceSection = () => (
  <section className="bg-secondary text-secondary-foreground">
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">
          WHY CHOOSE US
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-12">
          35+ YEARS OF EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.icon className="text-primary mb-3" size={36} />
              <span className="font-heading font-bold text-4xl text-primary">{s.value}</span>
              <span className="text-secondary-foreground/70 mt-1 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img
      src={meetingImg}
      alt="Business meeting"
      className="w-full h-[350px] object-cover"
    />
  </section>
);

export default ExperienceSection;
