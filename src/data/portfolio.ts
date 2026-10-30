export interface Project {
  slug: string;
  title: string;
  category: string;
  badge: string; // e.g., 'Proyek Konsep' or 'Proyek Pribadi'
  role: string;
  duration: string;
  problem: string;
  summary: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  featured: boolean;
  hasCaseStudy: boolean;
  caseStudy?: {
    approach: string;
    process: {
      step: string;
      desc: string;
    }[];
    results: {
      metric: string;
      label: string;
    }[];
    learned: string[];
    deliverables: string[];
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedTime: string;
  priceStartingFrom: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

export interface StepProcess {
  number: string;
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: 'Aan',
    role: 'Web Developer',
    headline: 'Saya membangun website yang membuat bisnismu terlihat serius.',
    subheadline: 'Membantu bisnis lokal dan startup memiliki website yang cepat di HP, berdesain premium, dan berorientasi konversi tanpa ribet.',
    availability: 'Menerima Proyek Baru',
    location: 'Indonesia',
    bio: [
      'Saya adalah web developer independen yang berfokus membangun website modern dengan performa tinggi dan desain tajam.',
      'Bagi saya, website bukan sekadar estetika, melainkan instrumen bisnis untuk memvalidasi brand, meyakinkan calon pelanggan dalam hitungan detik, dan mengalirkan pesan masuk berkualitas.',
      'Tanpa birokrasi rumit: komunikasi langsung, transparansi jadwal, dan kode bersih yang siap berkembang bersama bisnis Anda.'
    ],
    avatarUrl: '/images/avatar.jpg',
  },

  contact: {
    whatsappNumber: '6281234567890', // Format internasional tanpa simbol +
    whatsappPrefilledMessage: 'Halo Aan, saya melihat portofolio Anda dan tertarik mendiskusikan pembuatan website untuk bisnis saya.',
    email: 'aan.developer@gmail.com',
    github: 'https://github.com/aan',
    linkedin: 'https://linkedin.com/in/aan-dev',
  },

  metricsProof: [
    {
      label: 'Lighthouse Score',
      value: '98+',
      desc: 'Mobile Core Web Vitals Pass'
    },
    {
      label: 'Waktu Muat',
      value: '< 1.2s',
      desc: 'Super cepat & hemat kuota'
    },
    {
      label: 'Komitmen Kualitas',
      value: '100%',
      desc: 'Clean code & responsif penuh'
    }
  ],

  workProcesses: [
    {
      number: '01',
      title: 'Brief & Analisis Kebutuhan',
      description: 'Diskusi terarah untuk memetakan tujuan bisnis, target audiens, dan pesan kunci yang ingin disampaikan ke calon pelanggan.'
    },
    {
      number: '02',
      title: 'Struktur & Desain Visual',
      description: 'Penyusunan wireframe dan desain UI modern (mobile-first) dengan tipografi tegas dan tata letak yang memandu perhatian.'
    },
    {
      number: '03',
      title: 'Build & Optimasi Performa',
      description: 'Pengembangan dengan stack modern tanpa kode sampah. Optimasi aset (WebP/AVIF), SEO dasar, dan pengujian lintas perangkat.'
    },
    {
      number: '04',
      title: 'Peluncuran & Serah Terima',
      description: 'Konfigurasi domain dan hosting aman (HTTPS), pengujian form kontak, serta serah terima berkas dengan panduan jelas.'
    }
  ],

  skills: {
    core: [
      { name: 'HTML5 Semantic', icon: 'html5', level: 'Semantic & Accessibility' },
      { name: 'Modern CSS / Tailwind', icon: 'tailwind', level: 'Responsive & Design Tokens' },
      { name: 'JavaScript / TypeScript', icon: 'javascript', level: 'Modern ES6+ & Type-Safe' },
      { name: 'React / Astro', icon: 'react', level: 'Fast Static & Component Driven' },
      { name: 'Next.js', icon: 'nextjs', level: 'SSR & Hybrid Web' },
      { name: 'Node.js & REST API', icon: 'nodejs', level: 'Backend Integration' },
      { name: 'Git & GitHub', icon: 'github', level: 'Version Control & Workflow' },
      { name: 'Figma to Code', icon: 'figma', level: 'Pixel Perfect Implementation' },
    ],
    additional: [
      'Core Web Vitals Optimization',
      'SEO Dasar & Schema JSON-LD',
      'Web3Forms / Formspree',
      'Supabase / Firebase Basics',
      'Vercel & Netlify Deployment',
      'Aksesibilitas WCAG 2.2'
    ]
  },

  services: [
    {
      id: 'landing-page',
      title: 'Landing Page Konversi',
      subtitle: 'Untuk Peluncuran Produk & Bisnis Jasa',
      description: 'Satu halaman bertenaga tinggi yang didesain khusus untuk mengubah pengunjung menjadi lead atau pesan WhatsApp.',
      estimatedTime: '5 – 7 Hari Kerja',
      priceStartingFrom: 'Mulai Rp 1.500.000',
      badge: 'Paling Populer',
      features: [
        'Desain eksklusif (Bukan template murah)',
        'Tombol WhatsApp interaktif dengan prefilled message',
        'Skor performa mobile 95+ (Anti lemot)',
        'Formulir pemesanan/kontak tervalidasi',
        'SEO dasar & Open Graph sosial media',
        'Revisi terarah hingga tuntas'
      ],
      recommendedFor: 'UMKM kuliner, konsultan, jasa profesional, dan peluncuran produk digital.'
    },
    {
      id: 'company-profile',
      title: 'Company Profile Premium',
      subtitle: 'Membangun Kredibilitas Perusahaan',
      description: 'Website multi-halaman berkelas untuk meyakinkan mitra bisnis, investor, dan klien korporat bahwa bisnis Anda kredibel.',
      estimatedTime: '10 – 14 Hari Kerja',
      priceStartingFrom: 'Mulai Rp 3.000.000',
      features: [
        'Hingga 5 halaman terstruktur (Home, Tentang, Layanan, Portofolio, Kontak)',
        'Tampilan setara standar agensi internasional',
        'Kecepatan muat kilat & ramah perangkat mobile',
        'Integrasi Google Maps, formulir penawaran, & WhatsApp',
        'Setup domain kustom (.com / .id) & email bisnis',
        'Panduan update konten mandiri'
      ],
      recommendedFor: 'Perusahaan skala menengah, kontraktor, studio kreatif, & biro jasa.'
    },
    {
      id: 'web-app-mvp',
      title: 'Web Application / MVP',
      subtitle: 'Prototipe Cepat Siap Uji Pasar',
      description: 'Aplikasi berbasis web dengan logika interaktif, manajemen data, dan integrasi API untuk memvalidasi ide produk Anda.',
      estimatedTime: '2 – 3 Minggu',
      priceStartingFrom: 'Mulai Rp 5.000.000',
      features: [
        'Frontend interaktif dengan React / Next.js / Astro',
        'Integrasi REST API atau Backend-as-a-Service (Supabase)',
        'Filter data dinamis, dashboard ringkas, & formulir kompleks',
        'Arsitektur kode bersih, modular, & mudah dikembangkan tim Anda',
        'Testing fungsionalitas & deployment ke cloud',
        'Dokumentasi repositori GitHub yang rapi'
      ],
      recommendedFor: 'Founder startup tahap awal, automated internal tools UMKM.'
    }
  ],

  projects: [
    {
      slug: 'kopi-artisan-nusantara',
      title: 'Kopi Artisan Nusantara',
      category: 'F&B & Retail Landing Page',
      badge: 'Proyek Konsep',
      role: 'Desain UI & Frontend Development',
      duration: '1 Minggu',
      coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      problem: 'Banyak brand kedai kopi lokal memiliki produk premium namun landing page mereka lambat, sulit dibuka di HP, dan kehilangan pelanggan karena tombol pemesanan WhatsApp tidak otomatis mengisi detail pesanan.',
      summary: 'Landing page berkecepatan tinggi dengan sistem katalog biji kopi interaktif dan pemesanan direct-to-WhatsApp yang menghasilkan pesan instan terstruktur.',
      technologies: ['Astro', 'Tailwind CSS', 'TypeScript', 'WebP Optimization'],
      liveUrl: 'https://example.com/demo/kopi-artisan',
      githubUrl: 'https://github.com/aan/kopi-artisan-concept',
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        approach: 'Mengeliminasi kerumitan checkout keranjang belanja e-commerce konvensional untuk audiens Indonesia yang lebih suka bertransaksi langsung via WhatsApp. Fokus utama adalah kecepatan muat di jaringan seluler 4G.',
        process: [
          {
            step: 'Riset Alur Belanja',
            desc: 'Menganalisis 5 kedai kopi lokal ternama. Menemukan bahwa 85% transaksi lokal terjadi via chat WhatsApp daripada checkout form panjang.'
          },
          {
            step: 'Desain Visual Berkarakter',
            desc: 'Merancang palet warna bernuansa warm earthy dengan kontras tinggi di Figma, memastikan tipografi menu kopi mudah dibaca di layar HP 360px.'
          },
          {
            step: 'Build Performa Ekstrem',
            desc: 'Menggunakan Astro untuk zero-JavaScript pada halaman konten statis, menghasilkan file bundle di bawah 50KB CSS dan skor 100/100 di PageSpeed.'
          },
          {
            step: 'Generator Pesan WhatsApp Pintar',
            desc: 'Membangun script interaktif yang mengkalkulasi total pesanan otomatis dan menyusun format pesan rapi siap kirim saat tombol WhatsApp ditekan.'
          }
        ],
        results: [
          { metric: '100 / 100', label: 'Skor Lighthouse Mobile' },
          { metric: '0.8s', label: 'Largest Contentful Paint (LCP)' },
          { metric: '0 kB', label: 'Framework JS Bloat di Client' },
          { metric: '1-Klik', label: 'Alur Pesan Langsung ke WhatsApp' }
        ],
        learned: [
          'Mengutamakan kemudahan navigasi jempol di mobile secara drastis meningkatkan kenyamanan membaca daftar menu.',
          'Format gambar modern WebP menghemat bandwidth hingga 78% tanpa mengorbankan ketajaman foto produk.'
        ],
        deliverables: [
          'Source code lengkap di GitHub dengan dokumentasi jelas',
          'Aset desain Figma siap pakai',
          'Setup hosting di Vercel / Cloudflare Pages'
        ]
      }
    },
    {
      slug: 'apex-logistics-corp',
      title: 'Apex Logistics & Freight',
      category: 'Company Profile & Tracking',
      badge: 'Proyek Konsep',
      role: 'Full Lifecycle Development',
      duration: '2 Minggu',
      coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      problem: 'Perusahaan logistik kargo sering kali memiliki profil web lawas bertema template generik yang kaku, lambat, serta tanpa fasilitas cek status pengiriman cepat di halaman depan.',
      summary: 'Redesain company profile modern bernuansa korporat teknologi dengan kalkulator estimasi tarif kontainer dan mockup pencarian resi instan.',
      technologies: ['Next.js / Astro', 'Tailwind CSS', 'Lucide Icons', 'Responsive Tables'],
      liveUrl: 'https://example.com/demo/apex-logistics',
      githubUrl: 'https://github.com/aan/apex-logistics-profile',
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        approach: 'Membangun arsitektur informasi terstruktur yang memposisikan Apex sebagai operator kargo terpercaya berskala global. Menghadirkan widget pencarian resi interaktif di hero section untuk keterlibatan langsung.',
        process: [
          {
            step: 'Pemetaan Struktur Informasi',
            desc: 'Menyusun sitemap 4 halaman inti: Solusi Armada, Rute Pengiriman, Profil Perusahaan, dan Pusat Bantuan Pelanggan.'
          },
          {
            step: 'Desain Minimalis Elegan',
            desc: 'Menerapkan grid 12 kolom dengan ruang kosong proporsional serta tipografi korporat modern untuk memberikan kesan kredibilitas tinggi.'
          },
          {
            step: 'Komponen Interaktif Kustom',
            desc: 'Membangun kalkulator tarif kargo sederhana dan demo live tracking resi dengan animasi status pengiriman bertahap.'
          },
          {
            step: 'Audit Aksesibilitas WCAG 2.2',
            desc: 'Memastikan rasio kontras warna teks terhadap latar belakang minimal 4.8:1 dan navigasi keyboard berfungsi 100% pada semua tombol dan tautan.'
          }
        ],
        results: [
          { metric: '98 / 100', label: 'Skor Performa Mobile' },
          { metric: '100 / 100', label: 'Skor Aksesibilitas WCAG' },
          { metric: '1.1s', label: 'Waktu Muat Halaman Penuh' },
          { metric: '4 Halaman', label: 'Struktur Informasi Lengkap' }
        ],
        learned: [
          'Penggunaan data dummy yang realistis (seperti contoh nomor resi dan rute kontainer riil) jauh lebih meyakinkan calon klien agensi daripada teks Lorem Ipsum generik.',
          'Komponen tabel responsif yang bertransformasi menjadi kartu di layar HP sangat membantu kenyamanan membaca data rute.'
        ],
        deliverables: [
          'Repositori kode TypeScript modular',
          'Sitemap XML & Open Graph Image 1200x630px',
          'Checklist audit performa & keamanan'
        ]
      }
    },
    {
      slug: 'finance-flow-dashboard',
      title: 'FinanceFlow Cashflow Tracker',
      category: 'Web Application / Dashboard',
      badge: 'Proyek Pribadi',
      role: 'Frontend & State Management',
      duration: '10 Hari',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      problem: 'Pemilik usaha kecil sering kesulitan melacak arus kas harian karena software akuntansi yang ada terlalu rumit, penuh istilah teknis membingungkan, dan membutuhkan langganan mahal.',
      summary: 'Dashboard pelacak pemasukan dan pengeluaran kas UMKM yang ringan, berbasis browser, dengan grafik visual instan serta penyimpanan lokal otomatis.',
      technologies: ['TypeScript', 'Tailwind CSS', 'Chart Engine', 'Local Storage'],
      liveUrl: 'https://example.com/demo/finance-flow',
      githubUrl: 'https://github.com/aan/financeflow-dashboard',
      featured: true,
      hasCaseStudy: false
    }
  ]
};

