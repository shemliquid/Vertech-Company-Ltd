"use client";

import Link from "next/link";
import Button from "./components/Button";
import Card from "./components/Card";
import ClockWidget from "./components/ClockWidget";
import Logo from "./components/Logo";
import { services } from "./data/services";
import { projects } from "./data/projects";

// Icons for services
const serviceIcons: Record<string, React.ReactNode> = {
  "software-development": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  "web-application-development": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  "systems-automation": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  "startup-product-development": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  "technical-consulting": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const features = [
  {
    title: "Expert Team",
    description:
      "Skilled developers and consultants with years of industry experience.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Quality First",
    description:
      "Rigorous testing and code reviews ensure reliable, maintainable software.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule, every time.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and regular updates throughout your project.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

export default function Homepage() {
  // Use first 4 services and first 3 projects for homepage
  const featuredServices = services.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float delay-200" />

        <div className="container-custom relative z-10 pt-4 lg:pt-20">
          {/* Mobile: Branding Left, Clock Right (hidden on desktop) */}
          <div className="lg:hidden mb-6 animate-fade-in-up">
            <div className="flex flex-row items-center justify-between gap-4">
              {/* Left: Company Branding */}
              <div className="flex items-center pl-2">
                <Logo variant="light" showText={true} className="w-32 h-32" />
              </div>

              {/* Right: Clock Widget */}
              <div className="w-32 h-32 flex-shrink-0">
                <ClockWidget />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Left — headline + CTA */}
            <div className="w-full lg:w-[80%]">
              <div className="animate-fade-in-up">
                <span className="section-label text-accent-light mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
                  Software Development & Consulting
                </span>
              </div>

              <h1 className="text-display text-white mb-6 animate-fade-in-up delay-100">
                Building Software That
                <span className="block text-gradient bg-gradient-to-r from-accent-light to-accent">
                  Powers Business Growth
                </span>
              </h1>

              <p className="text-body-lg text-navy-300 mb-10 max-w-2xl animate-fade-in-up delay-200">
                Vertex Tech Company delivers reliable, scalable software
                solutions for modern businesses and startups. From custom
                development to technical consulting, we turn your ideas into
                reality.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={
                      <svg
                        className="w-5 h-5"
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
                    }
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline-light" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — clock (desktop only) */}
            <div
              className="hidden lg:block lg:w-[20%] animate-fade-in-up delay-200"
              style={{ aspectRatio: "1" }}
            >
              <div className="w-full h-full">
                <ClockWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20">
        <div className="container-custom">
          <div
            className="rounded-2xl overflow-hidden animate-fade-in-up"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
              boxShadow: "0 8px 40px -8px rgba(15,23,42,0.45)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative text-center py-2.5 md:py-8 px-1 md:px-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* vertical divider (skip first col) */}
                  {index > 0 && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2"
                      style={{
                        width: 1,
                        height: "50%",
                        background:
                          "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
                      }}
                    />
                  )}
                  {/* icon */}
                  <div
                    className="w-7 h-7 md:w-10 md:h-10 mx-auto mb-1.5 md:mb-3 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.12)" }}
                  >
                    {index === 0 && (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  {/* value */}
                  <div
                    className="text-xl md:text-3xl lg:text-4xl font-bold mb-0.5 md:mb-1"
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[9px] md:text-xs text-navy-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive software solutions tailored to your unique business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {featuredServices.map((service, index) => {
              const accentColors = [
                {
                  color: "#3b82f6",
                  glow: "rgba(59,130,246,0.15)",
                  border: "rgba(59,130,246,0.25)",
                },
                {
                  color: "#10b981",
                  glow: "rgba(16,185,129,0.15)",
                  border: "rgba(16,185,129,0.25)",
                },
                {
                  color: "#8b5cf6",
                  glow: "rgba(139,92,246,0.15)",
                  border: "rgba(139,92,246,0.25)",
                },
                {
                  color: "#f59e0b",
                  glow: "rgba(245,158,11,0.15)",
                  border: "rgba(245,158,11,0.25)",
                },
              ];
              const accent = accentColors[index % accentColors.length];
              return (
                <div
                  key={service.id}
                  className="animate-fade-in-up group relative rounded-xl overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,41,59,0.8))",
                    border: `1px solid ${accent.border}`,
                    boxShadow: `0 4px 24px -4px rgba(15,23,42,0.4)`,
                    transition:
                      "box-shadow 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 4px 32px -4px ${accent.glow}, 0 0 0 1px ${accent.border}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 4px 24px -4px rgba(15,23,42,0.4)`;
                  }}
                >
                  {/* subtle corner grid decoration */}
                  <div
                    className="absolute inset-0 bg-grid-pattern opacity-8 pointer-events-none"
                    style={{ opacity: 0.06 }}
                  />

                  <div className="relative z-10 p-3 md:p-6">
                    {/* top row: numbered tag + icon */}
                    <div className="flex items-start justify-between mb-2 md:mb-4">
                      <div
                        className="w-8 h-8 md:w-11 md:h-11 rounded-lg flex items-center justify-center"
                        style={{
                          background: accent.glow,
                          color: accent.color,
                          boxShadow: `0 0 14px ${accent.glow}`,
                        }}
                      >
                        {serviceIcons[service.id] ||
                          serviceIcons["software-development"]}
                      </div>
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: accent.color, opacity: 0.6 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-sm md:text-base font-semibold text-white mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-navy-400 text-xs md:text-sm leading-relaxed mb-2 md:mb-5">
                      {service.description}
                    </p>

                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider group/link"
                      style={{ color: accent.color }}
                    >
                      Explore
                      <svg
                        className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* bottom coloured accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/services">
              <Button variant="outline" size="md">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="section-label">Why Vertex</span>
              <h2 className="section-title">Why Businesses Trust Us</h2>
              <p className="section-subtitle mb-10">
                We combine technical expertise with a deep understanding of
                business needs to deliver solutions that drive real results.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const featureAccents = [
                    "#3b82f6",
                    "#10b981",
                    "#8b5cf6",
                    "#f59e0b",
                  ];
                  const featureGlows = [
                    "rgba(59,130,246,0.14)",
                    "rgba(16,185,129,0.14)",
                    "rgba(139,92,246,0.14)",
                    "rgba(245,158,11,0.14)",
                  ];
                  const col = featureAccents[index];
                  const bg = featureGlows[index];
                  return (
                    <div
                      key={feature.title}
                      className="relative animate-fade-in-up rounded-xl overflow-hidden group"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        background:
                          "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(30,41,59,0.88))",
                        border: "1px solid rgba(255,255,255,0.07)",
                        transition:
                          "border-color 0.35s ease, box-shadow 0.35s ease",
                      }}
                    >
                      {/* left coloured glow border */}
                      <div
                        className="absolute left-0 top-0 bottom-0"
                        style={{
                          width: 3,
                          background: col,
                          boxShadow: `0 0 10px ${col}66`,
                        }}
                      />
                      <div className="p-4 pl-5">
                        <div className="flex items-start gap-3 mb-2">
                          <div
                            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                            style={{
                              background: bg,
                              color: col,
                              boxShadow: `0 0 10px ${bg}`,
                            }}
                          >
                            {feature.icon}
                          </div>
                          <h4 className="font-semibold text-white text-sm pt-1">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-xs text-navy-400 leading-relaxed pl-12">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative bg-navy-900 rounded-2xl p-8 md:p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                <div className="relative z-10">
                  <div className="text-white mb-8">
                    <div
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: "#60a5fa" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full animate-pulse-soft"
                        style={{ background: "#60a5fa" }}
                      />
                      Our Approach
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Built for Success
                    </h3>
                    <p className="text-navy-300 leading-relaxed text-sm">
                      Every project starts with understanding your goals. We
                      then design, build, and deliver solutions that exceed
                      expectations.
                    </p>
                  </div>

                  {/* Timeline steps */}
                  <div className="relative pl-4">
                    {/* vertical connector line */}
                    <div
                      className="absolute left-[15px] top-3 bottom-3"
                      style={{
                        width: 2,
                        background:
                          "linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981, #f59e0b)",
                        borderRadius: 1,
                      }}
                    />
                    {[
                      { label: "Discovery & Planning", color: "#3b82f6" },
                      { label: "Design & Development", color: "#8b5cf6" },
                      { label: "Testing & Launch", color: "#10b981" },
                      { label: "Support & Growth", color: "#f59e0b" },
                    ].map((step, index) => (
                      <div
                        key={step.label}
                        className="flex items-center gap-4 relative"
                        style={{ marginBottom: index < 3 ? 20 : 0 }}
                      >
                        {/* circle node */}
                        <div
                          className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{
                            background: step.color,
                            boxShadow: `0 0 12px ${step.color}55`,
                          }}
                        >
                          {index + 1}
                        </div>
                        <div
                          className="rounded-lg px-4 py-2 flex-1"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <span className="text-white font-medium text-sm">
                            {step.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Real solutions we've built for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {featuredProjects.map((project, index) => {
              const cardAccents = [
                {
                  gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                  pill: "#3b82f6",
                  pillBg: "rgba(59,130,246,0.2)",
                },
                {
                  gradient: "linear-gradient(135deg, #14532d 0%, #10b981 100%)",
                  pill: "#10b981",
                  pillBg: "rgba(16,185,129,0.2)",
                },
                {
                  gradient: "linear-gradient(135deg, #312e81 0%, #8b5cf6 100%)",
                  pill: "#8b5cf6",
                  pillBg: "rgba(139,92,246,0.2)",
                },
              ];
              const ca = cardAccents[index % cardAccents.length];
              return (
                <Card
                  key={project.id}
                  variant="hover"
                  padding="none"
                  className="overflow-hidden animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient header */}
                  <div
                    className="relative p-3 md:p-6 overflow-hidden"
                    style={{ background: ca.gradient }}
                  >
                    {/* subtle grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    {/* decorative glow orb */}
                    <div
                      className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
                      }}
                    />
                    <div className="relative z-10">
                      <span
                        className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold mb-1.5 md:mb-3"
                        style={{ background: ca.pillBg, color: ca.pill }}
                      >
                        {project.industry}
                      </span>
                      <h3 className="text-sm md:text-lg font-semibold text-white">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-6">
                    <p className="text-navy-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-4">
                      {project.description}
                    </p>

                    {project.keyResults && project.keyResults.length > 0 && (
                      <ul className="space-y-2">
                        {project.keyResults.slice(0, 2).map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-navy-600"
                          >
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              style={{ color: ca.pill }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* bottom accent bar on hover */}
                  <div
                    className="h-1 transition-all duration-500 group-hover:opacity-100 opacity-0"
                    style={{ background: ca.gradient }}
                  />
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/portfolio">
              <Button variant="outline" size="md">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-h1 text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-body-lg text-navy-300 mb-10">
              Let's discuss your project and explore how Vertex Tech can help
              turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={
                    <svg
                      className="w-5 h-5"
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
                  }
                >
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline-light" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
