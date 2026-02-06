export interface Service {
  id: string;
  title: string;
  description: string;
  overview: string;
  whoItIsFor: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: "software-development",
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from the ground up to meet your unique business requirements and workflows.",
    overview:
      "We design and develop custom software applications that solve complex business challenges. Our team works closely with you to understand your needs and deliver scalable, maintainable solutions that grow with your business.",
    whoItIsFor:
      "Businesses looking to automate processes, improve efficiency, or create unique digital products that off-the-shelf software cannot provide.",
    benefits: [
      "Perfectly aligned with your business processes",
      "Scalable architecture that grows with your needs",
      "Full ownership and control of your software",
      "Competitive advantage through custom features",
      "Integration with existing systems",
    ],
    process: [
      "Discovery & Requirements Analysis",
      "Architecture & Design Planning",
      "Agile Development & Iteration",
      "Quality Assurance & Testing",
      "Deployment & Training",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
    overview:
      "We build powerful web applications using the latest frameworks and technologies. From simple landing pages to complex enterprise platforms, we deliver fast, secure, and user-friendly web solutions.",
    whoItIsFor:
      "Companies needing customer-facing portals, internal management systems, e-commerce platforms, or SaaS products.",
    benefits: [
      "Cross-platform accessibility from any device",
      "Modern, intuitive user interfaces",
      "High performance and fast load times",
      "SEO-optimized for better visibility",
      "Secure and compliant with best practices",
    ],
    process: [
      "UX/UI Design & Prototyping",
      "Frontend Development (React, Next.js)",
      "Backend API Development",
      "Database Design & Implementation",
      "Security & Performance Optimization",
      "Launch & Post-Launch Support",
    ],
  },
  {
    id: "systems-automation",
    title: "Systems & Process Automation",
    description:
      "Streamline operations and reduce manual work through intelligent automation of business processes and workflows.",
    overview:
      "We identify repetitive tasks and manual processes in your organization and build automation solutions that save time, reduce errors, and free up your team to focus on high-value work.",
    whoItIsFor:
      "Organizations with repetitive manual tasks, data entry processes, or complex workflows that need streamlining.",
    benefits: [
      "Significant time and cost savings",
      "Reduced human error and increased accuracy",
      "Improved employee productivity",
      "Real-time data synchronization",
      "Better visibility into business operations",
    ],
    process: [
      "Process Analysis & Mapping",
      "Automation Opportunity Identification",
      "Solution Design & Planning",
      "Development & Integration",
      "Testing & Validation",
      "Monitoring & Continuous Improvement",
    ],
  },
  {
    id: "startup-product-development",
    title: "Startup & MVP Development",
    description:
      "Fast-track your startup idea with rapid MVP development and iterative product evolution based on user feedback.",
    overview:
      "We help startups and entrepreneurs bring their ideas to life quickly and cost-effectively. Our lean approach focuses on building minimum viable products that validate your concept and attract early users.",
    whoItIsFor:
      "Startups, entrepreneurs, and innovators looking to quickly test market fit and iterate on their product ideas.",
    benefits: [
      "Faster time to market",
      "Lower initial investment",
      "Validation before full-scale development",
      "Flexibility to pivot based on feedback",
      "Technical expertise without hiring a full team",
    ],
    process: [
      "Idea Validation & Market Research",
      "MVP Scope Definition",
      "Rapid Prototyping & Development",
      "User Testing & Feedback Collection",
      "Iterative Improvements",
      "Scaling & Growth Support",
    ],
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting & Strategy",
    description:
      "Expert guidance on technology decisions, architecture planning, and digital transformation initiatives.",
    overview:
      "Our consultants bring years of experience to help you make informed technology decisions, plan your digital roadmap, and avoid costly mistakes. We provide objective advice tailored to your business goals.",
    whoItIsFor:
      "Companies planning major technology investments, digital transformations, or needing expert guidance on technical decisions.",
    benefits: [
      "Avoid costly technology mistakes",
      "Make informed decisions with expert input",
      "Optimize existing systems and processes",
      "Plan for long-term scalability",
      "Access to specialized expertise",
    ],
    process: [
      "Current State Assessment",
      "Goal & Requirements Definition",
      "Technology Evaluation & Recommendations",
      "Roadmap & Strategy Development",
      "Implementation Guidance",
      "Ongoing Advisory Support",
    ],
  },
];
