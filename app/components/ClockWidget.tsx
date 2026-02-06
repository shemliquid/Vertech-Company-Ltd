"use client";

import { useState, useEffect } from "react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const C = 100; // SVG centre

// Ring mid-radii
const R_DAYS = 46;
const R_MONTHS = 66;
const R_DAYNUM = 86;

// Ring boundary circles
const RING_BORDERS = [36, 56, 76, 95];

// Hand lengths
const HOUR_LEN = 20;
const MIN_LEN = 28;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

// x,y on a circle. angleDeg: 0° = top (12 o'clock), clockwise positive
function circlePos(r: number, angleDeg: number) {
  const rad = toRad(angleDeg - 90);
  return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
}

// Compute a per-ring angle offset so that the active item lands at 0° (top).
// Each item i sits at (i / count) * 360. To bring activeIdx to 0°:
//   offset = -(activeIdx / count) * 360
// Then item i's final angle = (i / count) * 360 + offset
function ringOffset(activeIdx: number, count: number): number {
  return -(activeIdx / count) * 360;
}

export default function ClockWidget() {
  const [time, setTime] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Two nested rAFs so browser paints the initial (pre-mount) frame first
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const currentDayIdx = (time.getDay() + 6) % 7; // Mon=0…Sun=6
  const currentMonthIdx = time.getMonth(); // 0-based
  const currentDayOfMonth = time.getDate(); // 1-based

  // Hand angles (0° = 12 o'clock)
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  // Per-ring offsets — bring active item to top
  const dayOffset = ringOffset(currentDayIdx, 7);
  const monthOffset = ringOffset(currentMonthIdx, 12);
  const dayNumOffset = ringOffset(currentDayOfMonth - 1, 31);

  // Intro: each ring's <g> starts at a large rotation and springs to 0.
  // This only animates the *group* (positions), NOT the text orientation —
  // because each <text> counter-rotates itself back to upright (see below).
  // After the intro settles, the group stays at rotate(0) forever.
  const introStyle = (delay: string, duration: string) => ({
    transform: mounted ? "rotate(0deg)" : "rotate(360deg)",
    transformOrigin: `${C}px ${C}px`,
    transition: mounted
      ? `transform ${duration} cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}`
      : "none",
  });

  const handsStyle = {
    opacity: mounted ? 1 : 0,
    transition: "opacity 0.4s ease 0.8s",
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      style={{ overflow: "visible" }}
    >
      {/* Ring borders */}
      {RING_BORDERS.map((r) => (
        <circle
          key={`b-${r}`}
          cx={C}
          cy={C}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.75"
        />
      ))}

      {/* Centre disk */}
      <circle cx={C} cy={C} r={35} fill="rgba(255,255,255,0.03)" />

      {/* ── Ring 3: Day-of-month (outermost) ── */}
      <g style={introStyle("0.3s", "1.6s")}>
        {Array.from({ length: 31 }, (_, i) => {
          const num = i + 1;
          const isActive = num === currentDayOfMonth;
          const angle = (i / 31) * 360 + dayNumOffset;
          const pos = circlePos(R_DAYNUM, angle);
          const tickOuter = circlePos(95, angle);
          const tickInner = circlePos(91, angle);
          return (
            <g key={`dn-${i}`}>
              <line
                x1={tickOuter.x}
                y1={tickOuter.y}
                x2={tickInner.x}
                y2={tickInner.y}
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="0.8"
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="6.8"
                fontFamily="'Inter', system-ui, sans-serif"
                fontWeight={isActive ? "700" : "400"}
                fill={isActive ? "#f59e0b" : "rgba(255,255,255,0.3)"}
                style={
                  isActive
                    ? { filter: "drop-shadow(0 0 4px rgba(245,158,11,0.5))" }
                    : {}
                }
              >
                {num}
              </text>
            </g>
          );
        })}
      </g>

      {/* ── Ring 2: Months ── */}
      <g style={introStyle("0.15s", "1.4s")}>
        {MONTHS.map((m, i) => {
          const isActive = i === currentMonthIdx;
          const angle = (i / 12) * 360 + monthOffset;
          const pos = circlePos(R_MONTHS, angle);
          return (
            <text
              key={`mo-${i}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="7.5"
              fontFamily="'Inter', system-ui, sans-serif"
              fontWeight={isActive ? "700" : "400"}
              fill={isActive ? "#60a5fa" : "rgba(255,255,255,0.3)"}
              style={
                isActive
                  ? { filter: "drop-shadow(0 0 4px rgba(96,165,250,0.5))" }
                  : {}
              }
            >
              {m}
            </text>
          );
        })}
      </g>

      {/* ── Ring 1: Days of week ── */}
      <g style={introStyle("0s", "1.2s")}>
        {DAYS.map((d, i) => {
          const isActive = i === currentDayIdx;
          const angle = (i / 7) * 360 + dayOffset;
          const pos = circlePos(R_DAYS, angle);
          return (
            <text
              key={`dy-${i}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="8.5"
              fontFamily="'Inter', system-ui, sans-serif"
              fontWeight={isActive ? "700" : "400"}
              fill={isActive ? "#22c55e" : "rgba(255,255,255,0.3)"}
              style={
                isActive
                  ? { filter: "drop-shadow(0 0 4px rgba(34,197,94,0.5))" }
                  : {}
              }
            >
              {d}
            </text>
          );
        })}
      </g>

      {/* ── Hands ── */}
      <g style={handsStyle}>
        {(() => {
          const end = circlePos(HOUR_LEN, hourAngle);
          return (
            <line
              x1={C}
              y1={C}
              x2={end.x}
              y2={end.y}
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          );
        })()}
        {(() => {
          const end = circlePos(MIN_LEN, minuteAngle);
          return (
            <line
              x1={C}
              y1={C}
              x2={end.x}
              y2={end.y}
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          );
        })()}
        {(() => {
          const end = circlePos(30, secondAngle);
          return (
            <line
              x1={C}
              y1={C}
              x2={end.x}
              y2={end.y}
              stroke="#ef4444"
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })()}
        <circle cx={C} cy={C} r="3" fill="#ffffff" />
        <circle cx={C} cy={C} r="1.5" fill="#ef4444" />
      </g>
    </svg>
  );
}
