import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/weddingConfig";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: `The Wedding of ${weddingConfig.couple.shortTitle} | Undangan Pernikahan Digital`,
  description: `Undangan Pernikahan Digital ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName} — ${weddingConfig.couple.weddingDateDisplay}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${greatVibes.variable} ${jakarta.variable}`}
    >
      <body className="font-sans bg-botanical-bg text-botanical-sage-800 selection:bg-botanical-rose-200 selection:text-botanical-sage-900">
        {children}
      </body>
    </html>
  );
}
