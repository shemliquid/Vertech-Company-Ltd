"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import ClockWidget from "../components/ClockWidget";
import Logo from "../components/Logo";
import { services } from "../data/services";

// Icons for services
const serviceIcons: Record<string, React.ReactNode> = {
  "software-development": (
    <svg
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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

export default function Services() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 pt-4 lg:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
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
            <div className="w-full lg:w-[80%] animate-fade-in-up">
              <span className="section-label text-accent-light mb-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                What We Offer
              </span>
              <h1 className="text-h1 text-white mb-6">Our Services</h1>
              <p className="text-body-lg text-navy-300">
                Comprehensive software solutions designed to help your business
                thrive in the digital age. From development to consulting, we've
                got you covered.
              </p>
            </div>
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
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, index) => {
              const svcAccents = [
                {
                  bar: "#3b82f6",
                  iconBg: "rgba(59,130,246,0.12)",
                  iconColor: "#3b82f6",
                  checkColor: "#3b82f6",
                },
                {
                  bar: "#10b981",
                  iconBg: "rgba(16,185,129,0.12)",
                  iconColor: "#10b981",
                  checkColor: "#10b981",
                },
                {
                  bar: "#8b5cf6",
                  iconBg: "rgba(139,92,246,0.12)",
                  iconColor: "#8b5cf6",
                  checkColor: "#8b5cf6",
                },
                {
                  bar: "#f59e0b",
                  iconBg: "rgba(245,158,11,0.12)",
                  iconColor: "#f59e0b",
                  checkColor: "#f59e0b",
                },
                {
                  bar: "#ef4444",
                  iconBg: "rgba(239,68,68,0.12)",
                  iconColor: "#ef4444",
                  checkColor: "#ef4444",
                },
              ];
              const sa = svcAccents[index % svcAccents.length];
              const stepColors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card variant="default" padding="none">
                    {/* coloured top accent bar */}
                    <div style={{ height: 3, background: sa.bar }} />
                    <div className="p-8">
                      {/* Service Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ background: sa.iconBg, color: sa.iconColor }}
                        >
                          {serviceIcons[service.id] ||
                            serviceIcons["software-development"]}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-h3 text-navy-900 mb-3">
                            {service.title}
                          </h2>
                          <p className="text-body-lg text-navy-600">
                            {service.description}
                          </p>
                        </div>
                        <div className="lg:flex-shrink-0">
                          <Link href="/contact">
                            <Button variant="primary" size="md">
                              Request Quote
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="border-t border-navy-100 pt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Overview & Who It's For */}
                          <div className="space-y-6">
                            {service.overview && (
                              <div>
                                <h3 className="text-h4 text-navy-900 mb-3">
                                  Overview
                                </h3>
                                <p className="text-navy-600 leading-relaxed">
                                  {service.overview}
                                </p>
                              </div>
                            )}
                            {service.whoItIsFor && (
                              <div>
                                <h3 className="text-h4 text-navy-900 mb-3">
                                  Who It's For
                                </h3>
                                <p className="text-navy-600 leading-relaxed">
                                  {service.whoItIsFor}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Benefits */}
                          <div className="space-y-6">
                            {service.benefits &&
                              service.benefits.length > 0 && (
                                <div>
                                  <h3 className="text-h4 text-navy-900 mb-3">
                                    Benefits
                                  </h3>
                                  <ul className="space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-3"
                                      >
                                        <svg
                                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          style={{ color: sa.checkColor }}
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                        <span className="text-navy-600">
                                          {benefit}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                          </div>
                        </div>

                        {/* Process Steps — timeline */}
                        {service.process && service.process.length > 0 && (
                          <div className="mt-8 pt-8 border-t border-navy-100">
                            <h3 className="text-h4 text-navy-900 mb-6">
                              Our Process
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {service.process.map((step, idx) => {
                                const col = stepColors[idx % stepColors.length];
                                return (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3 rounded-lg p-3"
                                    style={{
                                      background: "#f8fafc",
                                      border: "1px solid #f1f5f9",
                                    }}
                                  >
                                    <div
                                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                      style={{
                                        background: col,
                                        boxShadow: `0 0 10px ${col}44`,
                                      }}
                                    >
                                      {idx + 1}
                                    </div>
                                    <span className="text-navy-600 text-sm pt-0.5">
                                      {step}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-h2 text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-body-lg text-navy-300 mb-8">
              Let's discuss your requirements and find the perfect solution for
              your business.
            </p>
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
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
