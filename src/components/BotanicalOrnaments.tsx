"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Ornamen Floral Sudut: Perpaduan Bunga Burgundy (#631426),
 * Daun Emas (#D5B263 -> #9E7B3B), dan Bunga Krem (#FAF5EE / #EADBC8)
 */
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
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D5B263" />
          <stop offset="50%" stopColor="#E6C983" />
          <stop offset="100%" stopColor="#9E7B3B" />
        </linearGradient>
        <linearGradient id="burgundyRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#821D35" />
          <stop offset="60%" stopColor="#631426" />
          <stop offset="100%" stopColor="#3D0A16" />
        </linearGradient>
        <linearGradient id="creamFlowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF5EE" />
          <stop offset="100%" stopColor="#EADBC8" />
        </linearGradient>
      </defs>

      {/* Main curving Champagne Gold & Antique Bronze stems */}
      <path
        d="M8 220C22 145 68 70 210 12"
        stroke="url(#goldLeafGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 155C42 112 98 58 168 42"
        stroke="#9E7B3B"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Daun Emas (Gold Leaves) */}
      <path
        d="M32 175C12 160 12 132 32 120C46 136 47 160 32 175Z"
        fill="url(#goldLeafGrad)"
        fillOpacity="0.88"
        stroke="#9E7B3B"
        strokeWidth="0.9"
      />
      <path
        d="M62 142C74 160 100 158 112 138C95 126 74 127 62 142Z"
        fill="url(#goldLeafGrad)"
        fillOpacity="0.78"
        stroke="#9E7B3B"
        strokeWidth="0.9"
      />
      <path
        d="M72 108C54 88 58 62 80 52C92 70 87 93 72 108Z"
        fill="url(#goldLeafGrad)"
        fillOpacity="0.9"
        stroke="#9E7B3B"
        strokeWidth="0.9"
      />
      <path
        d="M112 84C126 98 152 96 164 76C146 65 124 68 112 84Z"
        fill="url(#goldLeafGrad)"
        fillOpacity="0.8"
        stroke="#9E7B3B"
        strokeWidth="0.9"
      />
      <path
        d="M132 50C120 32 128 12 150 8C156 26 148 42 132 50Z"
        fill="url(#goldLeafGrad)"
        fillOpacity="0.85"
        stroke="#9E7B3B"
        strokeWidth="0.9"
      />

      {/* Bunga Burgundy Utama (Main Burgundy Rose) */}
      <g transform="translate(42, 74)">
        <circle cx="24" cy="24" r="20" fill="url(#burgundyRoseGrad)" />
        <path
          d="M24 8C15 8 10 15 12 24C14 31 22 36 30 33C37 30 39 21 34 14C31 10 27 8 24 8Z"
          fill="#7D1B31"
          stroke="#D5B263"
          strokeWidth="0.8"
        />
        <path
          d="M24 13C18 13 15 18 17 24C19 28 24 30 28 28C32 26 33 20 30 16C28 14 26 13 24 13Z"
          fill="#3D0A16"
          stroke="#D5B263"
          strokeWidth="0.7"
        />
        <circle cx="24" cy="22" r="3.5" fill="#D5B263" />
        <circle cx="22" cy="20" r="1.3" fill="#FAF5EE" />
      </g>

      {/* Bunga Krem (Cream Blossom 1 - Upper Right of Cluster) */}
      <g transform="translate(88, 34)">
        <circle cx="16" cy="14" r="9" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="23" cy="19" r="8.5" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="14" cy="22" r="8.5" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="18" cy="18" r="4" fill="#9E7B3B" />
        <circle cx="18" cy="18" r="2" fill="#D5B263" />
      </g>

      {/* Bunga Krem (Cream Blossom 2 - Lower Left of Cluster) */}
      <g transform="translate(22, 122)">
        <circle cx="14" cy="14" r="8" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="20" cy="18" r="7.5" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="13" cy="20" r="7.5" fill="url(#creamFlowerGrad)" stroke="#D5B263" strokeWidth="0.9" />
        <circle cx="16" cy="17" r="3.2" fill="#631426" />
        <circle cx="16" cy="17" r="1.5" fill="#D5B263" />
      </g>

      {/* Kuncup Bunga Burgundy Kedua */}
      <g transform="translate(74, 102)">
        <circle cx="12" cy="12" r="10" fill="url(#burgundyRoseGrad)" stroke="#D5B263" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="3" fill="#D5B263" />
      </g>

      {/* Berry Emas & Krem Halus */}
      <circle cx="174" cy="30" r="4" fill="#D5B263" />
      <circle cx="186" cy="22" r="3" fill="#FAF5EE" stroke="#9E7B3B" strokeWidth="0.8" />
      <circle cx="34" cy="192" r="4.5" fill="#631426" stroke="#D5B263" strokeWidth="0.8" />
      <circle cx="26" cy="204" r="3" fill="#D5B263" />
    </svg>
  );
}

/**
 * Container Arch Card (Kubah Melengkung) Berwarna Cream (#FAF5EE) & Soft Champagne (#EADBC8)
 * dengan Double-Border Gold Tipis (#D5B263) serta Ornamen Botanikal di Kiri Atas & Kanan Bawah
 */
