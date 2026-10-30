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
    weddingDateISO: "2026-11-08T11:00:00+08:00", // Format ISO untuk Countdown Timer & Google Calendar
    weddingDateDisplay: "Minggu, 8 November 2026",
    coverImage: "/images/prewed/couple-cover-welcome.jpg",
    heroImage: "/images/prewed/couple-hero-romantic.jpg",
    groom: {
      nickname: "Momon",
      fullName: "Arizal Ridho Akbar, S.Ak",
      photo: "/images/prewed/groom-momon.jpg",
      fatherName: "Bpk. Rusli Hamdi, M.Si",
      motherName: "Ibu Asmini Asri",
      childOrder: "Putra Kedua dari",
      instagram: "",
      instagramUrl: "",
    },
    bride: {
      nickname: "Dian",
      fullName: "drh. Dian Yusnia Fitri",
      photo: "/images/prewed/bride-dian.jpg",
      fatherName: "Bpk. Yusran",
      motherName: "Ibu Baiq Miftahul Jannah",
      childOrder: "Putri Pertama dari",
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
      date: "Minggu, 8 November 2026",
      time: "11.00 – 13.30 WITA",
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
      src: "/images/prewed/couple-hero-romantic.jpg",
      alt: "Tatapan Cinta Momon & Dian",
      caption: "Dalam tatap penuh kasih, kami menemukan dermaga tempat hati berlabuh.",
      aspect: "portrait",
    },
    {
      id: "gal-2",
      src: "/images/prewed/couple-cover-welcome.jpg",
      alt: "Senyum Bahagia Momon & Dian",
      caption: "Setiap senyuman bersamamu adalah doa yang terjawab dan kebahagiaan yang sempurna.",
      aspect: "portrait",
    },
    {
      id: "gal-3",
      src: "/images/prewed/couple-bridge-modern.jpg",
      alt: "Teduh Berdua di Tepian Jembatan",
      caption: "Duduk berdampingan dalam teduhnya pepohonan, menikmati setiap detik yang tercipta.",
      aspect: "portrait",
    },
    {
      id: "gal-4",
      src: "/images/prewed/couple-cafe-bench.jpg",
      alt: "Harmoni Kasih & Kebersamaan",
      caption: "Dua hati yang saling melengkapi, duduk bersama merajut masa depan yang indah.",
      aspect: "portrait",
    },
    {
      id: "gal-5",
      src: "/images/prewed/couple-pathway-gaze.jpg",
      alt: "Saling Menatap Penuh Makna",
      caption: "Di setiap tatap dan genggaman tangan, ada janji setia yang terpatri selamanya.",
      aspect: "portrait",
    },
    {
      id: "gal-6",
      src: "/images/prewed/couple-detail-hands.jpg",
      alt: "Genggaman Janji Abadi",
      caption: "Dua jemari yang saling bertaut, merajut janji suci menuju keabadian.",
      aspect: "portrait",
    },
    {
      id: "gal-7",
      src: "/images/prewed/couple-modern-formal.jpg",
      alt: "Dua Hati, Satu Pengabdian",
      caption: "Dua profesi, dua cerita, disatukan dalam satu ikatan cinta yang tak tergoyahkan.",
      aspect: "portrait",
    },
    {
      id: "gal-8",
      src: "/images/prewed/couple-walking-traditional.jpg",
      alt: "Langkah Menuju Hari Bahagia",
      caption: "Menapaki jalan kehidupan berdua, bergandengan tangan dengan penuh sukacita.",
      aspect: "portrait",
    },
    {
      id: "gal-9",
      src: "/images/prewed/couple-modern-playful.jpg",
      alt: "Canda dan Tawa Bersama",
      caption: "Cinta tak hanya tentang berjalan bersama, tapi juga tentang tertawa lepas di setiap langkahnya.",
      aspect: "portrait",
    },
    {
      id: "gal-10",
      src: "/images/prewed/couple-cottage-garden.jpg",
      alt: "Merajut Rumah Impian",
      caption: "Bersama membangun rumah tangga yang teduh, damai, dan penuh rahmat.",
      aspect: "portrait",
    },
    {
      id: "gal-11",
      src: "/images/prewed/couple-bridge-traditional.jpg",
      alt: "Romansa Busana Adat Sasak",
      caption: "Menjunjung tinggi adat dan budaya, melangkah anggun dalam balutan restu semesta.",
      aspect: "portrait",
    },
    {
      id: "gal-12",
      src: "/images/prewed/couple-modern-rear.jpg",
      alt: "Menyongsong Hari Esok",
      caption: "Melangkah pasti berdampingan, menatap indahnya masa depan bersama.",
      aspect: "portrait",
    },
  ] as GalleryItem[],

  // ============================================================================
  // 7. AMPLOP DIGITAL / WEDDING GIFT (NOMOR REKENING & QRIS)
  // ============================================================================
  weddingGift: {
    enabled: true,
    title: "Amplop Digital",
    description:
      "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkan tanda kasih secara cashless melalui nomor rekening atau QRIS di bawah ini.",
    accounts: [
      {
        id: "mandiri",
        bankName: "Bank Mandiri",
        accountNumber: "1610016916723",
        accountHolder: "a.n. DIAN YUSNIA FITRI",
        badgeColor: "#003D79",
      },
    ] as BankAccount[],
    qris: {
      enabled: true,
      accountHolder: "a.n. DIAN & MOMON",
      matrixImage: "/images/qris-matrix.png",
      downloadImage: "/images/qris-dian-momon.png",
    },
  },

  // ============================================================================
  // 8. BACKSOUND / MUSIK LATAR
  // ============================================================================
  audio: {
    enabled: true,
    songTitle: "Kau yang Utama",
    artist: "Syahrini",
    src: "/audio/kau-yang-utama-reff.mp3",
    startTime: 0, // Audio sudah dipotong & diberi studio fade-in lembut tepat sebelum Reff ("Kau selalu akan menjadi yang utama...")
  },
};
