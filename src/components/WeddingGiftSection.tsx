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
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8 bg-[#631426]"
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
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D5B263] font-medium">
            Wedding Gift
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF5EE] font-semibold mt-1.5">
            {weddingConfig.weddingGift.title}
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-[#EADBC8] max-w-md mx-auto leading-relaxed px-2">
            {weddingConfig.weddingGift.description}
          </p>
        </motion.div>

        {/* 30% Secondary: Bank Account Card in Warm Ivory Cream (#FAF5EE) + 10% Gold Trim */}
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
                className="relative bg-[#FAF5EE] border border-[#D5B263] rounded-3xl p-6 sm:p-7 shadow-botanical-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Card Chip & Bank Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#D5B263] to-[#9E7B3B] border border-[#9E7B3B]/40 shrink-0" />
                  <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#631426] text-[#FAF5EE] border border-[#D5B263] text-right truncate max-w-[75%]">
                    {acc.bankName}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#9E7B3B] font-medium mb-1">
                    Nomor Rekening
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.08em] text-[#3D0A16] select-all tabular-nums">
                    {acc.accountNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-[#631426] font-semibold mt-1.5">
                    {acc.accountHolder}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(acc.accountNumber, acc.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-[#D5B263] transition-all ${
                    isCopied
                      ? "bg-[#9E7B3B] text-[#FAF5EE] shadow-sm"
                      : "bg-[#631426] hover:bg-[#3D0A16] text-[#FAF5EE] shadow-sm"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-[#D5B263] shrink-0" />
                      <span>Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#D5B263] shrink-0" />
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
