"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

export function EventSection() {
  return (
    <section
      id="acara"
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#7A1026] via-[#5E0C1D] to-[#7A1026]"
    >
      {/* Radial Gold Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(183, 137, 43, 0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D6B05C] font-semibold">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F3E2C7] font-semibold mt-1.5">
            Acara Resepsi
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-[#F3E2C7]/90 max-w-md mx-auto leading-relaxed px-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir pada acara resepsi pernikahan
            kami.
          </p>
        </motion.div>

        {/* Events Container: Metallic Gold Card + Burgundy Inner Box + Creme Accents */}
        <div
          className={
            weddingConfig.events.length === 1
              ? "max-w-lg mx-auto mb-8 sm:mb-10"
              : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-8 sm:mb-10"
          }
        >
          {weddingConfig.events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative bg-gradient-to-b from-[#D6B05C] via-[#B7892B] to-[#966D1E] border-2 border-[#F3E2C7]/70 rounded-[2rem] p-5 sm:p-7 shadow-botanical-lg flex flex-col justify-between overflow-hidden"
            >
              {/* Top Burgundy & Creme accent bar */}
              <div className="h-1.5 w-20 mx-auto rounded-full mb-4 bg-[#7A1026] border border-[#F3E2C7]/50" />

              <div className="text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0917]">
                  {event.title}
                </h3>
                <p className="text-xs text-[#4A0917]/90 font-medium mt-1 mb-5 px-2">
                  {event.subtitle}
                </p>

                {/* Inner Schedule Box in Deep Burgundy with Creme Accents */}
                <div className="space-y-3.5 text-left bg-gradient-to-b from-[#7A1026] to-[#580B1B] border border-[#F3E2C7]/60 rounded-2xl p-4 sm:p-5 mb-5 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#B7892B] text-[#4A0917] border border-[#F3E2C7]/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D6B05C] font-medium">
                        Hari &amp; Tanggal
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F3E2C7]">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#B7892B] text-[#4A0917] border border-[#F3E2C7]/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D6B05C] font-medium">
                        Waktu Pelaksanaan
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F3E2C7] tabular-nums">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#B7892B] text-[#4A0917] border border-[#F3E2C7]/60 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D6B05C] font-medium">
                        Lokasi Acara
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F3E2C7]">
                        {event.venueName}
                      </p>
                      <p className="text-xs text-[#F3E2C7]/85 leading-relaxed mt-0.5">
                        {event.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#7A1026] hover:bg-[#5E0C1D] text-[#F3E2C7] border border-[#F3E2C7]/70 text-xs sm:text-sm font-semibold py-3 px-4 rounded-full shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D6B05C] shrink-0" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Embedded Interactive Google Map in Gold Frame */}
        {weddingConfig.events[0]?.googleMapsEmbedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#D6B05C] via-[#B7892B] to-[#966D1E] border-2 border-[#F3E2C7]/60 rounded-3xl p-2.5 sm:p-4 shadow-botanical-lg"
          >
            <div className="overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[21/9] w-full bg-[#5E0C1D] border border-[#F3E2C7]/50">
              <iframe
                src={weddingConfig.events[0].googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Pernikahan Momon & Dian"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
