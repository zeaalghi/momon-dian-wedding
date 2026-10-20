"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import {
  BotanicalDivider,
  BotanicalDome,
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
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 min-[360px]:px-6 sm:px-8 pt-10 sm:pt-14 pb-24 bg-[#4E0E1D]"
    >
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
        {/* Single Symmetrical Botanical Dome Arch framing the header across all phone & tablet widths */}
        <div className="relative mx-auto w-full max-w-[19.5rem] min-[360px]:max-w-[21.5rem] sm:max-w-[28rem] md:max-w-[33rem]">
          <BotanicalDome
            variant="botanical"
            className="w-full mx-auto -mb-7 min-[360px]:-mb-9 sm:-mb-11 md:-mb-12"
          />

          <div className="relative z-10 pt-2 sm:pt-3 px-5 min-[360px]:px-7 sm:px-12">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#D5B263] font-medium mb-2">
              The Wedding Celebration
            </p>

            {/* Couple Names: Responsive sizing so it never touches the dome arch on phone or tablet */}
            <h1 className="font-serif text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl text-[#FAF5EE] font-semibold tracking-tight leading-tight">
              {weddingConfig.couple.groom.nickname}
              <span className="font-script text-[#D5B263] text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl font-normal mx-2 sm:mx-3">
                &amp;
              </span>
              {weddingConfig.couple.bride.nickname}
            </h1>

            {/* High-Contrast Wedding Date Badge with Clear Breathing Room */}
            <div className="mt-3.5 sm:mt-4 flex justify-center">
              <span className="inline-block bg-[#3D0A16]/70 border border-[#D5B263]/60 rounded-full px-3.5 min-[360px]:px-4 py-1.5 text-[10px] min-[360px]:text-xs sm:text-sm text-[#FAF5EE] tracking-[0.14em] min-[360px]:tracking-[0.18em] uppercase font-semibold shadow-sm">
                {weddingConfig.couple.weddingDateDisplay}
              </span>
            </div>
          </div>
        </div>

        <BotanicalDivider variant="leaf" className="my-4 sm:my-5" />

        {/* 30% Secondary: Arched Portrait Frame in Warm Ivory Cream (#FAF5EE) with Subtle Flanking Botanical Stems */}
        <div className="relative mx-auto w-48 min-[360px]:w-56 sm:w-64 md:w-72 mb-7">
          <BotanicalStem
            variant="lily"
            className="block absolute z-0 -left-6 min-[360px]:-left-7 sm:-left-11 bottom-4 w-8 min-[360px]:w-9 sm:w-12 md:w-14 h-auto opacity-65 -rotate-6"
          />
          <BotanicalStem
            variant="vine"
            flipX
            className="block absolute z-0 -right-6 min-[360px]:-right-7 sm:-right-11 bottom-4 w-8 min-[360px]:w-9 sm:w-12 md:w-14 h-auto opacity-65 rotate-6"
          />
          <div className="relative z-10 w-full aspect-[4/5] p-2.5 sm:p-3 rounded-t-full rounded-b-[2.25rem] bg-[#FAF5EE] border-2 border-[#D5B263] ring-1 ring-[#D5B263]/50 ring-offset-2 ring-offset-[#4E0E1D] shadow-botanical-lg">
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

        {/* Interactive CTA Button: Deep Wine Burgundy Base with Champagne Gold Border & Icon */}
        <div className="flex items-center justify-center">
          <motion.a
            href={buildGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#631426] via-[#7B1B31] to-[#631426] hover:from-[#3D0A16] hover:to-[#631426] text-[#FAF5EE] border border-[#D5B263] ring-1 ring-[#D5B263]/35 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-gold-glow transition-all"
          >
            <CalendarPlus className="w-4 h-4 text-[#D5B263] shrink-0" />
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
