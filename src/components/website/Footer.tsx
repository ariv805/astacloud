"use client";

import { motion } from "framer-motion";
import { MessageSquare, Video, Instagram, Heart, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageSquare,
    url: "https://wa.me/6285815185245",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "TikTok",
    icon: Video,
    url: "https://www.tiktok.com/@astacloud6?_r=1&_t=ZS-93RJptOpLhF",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/asta.cloud?igsh=OW52cGVyYnI1MTBp",
    gradient: "from-purple-500 to-pink-600",
  },
];

const footerLinks = [
  {
    title: "Navigasi",
    links: [
      { name: "Beranda", href: "/" },
      { name: "Layanan", href: "/layanan" },
      { name: "Produk", href: "/produk" },
      { name: "Domain", href: "/domain" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { name: "Jasa Desain", href: "/layanan" },
      { name: "Edit Video", href: "/layanan" },
      { name: "Service HP", href: "/layanan" },
      { name: "Domain & Hosting", href: "/domain" },
    ],
  },
  {
    title: "Kontak",
    links: [
      { name: "WhatsApp", href: "https://wa.me/6285815185245" },
      { name: "Instagram", href: "https://www.instagram.com/asta.cloud" },
      { name: "TikTok", href: "https://www.tiktok.com/@astacloud6" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-md opacity-60" />
                <img
                  src="https://files.catbox.moe/ew2x0g.jpg"
                  alt="ASTA CLOUD"
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-white/50"
                />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">ASTA CLOUD</span>
                <p className="text-xs text-muted-foreground">Marketplace Terpercaya</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Solusi lengkap untuk kebutuhan digital dan teknologi Anda. Layanan profesional, produk berkualitas.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left flex items-center gap-1"
          >
            © 2026 ASTA CLOUD. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            in Indonesia
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <span>All rights reserved</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
