"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Link2,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "@/components/BotanicalOrnaments";

export default function DaftarTamuAdminPage() {
  const [customGuest, setCustomGuest] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getBaseOrigin = () => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  };

  const buildGuestUrl = (guestName: string | null) => {
    const base = getBaseOrigin();
    if (!guestName || !guestName.trim()) return `${base}/`;
    return `${base}/?to=${encodeURIComponent(guestName.trim())}`;
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
    <div className="min-h-screen bg-botanical-bg py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-botanical-rose-100 text-botanical-rose-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Halaman Khusus Mempelai
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-botanical-sage-800">
            Dashboard Link Tamu — {weddingConfig.couple.shortTitle}
          </h1>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-xl mx-auto leading-relaxed">
            Halaman <code>/tamu</code> ini <strong>tidak terlihat</strong> oleh
            tamu undangan. Gunakan halaman ini untuk menyalin link khusus
            masing-masing tamu atau membagikan langsung ke WhatsApp.
          </p>
        </div>

        {/* 1. General Link Card (Tanpa Nama) */}
        <div className="bg-white border border-botanical-sage-200 rounded-3xl p-5 sm:p-6 shadow-botanical mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-botanical-sage-800 flex items-center gap-2">
              <Users className="w-4 h-4 text-botanical-sage-600" />
              <span>Link Undangan Umum (Tanpa Nama Tamu)</span>
            </h2>
            <p className="text-xs text-botanical-sage-600 mt-1">
              Gunakan link ini jika Anda ingin menyebarkan undangan ke grup
              WhatsApp tanpa mencantumkan nama tamu tertentu.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => copyText(buildGuestUrl(null), "general-link")}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                copiedId === "general-link"
                  ? "bg-emerald-600 text-white"
                  : "bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white"
              }`}
            >
              {copiedId === "general-link" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Link Tersalin!</span>
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  <span>Salin Link Umum</span>
                </>
              )}
            </button>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-xl bg-botanical-linen hover:bg-botanical-sage-100 text-botanical-sage-700 text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka</span>
            </a>
          </div>
        </div>

        {/* 2. Custom Name Generator */}
        <div className="bg-white border border-botanical-sage-200 rounded-3xl p-5 sm:p-6 shadow-botanical mb-6">
          <h2 className="text-sm sm:text-base font-bold text-botanical-sage-800 mb-1">
            Buat Link Tamu Tambahan / Baru
          </h2>
          <p className="text-xs text-botanical-sage-600 mb-3">
            Ketik nama tamu di bawah ini untuk langsung membuat link undangan
            bernama tanpa perlu mengubah kode:
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              value={customGuest}
              onChange={(e) => setCustomGuest(e.target.value)}
              placeholder="Contoh: Bpk. H. Ridwan & Ibu"
              className="flex-1 px-4 py-2.5 rounded-xl border border-botanical-sage-200 text-xs sm:text-sm text-botanical-sage-800 focus:outline-none focus:ring-2 focus:ring-botanical-sage-500"
            />
            <button
              type="button"
              disabled={!customGuest.trim()}
              onClick={() =>
                copyText(buildGuestUrl(customGuest), "custom-link")
              }
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-botanical-sage-600 hover:bg-botanical-sage-700 disabled:opacity-50 text-white text-xs font-semibold transition-colors"
            >
              {copiedId === "custom-link" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Link Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Link</span>
                </>
              )}
            </button>
            <button
              type="button"
              disabled={!customGuest.trim()}
              onClick={() =>
                copyText(buildWhatsAppMessage(customGuest), "custom-wa")
              }
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-botanical-rose-100 hover:bg-botanical-rose-200 disabled:opacity-50 text-botanical-rose-500 text-xs font-semibold transition-colors"
            >
              {copiedId === "custom-wa" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Teks WA Tersalin</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4" />
                  <span>Salin Teks WA</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. Daftar 15 Tamu Undangan Bernama */}
        <div className="bg-white border border-botanical-sage-200 rounded-3xl p-5 sm:p-6 shadow-botanical">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-botanical-sage-800">
              Daftar Tamu Undangan Bernama (
              {weddingConfig.settings.invitedGuests.length} Tamu)
            </h2>
          </div>

          <div className="divide-y divide-botanical-sage-100">
            {weddingConfig.settings.invitedGuests.map((guest, idx) => {
              const linkId = `link-${idx}`;
              const waId = `wa-${idx}`;
              const guestUrl = `/?to=${encodeURIComponent(guest)}`;
              const waShareHref = `https://wa.me/?text=${encodeURIComponent(
                buildWhatsAppMessage(guest)
              )}`;

              return (
                <div
                  key={guest}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-botanical-sage-800">
                      {idx + 1}. {guest}
                    </p>
                    <p className="text-[11px] text-botanical-sage-500 truncate mt-0.5">
                      {guestUrl}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <a
                      href={guestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-botanical-linen hover:bg-botanical-sage-100 text-botanical-sage-700 text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Lihat</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => copyText(buildGuestUrl(guest), linkId)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                        copiedId === linkId
                          ? "bg-emerald-600 text-white"
                          : "bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white"
                      }`}
                    >
                      {copiedId === linkId ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Link Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Link</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        copyText(buildWhatsAppMessage(guest), waId)
                      }
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                        copiedId === waId
                          ? "bg-emerald-600 text-white"
                          : "bg-botanical-rose-100 hover:bg-botanical-rose-200 text-botanical-rose-500"
                      }`}
                    >
                      {copiedId === waId ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Teks Tersalin</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Salin Teks WA</span>
                        </>
                      )}
                    </button>

                    <a
                      href={waShareHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim WA</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
