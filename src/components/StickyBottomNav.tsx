"use client";

import React from "react";
import {
  CalendarHeart,
  Gift,
  Heart,
  Home,
  Images,
  Instagram,
  Users,
} from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { BotanicalDivider } from "./BotanicalOrnaments";

const NAV_ITEMS = [
  { href: "#hero", label: "Beranda", icon: Home },
  { href: "#mempelai", label: "Mempelai", icon: Users },
  { href: "#acara", label: "Acara", icon: CalendarHeart },
  { href: "#galeri", label: "Galeri", icon: Images },
  { href: "#hadiah", label: "Hadiah", icon: Gift },
];

export function StickyBottomNav() {
  return (
    <nav
      aria-label="Navigasi Undangan"
      className="fixed bottom-3 sm:bottom-4 inset-x-0 z-30 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-md grid grid-cols-5 gap-1 bg-[#FAF5EE]/95 backdrop-blur-md border border-[#D5B263] rounded-2xl sm:rounded-full px-2 py-1.5 shadow-botanical-lg">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center justify-center py-1.5 px-1 rounded-xl sm:rounded-full text-[#3D0A16] hover:bg-[#631426] hover:text-[#FAF5EE] transition-colors min-w-0"
            >
              <Icon className="w-4 h-4 text-[#631426] group-hover:text-[#D5B263] transition-colors shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-medium mt-0.5 truncate max-w-full">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden pt-16 pb-28 sm:pb-32 px-6 sm:px-8 text-center bg-[#3D0A16] border-t border-[#D5B263]/40">
      <div className="w-full max-w-xl mx-auto">
        <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed mb-4 px-2">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
          kami.
        </p>
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D5B263] font-medium mb-3">
          Wassalamu’alaikum Warahmatullahi Wabarakatuh
        </p>

        <BotanicalDivider />

        <p className="text-xs text-[#EADBC8]/80 mt-4">
          Kami yang berbahagia,
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF5EE] font-semibold mt-1">
          {weddingConfig.couple.groom.nickname}{" "}
          <span className="font-script text-[#D5B263] text-4xl sm:text-5xl font-normal">
            &amp;
          </span>{" "}
          {weddingConfig.couple.bride.nickname}
        </h2>
        <p className="text-xs text-[#EADBC8]/80 mt-2">
          Beserta Keluarga Besar Kedua Mempelai
        </p>

        <div className="mt-10 pt-6 border-t border-[#D5B263]/25 flex flex-col items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] text-[#EADBC8]/85">
            <span>Digital Invitation Made with</span>
            <Heart className="w-3 h-3 text-[#D5B263] fill-current" />
            <span>by</span>
          </div>

          <a
            href="https://www.instagram.com/zeaalghh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EE] hover:bg-[#D5B263] text-[#3D0A16] border border-[#D5B263] shadow-sm text-xs font-semibold transition-all duration-300"
          >
            <Instagram className="w-3.5 h-3.5 text-[#631426] shrink-0" />
            <span>@zeaalghh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
