"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Ornamen Sudut Botanikal Asli dari 5573866.ai:
 * Menggabungkan tangkai bunga mekar (stem-lily) & ranting daun/bunga (sprig-flower)
 * dalam gradasi Champagne Gold (#D5B263) & Antique Bronze (#9E7B3B)
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
  const transform = `${flipX ? "scaleX(-1)" : ""} ${
    flipY ? "scaleY(-1)" : ""
  }`.trim();

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      <div className="relative w-full aspect-square">
        {/* Main curved floral sprig from 5573866.ai — full glamorous scale */}
        <img
          src="/ornaments/sprig-flower.svg"
          alt=""
          className="absolute top-0 left-1 w-[56%] h-auto -rotate-[28deg] opacity-95 drop-shadow"
        />
        {/* Secondary curling tendril sprig from 5573866.ai */}
        <img
          src="/ornaments/sprig-tendril.svg"
          alt=""
          className="absolute top-5 left-7 w-[50%] h-auto rotate-[16deg] opacity-80"
        />
      </div>
    </div>
  );
}

/**
 * Pembatas Bagian (Section Divider) Asli dari 5573866.ai:
 * - variant="berry"    : Ranting daun & buah beri simetris (divider-berry-leaf.svg)
 * - variant="leaf"     : Sepasang tangkai daun botanikal (divider-leaf-pair.svg)
 * - variant="filigree" : Ornamen ukiran sulur klasik (divider-filigree.svg)
 */
export function BotanicalDivider({
  className = "",
  variant = "berry",
}: {
  className?: string;
  variant?: "berry" | "leaf" | "filigree";
}) {
  const srcMap = {
    berry: "/ornaments/divider-berry-leaf.svg",
    leaf: "/ornaments/divider-leaf-pair.svg",
    filigree: "/ornaments/divider-filigree.svg",
  };

  return (
    <div
      className={`flex items-center justify-center my-4 ${className}`}
      aria-hidden="true"
    >
      <img
        src={srcMap[variant]}
        alt=""
        className="w-44 sm:w-56 md:w-64 h-auto select-none pointer-events-none opacity-95"
      />
    </div>
  );
}

/**
 * Lingkaran Krans Daun & Beri (Botanical Wreath) Asli dari 5573866.ai
 */
export function BotanicalWreath({ className = "" }: { className?: string }) {
  return (
    <img
      src="/ornaments/wreath-botanical.svg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  );
}

/**
 * Tangkai Bunga Vertikal (Tall Floral Stem) Asli dari 5573866.ai
 */
export function BotanicalStem({
  className = "",
  variant = "lily",
  flipX = false,
}: {
  className?: string;
  variant?: "lily" | "vine";
  flipX?: boolean;
}) {
  return (
    <img
      src={
        variant === "lily"
          ? "/ornaments/stem-lily.svg"
          : "/ornaments/stem-vine.svg"
      }
      alt=""
      aria-hidden="true"
      style={{ transform: flipX ? "scaleX(-1)" : undefined }}
      className={`pointer-events-none select-none ${className}`}
    />
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
