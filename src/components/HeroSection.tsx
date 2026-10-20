"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import {
  BotanicalCorner,
  BotanicalDivider,
  BotanicalStem,
} from "./BotanicalOrnaments";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingConfig.couple.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const buildGoogleCalendarUrl = () => {
    const startDate = new Date(weddingConfig.couple.weddingDateISO);
    const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000);
    const formatGCalDate = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const title = encodeURIComponent(
      `Pernikahan ${weddingConfig.couple.shortTitle}`
    );
    const details = encodeURIComponent(
      `Undangan Pernikahan ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}. Kehadiran dan doa restu Anda merupakan kebahagiaan bagi kami.`
    );
    const location = encodeURIComponent(
      `${weddingConfig.events[0]?.venueName || ""}, ${
        weddingConfig.events[0]?.address || ""
      }`
    );

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatGCalDate(
      startDate
    )}/${formatGCalDate(endDate)}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 pt-20 pb-24 bg-[#4E0E1D]"
    >
      {/* 10% Accent: Botanical Corners positioned snugly in the outer corners so they never overlap the title */}
      <BotanicalCorner className="absolute -top-2 -left-2 w-24 sm:w-40 md:w-52 opacity-80" />
      <BotanicalCorner
        className="absolute -top-2 -right-2 w-24 sm:w-40 md:w-52 opacity-80"
        flipX
      />

      {/* Soft Ambient Champagne Gold Glow over 60% Deep Wine Burgundy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(213, 178, 99, 0.18) 0%, rgba(99, 20, 38, 0) 68%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl mx-auto text-center"
      >
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D5B263] font-medium mb-3">
          The Wedding Celebration
        </p>

        {/* Couple Names: Warm Ivory Cream (#FAF5EE) with 10% Champagne Gold Script Accent */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF5EE] font-semibold tracking-tight leading-tight">
          {weddingConfig.couple.groom.nickname}
          <span className="font-script text-[#D5B263] text-4xl sm:text-6xl md:text-7xl font-normal mx-2.5 sm:mx-3">
            &amp;
          </span>
          {weddingConfig.couple.bride.nickname}
        </h1>

        <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#EADBC8] tracking-[0.16em] uppercase font-medium">
          {weddingConfig.couple.weddingDateDisplay}
        </p>

        <BotanicalDivider variant="leaf" className="my-4 sm:my-5" />

        {/* 30% Secondary: Arched Portrait Frame in Warm Ivory Cream (#FAF5EE) with 10% Gold Trim & Flanking Botanical Stems */}
        <div className="relative mx-auto w-56 sm:w-64 md:w-72 mb-7">
          <BotanicalStem
            variant="lily"
            className="hidden sm:block absolute -left-16 bottom-2 w-16 md:w-20 h-auto opacity-65 -rotate-6"
          />
          <BotanicalStem
            variant="vine"
            flipX
            className="hidden sm:block absolute -right-16 bottom-2 w-16 md:w-20 h-auto opacity-65 rotate-6"
          />
          <div className="relative w-full aspect-[4/5] p-2.5 sm:p-3 rounded-t-full rounded-b-[2.25rem] bg-[#FAF5EE] border-2 border-[#D5B263] ring-1 ring-[#D5B263]/50 ring-offset-2 ring-offset-[#4E0E1D] shadow-botanical-lg">
            <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-[1.75rem] border border-[#D5B263]">
              <img
                src={weddingConfig.couple.heroImage}
                alt={`Potret ${weddingConfig.couple.shortTitle}`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A16]/50 via-transparent to-transparent pointer-events-none" />
              {/* Inner Gold Inset Arch Line & Filigree Ornament Accent */}
              <div className="absolute inset-2 rounded-t-full rounded-b-[1.35rem] border border-[#D5B263]/75 pointer-events-none" />
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <img
                  src="/ornaments/divider-filigree.svg"
                  alt=""
                  className="w-28 sm:w-32 h-auto opacity-90 drop-shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 30% Secondary: Countdown Timer Grid in Warm Ivory Cream (#FAF5EE) */}
        <div className="w-full max-w-sm mx-auto mb-7">
          <div className="flex items-center justify-center text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D5B263] mb-3">
            <span>Menuju Hari Bahagia</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#FAF5EE] border border-[#D5B263] rounded-2xl py-2.5 sm:py-3 px-1.5 shadow-botanical"
              >
                <div className="font-sans text-xl sm:text-2xl font-bold text-[#3D0A16] tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E7B3B] font-semibold mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10% Accent: Save to Google Calendar Button in Champagne Gold */}
        <div className="flex items-center justify-center">
          <motion.a
            href={buildGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9E7B3B] via-[#D5B263] to-[#9E7B3B] hover:from-[#D5B263] hover:to-[#9E7B3B] text-[#3D0A16] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-botanical transition-all"
          >
            <CalendarPlus className="w-4 h-4 text-[#3D0A16] shrink-0" />
            <span>Simpan ke Google Calendar</span>
          </motion.a>
        </div>

        {/* Scroll Down Hint */}
        <motion.a
          href="#mempelai"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-9 inline-flex flex-col items-center text-xs text-[#EADBC8]/80 hover:text-[#FAF5EE]"
        >
          <span className="tracking-widest uppercase text-[10px] mb-1">
            Gulir ke Bawah
          </span>
          <ChevronDown className="w-4 h-4 text-[#D5B263]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
