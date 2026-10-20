"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { weddingConfig } from "@/config/weddingConfig";
import { FloatingPetals } from "@/components/BotanicalOrnaments";
import { CoverModal } from "@/components/CoverModal";
import { AudioPlayer } from "@/components/AudioPlayer";
import { HeroSection } from "@/components/HeroSection";
import { CoupleSection } from "@/components/CoupleSection";
import { EventSection } from "@/components/EventSection";
import { GallerySection } from "@/components/GallerySection";
import { WeddingGiftSection } from "@/components/WeddingGiftSection";
import { StickyBottomNav, FooterSection } from "@/components/StickyBottomNav";
import { GuestLinkCustomizer } from "@/components/GuestLinkCustomizer";

function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  const urlGuest = searchParams.get("to") || searchParams.get("tamu");
  // Tombol Daftar Tamu HANYA muncul jika mempelai membuka link khusus ?admin=1
  const isAdmin = searchParams.get("admin") === "1";

  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(urlGuest);
  const [guestMode, setGuestMode] = useState<"auto" | "hidden" | "always">(
    weddingConfig.settings.guestDisplayMode
  );

  useEffect(() => {
    setGuestName(urlGuest);
  }, [urlGuest]);

  useEffect(() => {
    if (isCoverOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCoverOpen]);

  const handleOpenInvitation = () => {
    setIsCoverOpen(false);
    setAudioStarted(true);

    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.7 },
        colors: ["#631426", "#D5B263", "#9E7B3B", "#FAF5EE"],
      });
    } catch {
      // Ignore if reduced motion
    }
  };

  const handlePreviewCoverWithGuest = (previewName: string | null) => {
    setGuestName(previewName);
    setIsCoverOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-botanical-bg">
      {/* Subtle Falling Botanical Petals & Leaves */}
      <FloatingPetals />

      {/* Opening Lock-Screen Cover */}
      <CoverModal
        isOpen={isCoverOpen}
        onOpenInvitation={handleOpenInvitation}
        guestNameFromUrl={guestName}
        guestModeOverride={guestMode}
      />

      {/* Panel Daftar Tamu HANYA tampil jika dibuka oleh mempelai dengan ?admin=1 */}
      {isAdmin && (
        <GuestLinkCustomizer
          currentGuestName={guestName}
          guestMode={guestMode}
          onChangeGuestMode={setGuestMode}
          onPreviewCoverWithGuest={handlePreviewCoverWithGuest}
        />
      )}

      {/* Floating Romantic Backsound Control */}
      <AudioPlayer autoStart={audioStarted} />

      {/* Main Invitation Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <CoupleSection />
        <EventSection />
        <GallerySection />
        <WeddingGiftSection />
      </main>

      {/* Footer & Sticky Bottom Navigation */}
      <FooterSection />
      {!isCoverOpen && <StickyBottomNav />}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#631426] text-[#FAF5EE] font-serif text-xl">
          Memuat Undangan Momon &amp; Dian...
        </div>
      }
    >
      <WeddingInvitationContent />
    </Suspense>
  );
}
