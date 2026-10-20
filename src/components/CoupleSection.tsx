"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function CoupleSection() {
  const { groom, bride } = weddingConfig.couple;

  return (
    <section
      id="mempelai"
      className="relative w-full py-16 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#9E7320] via-[#B7892B] to-[#8C6518] border-y-2 border-[#F3E2C7]/40 overflow-hidden"
    >
      {/* Subtle Radial Burgundy Accent Aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(122, 16, 38, 0.22) 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Sacred Verse / Quote Card in Deep Burgundy with Gold Frame & Creme Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#7A1026] via-[#680D20] to-[#520918] border-2 border-[#F3E2C7]/60 rounded-3xl p-6 sm:p-9 text-center shadow-botanical-lg mb-14"
        >
          <p
            className="font-serif text-lg sm:text-2xl text-[#F3E2C7] leading-loose mb-3.5"
            dir="rtl"
          >
            {weddingConfig.quote.arabic}
          </p>
          <p className="text-xs sm:text-sm text-[#F3E2C7]/90 italic leading-relaxed max-w-2xl mx-auto">
            {weddingConfig.quote.translation}
          </p>
          <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B05C]">
            — {weddingConfig.quote.source} —
          </p>
        </motion.div>

        {/* Section Heading on Gold Backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F3E2C7] font-semibold block drop-shadow-sm">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A0917] font-bold mt-2 drop-shadow-sm">
            Mempelai Berbahagia
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-[#F3E2C7] font-medium max-w-md mx-auto leading-relaxed px-2 drop-shadow-sm">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan Resepsi Pernikahan putra-putri kami:
          </p>
        </motion.div>

        {/* Groom & Bride Grid: Burgundy Cards on Gold Section with Creme Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-stretch relative">
          {/* Groom Card (Momon) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#7A1026] via-[#660D20] to-[#4A0917] border-2 border-[#F3E2C7]/60 rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical-lg flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 p-2 rounded-t-full rounded-b-3xl border border-[#F3E2C7]/70 bg-gradient-to-b from-[#D6B05C] via-[#B7892B] to-[#8C6518] mb-5 shadow-md">
                <img
                  src={groom.photo}
                  alt={groom.fullName}
                  className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#B7892B] text-[#4A0917] border border-[#F3E2C7] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                  The Groom
                </span>
              </div>

              <h3 className="font-script text-3xl text-[#D6B05C] mt-3">
                {groom.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3E2C7] mt-0.5">
                {groom.fullName}
              </h4>

              <div className="w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#D6B05C] to-transparent mx-auto my-3.5" />

              <p className="text-xs text-[#D6B05C] font-medium mb-1">
                {groom.childOrder}
              </p>
              <p className="text-sm font-semibold text-[#F3E2C7]">
                {groom.fatherName}
              </p>
              <p className="text-xs text-[#D6B05C] my-0.5">&amp;</p>
              <p className="text-sm font-semibold text-[#F3E2C7]">
                {groom.motherName}
              </p>
            </div>
          </motion.div>

          {/* Center Heart Badge (Mobile) */}
          <div className="flex md:hidden items-center justify-center -my-3">
            <div className="w-11 h-11 rounded-full bg-[#7A1026] border-2 border-[#F3E2C7] flex items-center justify-center text-[#D6B05C] shadow-md">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Bride Card (Dian) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-b from-[#7A1026] via-[#660D20] to-[#4A0917] border-2 border-[#F3E2C7]/60 rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical-lg flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 p-2 rounded-t-full rounded-b-3xl border border-[#F3E2C7]/70 bg-gradient-to-b from-[#D6B05C] via-[#B7892B] to-[#8C6518] mb-5 shadow-md">
                <img
                  src={bride.photo}
                  alt={bride.fullName}
                  className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#B7892B] text-[#4A0917] border border-[#F3E2C7] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                  The Bride
                </span>
              </div>

              <h3 className="font-script text-3xl text-[#D6B05C] mt-3">
                {bride.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3E2C7] mt-0.5">
                {bride.fullName}
              </h4>

              <div className="w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#D6B05C] to-transparent mx-auto my-3.5" />

              <p className="text-xs text-[#D6B05C] font-medium mb-1">
                {bride.childOrder}
              </p>
              <p className="text-sm font-semibold text-[#F3E2C7]">
                {bride.fatherName}
              </p>
              <p className="text-xs text-[#D6B05C] my-0.5">&amp;</p>
              <p className="text-sm font-semibold text-[#F3E2C7]">
                {bride.motherName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
