"use client";

import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import ClockWidget from "../components/ClockWidget";

const values = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we build, ensuring quality that stands the test of time.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We believe in honest communication, transparent processes, and building trust with every interaction.",
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
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver forward-thinking solutions that give you a competitive edge.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We work alongside our clients as true partners, invested in their success as much as they are.",
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
];

const team = [
  {
    name: "Yaw Sefah",
    role: "Branding & Design",
    description: "Visual identity, UI/UX design",
    image: "/team/yaw-sefah.jpg",
  },
  {
    name: "Mensah Johnson",
    role: "Frontend Development",
    description: "UI implementation, interactions",
    image: "/team/mensah-johnson.jpg",
  },
  {
    name: "Shem Naah",
    role: "Backend Development",
    description: "APIs, databases, system logic",
    image: "/team/shem-naah.jpg",
  },
  {
    name: "SamCux",
    role: "Content Strategy",
    description: "Messaging, copywriting",
    image: "/team/samcux.jpg",
  },
  {
    name: "Bright Obeng",
    role: "Quality Assurance",
    description: "Testing, bug tracking",
    image: "/team/bright-obeng.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-navy-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="w-full lg:w-[80%] animate-fade-in-up">
              <span className="section-label text-accent-light mb-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                About Us
              </span>
              <h1 className="text-h1 text-white mb-6">Vertex Tech Company</h1>
              <p className="text-body-lg text-navy-300">
                We are a software development company dedicated to building
                reliable, scalable solutions that help businesses thrive in the
                digital age.
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

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Building the Future, One Project at a Time
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Vertex Tech Company was founded with a clear mission: to
                  bridge the gap between innovative technology and practical
                  business solutions. We saw too many businesses struggle with
                  outdated systems and missed opportunities in the digital
                  landscape.
                </p>
                <p>
                  Today, we're proud to have helped numerous startups and
                  established businesses transform their operations through
                  thoughtful software development. From custom applications to
                  system integrations, we bring the same level of dedication and
                  expertise to every project.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each
                  client's unique challenges. We don't just build software; we
                  build partnerships that drive lasting success.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative bg-navy-900 rounded-2xl p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        value: "50+",
                        label: "Projects Completed",
                        color: "#3b82f6",
                      },
                      {
                        value: "30+",
                        label: "Happy Clients",
                        color: "#10b981",
                      },
                      {
                        value: "5+",
                        label: "Years Experience",
                        color: "#8b5cf6",
                      },
                      {
                        value: "99%",
                        label: "Client Satisfaction",
                        color: "#f59e0b",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center rounded-xl p-4"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <div
                          className="text-4xl font-bold mb-1"
                          style={{
                            background: `linear-gradient(135deg, ${stat.color}, #fff)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-navy-400 uppercase tracking-widest">
                          {stat.label}
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

      {/* Mission & Vision */}
      <section className="section bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Mission",
                color: "#3b82f6",
                colorLight: "rgba(59,130,246,0.08)",
                description:
                  "To empower businesses with innovative software solutions that drive growth, improve efficiency, and create lasting competitive advantages. We are committed to delivering excellence in every line of code and every client interaction.",
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Our Vision",
                color: "#10b981",
                colorLight: "rgba(16,185,129,0.08)",
                description:
                  "To be the trusted technology partner of choice for businesses seeking quality, reliability, and innovation. We envision a future where every organization has access to world-class software solutions that enable them to achieve their full potential.",
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
            ].map((item, i) => (
              <Card
                key={item.title}
                variant="default"
                padding="none"
                className="animate-fade-in-up overflow-hidden group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div style={{ height: 3, background: item.color }} />
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: item.colorLight, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-h3 text-navy-900 mb-4">{item.title}</h3>
                  <p className="text-navy-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide every decision we make and every
              solution we build
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const colours = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];
              const coloursLight = [
                "rgba(59,130,246,0.08)",
                "rgba(16,185,129,0.08)",
                "rgba(139,92,246,0.08)",
                "rgba(245,158,11,0.08)",
              ];
              return (
                <Card
                  key={value.title}
                  variant="hover"
                  padding="none"
                  className="text-center animate-fade-in-up overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div style={{ height: 3, background: colours[index] }} />
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: coloursLight[index],
                        color: colours[index],
                      }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-h4 text-navy-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="section-label">The People Behind Vertex</span>
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle mx-auto">
              A dedicated group of professionals committed to delivering
              exceptional results
            </p>
          </div>

          {/* Group Photo Banner */}
          <div className="animate-fade-in-up mb-12">
            <Card variant="default" padding="none">
              <div
                className="relative w-full rounded-t-xl overflow-hidden"
                style={{ height: 260 }}
              >
                {/* Placeholder: replace src with actual group photo path */}
                <img
                  src="/team/group-photo.jpg"
                  alt="Vertex Tech team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback gradient shown when no image */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #166534 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      {team.map((_, i) => {
                        const gradients = [
                          "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                          "linear-gradient(135deg,#10b981,#3b82f6)",
                          "linear-gradient(135deg,#8b5cf6,#ec4899)",
                          "linear-gradient(135deg,#f59e0b,#ef4444)",
                          "linear-gradient(135deg,#10b981,#f59e0b)",
                        ];
                        return (
                          <div
                            key={i}
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                            style={{
                              background: gradients[i],
                              border: "3px solid rgba(255,255,255,0.25)",
                              marginLeft: i > 0 ? -14 : 0,
                              zIndex: team.length - i,
                              position: "relative",
                            }}
                          >
                            {team[i].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-white text-sm font-medium opacity-80">
                      Add your group photo here
                    </p>
                    <p className="text-navy-300 text-xs mt-1">
                      Place image at{" "}
                      <code className="text-navy-400">
                        /public/team/group-photo.jpg
                      </code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-navy-500 text-sm">
                  The Vertex Tech team — building the future together
                </p>
              </div>
            </Card>
          </div>

          {/* Individual Team Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => {
              const avatarGradients = [
                "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                "linear-gradient(135deg, #10b981, #3b82f6)",
                "linear-gradient(135deg, #8b5cf6, #ec4899)",
                "linear-gradient(135deg, #f59e0b, #ef4444)",
                "linear-gradient(135deg, #10b981, #f59e0b)",
              ];
              const roleColours = [
                "#3b82f6",
                "#10b981",
                "#8b5cf6",
                "#f59e0b",
                "#ef4444",
              ];
              const accentColours = [
                "#3b82f6",
                "#10b981",
                "#8b5cf6",
                "#f59e0b",
                "#ef4444",
              ];
              return (
                <Card
                  key={member.name}
                  variant="hover"
                  padding="none"
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    style={{ height: 3, background: accentColours[index] }}
                  />

                  {/* Member photo area */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: 180 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Fallback when no photo uploaded */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: avatarGradients[index] }}
                    >
                      <div className="w-20 h-20 rounded-full border-4 border-white border-opacity-30 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    {/* Bottom fade overlay so name blends in */}
                    <div
                      className="absolute bottom-0 left-0 right-0"
                      style={{
                        height: 80,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-navy-900 text-base">
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: roleColours[index] }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm text-navy-500">
                      {member.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Upload hint */}
          <p className="text-center text-navy-400 text-xs mt-8">
            To add photos, place individual images in{" "}
            <code className="text-navy-500">/public/team/</code> matching the
            filenames in the team data array.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-h2 text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-body-lg text-navy-300 mb-8">
              Let's discuss how Vertex Tech can help bring your vision to life.
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
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline-light" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
