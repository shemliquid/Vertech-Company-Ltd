"use client";

import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import ClockWidget from "../components/ClockWidget";
import Logo from "../components/Logo";
import { projects } from "../data/projects";

export default function Portfolio() {
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
                Our Work
              </span>
              <h1 className="text-h1 text-white mb-6">Portfolio</h1>
              <p className="text-body-lg text-navy-300">
                Explore our collection of successful projects. Each one
                represents our commitment to quality, innovation, and delivering
                real value to our clients.
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

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-navy-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-h4 text-navy-900 mb-2">No Projects Yet</h3>
              <p className="text-navy-500">
                Check back soon for our latest work.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const cardAccents = [
                  {
                    gradient:
                      "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    pill: "#3b82f6",
                    pillBg: "rgba(59,130,246,0.2)",
                  },
                  {
                    gradient:
                      "linear-gradient(135deg, #14532d 0%, #10b981 100%)",
                    pill: "#10b981",
                    pillBg: "rgba(16,185,129,0.2)",
                  },
                  {
                    gradient:
                      "linear-gradient(135deg, #312e81 0%, #8b5cf6 100%)",
                    pill: "#8b5cf6",
                    pillBg: "rgba(139,92,246,0.2)",
                  },
                  {
                    gradient:
                      "linear-gradient(135deg, #78350f 0%, #f59e0b 100%)",
                    pill: "#f59e0b",
                    pillBg: "rgba(245,158,11,0.2)",
                  },
                  {
                    gradient:
                      "linear-gradient(135deg, #7f1d1d 0%, #ef4444 100%)",
                    pill: "#ef4444",
                    pillBg: "rgba(239,68,68,0.2)",
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
                      className="relative p-8 overflow-hidden"
                      style={{ background: ca.gradient }}
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                      <div
                        className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
                        }}
                      />
                      <div className="relative z-10">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                          style={{ background: ca.pillBg, color: ca.pill }}
                        >
                          {project.industry}
                        </span>
                        <h3 className="text-xl font-semibold text-white">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-navy-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {project.keyResults && project.keyResults.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-navy-900 mb-3">
                            Key Results
                          </h4>
                          <ul className="space-y-2">
                            {project.keyResults.map((result, idx) => (
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
                        </div>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link"
                          style={{ color: ca.pill }}
                        >
                          View Project
                          <svg
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-h2 text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-body-lg text-navy-300 mb-8">
              Let's discuss how we can help bring your vision to life.
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
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
