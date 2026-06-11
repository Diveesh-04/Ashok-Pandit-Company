import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

const newsletters = [
  {
    title: "Ashok Pandit & Co. Newsletter — Q1 2026",
    date: "March 2026",
    summary:
      "Budget highlights, GST compliance updates, and a checklist for FY 2025–26 year-end closing for corporates and SMEs.",
  },
  {
    title: "Ashok Pandit & Co. Newsletter — Q4 2025",
    date: "December 2025",
    summary:
      "Year-end tax planning tips, TDS/TRACES reconciliation, and key ROC compliances before 31 March.",
  },
  {
    title: "Ashok Pandit & Co. Newsletter — Q3 2025",
    date: "September 2025",
    summary:
      "Updates on transfer pricing audits, FEMA reporting changes, and best practices for internal audit readiness.",
  },
  {
    title: "Ashok Pandit & Co. Newsletter — Q2 2025",
    date: "June 2025",
    summary:
      "Advance tax instalments, GST rate notifications, and guidance on project finance documentation for lenders.",
  },
  {
    title: "Ashok Pandit & Co. Newsletter — Q1 2025",
    date: "March 2025",
    summary:
      "Union Budget 2025 recap, ITR filing reminders, and corporate governance trends for listed and unlisted companies.",
  },
];

const Newsletters = () => (
  <SiteLayout>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">KNOWLEDGE BANK</p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-secondary-foreground">NEWSLETTERS</h1>
        <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">
          Quarterly updates on regulatory changes, compliance deadlines, and practical insights for our clients.
        </p>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto space-y-6">
          {newsletters.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <p className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} className="text-primary" />
                    {item.date}
                  </p>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.summary}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 tracking-wide transition-colors"
                  onClick={() =>
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=admin@ashokpanditaca.in&su=${encodeURIComponent(`Request: ${item.title}`)}&body=${encodeURIComponent(`Please share a copy of "${item.title}".\n\nThank you.`)}`,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <Download size={16} />
                  Request Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-xl mx-auto">
          To subscribe to future editions, write to{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@ashokpanditaca.in&su=Newsletter%20Subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            admin@ashokpanditaca.in
          </a>
          .
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Newsletters;
