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
      className="relative w-full py-16 sm:py-20 px-6 sm:px-8 bg-botanical-linen/60 border-y border-botanical-sage-200/60 overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Sacred Verse / Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/85 backdrop-blur-sm border border-botanical-sage-200/80 rounded-3xl p-6 sm:p-9 text-center shadow-botanical mb-14"
        >
          <p
            className="font-serif text-lg sm:text-2xl text-botanical-sage-800 leading-loose mb-3.5"
            dir="rtl"
          >
            {weddingConfig.quote.arabic}
          </p>
          <p className="text-xs sm:text-sm text-botanical-sage-700 italic leading-relaxed max-w-2xl mx-auto">
            {weddingConfig.quote.translation}
          </p>
          <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-botanical-rose-400">
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
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-botanical-sage-600 font-medium block">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical-sage-800 font-semibold mt-2">
            Mempelai Berbahagia
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-md mx-auto leading-relaxed px-2">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan Resepsi Pernikahan putra-putri kami:
          </p>
        </motion.div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-stretch relative">
          {/* Groom Card (Momon) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm border border-botanical-sage-200/80 rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 p-2 rounded-t-full rounded-b-3xl border border-botanical-gold/60 bg-botanical-cream mb-5">
                <img
                  src={groom.photo}
                  alt={groom.fullName}
                  className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-botanical-sage-600 text-white text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                  The Groom
                </span>
              </div>

              <h3 className="font-script text-3xl text-botanical-rose-400 mt-3">
                {groom.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-sage-800 mt-0.5">
                {groom.fullName}
              </h4>

              <div className="w-12 h-[1px] bg-botanical-gold mx-auto my-3.5" />

              <p className="text-xs text-botanical-sage-600 mb-1">
                {groom.childOrder}
              </p>
              <p className="text-sm font-medium text-botanical-sage-800">
                {groom.fatherName}
              </p>
              <p className="text-xs text-botanical-sage-500 my-0.5">&amp;</p>
              <p className="text-sm font-medium text-botanical-sage-800">
                {groom.motherName}
              </p>
            </div>
          </motion.div>

          {/* Center Heart Badge (Mobile) */}
          <div className="flex md:hidden items-center justify-center -my-3">
            <div className="w-11 h-11 rounded-full bg-botanical-rose-100 border border-botanical-rose-300 flex items-center justify-center text-botanical-rose-400 shadow-sm">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Bride Card (Dian) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm border border-botanical-sage-200/80 rounded-[2rem] p-6 sm:p-7 text-center shadow-botanical flex flex-col items-center justify-between"
          >
            <div className="w-full">
              <div className="relative mx-auto w-40 h-52 sm:w-44 sm:h-56 p-2 rounded-t-full rounded-b-3xl border border-botanical-gold/60 bg-botanical-cream mb-5">
                <img
                  src={bride.photo}
                  alt={bride.fullName}
                  className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-botanical-rose-400 text-white text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow whitespace-nowrap">
                  The Bride
                </span>
              </div>

              <h3 className="font-script text-3xl text-botanical-rose-400 mt-3">
                {bride.nickname}
              </h3>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-sage-800 mt-0.5">
                {bride.fullName}
              </h4>

              <div className="w-12 h-[1px] bg-botanical-gold mx-auto my-3.5" />

              <p className="text-xs text-botanical-sage-600 mb-1">
                {bride.childOrder}
              </p>
              <p className="text-sm font-medium text-botanical-sage-800">
                {bride.fatherName}
              </p>
              <p className="text-xs text-botanical-sage-500 my-0.5">&amp;</p>
              <p className="text-sm font-medium text-botanical-sage-800">
                {bride.motherName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
