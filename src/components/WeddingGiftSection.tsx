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
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8 bg-botanical-linen/60 border-t border-botanical-sage-200/60"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-botanical-sage-600 font-medium">
            Wedding Gift
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical-sage-800 font-semibold mt-1.5">
            {weddingConfig.weddingGift.title}
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-md mx-auto leading-relaxed px-2">
            {weddingConfig.weddingGift.description}
          </p>
        </motion.div>

        {/* Bank Account Card (No Tabs, Clean & Centered) */}
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
                className="relative bg-white/95 border border-botanical-sage-200/90 rounded-3xl p-6 sm:p-7 shadow-botanical overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Card Chip & Bank Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-br from-botanical-gold-light to-botanical-gold border border-botanical-gold-dark/30 shrink-0" />
                  <span
                    className="text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full text-white text-right truncate max-w-[75%]"
                    style={{ backgroundColor: acc.badgeColor }}
                  >
                    {acc.bankName}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-botanical-sage-500 mb-1">
                    Nomor Rekening
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.08em] text-botanical-sage-800 select-all tabular-nums">
                    {acc.accountNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-botanical-sage-700 font-semibold mt-1.5">
                    {acc.accountHolder}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(acc.accountNumber, acc.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isCopied
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white shadow-sm"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 shrink-0" />
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