export function BotanicalArchCard({
  children,
  className = "",
  innerClassName = "",
  archType = "full",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  archType?: "full" | "soft";
}) {
  const outerRadius =
    archType === "full"
      ? "rounded-t-[9.5rem] sm:rounded-t-[13rem] md:rounded-t-[15rem] rounded-b-[2.5rem]"
      : "rounded-t-[5rem] sm:rounded-t-[7.5rem] md:rounded-t-[9rem] rounded-b-[2.5rem]";

  const innerRadius =
    archType === "full"
      ? "rounded-t-[9.1rem] sm:rounded-t-[12.6rem] md:rounded-t-[14.6rem] rounded-b-[2.2rem]"
      : "rounded-t-[4.7rem] sm:rounded-t-[7.1rem] md:rounded-t-[8.6rem] rounded-b-[2.2rem]";

  return (
    <div
      className={`relative mx-auto w-full bg-gradient-to-b from-[#FAF5EE] via-[#FAF5EE] to-[#EADBC8] border border-[#D5B263] p-2 sm:p-3 shadow-botanical-lg ${outerRadius} ${className}`}
    >
      {/* Double-Border Gold Tipis (#D5B263) di bagian dalam */}
      <div
        className={`relative w-full h-full border border-[#D5B263]/85 bg-gradient-to-b from-[#FAF5EE]/95 via-[#FAF5EE] to-[#EADBC8]/75 ${innerRadius} ${innerClassName}`}
      >
        {/* Ornamen Botanikal/Floral di Sudut Kiri Atas Bingkai Arch */}
        <BotanicalCorner className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-28 sm:w-36 md:w-44 z-20 drop-shadow-sm" />

        {/* Ornamen Botanikal/Floral di Sudut Kanan Bawah Bingkai Arch */}
        <BotanicalCorner
          className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-28 sm:w-36 md:w-44 z-20 drop-shadow-sm"
          flipX
          flipY
        />

        {/* Konten Utama di dalam Arch Card */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 280 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 md:w-64 h-auto"
      >
        {/* Left Gold Stem & Leaves */}
        <path
          d="M15 22C55 22 85 16 125 22"
          stroke="#D5B263"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M55 21C46 12 32 12 26 20C34 26 46 26 55 21Z"
          fill="#D5B263"
          fillOpacity="0.85"
        />
        <path
          d="M88 20C80 29 66 29 60 21C68 15 80 15 88 20Z"
          fill="#9E7B3B"
          fillOpacity="0.75"
        />
        <path
          d="M112 21C105 12 93 13 88 19C95 25 105 25 112 21Z"
          fill="#D5B263"
          fillOpacity="0.9"
        />

        {/* Right Gold Stem & Leaves */}
        <path
          d="M265 22C225 22 195 16 155 22"
          stroke="#D5B263"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M225 21C234 12 248 12 254 20C246 26 234 26 225 21Z"
          fill="#D5B263"
          fillOpacity="0.85"
        />
        <path
          d="M192 20C200 29 214 29 220 21C212 15 200 15 192 20Z"
          fill="#9E7B3B"
          fillOpacity="0.75"
        />
        <path
          d="M168 21C175 12 187 13 192 19C185 25 175 25 168 21Z"
          fill="#D5B263"
          fillOpacity="0.9"
        />

        {/* Side Cream Blossoms */}
        <circle cx="118" cy="22" r="4" fill="#FAF5EE" stroke="#D5B263" strokeWidth="1" />
        <circle cx="162" cy="22" r="4" fill="#FAF5EE" stroke="#D5B263" strokeWidth="1" />

        {/* Center Deep Wine Burgundy Rose with Champagne Gold & Cream Center */}
        <circle cx="140" cy="22" r="10.5" fill="#D5B263" fillOpacity="0.3" />
        <circle cx="137" cy="20" r="7" fill="#631426" />
        <circle cx="143" cy="24" r="6.5" fill="#3D0A16" />
        <circle cx="140" cy="22" r="3.2" fill="#D5B263" />
        <circle cx="140" cy="22" r="1.4" fill="#FAF5EE" />
      </svg>
    </div>
  );
}

const PETALS = [
  { id: 1, left: "8%", delay: 0, duration: 15, size: 14, type: "gold" },
  { id: 2, left: "22%", delay: 3, duration: 18, size: 12, type: "burgundy" },
  { id: 3, left: "38%", delay: 6, duration: 16, size: 15, type: "cream" },
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
            opacity: [0, 0.65, 0.65, 0],
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
                fill="#D5B263"
                fillOpacity="0.85"
              />
            </svg>
          ) : petal.type === "burgundy" ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7 2 4 7 4 12C4 17 8 22 12 22C16 22 20 17 20 12C20 7 17 2 12 2Z"
                fill="#631426"
                stroke="#D5B263"
                strokeWidth="1"
                fillOpacity="0.85"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7 2 4 7 4 12C4 17 8 22 12 22C16 22 20 17 20 12C20 7 17 2 12 2Z"
                fill="#FAF5EE"
                stroke="#D5B263"
                strokeWidth="0.8"
                fillOpacity="0.8"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
