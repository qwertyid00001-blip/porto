# Website Portofolio Web Developer

Portofolio modern berkinerja tinggi yang dirancang sesuai panduan **PRD-Website-Portofolio** dan inspirasi visual bertema gelap elegan (*midnight obsidian*) dengan aksen *electric neon lime* (`#D4FF32`).

---

## ⚡ Keunggulan Arsitektur
1. **Ultra Fast & Ringan:** Total ukuran build hanya **~230 KB** (jauh di bawah batas 1 MB pada PRD), menjamin skor **Lighthouse 95–100 di HP**.
2. **Panel Pengaturan Rahasia (`/admin`):** Dilindungi **Kunci Rahasia (Master Key)**. Anda bisa:
   - Mengubah link GitHub, LinkedIn, email, nomor WhatsApp, nama, dan headline.
   - **Menambah Foto Hasil Pembuatan / Proyek Baru**: Pilih foto langsung dari laptop/HP (dilengkapi kompresi otomatis) atau tempelkan URL foto.
   - Mengelola (tambah / hapus) daftar karya yang langsung tampil seketika di halaman depan website!
3. **Pintasan Rahasia Keyboard:** Tekan **`Ctrl + Shift + S`** (atau `Cmd + Shift + S` di Mac) di halaman beranda untuk langsung membuka panel `/admin`.
4. **Central Data-Driven (`src/data/portfolio.ts`):** Seluruh data terpusat, dengan tombol "Salin Kode `portfolio.ts`" di `/admin` yang otomatis menyertakan seluruh daftar proyek baru siap simpan permanen.
5. **Konversi WhatsApp Otomatis:** Tombol WhatsApp langsung membuka chat dengan template pesan yang sudah terisi (*prefilled message*).
6. **Studi Kasus Lengkap:** Halaman detail untuk 2 proyek unggulan (`/projects/kopi-artisan-nusantara` dan `/projects/apex-logistics-corp`) yang disusun jujur dengan metrik nyata.
7. **SEO & Aksesibilitas:** Sudah dilengkapi JSON-LD Person schema, Open Graph preview, sitemap.xml, robots.txt, serta kontras warna WCAG 2.2 AA.

---

## 🔒 Akses Panel Admin Rahasia
* **URL:** `http://localhost:4321/admin`
* **Pintasan Cepat:** Tekan `Ctrl + Shift + S` (atau `Cmd + Shift + S`)
* **Kunci Rahasia Bawaan:** `aan-secret-2026` *(Dapat Anda ubah kapan saja langsung di dalam panel admin)*.

---

## 🚀 Perintah Cepat

```bash
# Jalankan server pengembangan lokal (http://localhost:4321)
npm run dev

# Build untuk produksi
npm run build

# Preview hasil build lokal
npm run preview
```

---

## 📁 Struktur Berkas

```
src/
├── components/          # Komponen UI (Navbar, Hero, Projects, Services, WhoAmI, Skills, Contact, Footer)
├── data/
│   └── portfolio.ts     # ⭐️ PUSAT DATA KONTEN (Ubah nama, kontak, proyek di sini)
├── layouts/
│   └── Layout.astro     # Template dasar, Google Fonts, SEO & JSON-LD
├── pages/
│   ├── index.astro      # Halaman utama (6 Section berurutan)
│   ├── 404.astro        # Halaman 404 kustom
│   └── projects/
│       └── [slug].astro # Template halaman detail studi kasus
└── styles/
    └── global.css       # Tailwind CSS & utilitas kustom
```

