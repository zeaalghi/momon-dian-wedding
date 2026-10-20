"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Disc3, Volume2, VolumeX } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface AudioPlayerProps {
  autoStart: boolean;
}

export function AudioPlayer({ autoStart }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [usingSynthFallback, setUsingSynthFallback] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  const startRomanticSynth = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!synthCtxRef.current) {
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const melodyNotes = [
        523.25, 659.25, 783.99, 987.77,
        493.88, 587.33, 783.99, 880.0,
        440.0, 523.25, 659.25, 783.99,
        349.23, 440.0, 523.25, 659.25,
        329.63, 523.25, 659.25, 783.99,
        293.66, 440.0, 523.25, 698.46,
        392.0, 493.88, 587.33, 659.25,
        392.0, 493.88, 587.33, 783.99,
      ];

      let noteIndex = 0;

      const playGentleNote = () => {
        if (!synthCtxRef.current || synthCtxRef.current.state !== "running")
          return;
        const now = synthCtxRef.current.currentTime;
        const freq = melodyNotes[noteIndex % melodyNotes.length];

        const osc1 = synthCtxRef.current.createOscillator();
        const osc2 = synthCtxRef.current.createOscillator();
        const gain = synthCtxRef.current.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(freq * 0.5, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.055, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.2);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(synthCtxRef.current.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 2.3);
        osc2.stop(now + 2.3);

        noteIndex++;
      };

      playGentleNote();
      if (synthTimerRef.current) window.clearInterval(synthTimerRef.current);
      synthTimerRef.current = window.setInterval(playGentleNote, 650);
      setUsingSynthFallback(true);
      setIsPlaying(true);
    } catch {
      // Ignore if browser blocks audio before user gesture
    }
  }, []);

  const stopRomanticSynth = useCallback(() => {
    if (synthTimerRef.current) {
      window.clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === "running") {
      synthCtxRef.current.suspend();
    }
  }, []);

  const startPlayback = useCallback(async () => {
    if (!weddingConfig.audio.enabled) return;

    if (usingSynthFallback) {
      startRomanticSynth();
      return;
    }

    const audio = audioRef.current;
    if (!audio) {
      startRomanticSynth();
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      startRomanticSynth();
    }
  }, [startRomanticSynth, usingSynthFallback]);

  const togglePlay = () => {
    if (isPlaying) {
      if (usingSynthFallback) {
        stopRomanticSynth();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      startPlayback();
    }
  };

  useEffect(() => {
    if (autoStart) {
      startPlayback();
    }
    return () => {
      stopRomanticSynth();
    };
  }, [autoStart, startPlayback, stopRomanticSynth]);

  if (!weddingConfig.audio.enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingConfig.audio.src}
        loop
        preload="auto"
        onError={() => setUsingSynthFallback(true)}
      />

      <div className="fixed bottom-20 right-3.5 sm:bottom-8 sm:right-6 z-40 flex items-center">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Matikan musik latar" : "Putar musik latar"}
          title={`${weddingConfig.audio.songTitle} - ${
            isPlaying ? "Sedang Diputar" : "Dijeda"
          }`}
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#D6B05C] to-[#B7892B] border-2 border-[#F3E2C7] shadow-botanical-lg text-[#4A0917] hover:from-[#7A1026] hover:to-[#5E0C1D] hover:text-[#F3E2C7] transition-all duration-300"
        >
          {isPlaying && (
            <span className="absolute inset-0 rounded-full bg-[#D6B05C]/50 animate-ping pointer-events-none" />
          )}
          <Disc3
            className={`w-5 h-5 transition-transform ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "5s" }}
          />
          <span className="sr-only">
            {isPlaying ? "Matikan Musik" : "Putar Musik"}
          </span>
          <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#7A1026] border border-[#F3E2C7] text-[#F3E2C7] flex items-center justify-center shadow-sm">
            {isPlaying ? (
              <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            ) : (
              <VolumeX className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            )}
          </span>
        </button>
      </div>
    </>
  );
}
