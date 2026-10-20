import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Pinyon_Script,
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

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
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
      className={`${cormorant.variable} ${pinyonScript.variable} ${jakarta.variable}`}
    >
      <body className="font-sans bg-[#4E0E1D] text-[#3D0A16] selection:bg-[#D5B263]/30 selection:text-[#3D0A16]">
        {children}
      </body>
    </html>
  );
}
