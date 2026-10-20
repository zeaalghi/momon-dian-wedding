"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Download, Expand, QrCode, X } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function WeddingGiftSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isQrisZoomOpen, setIsQrisZoomOpen] = useState(false);

  if (!weddingConfig.weddingGift.enabled) return null;

  const { qris } = weddingConfig.weddingGift;

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
      className="relative w-full overflow-hidden py-16 sm:py-20 px-4 min-[360px]:px-6 sm:px-8 bg-[#4E0E1D]"
    >
      <div className="w-full max-w-4xl mx-auto">
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

        {/* Grid: Bank Account Card & Romantic Botanical Themed QRIS Card */}
        <div
          className={
            qris?.enabled
              ? "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch"
              : "max-w-md mx-auto"
          }
        >
          {/* 1. Bank Account Card */}
          {weddingConfig.weddingGift.accounts.map((acc) => {
            const isCopied = copiedId === acc.id;
            return (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-[#FAF5EE] border border-[#D5B263] rounded-3xl p-5 min-[360px]:p-6 sm:p-7 shadow-botanical-lg overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Card Chip & Bank Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#D5B263] to-[#9E7B3B] border border-[#9E7B3B]/40 shrink-0" />
                    <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#631426] text-[#FAF5EE] border border-[#D5B263] text-right truncate max-w-[75%]">
                      {acc.bankName}
                    </span>
                  </div>

                  <div className="bg-[#EADBC8]/45 border border-[#D5B263]/60 rounded-2xl p-4 sm:p-5 mb-6 text-center sm:text-left">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#9E7B3B] font-semibold mb-1.5">
                      Transfer Nomor Rekening
                    </p>
                    <p className="font-sans text-xl min-[360px]:text-2xl sm:text-3xl font-bold tracking-[0.06em] sm:tracking-[0.08em] text-[#3D0A16] select-all tabular-nums">
                      {acc.accountNumber}
                    </p>
                    <p className="text-xs sm:text-sm text-[#631426] font-semibold mt-2">
                      {acc.accountHolder}
                    </p>
                  </div>
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

          {/* 2. Custom Themed QRIS Card (DIAN & MOMON) */}
          {qris?.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-[#FAF5EE] border border-[#D5B263] rounded-3xl p-5 min-[360px]:p-6 sm:p-7 shadow-botanical-lg overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Decorative Gold Icon & Elegant QRIS Pill Badge (matching Bank Card) */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D5B263] to-[#9E7B3B] border border-[#9E7B3B]/40 flex items-center justify-center text-[#FAF5EE] shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#631426] text-[#FAF5EE] border border-[#D5B263]">
                    QRIS
                  </span>
                </div>

                {/* Inner Soft Champagne Box with QR Matrix & Couple Name */}
                <div className="bg-[#EADBC8]/45 border border-[#D5B263]/60 rounded-2xl p-4 sm:p-5 mb-5 text-center">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#9E7B3B] font-semibold mb-3">
                    Scan Kode QR Tanda Kasih
                  </p>

                  {/* Scannable QR Matrix in Champagne Gold Frame */}
                  <div className="relative mx-auto w-44 sm:w-48 aspect-square bg-white p-2.5 rounded-2xl border-2 border-[#D5B263] shadow-sm mb-3 group">
                    <button
                      type="button"
                      onClick={() => setIsQrisZoomOpen(true)}
                      aria-label="Perbesar kode QRIS"
                      className="relative w-full h-full block focus:outline-none"
                    >
                      <img
                        src={qris.matrixImage}
                        alt={`QRIS ${qris.accountHolder}`}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3D0A16]/85 text-[#FAF5EE] border border-[#D5B263] text-[9px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                        <Expand className="w-2.5 h-2.5 text-[#D5B263]" />
                        <span>Perbesar</span>
                      </span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#631426] font-semibold tracking-wide">
                    {qris.accountHolder}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Zoom & Download Custom Themed QRIS Card */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsQrisZoomOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#EADBC8]/70 hover:bg-[#EADBC8] text-[#3D0A16] border border-[#D5B263] transition-colors"
                >
                  <Expand className="w-4 h-4 text-[#631426] shrink-0" />
                  <span>Perbesar</span>
                </button>

                <a
                  href={qris.downloadImage}
                  download="QRIS-Dian-dan-Momon.png"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#631426] hover:bg-[#3D0A16] text-[#FAF5EE] border border-[#D5B263] shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4 text-[#D5B263] shrink-0" />
                  <span>Unduh QRIS</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for QRIS Scanning */}
      <AnimatePresence>
        {isQrisZoomOpen && qris && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQrisZoomOpen(false)}
            className="fixed inset-0 z-50 bg-[#3D0A16]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-[#FAF5EE] border-2 border-[#D5B263] rounded-3xl p-4 sm:p-5 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsQrisZoomOpen(false)}
                aria-label="Tutup tampilan QRIS"
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#631426] text-[#FAF5EE] border border-[#D5B263] flex items-center justify-center shadow-md"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={`${qris.downloadImage}?v=2`}
                alt={`QRIS ${qris.accountHolder}`}
                className="w-full h-auto rounded-2xl border border-[#D5B263]"
              />

              <div className="mt-4 flex gap-2.5">
                <a
                  href={qris.downloadImage}
                  download="QRIS-Dian-dan-Momon.png"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#631426] hover:bg-[#3D0A16] text-[#FAF5EE] border border-[#D5B263] shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4 text-[#D5B263] shrink-0" />
                  <span>Simpan Gambar QRIS</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
