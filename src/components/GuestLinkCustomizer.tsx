"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  Eye,
  Link2,
  MessageCircle,
  Settings2,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface GuestLinkCustomizerProps {
  currentGuestName: string | null;
  guestMode: "auto" | "hidden" | "always";
  onChangeGuestMode: (mode: "auto" | "hidden" | "always") => void;
  onPreviewCoverWithGuest: (guestName: string | null) => void;
}

export function GuestLinkCustomizer({
  currentGuestName,
  guestMode,
  onChangeGuestMode,
  onPreviewCoverWithGuest,
}: GuestLinkCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleName, setSampleName] = useState(
    currentGuestName || weddingConfig.settings.invitedGuests[0] || ""
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const buildGuestUrl = (guestName: string | null) => {
    if (typeof window === "undefined") return "";
    const baseUrl = window.location.origin + window.location.pathname;
    if (!guestName || !guestName.trim()) return baseUrl;
    return `${baseUrl}?to=${encodeURIComponent(guestName.trim())}`;
  };

  const buildWhatsAppMessage = (guestName: string | null) => {
    const link = buildGuestUrl(guestName);
    const targetGreeting = guestName ? `*${guestName}*` : "Bapak/Ibu/Saudara/i";
    return `Kepada Yth. ${targetGreeting}\n\nAssalamu'alaikum Warahmatullahi Wabarakatuh\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Resepsi Pernikahan kami:\n\n*${weddingConfig.couple.groom.nickname} & ${weddingConfig.couple.bride.nickname}*\n📅 ${weddingConfig.couple.weddingDateDisplay}\n📍 ${weddingConfig.events[0]?.venueName || "Gedung Pertemuan Al-Ihsan"}\n\nInformasi lengkap undangan dapat diakses melalui tautan berikut:\n${link}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh\nKami yang berbahagia,\n*${weddingConfig.couple.shortTitle}*`;
  };

  const copyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2200);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2200);
    }
  };

  return (
    <>
      {/* Floating Button on Top-Right with safe viewport margin */}
      <div className="fixed top-3.5 right-3.5 sm:top-5 sm:right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Daftar Tamu & Generator Link Undangan"
          title="Daftar Tamu & Generator Link Undangan"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-botanical-sage-200 shadow-botanical text-xs font-medium text-botanical-sage-700 hover:bg-botanical-sage-600 hover:text-white transition-all"
        >
          <Settings2 className="w-4 h-4 shrink-0" />
          <span className="text-[11px] sm:text-xs">
            Daftar Tamu ({weddingConfig.settings.invitedGuests.length})
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-botanical-sage-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-botanical-bg border border-botanical-sage-200 rounded-3xl p-5 sm:p-6 shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 shrink-0">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-botanical-rose-400 font-semibold">
                    Panel Mempelai — Momon &amp; Dian
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-botanical-sage-800">
                    Daftar Tamu &amp; Link Undangan
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup panel"
                  className="w-8 h-8 rounded-full bg-botanical-sage-100 text-botanical-sage-700 flex items-center justify-center hover:bg-botanical-sage-200 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto pr-1 space-y-4">
                {/* 1. Saved 15 Named Guests List */}
                <div className="bg-white border border-botanical-sage-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold text-botanical-sage-800">
                      Daftar Undangan Bernama (
                      {weddingConfig.settings.invitedGuests.length} Tamu)
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onChangeGuestMode("hidden");
                        onPreviewCoverWithGuest(null);
                        setIsOpen(false);
                      }}
                      className="text-[11px] font-medium text-botanical-rose-500 hover:underline"
                    >
                      Lihat Versi Tanpa Nama
                    </button>
                  </div>

                  <div className="divide-y divide-botanical-sage-100 max-h-64 overflow-y-auto pr-1">
                    {weddingConfig.settings.invitedGuests.map((guest, idx) => {
                      const linkId = `link-${idx}`;
                      const waId = `wa-${idx}`;
                      const isSelected = currentGuestName === guest;

                      return (
                        <div
                          key={guest}
                          className={`py-2.5 px-2 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors ${
                            isSelected ? "bg-botanical-sage-50" : "hover:bg-botanical-bg/70"
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-botanical-sage-800 truncate">
                              {idx + 1}. {guest}
                            </p>
                            <p className="text-[10px] text-botanical-sage-500 truncate">
                              ?to={encodeURIComponent(guest)}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Preview Button */}
                            <button
                              type="button"
                              onClick={() => {
                                setSampleName(guest);
                                onChangeGuestMode("auto");
                                onPreviewCoverWithGuest(guest);
                                setIsOpen(false);
                              }}
                              title="Lihat Tampilan Cover"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-botanical-sage-100 hover:bg-botanical-sage-200 text-botanical-sage-800 text-[11px] font-medium transition-colors"
                            >
                              <Eye className="w-3 h-3" />
                              <span>Preview</span>
                            </button>

                            {/* Copy URL Button */}
                            <button
                              type="button"
                              onClick={() =>
                                copyText(buildGuestUrl(guest), linkId)
                              }
                              title="Salin Link Undangan"
                              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                                copiedId === linkId
                                  ? "bg-emerald-600 text-white"
                                  : "bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white"
                              }`}
                            >
                              {copiedId === linkId ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Tersalin</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Link</span>
                                </>
                              )}
                            </button>

                            {/* Copy Full WhatsApp Text Button */}
                            <button
                              type="button"
                              onClick={() =>
                                copyText(buildWhatsAppMessage(guest), waId)
                              }
                              title="Salin Teks Pengantar WhatsApp + Link"
                              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                                copiedId === waId
                                  ? "bg-emerald-600 text-white"
                                  : "bg-botanical-rose-100 hover:bg-botanical-rose-200 text-botanical-rose-500"
                              }`}
                            >
                              {copiedId === waId ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Tersalin</span>
                                </>
                              ) : (
                                <>
                                  <MessageCircle className="w-3 h-3" />
                                  <span>Teks WA</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Custom / Additional Guest Input */}
                <div className="bg-white border border-botanical-sage-200 rounded-2xl p-4">
                  <label className="block text-xs font-semibold text-botanical-sage-700 mb-1.5">
                    Buat Link Tamu Lainnya / Custom:
                  </label>
                  <input
                    type="text"
                    value={sampleName}
                    onChange={(e) => setSampleName(e.target.value)}
                    placeholder="Ketik nama tamu..."
                    className="w-full px-3.5 py-2 rounded-xl border border-botanical-sage-200 text-xs text-botanical-sage-800 focus:outline-none focus:ring-2 focus:ring-botanical-sage-500 mb-2.5"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onChangeGuestMode("auto");
                        onPreviewCoverWithGuest(sampleName);
                        setIsOpen(false);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Preview Nama Ini</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        copyText(buildGuestUrl(sampleName), "custom-link")
                      }
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-botanical-linen hover:bg-botanical-sage-100 text-botanical-sage-800 text-xs font-medium transition-colors"
                    >
                      {copiedId === "custom-link" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="text-emerald-700 truncate">
                            Link Tersalin!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">Salin Link Custom</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 3. General Link (Without Guest Name) */}
                <div className="bg-white/80 border border-botanical-sage-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-botanical-sage-800 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-botanical-sage-600" />
                      <span>Undangan Umum (Tanpa Nama Tamu)</span>
                    </p>
                    <p className="text-[11px] text-botanical-sage-600 mt-0.5">
                      Cocok untuk disebarkan ke grup tanpa mencantumkan nama
                      spesifik.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText(buildGuestUrl(null), "general-link")}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      copiedId === "general-link"
                        ? "bg-emerald-600 text-white"
                        : "bg-botanical-sage-100 hover:bg-botanical-sage-200 text-botanical-sage-800"
                    }`}
                  >
                    {copiedId === "general-link" ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Link2 className="w-3.5 h-3.5" />
                        <span>Salin Link Umum</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
