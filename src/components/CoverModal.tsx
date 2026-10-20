"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, UserCheck } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalCorner, BotanicalDivider } from "./BotanicalOrnaments";

interface CoverModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
  guestNameFromUrl: string | null;
  guestModeOverride?: "auto" | "hidden" | "always";
}

export function CoverModal({
  isOpen,
  onOpenInvitation,
  guestNameFromUrl,
  guestModeOverride,
}: CoverModalProps) {
  const mode = guestModeOverride || weddingConfig.settings.guestDisplayMode;
  const hasCustomGuest = Boolean(
    guestNameFromUrl && guestNameFromUrl.trim().length > 0
  );

  const showGuestBox = mode !== "hidden";
  const displayedGuestName = hasCustomGuest
    ? guestNameFromUrl
    : mode === "always"
    ? weddingConfig.settings.defaultGuestName
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cover-modal"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#7A1026] via-[#5E0C1D] to-[#7A1026] overflow-y-auto overflow-x-hidden px-5 sm:px-6 py-8"
        >
          {/* Decorative Corner Botanical Illustrations */}
          <BotanicalCorner className="fixed top-0 left-0 w-36 sm:w-48 md:w-64 opacity-90" />
          <BotanicalCorner
            className="fixed top-0 right-0 w-36 sm:w-48 md:w-64 opacity-90"
            flipX
          />
          <BotanicalCorner
            className="fixed bottom-0 left-0 w-36 sm:w-48 md:w-64 opacity-90"
            flipY
          />
          <BotanicalCorner
            className="fixed bottom-0 right-0 w-36 sm:w-48 md:w-64 opacity-90"
            flipX
            flipY
          />

          {/* Rich Gold Radial Glow balancing the Burgundy backdrop */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(183, 137, 43, 0.42) 0%, rgba(122, 16, 38, 0.35) 55%, transparent 80%)",
            }}
          />

          {/* Main Cover Card: Gold Outer Frame + Balanced Gold & Burgundy Body + Creme Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md mx-auto p-[2.5px] rounded-[2.35rem] sm:rounded-[2.6rem] bg-gradient-to-b from-[#F3E2C7] via-[#B7892B] to-[#8C6518] shadow-botanical-lg"
          >
            <div className="w-full text-center bg-gradient-to-b from-[#7A1026] via-[#660D20] to-[#B7892B]/90 rounded-[2.25rem] sm:rounded-[2.5rem] px-5 py-8 sm:px-9 sm:py-10 border border-[#F3E2C7]/25">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#F3E2C7] font-medium mb-3">
                The Wedding Of
              </p>

              {/* Arched Couple Photo Frame in Metallic Gold */}
              <div className="relative mx-auto w-40 h-52 sm:w-48 sm:h-60 mb-5 p-2 rounded-t-full rounded-b-3xl border border-[#F3E2C7]/60 bg-gradient-to-b from-[#D6B05C] via-[#B7892B] to-[#8C6518] shadow-botanical">
                <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-2xl border border-[#F3E2C7]/40">
                  <img
                    src={weddingConfig.couple.heroImage}
                    alt={weddingConfig.couple.shortTitle}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A0917]/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#7A1026] px-4 py-1 rounded-full border border-[#F3E2C7]/70 shadow-md">
                  <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#F3E2C7] font-semibold whitespace-nowrap">
                    {weddingConfig.couple.weddingDateDisplay}
                  </span>
                </div>
              </div>

              {/* Couple Name in Creme Accent & Gold Script */}
              <h1 className="font-serif text-3xl sm:text-5xl text-[#F3E2C7] font-semibold tracking-wide mt-4 drop-shadow-sm">
                {weddingConfig.couple.groom.nickname}{" "}
                <span className="font-script text-[#D6B05C] text-2xl sm:text-4xl font-normal mx-1">
                  &amp;
                </span>{" "}
                {weddingConfig.couple.bride.nickname}
              </h1>

              <BotanicalDivider className="my-2.5 sm:my-3" />

              {/* Dynamic / Optional Guest Section in Balanced Burgundy & Gold with Creme Accent */}
              {showGuestBox ? (
                <div className="mt-2.5 mb-5 sm:mb-6 bg-[#5E0C1D]/85 border border-[#F3E2C7]/45 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 shadow-inner">
                  <p className="text-[11px] sm:text-xs text-[#D6B05C] tracking-wide font-medium mb-1">
                    {weddingConfig.settings.guestGreetingLabel}
                  </p>
                  {displayedGuestName ? (
                    <>
                      <div className="flex items-center justify-center gap-1.5 my-1">
                        <UserCheck className="w-4 h-4 text-[#D6B05C] shrink-0" />
                        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#F3E2C7] break-words">
                          {displayedGuestName}
                        </h2>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[#F3E2C7]/80 mt-1">
                        Mohon maaf apabila terdapat kesalahan penulisan nama/gelar
                      </p>
                    </>
                  ) : (
                    <p className="text-xs text-[#F3E2C7]/90 leading-relaxed mt-1">
                      {weddingConfig.settings.defaultGuestFallbackNote}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-[#F3E2C7]/90 leading-relaxed mt-2 mb-5 px-2">
                  {weddingConfig.settings.defaultGuestFallbackNote}
                </p>
              )}

              {/* Open Invitation CTA Button in Metallic Gold with Creme Border & Burgundy Text */}
              <motion.button
                onClick={onOpenInvitation}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#B7892B] via-[#D6B05C] to-[#B7892B] hover:from-[#C99A35] hover:to-[#C99A35] text-[#4A0917] border border-[#F3E2C7]/70 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-botanical transition-all"
              >
                <MailOpen className="w-4 h-4 shrink-0" />
                <span>Buka Undangan</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
