"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalCorner, BotanicalDivider } from "./BotanicalOrnaments";

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
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 pt-16 pb-24"
    >
      {/* Botanical Corners */}
      <BotanicalCorner className="absolute top-0 left-0 w-36 sm:w-48 md:w-64 opacity-75" />
      <BotanicalCorner
        className="absolute top-0 right-0 w-36 sm:w-48 md:w-64 opacity-75"
        flipX
      />

      {/* Soft Ambient Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(212, 165, 165, 0.16) 0%, rgba(250, 248, 245, 0) 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl mx-auto text-center"
      >
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-botanical-sage-600 font-medium mb-3">
          The Wedding Celebration
        </p>

        {/* Couple Names */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-botanical-sage-800 font-semibold tracking-tight leading-tight">
          {weddingConfig.couple.groom.nickname}
          <span className="font-script text-botanical-rose-400 text-3xl sm:text-5xl md:text-6xl font-normal mx-2.5 sm:mx-3">
            &amp;
          </span>
          {weddingConfig.couple.bride.nickname}
        </h1>

        <p className="mt-2.5 text-xs sm:text-sm md:text-base text-botanical-sage-600 tracking-[0.16em] uppercase font-medium">
          {weddingConfig.couple.weddingDateDisplay}
        </p>

        <BotanicalDivider className="my-4 sm:my-5" />

        {/* Arched Botanical Hero Portrait */}
        <div className="relative mx-auto w-56 sm:w-64 md:w-72 aspect-[4/5] p-2.5 sm:p-3 rounded-t-full rounded-b-[2.25rem] bg-white/85 border border-botanical-gold/50 shadow-botanical-lg mb-7">
          <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-[1.75rem]">
            <img
              src={weddingConfig.couple.heroImage}
              alt={`Potret ${weddingConfig.couple.shortTitle}`}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-sage-900/45 via-transparent to-transparent" />
            <div className="absolute bottom-3.5 inset-x-0 text-center px-2">
              <span className="font-script text-xl sm:text-2xl text-white drop-shadow">
                {weddingConfig.couple.hashtag}
              </span>
            </div>
          </div>
        </div>

        {/* Countdown Timer Grid */}
        <div className="w-full max-w-sm mx-auto mb-7">
          <div className="flex items-center justify-center text-[11px] sm:text-xs uppercase tracking-[0.18em] text-botanical-sage-600 mb-3">
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
                className="bg-white/90 backdrop-blur-sm border border-botanical-sage-200/80 rounded-2xl py-2.5 sm:py-3 px-1.5 shadow-botanical"
              >
                <div className="font-sans text-xl sm:text-2xl font-bold text-botanical-sage-800 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-botanical-sage-600 mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save to Google Calendar Button */}
        <div className="flex items-center justify-center">
          <motion.a
            href={buildGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full shadow-botanical transition-colors"
          >
            <CalendarPlus className="w-4 h-4 shrink-0" />
            <span>Simpan ke Google Calendar</span>
          </motion.a>
        </div>

        {/* Scroll Down Hint */}
        <motion.a
          href="#mempelai"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-9 inline-flex flex-col items-center text-xs text-botanical-sage-500 hover:text-botanical-sage-700"
        >
          <span className="tracking-widest uppercase text-[10px] mb-1">
            Gulir ke Bawah
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
