"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Home",
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
          strokeWidth={1.8}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    path: "/services",
    label: "Services",
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
          strokeWidth={1.8}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.826 3.31.077 3.279 1.814a1.724 1.724 0 001.572 1.724 1.724 1.724 0 01.788 3.096c1.061.588 1.142 2.131.093 2.82a1.724 1.724 0 00-.547 2.216c.494 1.645-.873 3.258-2.518 2.765a1.724 1.724 0 00-2.216.547c-.69 1.049-2.233.968-2.82-.093a1.724 1.724 0 00-3.096-.788c-1.173.802-2.786.362-3.379-.807a1.724 1.724 0 00-2.216-.547c-1.645.494-3.258-.873-2.765-2.518a1.724 1.724 0 00-.547-2.216c-1.049-.69-.968-2.233.093-2.82a1.724 1.724 0 00.547-2.216c-.494-1.645.873-3.258 2.518-2.765a1.724 1.724 0 002.216-.547z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    path: "/portfolio",
    label: "Portfolio",
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
          strokeWidth={1.8}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    path: "/about",
    label: "About",
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
          strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    path: "/contact",
    label: "Contact",
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
          strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

// Generates an arc-donut slice path
function slicePath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startDeg: number,
  endDeg: number,
): string {
  const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
  const cos = (d: number) => Math.cos(toRad(d));
  const sin = (d: number) => Math.sin(toRad(d));
  const large = endDeg - startDeg > 180 ? 1 : 0;

  return [
    `M ${cx + outerR * cos(startDeg)} ${cy + outerR * sin(startDeg)}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${cx + outerR * cos(endDeg)} ${cy + outerR * sin(endDeg)}`,
    `L ${cx + innerR * cos(endDeg)} ${cy + innerR * sin(endDeg)}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${cx + innerR * cos(startDeg)} ${cy + innerR * sin(startDeg)}`,
    "Z",
  ].join(" ");
}

