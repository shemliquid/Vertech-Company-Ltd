import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ],
  services: [
    { label: "Software Development", path: "/services#software-development" },
    {
      label: "Web Applications",
      path: "/services#web-application-development",
    },
    { label: "Systems & Automation", path: "/services#systems-automation" },
    { label: "Technical Consulting", path: "/services#technical-consulting" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              Building reliable software solutions that power modern businesses
              and drive digital transformation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-primary font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-navy-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-primary font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-navy-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-primary font-semibold text-white mb-5">
              Get Started
            </h4>
            <p className="text-navy-300 text-sm leading-relaxed mb-5">
              Ready to bring your project to life? Let's discuss how we can
              help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-200 font-medium text-sm group"
            >
              Start a Project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-6 pb-24 lg:pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {currentYear} Vertex Tech Company Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-navy-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-navy-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
