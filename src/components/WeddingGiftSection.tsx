"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function WeddingGiftSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!weddingConfig.weddingGift.enabled) return null;

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section
      id="hadiah"
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#7A1026] via-[#5E0C1D] to-[#7A1026]"
    >
      {/* Radial Gold Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(183, 137, 43, 0.28) 0%, transparent 72%)",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D6B05C] font-semibold">
            Wedding Gift
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F3E2C7] font-semibold mt-1.5">
            {weddingConfig.weddingGift.title}
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-[#F3E2C7]/90 max-w-md mx-auto leading-relaxed px-2">
            {weddingConfig.weddingGift.description}
          </p>
        </motion.div>

        {/* Bank Account Card: Metallic Gold VIP Card + Burgundy Badge/Button + Creme Accents */}
        <div
          className={
            weddingConfig.weddingGift.accounts.length === 1
              ? "max-w-md mx-auto"
              : "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          }
        >
          {weddingConfig.weddingGift.accounts.map((acc) => {
            const isCopied = copiedId === acc.id;
            return (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-[#D6B05C] via-[#B7892B] to-[#8C6518] border-2 border-[#F3E2C7]/75 rounded-3xl p-6 sm:p-7 shadow-botanical-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Card Chip & Bank Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#F3E2C7] to-[#D6B05C] border border-[#7A1026]/40 shrink-0 shadow-sm" />
                  <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#7A1026] text-[#F3E2C7] border border-[#F3E2C7]/60 text-right truncate max-w-[75%] shadow-sm">
                    {acc.bankName}
                  </span>
                </div>

                {/* Inner Burgundy Account Box with Creme Accent Text */}
                <div className="mb-6 bg-[#7A1026]/90 border border-[#F3E2C7]/50 rounded-2xl p-4 text-center shadow-inner">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#D6B05C] font-semibold mb-1">
                    Nomor Rekening
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.08em] text-[#F3E2C7] select-all tabular-nums">
                    {acc.accountNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-[#F3E2C7]/90 font-semibold mt-1.5">
                    {acc.accountHolder}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(acc.accountNumber, acc.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-[#F3E2C7]/70 transition-all ${
                    isCopied
                      ? "bg-[#4A0917] text-[#F3E2C7] shadow-md"
                      : "bg-[#7A1026] hover:bg-[#5E0C1D] text-[#F3E2C7] shadow-md"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-[#D6B05C] shrink-0" />
                      <span>Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#D6B05C] shrink-0" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
