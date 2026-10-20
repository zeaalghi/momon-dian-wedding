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
      className="relative w-full overflow-hidden py-16 sm:py-20 px-6 sm:px-8"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-1"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-botanical-sage-600 font-medium">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical-sage-800 font-semibold mt-1.5">
            Acara Resepsi
          </h2>
          <BotanicalDivider />
          <p className="text-xs sm:text-sm text-botanical-sage-600 max-w-md mx-auto leading-relaxed px-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir pada acara resepsi pernikahan
            kami.
          </p>
        </motion.div>

        {/* Events Container (Centered when single event) */}
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
              className="relative bg-white/90 backdrop-blur-sm border border-botanical-sage-200 rounded-[2rem] p-5 sm:p-7 shadow-botanical flex flex-col justify-between overflow-hidden"
            >
              {/* Top floral accent bar */}
              <div
                className={`h-1.5 w-20 mx-auto rounded-full mb-4 ${
                  idx === 0 ? "bg-botanical-sage-500" : "bg-botanical-rose-300"
                }`}
              />

              <div className="text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-sage-800">
                  {event.title}
                </h3>
                <p className="text-xs text-botanical-sage-600 mt-1 mb-5 px-2">
                  {event.subtitle}
                </p>

                <div className="space-y-3.5 text-left bg-botanical-bg/90 border border-botanical-sage-100 rounded-2xl p-4 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-botanical-sage-100 text-botanical-sage-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-botanical-sage-500">
                        Hari &amp; Tanggal
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-botanical-sage-800">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-botanical-rose-100 text-botanical-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-botanical-sage-500">
                        Waktu Pelaksanaan
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-botanical-sage-800 tabular-nums">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-botanical-sage-100 text-botanical-sage-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-botanical-sage-500">
                        Lokasi Acara
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-botanical-sage-800">
                        {event.venueName}
                      </p>
                      <p className="text-xs text-botanical-sage-600 leading-relaxed mt-0.5">
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
                className="w-full inline-flex items-center justify-center gap-2 bg-botanical-sage-600 hover:bg-botanical-sage-700 text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-full shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Embedded Interactive Google Map */}
        {weddingConfig.events[0]?.googleMapsEmbedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 border border-botanical-sage-200 rounded-3xl p-2.5 sm:p-4 shadow-botanical"
          >
            <div className="overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[21/9] w-full bg-botanical-linen">
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
