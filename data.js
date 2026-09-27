// File: data.js (PUSAT KONTROL DATA PORTOFOLIO)
const portfolioData = {
  // Your web app's Firebase configuration
    firebaseConfig: {
    apiKey: "AIzaSyAsfrK8xwrCxEykG3X2vx7rPjyvdm-p6dM",
    authDomain: "natcat-portofolio.firebaseapp.com",
    projectId: "natcat-portofolio",
    storageBucket: "natcat-portofolio.firebasestorage.app",
    messagingSenderId: "388106212727",
    appId: "1:388106212727:web:c725569bee965972587d72"
  },
  adminPasskey: "natcat2026", // <-- Passkey rahasia kamu untuk hapus absen

  // 0. FOTO & LOGO HERO (SESUAIKAN DENGAN NAMA FILE ASLI DI FOLDER ASSETS KAMU)
  profilePhoto: "assets/profile.jpeg", // <-- Kalau filemu .png, ganti jadi "assets/profile.png"
  heroBadges: {
    manLogo: "assets/logo-man.svg",   // <-- Sesuaikan jika nama filemu man.png / logo_man.png
    itsLogo: "assets/logo-its.svg"    // <-- Sesuaikan jika nama filemu its.png / logo_its.png
  },
  // 1. Metrik Kunci & Durasi
  flags: 52,                         // <-- Ganti angka flag di sini
  explorationDuration: "1+ Bulan",   // <-- Ganti durasi belajar di sini

  // 2. Terminal Echo Status Loop
  typewriterQuotes: [
    "You are the CSS to my HTML <3",
    "You bypassed my firewall and got root access to my heart.",
    "while (alive) { exploit(); research(); }",
    "In a world of 0s and 1s, you are my absolute 1.",
    "print("Hello My World <3")"
  ],

  // 3. 8 Domain Cyber (Telemetry & Canvas PicoCTF)
  skills: [
    { name: "Network Knowledge", val: 75, angle: Math.PI, rFactor: 0.45 },
    { name: "Reverse Engineering", val: 70, angle: (3 * Math.PI) / 4, rFactor: 0.46 },
    { name: "Forensics", val: 60, angle: Math.PI / 4, rFactor: 0.47 },
    { name: "General Skills", val: 40, angle: -Math.PI / 2, rFactor: 0.44 },
    { name: "Cryptography", val: 20, angle: -Math.PI / 4, rFactor: 0.46 },
    { name: "OSINT", val: 15, angle: (-3 * Math.PI) / 4, rFactor: 0.47 },
    { name: "Web Exploitation", val: null, angle: 0, rFactor: 0.45 },     // null = [RESEARCH]
    { name: "Binary Exploitation", val: null, angle: Math.PI / 2, rFactor: 0.44 }
  ],

  // 4. Senjata Utama (Cyber Tools Chips)
  tools: [
    { name: "Kali Linux", icon: "bi-terminal-fill", color: "text-neon-bright" },
    { name: "Wireshark", icon: "bi-reception-4", color: "text-sky-400" },
    { name: "Ghidra", icon: "bi-cpu", color: "text-emerald-400" },
    { name: "JohnTheRipper", icon: "bi-key", color: "text-amber-400" },
    { name: "Nmap", icon: "bi-radar", color: "text-purple-400" },
    { name: "Python3", icon: "bi-code-slash", color: "text-yellow-300" },
    { name: "Others", icon: "bi-tools", color: "text-zinc-400" }
  ],

  // 5. TACTICAL DECK BADGES (FORMAT KOMPAK CREDLY // STATUS: COMING SOON)
  // Kalau sudah ada badge PNG no-bg dari Credly, tinggal isi di array ini:
  badges: [
    // Contoh format pengisian nanti:
    // {
    //   name: "Introduction to Cybersecurity",
    //   issuer: "Cisco",
    //   image: "assets/badges/cisco-cyber.png", // PNG transparan
    //   url: "https://www.credly.com/badges/..."
    // }
  ],

  // 6. SERTIFIKAT (DIBUAT BESAR & LEGA // STATUS: COMING SOON)
  certificates: {
    courses: [
      // Contoh format pengisian nanti:
      // {
      //   title: "Google Cybersecurity Professional Certificate",
      //   issuer: "Google / Coursera",
      //   year: "2026",
      //   certId: "ID: COURSERA-SEC-89241",
      //   image: "assets/certs/google-cert.jpg", // opsional preview sertifikat
      //   url: "https://coursera.org/verify/..."
      // }
    ],
    competitions: [],
    bugHunter: []
  },

  // 7. Target & Roadmap Milestones (HUD To-Do List)
  targets: [
    { title: "JOINTS CTF FMIPA UGM", tag: "Kompetisi CTF", status: "Upcoming" },
    { title: "Penilaian Tengah Semester 5", tag: "Akademik", status: "Sekolah" },
    { title: "Tes Kemampuan Akademik (TKA)", tag: "Ujian", status: "Persiapan" },
    { title: "Penilaian Akhir Semester 5", tag: "Akademik", status: "Sekolah" },
    { title: "Ujian Praktik", tag: "Akademik", status: "Kelulusan" },
    { title: "Penilaian Tengah Semester 6", tag: "Akademik", status: "Sekolah" },
    { title: "Try Out Sepuluh Nopember x Forda", tag: "Simulasi ITS", status: "Target" },
    { title: "Ujian Madrasah", tag: "Kelulusan", status: "Sekolah" },
    { title: "SNBP", tag: "Jalur Prestasi", status: "Target Utama" },
    { title: "UTBK-SNBT", tag: "Seleksi Nasional", status: "Target Utama" }
  ],

  // 8. Achievement Wall
  achievements: [
    {
      title: "🥉 Juara 3 & 🏅 Finalis Olimpiade Sains Madrasah (OSMA)",
      desc: "Meraih 🥉 Juara 3 pada seleksi Tingkat Kabupaten Temanggung dan melaju sebagai 🏅 Finalis di Tingkat Provinsi Jawa Tengah dalam bidang Informatika.",
      category: "Kementerian Agama Republik Indonesia",
      badge: "PRESTASI TERTINGGI // 2026",
      tags: ["Tingkat Kabupaten: 🥉 Juara 3", "Tingkat Provinsi: 🏅 Finalis"],
      featured: true
    },
    {
      title: "🏅 Semifinalis Algoquest ITS",
      desc: "Kompetisi algoritma dan pemrograman tingkat nasional pada Jenjang Future Coder yang diselenggarakan oleh Institut Teknologi Sepuluh Nopember.",
      category: "ITS Surabaya",
      badge: "NASIONAL // 2026",
      tags: ["Status: 🏅 Semifinalis Nasional"],
      featured: false
    }
  ],

  // 9. Riwayat Pendidikan
  education: [
    { name: "SD Muhammadiyah Parakan", period: "2015 — 2021", status: "Alumni", logo: "assets/logo-sd.svg", initial: "SD" },
    { name: "SMP Islam Ngadirejo", period: "2021 — 2024", status: "Alumni", logo: "assets/logo-smp.svg", initial: "SMP" },
    { name: "MAN Temanggung", period: "2024 — 2027", status: "Siswa Aktif", logo: "assets/logo-man.svg", initial: "MAN" },
    { name: "Institut Teknologi Sepuluh Nopember (ITS)", period: "2027 — Target", status: "Target Studi Impian", logo: "assets/logo-its.svg", initial: "ITS" }
  ],

  // 10. Media Sosial
  socials: [
    { platform: "WhatsApp", url: "https://wa.me/6282324864586", handle: "+62 823-2486-4586", icon: "bi-whatsapp" },
    { platform: "Telegram", url: "https://t.me/Zkav7", handle: "@Zkav7", icon: "bi-telegram" },
    { platform: "Instagram", url: "https://www.instagram.com/kaav17_", handle: "@kaav17_", icon: "bi-instagram" },
    { platform: "TikTok", url: "https://www.tiktok.com/@azk_main.py", handle: "@azk_main.py", icon: "bi-tiktok" },
    { platform: "Facebook", url: "https://www.facebook.com/share/1GpKcLE1ip/", handle: "Facebook", icon: "bi-facebook" },
    { platform: "Discord", url: "https://discord.com", handle: "@natuss17_", icon: "bi-discord" },
    { platform: "GitHub", url: "https://github.com/azkagitcode17-coder", handle: "azkagitcode17-coder", icon: "bi-github" },
    { platform: "Email", url: "mailto:azka.workspace17@gmail.com", handle: "azka.workspace17@gmail.com", icon: "bi-envelope-at-fill" }
  ]
};