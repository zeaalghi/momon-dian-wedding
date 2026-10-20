"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider, BotanicalWreath } from "./BotanicalOrnaments";

export function CoupleSection() {
  const { groom, bride } = weddingConfig.couple;

  return (
    <section
      id="mempelai"
      className="relative w-full py-16 sm:py-20 px-6 sm:px-8 bg-[#4E0E1D] overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* 30% Secondary: Sacred Verse / Quote Card in Warm Ivory Cream (#FAF5EE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF5EE] border border-[#D5B263] rounded-3xl p-6 sm:p-9 text-center shadow-botanical mb-14"
        >
          <p
            className="font-serif text-lg sm:text-2xl text-[#3D0A16] leading-loose mb-3.5"
            dir="rtl"
          >
            {weddingConfig.quote.arabic}
          </p>
          <p className="text-xs sm:text-sm text-[#3D0A16]/85 italic leading-relaxed max-w-2xl mx-auto">
            {weddingConfig.quote.translation}
          </p>
          <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7B3B]">
            — {weddingConfig.quote.source} —
          </p>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D5B263] font-medium block">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF5EE] font-semibold mt-2">
            Mempelai Berbahagia
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-[#EADBC8] max-w-md mx-auto leading-relaxed px-2">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan Resepsi Pernikahan putra-putri kami:
          </p>
        </motion.div>

        {/* Groom & Bride Grid: 30% Warm Ivory Cream Cards + 10% Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-stretch relative">
          {/* Groom Card (Momon) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF5EE] border border-[#D5B263] rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 mb-5 flex items-center justify-center">
                <BotanicalWreath className="absolute -inset-5 w-[calc(100%+2.5rem)] h-auto opacity-30" />
                <div className="relative w-full h-full p-2 rounded-t-full rounded-b-3xl border border-[#D5B263] bg-[#EADBC8]/40">
                  <img
                    src={groom.photo}
                    alt={groom.fullName}
                    className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#631426] text-[#FAF5EE] border border-[#D5B263] text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                    The Groom
                  </span>
                </div>
              </div>

              <h3 className="font-script text-3xl sm:text-4xl text-[#9E7B3B] mt-3">
                {groom.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D0A16] mt-0.5">
                {groom.fullName}
              </h4>

              <div className="w-12 h-[1px] bg-[#D5B263] mx-auto my-3.5" />

              <p className="text-xs text-[#9E7B3B] font-medium mb-1">
                {groom.childOrder}
              </p>
              <p className="text-sm font-semibold text-[#3D0A16]">
                {groom.fatherName}
              </p>
              <p className="text-xs text-[#9E7B3B] my-0.5">&amp;</p>
              <p className="text-sm font-semibold text-[#3D0A16]">
                {groom.motherName}
              </p>
            </div>
          </motion.div>

          {/* Center Heart Badge (Mobile & Tablet/Desktop) */}
          <div className="flex md:hidden items-center justify-center -my-3">
            <div className="w-11 h-11 rounded-full bg-[#FAF5EE] border border-[#D5B263] flex items-center justify-center text-[#631426] shadow-sm">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EE] border-2 border-[#D5B263] flex items-center justify-center text-[#631426] shadow-botanical">
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>

          {/* Bride Card (Dian) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#FAF5EE] border border-[#D5B263] rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 mb-5 flex items-center justify-center">
                <BotanicalWreath className="absolute -inset-5 w-[calc(100%+2.5rem)] h-auto opacity-30" />
                <div className="relative w-full h-full p-2 rounded-t-full rounded-b-3xl border border-[#D5B263] bg-[#EADBC8]/40">
                  <img
                    src={bride.photo}
                    alt={bride.fullName}
                    className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#631426] text-[#FAF5EE] border border-[#D5B263] text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                    The Bride
                  </span>
                </div>
              </div>

              <h3 className="font-script text-3xl sm:text-4xl text-[#9E7B3B] mt-3">
                {bride.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D0A16] mt-0.5">
                {bride.fullName}
              </h4>

              <div className="w-12 h-[1px] bg-[#D5B263] mx-auto my-3.5" />

              <p className="text-xs text-[#9E7B3B] font-medium mb-1">
                {bride.childOrder}
              </p>
              <p className="text-sm font-semibold text-[#3D0A16]">
                {bride.fatherName}
              </p>
              <p className="text-xs text-[#9E7B3B] my-0.5">&amp;</p>
              <p className="text-sm font-semibold text-[#3D0A16]">
                {bride.motherName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
