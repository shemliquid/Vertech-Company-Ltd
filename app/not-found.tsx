"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./components/Button";

// ── Tiny inline SVG illustrations ─────────────────────────────────────────
function Astronaut({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      fill="none"
      style={style}
    >
      {/* Helmet */}
      <ellipse cx="60" cy="38" rx="28" ry="30" fill="#1e293b" />
      <ellipse
        cx="60"
        cy="38"
        rx="28"
        ry="30"
        stroke="#3b82f6"
        strokeWidth="3"
        fill="none"
      />
      {/* Visor */}
      <ellipse cx="60" cy="40" rx="18" ry="20" fill="#60a5fa" opacity="0.35" />
      <ellipse
        cx="60"
        cy="40"
        rx="18"
        ry="20"
        stroke="#60a5fa"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Eyes (peek through visor) */}
      <circle cx="52" cy="38" r="3" fill="white" />
      <circle cx="68" cy="38" r="3" fill="white" />
      <circle cx="52" cy="39" r="1.5" fill="#0f172a" />
      <circle cx="68" cy="39" r="1.5" fill="#0f172a" />
      {/* Body / suit */}
      <ellipse cx="60" cy="100" rx="24" ry="32" fill="#1e293b" />
      <ellipse
        cx="60"
        cy="100"
        rx="24"
        ry="32"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
      />
      {/* Chest panel */}
      <rect x="48" y="82" width="24" height="18" rx="4" fill="#0f172a" />
      <rect x="51" y="85" width="6" height="3" rx="1" fill="#ef4444" />
      <rect x="59" y="85" width="6" height="3" rx="1" fill="#22c55e" />
      <rect
        x="51"
        y="91"
        width="11"
        height="2"
        rx="1"
        fill="#3b82f6"
        opacity="0.6"
      />
      {/* Left arm */}
      <path
        d="M36 88 Q18 105 24 125"
        stroke="#1e293b"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36 88 Q18 105 24 125"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="24" cy="127" r="6" fill="#cbd5e1" />
      {/* Right arm */}
      <path
        d="M84 88 Q102 105 96 125"
        stroke="#1e293b"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M84 88 Q102 105 96 125"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="96" cy="127" r="6" fill="#cbd5e1" />
      {/* Left leg */}
      <path
        d="M44 128 L38 152"
        stroke="#1e293b"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="36" cy="155" rx="7" ry="4" fill="#cbd5e1" />
      {/* Right leg */}
      <path
        d="M76 128 L82 152"
        stroke="#1e293b"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="84" cy="155" rx="7" ry="4" fill="#cbd5e1" />
      {/* Tether line (broken) */}
      <path
        d="M96 100 Q108 95 114 88 Q118 82 116 74"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function Star({
  cx,
  cy,
  r = 1.5,
  opacity = 0.7,
}: {
  cx: number;
  cy: number;
  r?: number;
  opacity?: number;
}) {
  return <circle cx={cx} cy={cy} r={r} fill="white" opacity={opacity} />;
}

// ── Shared gradient style applied per-digit (background-clip:text must be on the text element itself) ──
const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #8b5cf6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// ── Animated digit components ──────────────────────────────────────────────
function Digit4({ mounted }: { mounted: boolean }) {
  return (
    <span
      className="inline-block"
      style={{
        ...gradientText,
        transform: mounted ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
      }}
    >
      4
    </span>
  );
}

function Digit0({ mounted, delay }: { mounted: boolean; delay: number }) {
  return (
    <span
      className="inline-block"
      style={{
        ...gradientText,
        animation: mounted
          ? `wobble 2.4s ease-in-out ${delay}s infinite`
          : "none",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      0
    </span>
  );
}

// ── Quick-link card ────────────────────────────────────────────────────────
function QuickLink({
  href,
  label,
  icon,
  colour,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  colour: string;
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.85))",
        border: `1px solid ${colour}33`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = colour;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          `0 0 18px ${colour}22`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          `${colour}33`;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
      }}
    >
      <div className="flex items-center gap-3 p-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${colour}18`, color: colour }}
        >
          {icon}
        </div>
        <span className="text-sm font-medium text-navy-200 group-hover:text-white transition-colors">
          {label}
        </span>
        <svg
          className="w-4 h-4 ml-auto text-navy-500 group-hover:text-navy-300 group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden flex flex-col">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Scattered stars */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <Star cx={80} cy={60} r={1.2} opacity={0.5} />
        <Star cx={220} cy={140} r={0.9} opacity={0.35} />
        <Star cx={400} cy={50} r={1.5} opacity={0.6} />
        <Star cx={560} cy={200} r={1} opacity={0.4} />
        <Star cx={700} cy={80} r={1.3} opacity={0.55} />
        <Star cx={900} cy={30} r={1} opacity={0.45} />
        <Star cx={1050} cy={170} r={1.4} opacity={0.5} />
        <Star cx={1250} cy={60} r={1.1} opacity={0.4} />
        <Star cx={1380} cy={220} r={0.9} opacity={0.35} />
        <Star cx={150} cy={400} r={1} opacity={0.3} />
        <Star cx={500} cy={500} r={1.3} opacity={0.4} />
        <Star cx={750} cy={600} r={0.8} opacity={0.3} />
        <Star cx={1100} cy={450} r={1.2} opacity={0.35} />
        <Star cx={1350} cy={550} r={1} opacity={0.3} />
        <Star cx={300} cy={700} r={1.1} opacity={0.25} />
        <Star cx={950} cy={750} r={0.9} opacity={0.3} />
        {/* A couple of slightly bigger "bright" stars */}
        <Star cx={1180} cy={100} r={2} opacity={0.7} />
        <Star cx={320} cy={300} r={1.8} opacity={0.55} />
      </svg>

      {/* Floating colour orbs (subtle) */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/5 w-56 h-56 rounded-full bg-accent/4 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pt-24 pb-16">
        {/* Astronaut — floats gently */}
        <div
          className="animate-float"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }}
        >
          <Astronaut />
        </div>

        {/* Giant 404 */}
        <div
          className="mt-2 mb-4 flex items-center justify-center gap-1"
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: "clamp(7rem, 18vw, 14rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            filter: "drop-shadow(0 0 40px rgba(59,130,246,0.25))",
          }}
        >
          <Digit4 mounted={mounted} />
          <Digit0 mounted={mounted} delay={0.4} />
          <Digit0 mounted={mounted} delay={0.7} />
        </div>

        {/* Headline */}
        <h1
          className="text-white text-center animate-fade-in-up"
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Houston, we have a problem.
        </h1>

        {/* Sub-copy */}
        <p
          className="text-navy-400 text-center animate-fade-in-up delay-100 max-w-md"
          style={{ fontSize: "1rem", lineHeight: 1.7 }}
        >
          This page drifted off into the void. Don't worry — mission control can
          get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in-up delay-200">
          <Link href="/">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            >
              Return to Base
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline-light" size="lg">
              Report the Issue
            </Button>
          </Link>
        </div>

        {/* Quick-link section */}
        <div className="w-full max-w-lg mt-14 animate-fade-in-up delay-300">
          <p className="text-navy-500 text-xs font-semibold uppercase tracking-widest text-center mb-4">
            Or pick a destination
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <QuickLink
              href="/"
              label="Homepage"
              colour="#3b82f6"
              icon={
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            />
            <QuickLink
              href="/services"
              label="Services"
              colour="#22c55e"
              icon={
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.826 3.31.077 3.279 1.814a1.724 1.724 0 001.572 1.724 1.724 1.724 0 01.788 3.096c1.061.588 1.142 2.131.093 2.82a1.724 1.724 0 00-.547 2.216c.494 1.645-.873 3.258-2.518 2.765a1.724 1.724 0 00-2.216.547c-.69 1.049-2.233.968-2.82-.093a1.724 1.724 0 00-3.096-.788c-1.173.802-2.786.362-3.379-.807a1.724 1.724 0 00-2.216-.547c-1.645.494-3.258-.873-2.765-2.518a1.724 1.724 0 00-.547-2.216c-1.049-.69-.968-2.233.093-2.82a1.724 1.724 0 00.547-2.216c-.494-1.645.873-3.258 2.518-2.765a1.724 1.724 0 002.216-.547z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            />
            <QuickLink
              href="/portfolio"
              label="Portfolio"
              colour="#8b5cf6"
              icon={
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              }
            />
            <QuickLink
              href="/contact"
              label="Contact"
              colour="#14b8a6"
              icon={
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* ── Wobble keyframes (scoped via style tag) ── */}
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%      { transform: translateY(-6px) rotate(-2deg); }
          75%      { transform: translateY(4px) rotate(1.5deg); }
        }
      `}</style>
    </div>
  );
}
