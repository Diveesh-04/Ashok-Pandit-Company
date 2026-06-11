import { Briefcase, FileText, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";

export type ServicePageData = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  intro: string[];
  offerings: string[];
  benefits: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "business-management",
    title: "Business Management",
    icon: Briefcase,
    tagline: "Strategic advisory for sustainable growth and operational excellence.",
    intro: [
      "Our business management practice helps owners and leadership teams make informed decisions on structure, performance, and long-term strategy. We work closely with SMEs and growing enterprises across Mumbai and India.",
      "From budgeting and MIS reporting to governance frameworks and turnaround support, we align financial insight with your business goals.",
    ],
    offerings: [
      "Business planning, budgeting, and cash-flow forecasting",
      "Management information systems (MIS) and KPI dashboards",
      "Organizational structure and process reviews",
      "Working capital and profitability analysis",
      "Family business succession and governance advisory",
      "Support during expansion, merger, or restructuring",
    ],
    benefits: [
      "Clear visibility into financial performance",
      "Practical recommendations from experienced CAs",
      "Scalable frameworks as your business grows",
      "Confidential, partner-led engagement",
    ],
  },
  {
    slug: "project-finance",
    title: "Project Finance",
    icon: TrendingUp,
    tagline: "End-to-end support for funding infrastructure, real estate, and industrial projects.",
    intro: [
      "We assist promoters, developers, and lenders with structuring, documenting, and monitoring project finance transactions. Our team understands lender expectations and regulatory requirements in the Indian context.",
      "Whether you are raising term loans, consortium finance, or refinancing existing facilities, we help present a credible financial case.",
    ],
    offerings: [
      "Project feasibility and viability studies",
      "Financial modelling and sensitivity analysis",
      "Lender due diligence coordination",
      "Term sheet review and debt structuring advice",
      "Security creation and charge documentation support",
      "Post-disbursement monitoring and covenant compliance",
    ],
    benefits: [
      "Faster lender approvals with well-prepared submissions",
      "Realistic projections backed by professional analysis",
      "Reduced risk of covenant breaches and rework",
      "Single point of contact across banks and stakeholders",
    ],
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    icon: FileText,
    tagline: "Proactive tax planning and compliance for individuals, firms, and corporates.",
    intro: [
      "Tax laws in India evolve continuously. Our tax advisory team helps you stay compliant while optimizing liabilities within the framework of direct and indirect tax legislation.",
      "We represent clients before authorities where needed and provide clear, timely advice on transactions, reorganizations, and cross-border matters.",
    ],
    offerings: [
      "Direct tax planning for corporates, firms, and individuals",
      "GST registration, returns, refunds, and litigation support",
      "Transfer pricing documentation and assessments",
      "International tax and DTAA advisory",
      "Tax due diligence for M&A and investments",
      "Representation before Assessing Officers and appellate authorities",
    ],
    benefits: [
      "Reduced exposure to penalties and interest",
      "Structured approach to complex transactions",
      "Up-to-date knowledge of notifications and circulars",
      "Responsive support during scrutiny and assessments",
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    icon: ShieldCheck,
    tagline: "Independent audits that strengthen trust with regulators, lenders, and investors.",
    intro: [
      "Ashok Pandit & Co. delivers statutory, tax, and internal audit services with a focus on quality, independence, and actionable findings. We follow applicable Standards on Auditing and regulatory guidance.",
      "Our audits go beyond compliance—we highlight control weaknesses and recommend improvements that add real value to your organization.",
    ],
    offerings: [
      "Statutory audit under the Companies Act",
      "Tax audit under Section 44AB of the Income-tax Act",
      "Internal audit and concurrent audit assignments",
      "Limited review and special purpose audits",
      "Stock and revenue audits for banks and institutions",
      "IFC testing and CARO reporting support",
    ],
    benefits: [
      "Timely completion with minimal disruption to operations",
      "Experienced engagement teams led by partners",
      "Clear management letters and follow-up on observations",
      "Enhanced credibility with banks and investors",
    ],
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>;
