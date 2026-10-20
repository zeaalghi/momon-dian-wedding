"use client";

import React from "react";
import { motion } from "framer-motion";

export function BotanicalCorner({
  className = "",
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();

  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      {/* Main curving Gold & Creme branches */}
      <path
        d="M10 210C25 145 65 75 195 15"
        stroke="#D6B05C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <path
        d="M5 150C40 110 95 60 155 45"
        stroke="#F3E2C7"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      {/* Gold & Burgundy Botanical Leaves with Creme trim */}
      <path
        d="M32 165C15 152 14 128 32 118C44 132 45 152 32 165Z"
        fill="#B7892B"
        fillOpacity="0.65"
        stroke="#F3E2C7"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M58 135C68 152 92 152 104 134C88 122 68 122 58 135Z"
        fill="#D6B05C"
        fillOpacity="0.45"
        stroke="#F3E2C7"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M68 105C52 88 56 64 76 56C86 72 82 92 68 105Z"
        fill="#B7892B"
        fillOpacity="0.7"
        stroke="#F3E2C7"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M105 82C118 96 142 94 152 76C136 66 116 68 105 82Z"
        fill="#D6B05C"
        fillOpacity="0.5"
        stroke="#F3E2C7"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M122 52C112 36 120 16 140 12C146 28 138 44 122 52Z"
        fill="#B7892B"
        fillOpacity="0.65"
        stroke="#F3E2C7"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Gold & Burgundy Blossom with Creme Center Accent */}
      <g transform="translate(46, 86)">
        <circle cx="16" cy="16" r="14" fill="#B7892B" fillOpacity="0.45" />
        <circle cx="12" cy="13" r="9" fill="#D6B05C" fillOpacity="0.85" />
        <circle cx="19" cy="18" r="8" fill="#B7892B" fillOpacity="0.75" />
        <circle cx="15" cy="15" r="4" fill="#F3E2C7" />
      </g>
      {/* Small Gold & Creme Buds */}
      <circle cx="96" cy="48" r="6" fill="#B7892B" fillOpacity="0.85" />
      <circle cx="94" cy="46" r="2.8" fill="#F3E2C7" />
      <circle cx="38" cy="182" r="4.5" fill="#D6B05C" fillOpacity="0.8" />
      <circle cx="164" cy="34" r="3.5" fill="#F3E2C7" fillOpacity="0.85" />
      <circle cx="174" cy="26" r="2.5" fill="#D6B05C" fillOpacity="0.85" />
      <circle cx="85" cy="112" r="3" fill="#F3E2C7" fillOpacity="0.8" />
    </svg>
  );
}

export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 280 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 md:w-64 h-auto"
      >
        {/* Left stem & leaves */}
        <path
          d="M15 21C55 21 85 15 125 21"
          stroke="#F3E2C7"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M55 20C46 11 32 11 26 19C34 25 46 25 55 20Z"
          fill="#D6B05C"
          fillOpacity="0.85"
        />
        <path
          d="M88 19C80 28 66 28 60 20C68 14 80 14 88 19Z"
          fill="#F3E2C7"
          fillOpacity="0.65"
        />
        <path
          d="M112 20C105 11 93 12 88 18C95 24 105 24 112 20Z"
          fill="#D6B05C"
          fillOpacity="0.9"
        />

        {/* Right stem & leaves */}
        <path
          d="M265 21C225 21 195 15 155 21"
          stroke="#F3E2C7"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M225 20C234 11 248 11 254 19C246 25 234 25 225 20Z"
          fill="#D6B05C"
          fillOpacity="0.85"
        />
        <path
          d="M192 19C200 28 214 28 220 20C212 14 200 14 192 19Z"
          fill="#F3E2C7"
          fillOpacity="0.65"
        />
        <path
          d="M168 20C175 11 187 12 192 18C185 24 175 24 168 20Z"
          fill="#D6B05C"
          fillOpacity="0.9"
        />

        {/* Center Gold & Burgundy Flower with Creme Accent */}
        <circle cx="140" cy="21" r="10" fill="#F3E2C7" fillOpacity="0.25" />
        <circle cx="137" cy="19" r="6.5" fill="#D6B05C" />
        <circle cx="143" cy="23" r="6" fill="#B7892B" />
        <circle cx="140" cy="21" r="3.2" fill="#F3E2C7" />
        <circle cx="120" cy="21" r="2.4" fill="#F3E2C7" fillOpacity="0.9" />
        <circle cx="160" cy="21" r="2.4" fill="#F3E2C7" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

const PETALS = [
  { id: 1, left: "8%", delay: 0, duration: 15, size: 14, type: "gold" },
  { id: 2, left: "22%", delay: 3, duration: 18, size: 12, type: "burgundy" },
  { id: 3, left: "38%", delay: 6, duration: 16, size: 15, type: "creme" },
  { id: 4, left: "55%", delay: 1.5, duration: 20, size: 11, type: "gold" },
  { id: 5, left: "72%", delay: 4.5, duration: 17, size: 14, type: "burgundy" },
  { id: 6, left: "88%", delay: 2, duration: 19, size: 13, type: "gold" },
];

export function FloatingPetals() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, 25, -20, 15],
            rotate: [0, 180, 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: petal.left, width: petal.size, height: petal.size }}
          className="absolute top-0"
        >
          {petal.type === "gold" ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17 3C10 3 4 9 4 19C14 19 20 13 17 3Z"
                fill="#D6B05C"
                fillOpacity="0.85"
              />
            </svg>
          ) : petal.type === "burgundy" ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7 2 4 7 4 12C4 17 8 22 12 22C16 22 20 17 20 12C20 7 17 2 12 2Z"
                fill="#7A1026"
                stroke="#F3E2C7"
                strokeWidth="1.2"
                fillOpacity="0.85"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7 2 4 7 4 12C4 17 8 22 12 22C16 22 20 17 20 12C20 7 17 2 12 2Z"
                fill="#F3E2C7"
                fillOpacity="0.75"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
