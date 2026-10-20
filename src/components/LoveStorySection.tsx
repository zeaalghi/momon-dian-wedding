"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function LoveStorySection() {
  return (
    <section
      id="kisah"
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8 bg-botanical-linen/60 border-y border-botanical-sage-200/60"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-botanical-sage-600 font-medium">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical-sage-800 font-semibold mt-1.5">
            Kisah Cinta Kami
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-md mx-auto leading-relaxed px-2">
            Setiap pertemuan memiliki ceritanya sendiri. Inilah jejak perjalanan
            Momon &amp; Dian hingga menuju ikatan suci.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-5 sm:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-botanical-sage-300 via-botanical-rose-300 to-botanical-sage-300" />

          <div className="space-y-7 sm:space-y-10">
            {weddingConfig.loveStory.map((story, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-1 sm:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-botanical-rose-300 shadow-sm flex items-center justify-center text-botanical-rose-400 z-10">
                    <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] pl-5 sm:pl-0 ${
                      isEven ? "sm:pr-6 sm:text-right" : "sm:pl-6 sm:text-left"
                    }`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm border border-botanical-sage-200/80 rounded-3xl p-5 sm:p-6 shadow-botanical">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {story.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-botanical-rose-100 text-botanical-rose-500">
                            {story.badge}
                          </span>
                        )}
                        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-botanical-sage-500">
                          {story.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-botanical-sage-800 mb-1.5">
                        {story.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-botanical-sage-600 leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
