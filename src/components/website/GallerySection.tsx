"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Tag, Banknote, FileText } from "lucide-react";

// ─────────────────────────────────────────────────────────────
//  DATA FOTO DOKUMENTASI
//  Ganti "image" dengan URL foto asli kamu.
//  "harga" dan "deskripsi" opsional — kosongkan "" jika tidak perlu.
// ─────────────────────────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    jenisPesanan: "Akun Netflix Premium",
    harga: "Rp 15.000 / bulan",
    deskripsi: "Sharing 4K UHD, garansi penuh 1 bulan.",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=Netflix",
  },
  {
    id: 2,
    jenisPesanan: "Akun Spotify Premium",
    harga: "Rp 10.000 / bulan",
    deskripsi: "Family plan, tanpa iklan, download offline.",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=Spotify",
  },
  {
    id: 3,
    jenisPesanan: "Akun Canva Pro",
    harga: "Rp 12.000 / bulan",
    deskripsi: "Akses semua template premium & fitur brand kit.",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=Canva+Pro",
  },
  {
    id: 4,
    jenisPesanan: "Akun YouTube Premium",
    harga: "Rp 13.000 / bulan",
    deskripsi: "",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=YouTube",
  },
  {
    id: 5,
    jenisPesanan: "Akun ChatGPT Plus",
    harga: "Rp 35.000 / bulan",
    deskripsi: "GPT-4o, DALL·E, browsing & plugins aktif.",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=ChatGPT+Plus",
  },
  {
    id: 6,
    jenisPesanan: "Akun Disney+ Hotstar",
    harga: "Rp 10.000 / bulan",
    deskripsi: "",
    image: "https://placehold.co/600x400/0f1f3d/60a5fa?text=Disney%2B",
  },
];

// ─────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

type Item = (typeof galleryItems)[number];

export default function GallerySection() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <>
      <section className="relative py-12 md:py-16 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500">

                {/* Foto */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.jenisPesanan}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  {/* Zoom hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Badge jenis pesanan */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                      {item.jenisPesanan}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2">
                  {/* Harga */}
                  {item.harga && (
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-bold text-green-400">
                        {item.harga}
                      </span>
                    </div>
                  )}

                  {/* Deskripsi opsional */}
                  {item.deskripsi && (
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {item.deskripsi}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="relative bg-card rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-border/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol tutup */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Foto besar */}
              <div className="relative w-full h-72 sm:h-80">
                <img
                  src={selected.image}
                  alt={selected.jenisPesanan}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Detail */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-base font-bold text-foreground">
                    {selected.jenisPesanan}
                  </span>
                </div>

                {selected.harga && (
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-bold text-green-400">
                      {selected.harga}
                    </span>
                  </div>
                )}

                {selected.deskripsi && (
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selected.deskripsi}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
