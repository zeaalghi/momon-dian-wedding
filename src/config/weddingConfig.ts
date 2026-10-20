export interface LoveStoryItem {
  date: string;
  title: string;
  description: string;
  badge?: string;
}

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string; // Display date e.g. "Sabtu, 24 Oktober 2026"
  time: string; // e.g. "08.00 - 10.00 WITA"
  venueName: string;
  address: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  badgeColor: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
}

export const weddingConfig = {
  // ============================================================================
  // 1. PENGATURAN FITUR & TAMU UNDANGAN (BISA DIUBAH KAPAN SAJA)
  // ============================================================================
  settings: {
    /**
     * Mode sapaan tamu di halaman Cover Pembuka:
     * - "auto"   : Jika link memiliki `?to=Nama+Tamu`, tampilkan nama tamu tersebut.
     *              Jika dibagikan tanpa `?to=...`, otomatis tampilkan sapaan umum (`defaultGuestTitle`).
     * - "hidden" : Sembunyikan kotak nama tamu sepenuhnya (cocok jika menyebar 1 link umum tanpa nama).
     * - "always" : Selalu tampilkan kotak nama tamu (menggunakan `defaultGuestName` jika URL tanpa `?to=`).
     */
    guestDisplayMode: "auto" as "auto" | "hidden" | "always",
    guestGreetingLabel: "Kepada Yth. Bapak/Ibu/Saudara/i",
    defaultGuestName: "Tamu Undangan Istimewa",
    defaultGuestFallbackNote:
      "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
    invitedGuests: [
      "drh. Ziki Aprianto dan Pasangan",
      "drh. Sumarni dan Pasangan",
      "drh. Luqyana Bardha",
      "drh. Berlian dan Pasangan",
      "drh. Dian Retno dan Pasangan",
      "drh. Bair Harvani dan Pasangan",
      "drh. Huswatun Hasanah dan Pasangan",
      "drh. Sesar Fitriani dan Pasangan",
      "Holly Madya Kencana dan Pasangan",
      "Alda Benita Wana dan Pasangan",
      "dr. Melliana Putri dan Pasangan",
      "ASJ",
      "Kedokteran Hewan Kelas A",
      "drh. Sukma",
      "drh. Faizal Tanjung",
    ],
  },

  // ============================================================================
  // 2. DATA MEMPELAI (MOMON & DIAN)
  // ============================================================================
  couple: {
    shortTitle: "Momon & Dian",
    hashtag: "#MomonDianSelamanya",
    weddingDateISO: "2026-11-10T11:00:00+08:00", // Format ISO untuk Countdown Timer & Google Calendar
    weddingDateDisplay: "Selasa, 10 November 2026",
    heroImage: "/images/hero-couple.png",
    groom: {
      nickname: "Momon",
      fullName: "Arizal Ridho Akbar, S.Ak",
      photo: "/images/groom-placeholder.png",
      fatherName: "Bpk. Rusli Hamdi, M.Si",
      motherName: "Ibu Asmini Asri",
      childOrder: "Putra dari",
      instagram: "",
      instagramUrl: "",
    },
    bride: {
      nickname: "Dian",
      fullName: "drh. Dian Yusnia Fitri",
      photo: "/images/bride-placeholder.png",
      fatherName: "Bpk. Yusran",
      motherName: "Ibu Baiq Miftahul Jannah",
      childOrder: "Putri dari",
      instagram: "",
      instagramUrl: "",
    },
  },

  // ============================================================================
  // 3. KUTIPAN DOA / AYAT SUCI
  // ============================================================================
  quote: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”",
    source: "QS. Ar-Rum : 21",
  },

  // ============================================================================
  // 4. DETAIL ACARA (RESEPSI PERNIKAHAN + GOOGLE MAPS)
  // ============================================================================
  events: [
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      subtitle:
        "Ramah tamah dan syukuran kebahagiaan bersama keluarga, kerabat, & sahabat",
      date: "Selasa, 10 November 2026",
      time: "11.00 – 14.00 WITA",
      venueName: "Gedung Pertemuan Al-Ihsan",
      address:
        "Jl. Adi Sucipto No. 75, Dayan Peken, Kec. Ampenan, Kota Mataram, NTB",
      googleMapsUrl: "https://share.google/binuZ7TsHzVIsz288",
      googleMapsEmbedUrl:
        "https://maps.google.com/maps?q=Al-Ihsan+Jl.+Adi+Sucipto+No.75+Dayan+Peken+Ampenan+Kota+Mataram&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
  ] as EventDetail[],

  // ============================================================================
  // 5. KISAH CINTA (LOVE STORY TIMELINE)
  // ============================================================================
  loveStory: [] as LoveStoryItem[],

  // ============================================================================
  // 6. GALERI FOTO (DENGAN LIGHTBOX INTERAKTIF)
  // ============================================================================
  gallery: [
    {
      id: "gal-1",
      src: "/images/hero-couple.png",
      alt: "Momon & Dian di Taman Botani",
      caption: "Setiap langkah bersamamu adalah doa yang terjawab.",
      aspect: "portrait",
    },
    {
      id: "gal-2",
      src: "/images/groom-placeholder.png",
      alt: "Potret Momon",
      caption: "Menatap masa depan dengan penuh syukur dan ketulusan.",
      aspect: "square",
    },
    {
      id: "gal-3",
      src: "/images/bride-placeholder.png",
      alt: "Potret Dian",
      caption: "Senyum hangat di hari yang dinanti.",
      aspect: "square",
    },
    {
      id: "gal-4",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      alt: "Dekorasi Bunga Romantis",
      caption: "Merangkai cinta dalam kesederhanaan dan keanggunan.",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      alt: "Genggaman Tangan Momon & Dian",
      caption: "Menggenggam erat janji menuju keabadian.",
      aspect: "landscape",
    },
    {
      id: "gal-6",
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
      alt: "Buket Bunga Pernikahan",
      caption: "Harum doa yang mengiringi perjalanan baru kami.",
      aspect: "portrait",
    },
  ] as GalleryItem[],

  // ============================================================================
  // 7. AMPLOP DIGITAL / WEDDING GIFT (NOMOR REKENING)
  // ============================================================================
  weddingGift: {
    enabled: true,
    title: "Amplop Digital",
    description:
      "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkan tanda kasih secara cashless melalui nomor rekening di bawah ini.",
    accounts: [
      {
        id: "mandiri",
        bankName: "Bank Mandiri",
        accountNumber: "1610016916723",
        accountHolder: "a.n. DIAN YUSNIA FITRI",
        badgeColor: "#003D79",
      },
    ] as BankAccount[],
  },

  // ============================================================================
  // 8. BACKSOUND / MUSIK LATAR
  // ============================================================================
  audio: {
    enabled: true,
    songTitle: "Romantic Botanical Piano Suite",
    artist: "Instrumental Wedding Ensemble",
    // Anda dapat menaruh file MP3 pilihan Anda sendiri di `/public/audio/backsound.mp3`
    // Secara bawaan juga dilengkapi synthesizer melodi piano/harpa Web Audio yang lembut
    // agar musik tetap terdengar indah meskipun belum ada file MP3 eksternal.
    src: "/audio/backsound.mp3",
  },
};
