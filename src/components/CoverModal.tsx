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
          className="fixed inset-0 z-50 flex items-center justify-center bg-botanical-bg overflow-y-auto overflow-x-hidden px-5 sm:px-6 py-8"
        >
          {/* Decorative Corner Botanical Illustrations */}
          <BotanicalCorner className="fixed top-0 left-0 w-36 sm:w-48 md:w-64 opacity-80" />
          <BotanicalCorner
            className="fixed top-0 right-0 w-36 sm:w-48 md:w-64 opacity-80"
            flipX
          />
          <BotanicalCorner
            className="fixed bottom-0 left-0 w-36 sm:w-48 md:w-64 opacity-80"
            flipY
          />
          <BotanicalCorner
            className="fixed bottom-0 right-0 w-36 sm:w-48 md:w-64 opacity-80"
            flipX
            flipY
          />

          {/* Subtle Radial Burgundy & Gold Glow */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(183, 137, 43, 0.18) 0%, rgba(122, 16, 38, 0.08) 45%, transparent 75%)",
            }}
          />

          {/* Main Cover Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md mx-auto text-center bg-botanical-cream/90 backdrop-blur-md border border-botanical-gold/40 rounded-[2.25rem] sm:rounded-[2.5rem] px-5 py-8 sm:px-9 sm:py-10 shadow-botanical-lg"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-botanical-sage-600 font-medium mb-3">
              The Wedding Of
            </p>

            {/* Arched Couple Photo Frame */}
            <div className="relative mx-auto w-40 h-52 sm:w-48 sm:h-60 mb-5 p-2 rounded-t-full rounded-b-3xl border border-botanical-gold/60 bg-botanical-cream shadow-inner">
              <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-2xl">
                <img
                  src={weddingConfig.couple.heroImage}
                  alt={weddingConfig.couple.shortTitle}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-botanical-sage-900/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1 rounded-full border border-botanical-rose-200 shadow-sm">
                <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-botanical-sage-700 font-medium whitespace-nowrap">
                  {weddingConfig.couple.weddingDateDisplay}
                </span>
              </div>
            </div>

            {/* Couple Name */}
            <h1 className="font-serif text-3xl sm:text-5xl text-botanical-sage-800 font-semibold tracking-wide mt-4">
              {weddingConfig.couple.groom.nickname}{" "}
              <span className="font-script text-botanical-rose-400 text-2xl sm:text-4xl font-normal mx-1">
                &amp;
              </span>{" "}
              {weddingConfig.couple.bride.nickname}
            </h1>

            <BotanicalDivider className="my-2.5 sm:my-3" />

            {/* Dynamic / Optional Guest Section */}
            {showGuestBox ? (
              <div className="mt-2.5 mb-5 sm:mb-6 bg-botanical-linen/80 border border-botanical-sage-200/70 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-[11px] sm:text-xs text-botanical-sage-600 tracking-wide mb-1">
                  {weddingConfig.settings.guestGreetingLabel}
                </p>
                {displayedGuestName ? (
                  <>
                    <div className="flex items-center justify-center gap-1.5 my-1">
                      <UserCheck className="w-4 h-4 text-botanical-sage-500 shrink-0" />
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-botanical-sage-800 break-words">
                        {displayedGuestName}
                      </h2>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-botanical-sage-600/80 mt-1">
                      Mohon maaf apabila terdapat kesalahan penulisan nama/gelar
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-botanical-sage-700 leading-relaxed mt-1">
                    {weddingConfig.settings.defaultGuestFallbackNote}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-botanical-sage-600 leading-relaxed mt-2 mb-5 px-2">
                {weddingConfig.settings.defaultGuestFallbackNote}
              </p>
            )}

            {/* Open Invitation CTA Button */}
            <motion.button
              onClick={onOpenInvitation}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-botanical transition-colors"
            >
              <MailOpen className="w-4 h-4 shrink-0" />
              <span>Buka Undangan</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
