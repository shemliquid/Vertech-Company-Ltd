"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import ClockWidget from "../components/ClockWidget";
import Logo from "../components/Logo";
import { submitContactForm } from "../utils/api";
import type { ContactFormData } from "../utils/api";
import { services } from "../data/services";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredContact: "email",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log("Bot detected via honeypot");
      return;
    }

    // Rate limiting - prevent submissions within 5 seconds
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    if (timeSinceLastSubmit < 5000 && lastSubmitTime > 0) {
      setError("Please wait a few seconds before submitting again.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setLastSubmitTime(now);

    try {
      await submitContactForm(formData);
      setSubmittedName(formData.name);
      setSubmitted(true);
      // Scroll to top to show thank you message
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        preferredContact: "email",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit form. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const submittedAt = new Date();
    const timeStr = submittedAt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateStr = submittedAt.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="min-h-screen bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div
          className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-success/5 rounded-full blur-3xl animate-float pointer-events-none"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero row — headline left, clock right */}
          <section className="pt-28 pb-10 px-5 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left */}
                <div className="w-full lg:w-[80%] animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span
                      className="w-2.5 h-2.5 rounded-full animate-pulse-soft"
                      style={{ background: "#10b981" }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#10b981" }}
                    >
                      Message Received
                    </span>
                  </div>
                  <h1 className="text-h1 text-white mb-4">Thank You!</h1>
                  <p className="text-body-lg text-navy-300 max-w-xl">
                    We've received your message and appreciate you reaching out.
                    Our team will be in touch soon.
                  </p>
                </div>

                {/* Right — clock */}
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

          {/* Success card + submission summary */}
          <section className="flex-1 px-5 sm:px-6 lg:px-8 pb-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6 animate-fade-in-up delay-200">
                {/* Main success card */}
                <div
                  className="lg:col-span-2 rounded-2xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.85))",
                    border: "1px solid rgba(16,185,129,0.25)",
                    boxShadow: "0 4px 32px -4px rgba(15,23,42,0.5)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-grid-pattern pointer-events-none"
                    style={{ opacity: 0.04 }}
                  />
                  <div className="relative z-10 p-8 md:p-10">
                    {/* Checkmark */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="w-18 h-18 rounded-full flex items-center justify-center animate-scale-in"
                        style={{
                          width: 72,
                          height: 72,
                          background:
                            "radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 70%)",
                          border: "2px solid rgba(16,185,129,0.3)",
                          boxShadow: "0 0 24px rgba(16,185,129,0.2)",
                        }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="#10b981"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white text-center mb-3">
                      We'll Be in Touch Soon
                    </h2>
                    <p className="text-navy-400 text-center leading-relaxed mb-8 max-w-lg mx-auto">
                      Our team will review your message and get back to you
                      within 24 hours. In the meantime, feel free to explore
                      what we do.
                    </p>

                    {/* CTA row */}
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                      <Link href="/services">
                        <Button variant="outline-light" size="md">
                          Explore Services
                        </Button>
                      </Link>
                      <Link href="/portfolio">
                        <Button variant="outline-light" size="md">
                          View Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right sidebar — submission details */}
                <div className="flex flex-col gap-4">
                  {/* Submission summary */}
                  <div
                    className="rounded-2xl overflow-hidden flex-1"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.85))",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#60a5fa"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <span className="text-xs font-semibold uppercase tracking-widest text-navy-400">
                          Submission Details
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-0.5">
                            Sent by
                          </p>
                          <p className="text-sm font-medium text-white">
                            {submittedName || "You"}
                          </p>
                        </div>
                        <div
                          style={{
                            height: 1,
                            background: "rgba(255,255,255,0.06)",
                          }}
                        />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-0.5">
                            Date & Time
                          </p>
                          <p className="text-sm text-navy-300">{dateStr}</p>
                          <p className="text-xs text-navy-500">{timeStr}</p>
                        </div>
                        <div
                          style={{
                            height: 1,
                            background: "rgba(255,255,255,0.06)",
                          }}
                        />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-0.5">
                            Status
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className="w-2 h-2 rounded-full animate-pulse-soft"
                              style={{ background: "#10b981" }}
                            />
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#10b981" }}
                            >
                              Received
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What happens next */}
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.85))",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#60a5fa"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-semibold uppercase tracking-widest text-navy-400">
                          What's Next
                        </span>
                      </div>

                      <div className="relative pl-4">
                        <div
                          className="absolute left-[7px] top-1 bottom-1"
                          style={{
                            width: 2,
                            background:
                              "linear-gradient(to bottom, #3b82f6, #10b981)",
                            borderRadius: 1,
                          }}
                        />
                        {[
                          { label: "Message received", done: true },
                          { label: "Team review", done: false },
                          { label: "We reach out", done: false },
                        ].map((step, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 relative"
                            style={{ marginBottom: i < 2 ? 14 : 0 }}
                          >
                            <div
                              className="relative z-10 flex-shrink-0 w-3.5 h-3.5 rounded-full border-2"
                              style={{
                                background: step.done
                                  ? "#10b981"
                                  : "transparent",
                                borderColor: step.done
                                  ? "#10b981"
                                  : "rgba(255,255,255,0.2)",
                              }}
                            />
                            <span
                              className={`text-xs ${step.done ? "text-white font-medium" : "text-navy-500"}`}
                            >
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

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
                Get in Touch
              </span>
              <h1 className="text-h1 text-white mb-6">Contact Us</h1>
              <p className="text-body-lg text-navy-300">
                Ready to start your project? Have questions about our services?
                We'd love to hear from you. Fill out the form below and we'll
                get back to you promptly.
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

      {/* Contact Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
              <Card variant="default" padding="none">
                <div style={{ height: 3, background: "#3b82f6" }} />
                <div className="p-6">
                  <h3 className="text-h4 text-navy-900 mb-3">
                    Contact Information
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-5">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        color: "#3b82f6",
                        colorLight: "rgba(59,130,246,0.1)",
                        title: "Response Time",
                        subtitle: "Within 24 hours",
                        icon: (
                          <svg
                            className="w-5 h-5"
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
                        color: "#10b981",
                        colorLight: "rgba(16,185,129,0.1)",
                        title: "Preferred Contact",
                        subtitle: "Email or Phone",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                      },
                      {
                        color: "#8b5cf6",
                        colorLight: "rgba(139,92,246,0.1)",
                        title: "Location",
                        subtitle: "Remote & On-site",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 12.414a1 1 0 00-.707-.293H5a1 1 0 00-1 1v.586a1 1 0 00.293.707l4.243 4.243a2 2 0 002.828 0l2.343-2.343a2 2 0 000-2.828zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ),
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            background: item.colorLight,
                            color: item.color,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-navy-900 text-sm">
                            {item.title}
                          </p>
                          <p className="text-navy-500 text-sm">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card
                variant="default"
                padding="none"
                className="bg-navy-900 border-navy-800 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="relative z-10 p-6">
                  <h3 className="text-h4 text-white mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: "Expert development team", color: "#3b82f6" },
                      { text: "Transparent communication", color: "#10b981" },
                      { text: "On-time delivery", color: "#8b5cf6" },
                      { text: "Ongoing support", color: "#f59e0b" },
                    ].map((item) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-sm text-navy-300"
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{
                            color: item.color,
                            filter: `drop-shadow(0 0 4px ${item.color}66)`,
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up delay-100">
              <Card variant="default" padding="none">
                <div
                  style={{
                    height: 3,
                    background:
                      "linear-gradient(90deg, #3b82f6, #10b981, #8b5cf6)",
                  }}
                />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        color: "#3b82f6",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-h3 text-navy-900">Send Us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="label">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="input"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="label">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="label">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredContact" className="label">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="input resize-y min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Honeypot field - hidden from real users */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        opacity: 0,
                      }}
                      aria-hidden="true"
                    >
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-navy-500">
                        <span className="text-red-500">*</span> Required fields
                      </p>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        isLoading={loading}
                        rightIcon={
                          !loading && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          )
                        }
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
