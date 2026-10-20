"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const items = weddingConfig.gallery;

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  return (
    <section
      id="galeri"
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-botanical-sage-600 font-medium">
            Captured Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical-sage-800 font-semibold mt-1.5">
            Galeri Kebahagiaan
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-md mx-auto leading-relaxed px-2">
            Potret kenangan manis yang mengiringi langkah kami menuju hari
            pernikahan. Klik pada foto untuk memperbesar.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-botanical-sage-200/80 bg-botanical-linen aspect-[4/5] shadow-botanical text-left focus:outline-none focus:ring-2 focus:ring-botanical-sage-500"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-sage-900/65 via-botanical-sage-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-white/90 font-medium">
                  <Expand className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span className="truncate">{item.alt}</span>
                </span>
                <p className="text-[11px] sm:text-xs text-white/80 line-clamp-2 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && items[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-botanical-sage-900/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Tutup galeri"
              className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={showPrev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              key={items[selectedIndex].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 mx-8 sm:mx-0"
            >
              <div className="relative aspect-[4/5] max-h-[65vh] w-full bg-botanical-linen">
                <img
                  src={items[selectedIndex].src}
                  alt={items[selectedIndex].alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 sm:p-5 text-center bg-botanical-bg">
                <h4 className="font-serif text-lg sm:text-xl font-semibold text-botanical-sage-800">
                  {items[selectedIndex].alt}
                </h4>
                <p className="text-xs sm:text-sm text-botanical-sage-600 mt-1">
                  “{items[selectedIndex].caption}”
                </p>
                <p className="text-[11px] text-botanical-sage-400 mt-1.5 tabular-nums">
                  {selectedIndex + 1} / {items.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Foto selanjutnya"
              className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
