import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, FileUp, Loader2 } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CAREERS_EMAIL = "admin@ashokpanditaca.in";
const MAX_RESUME_SIZE_MB = 5;
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const positions = [
  "Semi-Qualified / Article Assistant",
  "Qualified Chartered Accountant",
  "Tax Executive",
  "Audit Executive",
  "Accounts Executive",
  "Administrative / Support Staff",
  "Other",
];

const whyJoin = [
  "Partner-led mentoring and exposure to diverse client assignments",
  "Structured learning across audit, tax, and advisory practices",
  "Professional work environment in Mumbai with stable growth paths",
  "Opportunity to work with SMEs, corporates, and project finance clients",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  message: "",
};

const Careers = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setForm(initialForm);
    setResume(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openGmailFallback = () => {
    const subject = encodeURIComponent(`Career Application: ${form.position} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPosition: ${form.position}\nExperience: ${form.experience || "—"}\n\nCover Letter:\n${form.message}\n\nResume: ${resume?.name ?? "Not attached"} — please attach your resume file before sending.`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${CAREERS_EMAIL}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      toast({
        title: "Resume required",
        description: "Please upload your resume in PDF or Word format.",
        variant: "destructive",
      });
      return;
    }

    if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document (.pdf, .doc, .docx).",
        variant: "destructive",
      });
      return;
    }

    if (resume.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Resume must be ${MAX_RESUME_SIZE_MB} MB or smaller.`,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
    formData.append("_subject", `Career Application: ${form.position} — ${form.name}`);
    formData.append("_captcha", "false");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("position", form.position);
    formData.append("experience", form.experience || "—");
    formData.append("message", form.message);
    formData.append("attachment", resume);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CAREERS_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast({
        title: "Application submitted",
        description: "Thank you for applying. Our HR team will review your profile and contact you shortly.",
      });
      resetForm();
    } catch {
      openGmailFallback();
      toast({
        title: "Opening Gmail",
        description:
          "We could not upload your resume automatically. Please attach your resume file in Gmail before sending.",
      });
      resetForm();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">JOIN OUR TEAM</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-secondary-foreground">CAREERS</h1>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">
            Build your career with Ashok Pandit & Co. Submit your application and resume below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="text-primary" size={24} />
                Why Work With Us
              </h2>
              <ul className="space-y-4 mb-10">
                {whyJoin.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Open Positions</h3>
              <ul className="space-y-2">
                {positions.slice(0, -1).map((role) => (
                  <li key={role} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-6 md:p-8 space-y-4">
              <h2 className="font-heading font-bold text-xl text-foreground mb-2">Apply Now</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Fill in your details and attach your resume (PDF or Word, max {MAX_RESUME_SIZE_MB} MB).
              </p>

              <div className="space-y-2">
                <Label htmlFor="career-name">Full Name</Label>
                <Input
                  id="career-name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-muted"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="career-email">Email</Label>
                  <Input
                    id="career-email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career-phone">Mobile</Label>
                  <Input
                    id="career-phone"
                    type="tel"
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="bg-muted"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="career-position">Position Applying For</Label>
                <select
                  id="career-position"
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a position</option>
                  {positions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="career-experience">Years of Experience (optional)</Label>
                <Input
                  id="career-experience"
                  placeholder="e.g. 2 years"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="bg-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="career-message">Cover Letter / Message</Label>
                <Textarea
                  id="career-message"
                  placeholder="Briefly tell us about yourself and why you want to join us..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="career-resume">Resume</Label>
                <div className="relative">
                  <Input
                    id="career-resume"
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                    required
                    className="bg-muted file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                </div>
                {resume && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <FileUp size={12} className="text-primary" />
                    {resume.name} ({(resume.size / 1024).toFixed(0)} KB)
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground font-heading font-semibold py-3 tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  "SUBMIT APPLICATION"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Careers;