// Position for icon overlay at a given angle & radius
function pos(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const [centreHovered, setCentreHovered] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [containerHovered, setContainerHovered] = useState(false);
  const [navOffset, setNavOffset] = useState<number>(-100); // -size/2 = centred initially
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetRef = useRef<number>(-100);
  const currentRef = useRef<number>(-100);
  const rafRef = useRef<number>(0);

  const SCROLL_THRESHOLD = 140;

  const getProgress = useCallback(() => {
    return Math.min(window.scrollY / SCROLL_THRESHOLD, 1);
  }, []);

  const getTarget = useCallback(() => {
    const SIZE = 200;
    const MARGIN = 24;
    const vw = window.innerWidth;
    const progress = getProgress();
    const centred = -SIZE / 2;
    const cornered = vw - MARGIN - SIZE - vw / 2;
    return centred + progress * (cornered - centred);
  }, [getProgress]);

  useEffect(() => {
    // Snap immediately on route change (scroll resets to 0)
    const snap = getTarget();
    targetRef.current = snap;
    currentRef.current = snap;
    setNavOffset(snap);
    setScrollProgress(getProgress());

    const onScroll = () => {
      targetRef.current = getTarget();
      setScrollProgress(getProgress());
    };
    const onResize = () => {
      targetRef.current = getTarget();
      currentRef.current = targetRef.current;
      setNavOffset(currentRef.current);
      setScrollProgress(getProgress());
    };

    // rAF lerp loop — eases current toward target at ~8 factor per second
    let running = true;
    const loop = () => {
      if (!running) return;
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) > 0.3) {
        currentRef.current += diff * 0.12; // ease factor
        setNavOffset(currentRef.current);
      } else if (currentRef.current !== targetRef.current) {
        currentRef.current = targetRef.current;
        setNavOffset(currentRef.current);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname, getTarget, getProgress]);

  const isActive = (path: string) => pathname === path;

  // ── Geometry ──
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 92;
  const innerR = 40;
  const iconR = (outerR + innerR) / 2; // true mid-band = 70
  const count = navItems.length;
  const sliceAngle = 360 / count;
  const gap = 0;
  // Collapse scale: shrinks the donut band down to the inner circle radius
  const collapseScale = collapsed ? innerR / outerR : 1;

  // Slices hide when scrolled (progress > 0) UNLESS container is hovered
  const shouldShowSlices = scrollProgress === 0 || containerHovered;
  const sliceOpacity = collapsed ? 0 : shouldShowSlices ? 1 : 0;

  // Centre disk: single click → toggle collapse, double click → home
  const dblClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleCentreClick = () => {
    if (dblClickTimer.current) {
      // Second click within 300ms → double-click detected
      clearTimeout(dblClickTimer.current);
      dblClickTimer.current = null;
      router.push("/"); // double click → home
    } else {
      dblClickTimer.current = setTimeout(() => {
        dblClickTimer.current = null;
        setCollapsed((c) => !c); // single click → toggle collapse
      }, 300);
    }
  };

  // Vivid saturated colours per slice — base / hover / active
  const colours = [
    // Home — Blue
    { base: "#2563eb", hover: "#3b82f6", active: "#60a5fa" },
    // Services — Green
    { base: "#16a34a", hover: "#22c55e", active: "#4ade80" },
    // Portfolio — Red
    { base: "#dc2626", hover: "#ef4444", active: "#f87171" },
    // About — Orange
    { base: "#ea580c", hover: "#f97316", active: "#fb923c" },
    // Contact — Slate / Teal
    { base: "#0d9488", hover: "#14b8a6", active: "#2dd4bf" },
  ];

  return (
    <>
      {/* ── Desktop floating pie nav — centred at top → slides to top-right on scroll ── */}
      <div
        className="fixed z-50 hidden lg:block"
        style={{
          top: 24,
          left: "50%",
          transform: `translateX(${navOffset}px)`,
        }}
      >
        {/* Pulsing glow halo */}
        <div
          className={sliceOpacity > 0 ? "animate-glow-pulse" : ""}
          style={{
            position: "absolute",
            inset: -16,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)",
            filter: "blur(12px)",
            pointerEvents: "none",
            opacity: sliceOpacity,
            transition: "opacity 0.35s ease",
          }}
        />

        <div
          className="relative"
          style={{
            width: size,
            height: size,
            filter:
              "drop-shadow(0 8px 24px rgba(0,0,0,0.55)) drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
          }}
          onMouseEnter={() => {
            setContainerHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(null);
            setCentreHovered(false);
            setContainerHovered(false);
          }}
        >
          {/* ── SVG pie with clickable paths ── */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ position: "absolute", inset: 0 }}
          >
            <defs>
              {/* Sphere highlight: radial white fade from top-left */}
              <radialGradient id="sphereHighlight" cx="30%" cy="28%" r="65%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              {/* Sphere shadow: subtle dark fade from bottom-right */}
              <radialGradient id="sphereShadow" cx="72%" cy="75%" r="60%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                <stop offset="60%" stopColor="rgba(0,0,0,0.08)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>

            {/* subtle outer ring — hidden when collapsed */}
            <circle
              cx={cx}
              cy={cy}
              r={outerR + 1}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              style={{
                opacity: sliceOpacity,
                transition: "opacity 0.35s ease",
              }}
            />

            {/* clickable slices */}
            {navItems.map((item, i) => {
              const start = i * sliceAngle + gap / 2;
              const end = (i + 1) * sliceAngle - gap / 2;
              const midAngle = (start + end) / 2;
              const active = isActive(item.path);
              const isHov = hovered === i;
              const c = colours[i];

              // Outward push: individual hover = 7px, centre hover = 5px on all
              const rad = ((midAngle - 90) * Math.PI) / 180;
              const pushDist = isHov ? 7 : centreHovered ? 5 : 0;
              const pushX = pushDist * Math.cos(rad);
              const pushY = pushDist * Math.sin(rad);

              return (
                <path
                  key={item.path + "-s"}
                  d={slicePath(cx, cy, innerR, outerR, start, end)}
                  fill={active ? c.active : isHov ? c.hover : c.base}
                  stroke="none"
                  style={{
                    cursor: collapsed ? "default" : "pointer",
                    opacity: sliceOpacity,
                    transition:
                      "fill 0.3s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
                    transform: `translate(${pushX}px, ${pushY}px) scale(${collapseScale})`,
                    transformOrigin: `${cx}px ${cy}px`,
                  }}
                  onClick={() => !collapsed && router.push(item.path)}
                  onMouseEnter={() => !collapsed && setHovered(i)}
                />
              );
            })}

            {/* centre disk — clickable */}
            <circle
              cx={cx}
              cy={cy}
              r={innerR}
              fill="rgba(15,23,42,0.9)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              style={{ cursor: "pointer" }}
              onClick={handleCentreClick}
              onMouseEnter={() => {
                setHovered(null);
                setCentreHovered(true);
              }}
              onMouseLeave={() => setCentreHovered(false)}
            />

            {/* Sphere shading overlays — pointer-events none, sit on top of slices */}
            <circle
              cx={cx}
              cy={cy}
              r={outerR}
              fill="url(#sphereHighlight)"
              style={{
                pointerEvents: "none",
                opacity: sliceOpacity,
                transition: "opacity 0.35s ease",
              }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={outerR}
              fill="url(#sphereShadow)"
              style={{
                pointerEvents: "none",
                opacity: sliceOpacity,
                transition: "opacity 0.35s ease",
              }}
            />
          </svg>

          {/* ── Icon overlays (pointer-events off, follow slice push via transform) ── */}
          {navItems.map((item, i) => {
            const start = i * sliceAngle + gap / 2;
            const end = (i + 1) * sliceAngle - gap / 2;
            const midAngle = (start + end) / 2;
            const iconCenter = pos(cx, cy, iconR, midAngle);
            const active = isActive(item.path);
            const isHov = hovered === i;

            // Same push vector as the slice
            const rad = ((midAngle - 90) * Math.PI) / 180;
            const pushDist = isHov ? 7 : centreHovered ? 5 : 0;
            const pushX = pushDist * Math.cos(rad);
            const pushY = pushDist * Math.sin(rad);

            const iconW = 32;
            return (
              <div
                key={item.path + "-icon"}
                className="absolute flex items-center justify-center"
                style={{
                  left: iconCenter.x - iconW / 2,
                  top: iconCenter.y - iconW / 2,
                  width: iconW,
                  height: iconW,
                  color: active || isHov ? "#fff" : "rgba(200,220,255,0.75)",
                  opacity: sliceOpacity,
                  transform: `translate(${pushX}px, ${pushY}px) scale(${active || isHov ? 1.2 : 1})`,
                  filter: active
                    ? "drop-shadow(0 0 6px rgba(255,255,255,0.6))"
                    : isHov
                      ? "drop-shadow(0 0 4px rgba(255,255,255,0.35))"
                      : "none",
                  transition:
                    "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease, filter 0.3s ease, opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                {item.icon}
              </div>
            );
          })}

          {/* ── Centre logo — clickable, centred in the disk ── */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: cy - innerR,
              left: cx - innerR,
              width: innerR * 2,
              height: innerR * 2,
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={handleCentreClick}
            onMouseEnter={() => {
              setHovered(null);
              setCentreHovered(true);
            }}
            onMouseLeave={() => setCentreHovered(false)}
          >
            <Image
              src="/logo-dark.png"
              alt="Vertex Tech"
              width={innerR * 2 - 10}
              height={innerR * 2 - 10}
              draggable={false}
              style={{
                maxWidth: innerR * 2 - 10,
                maxHeight: innerR * 2 - 10,
                objectFit: "contain",
              }}
              priority
            />
          </div>

          {/* ── Tooltip ── */}
          {hovered !== null && (
            <div
              className="absolute text-xs font-semibold text-white whitespace-nowrap"
              style={{
                top: size + 6,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(15,23,42,0.88)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "5px 12px",
                pointerEvents: "none",
              }}
            >
              {navItems[hovered].label}
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: "rgba(15,23,42,0.88)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-center justify-around py-3 px-2">
          {navItems.map((item, i) => {
            const active = isActive(item.path);
            const mobileColours = [
              "#3b82f6",
              "#22c55e",
              "#ef4444",
              "#f97316",
              "#14b8a6",
            ];
            const col = mobileColours[i];
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-label={item.label}
                className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-200"
                style={{
                  color: active ? col : "rgba(255,255,255,0.5)",
                  background: active ? `${col}1a` : "transparent",
                }}
              >
                {item.icon}
                <span
                  className="text-[9px] font-medium"
                  style={{
                    color: active ? col : "rgba(255,255,255,0.4)",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
