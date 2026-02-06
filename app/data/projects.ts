export interface Project {
  id: number;
  name: string;
  industry: string;
  description: string;
  keyResults: string[];
  link?: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Enterprise Resource Planning System",
    industry: "Manufacturing",
    description:
      "A comprehensive ERP solution that streamlined operations across multiple departments, from inventory management to financial reporting.",
    keyResults: [
      "40% reduction in order processing time",
      "Real-time inventory tracking across 5 warehouses",
      "Automated financial reporting and compliance",
      "Integration with existing CRM and accounting systems",
    ],
    link: null,
  },
  {
    id: 2,
    name: "Customer Portal & Mobile App",
    industry: "Financial Services",
    description:
      "A secure, user-friendly customer portal and mobile application enabling clients to manage their accounts, view statements, and submit requests 24/7.",
    keyResults: [
      "85% reduction in customer service calls",
      "4.8/5 average user rating on app stores",
      "99.9% uptime with bank-level security",
      "Supported 50,000+ active users",
    ],
    link: null,
  },
  {
    id: 3,
    name: "Automated Workflow Platform",
    industry: "Healthcare",
    description:
      "Intelligent automation platform that digitized paper-based processes and reduced manual data entry for a healthcare provider network.",
    keyResults: [
      "70% reduction in processing time",
      "Eliminated 95% of data entry errors",
      "Processed 10,000+ patient forms monthly",
      "HIPAA compliant with audit trail",
    ],
    link: null,
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    industry: "Retail",
    description:
      "Modern e-commerce platform with inventory management, payment processing, and customer analytics for a growing retail business.",
    keyResults: [
      "300% increase in online sales",
      "Mobile-optimized checkout experience",
      "Integrated with multiple payment gateways",
      "Real-time inventory synchronization",
    ],
    link: null,
  },
  {
    id: 5,
    name: "Business Intelligence Dashboard",
    industry: "Logistics",
    description:
      "Real-time analytics dashboard providing insights into fleet performance, delivery metrics, and operational efficiency.",
    keyResults: [
      "Consolidated data from 15+ sources",
      "Real-time KPI tracking and alerts",
      "30% improvement in route optimization",
      "Custom reports for different stakeholders",
    ],
    link: null,
  },
  {
    id: 6,
    name: "SaaS MVP for Startups",
    industry: "Technology",
    description:
      "Rapid MVP development for a tech startup, validating their product concept and securing seed funding within 3 months.",
    keyResults: [
      "Launched in 8 weeks from concept",
      "Acquired 500+ beta users",
      "Secured $500K in seed funding",
      "Validated product-market fit",
    ],
    link: null,
  },
];
