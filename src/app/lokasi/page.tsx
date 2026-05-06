"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/website/PageWrapper";
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Dsn Pilang, Ds Gempollegundi, Kec. Gudo",
    color: "text-rose-400",
    bg: "bg-rose-500/15",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin – Sabtu: 06.00 – 21.00 WIB",
    color: "text-amber-400",
    bg: "bg-amber-500/15",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 858-1518-5245",
    color: "text-green-400",
    bg: "bg-green-500/15",
    href: "https://wa.me/6285815185245",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@astacloud.id",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    href: "mailto:info@astacloud.id",
  },
];

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.16745708435846!2d112.16998800276252!3d-7.609832022662554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzYnMzUuMCJTIDExMsKwMTAnMTIuMyJF!5e0!3m2!1sen!2sid!4v1777993642014!5m2!1sen!2sid";

const GOOGLE_MAPS_OPEN_URL =
  "https://www.google.com/maps?q=-7.609832022662554,112.16998800276252";

export default function LokasiPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/5 to-sky-500/15" />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20 text-sm font-medium mb-4">
              📍 Lokasi Toko
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Temukan <span className="gradient-text">Kami di Sini</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Kunjungi toko kami langsung atau hubungi kami untuk informasi lebih lanjut
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium mb-0.5 uppercase tracking-wide">
                    {item.label}
                  </p>
                  {"href" in item && item.href ? (
                    <a
                      href={(item as { href: string }).href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold ${item.color} hover:underline break-words`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground break-words">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Map */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20"
            style={{ height: "560px" }}
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko ASTA CLOUD"
            />
            {/* Floating buttons */}
            <div className="absolute bottom-5 right-5 flex flex-col gap-2">
              <a
                href={GOOGLE_MAPS_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-semibold transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Petunjuk Arah
              </a>
              <a
                href={GOOGLE_MAPS_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-5 py-2.5 rounded-full shadow-lg text-sm font-semibold transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Buka Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
