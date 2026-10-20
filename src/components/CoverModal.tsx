"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, UserCheck } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import {
  BotanicalCorner,
  BotanicalDivider,
  BotanicalWreath,
} from "./BotanicalOrnaments";

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#4E0E1D] overflow-y-auto overflow-x-hidden px-5 sm:px-6 py-8"
        >
          {/* 10% Accent: Grand Decorative Corner Botanical Illustrations */}
          <BotanicalCorner className="fixed -top-3 -left-4 sm:top-0 sm:left-0 w-40 sm:w-52 md:w-64 opacity-90" />
          <BotanicalCorner
            className="fixed -top-3 -right-4 sm:top-0 sm:right-0 w-40 sm:w-52 md:w-64 opacity-90"
            flipX
          />
          <BotanicalCorner
            className="fixed -bottom-3 -left-4 sm:bottom-0 sm:left-0 w-40 sm:w-52 md:w-64 opacity-90"
            flipY
          />
          <BotanicalCorner
            className="fixed -bottom-3 -right-4 sm:bottom-0 sm:right-0 w-40 sm:w-52 md:w-64 opacity-90"
            flipX
            flipY
          />

          {/* 60% Dominant: Deep Wine Burgundy with Soft Gold Ambient Vignette */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(213, 178, 99, 0.16) 0%, rgba(61, 10, 22, 0.45) 75%)",
            }}
          />

          {/* 30% Secondary: Warm Ivory Cream (#FAF5EE) Card Canvas with 10% Champagne Gold (#D5B263) Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md mx-auto text-center bg-[#FAF5EE] border border-[#D5B263] ring-1 ring-[#D5B263]/35 ring-offset-4 ring-offset-[#4E0E1D] rounded-[2.25rem] sm:rounded-[2.5rem] px-5 py-8 sm:px-9 sm:py-10 shadow-botanical-lg"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#9E7B3B] font-semibold mb-3">
              The Wedding Of
            </p>

            {/* Arched Couple Photo Frame with Botanical Wreath Halo */}
            <div className="relative mx-auto w-40 h-52 sm:w-48 sm:h-60 mb-5 flex items-center justify-center">
              <BotanicalWreath className="absolute -inset-6 sm:-inset-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-auto opacity-35" />
              <div className="relative w-full h-full p-2 rounded-t-full rounded-b-3xl border border-[#D5B263] bg-[#EADBC8]/40 shadow-inner">
                <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-2xl">
                  <img
                    src={weddingConfig.couple.heroImage}
                    alt={weddingConfig.couple.shortTitle}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A16]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FAF5EE] px-3.5 py-1 rounded-full border border-[#D5B263] shadow-sm">
                  <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#631426] font-semibold whitespace-nowrap">
                    {weddingConfig.couple.weddingDateDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Couple Name: Dark Mulberry (#3D0A16) + 10% Gold Script Accent */}
            <h1 className="font-serif text-3xl sm:text-5xl text-[#3D0A16] font-semibold tracking-wide mt-4">
              {weddingConfig.couple.groom.nickname}{" "}
              <span className="font-script text-[#9E7B3B] text-3xl sm:text-5xl font-normal mx-1">
                &amp;
              </span>{" "}
              {weddingConfig.couple.bride.nickname}
            </h1>

            <BotanicalDivider variant="filigree" className="my-2.5 sm:my-3" />

            {/* Guest Greeting Box in Soft Champagne (#EADBC8) */}
            {showGuestBox ? (
              <div className="mt-2.5 mb-5 sm:mb-6 bg-[#EADBC8]/55 border border-[#D5B263]/60 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-[11px] sm:text-xs text-[#631426] font-medium tracking-wide mb-1">
                  {weddingConfig.settings.guestGreetingLabel}
                </p>
                {displayedGuestName ? (
                  <>
                    <div className="flex items-center justify-center gap-1.5 my-1">
                      <UserCheck className="w-4 h-4 text-[#9E7B3B] shrink-0" />
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#3D0A16] break-words">
                        {displayedGuestName}
                      </h2>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#3D0A16]/70 mt-1">
                      Mohon maaf apabila terdapat kesalahan penulisan nama/gelar
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-[#3D0A16]/85 leading-relaxed mt-1">
                    {weddingConfig.settings.defaultGuestFallbackNote}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-[#3D0A16]/85 leading-relaxed mt-2 mb-5 px-2">
                {weddingConfig.settings.defaultGuestFallbackNote}
              </p>
            )}

            {/* Open Invitation CTA Button: Deep Wine Burgundy (#631426) with Gold Accent */}
            <motion.button
              onClick={onOpenInvitation}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#631426] hover:bg-[#3D0A16] text-[#FAF5EE] border border-[#D5B263] font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-botanical transition-colors"
            >
              <MailOpen className="w-4 h-4 text-[#D5B263] shrink-0" />
              <span>Buka Undangan</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
