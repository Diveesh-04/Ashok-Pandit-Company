import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

const articles = [
  {
    title: "Union Budget 2026: Key Takeaways for Businesses",
    category: "Tax & Regulatory",
    date: "15 Feb 2026",
    excerpt:
      "An overview of corporate tax changes, customs duty revisions, and compliance obligations introduced in the latest Union Budget relevant to Indian enterprises.",
  },
  {
    title: "GST Annual Return Filing: Common Errors to Avoid",
    category: "GST",
    date: "28 Jan 2026",
    excerpt:
      "Practical guidance on reconciling GSTR-1 and GSTR-3B, matching ITC claims, and reducing notices during annual return scrutiny.",
  },
  {
    title: "Internal Controls for Growing SMEs",
    category: "Audit & Assurance",
    date: "10 Jan 2026",
    excerpt:
      "How small and mid-sized businesses can strengthen financial controls, segregation of duties, and documentation before scaling operations.",
  },
  {
    title: "Transfer Pricing Documentation in India",
    category: "International Tax",
    date: "5 Dec 2025",
    excerpt:
      "A summary of Master File, Local File, and Country-by-Country reporting requirements for companies with related-party cross-border transactions.",
  },
  {
    title: "Companies Act Compliance Calendar for FY 2025–26",
    category: "Corporate Law",
    date: "18 Nov 2025",
    excerpt:
      "Important board meeting, AGM, and ROC filing deadlines every private and public company should track through the financial year.",
  },
  {
    title: "Project Finance: Structuring Debt for Infrastructure",
    category: "Advisory",
    date: "2 Oct 2025",
    excerpt:
      "Insights on lender due diligence, cash-flow modelling, and security creation for infrastructure and real-estate project financing.",
  },
];

const Articles = () => (
  <SiteLayout>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">KNOWLEDGE BANK</p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-secondary-foreground">ARTICLES</h1>
        <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto">
          Expert perspectives on taxation, audit, corporate law, and business advisory from Ashok Pandit & Co.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1">
                  <Tag size={12} className="text-primary" />
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} className="text-primary" />
                  {article.date}
                </span>
              </div>
              <h2 className="font-heading font-bold text-lg text-foreground mb-3 leading-snug">{article.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.excerpt}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-xl mx-auto">
          For detailed advice on any topic above,{" "}
          <a href="/#contact" className="text-primary hover:underline font-medium">
            contact our team
          </a>
          .
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Articles;
