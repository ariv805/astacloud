"use client";

import { motion } from "framer-motion";
import { Bell, Laptop, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Bell,
    title: "Layanan Profesional",
    description:
      "Berbagai layanan profesional untuk desain, editing video, dan perbaikan device",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    link: "/layanan",
    stats: "5+ Layanan",
  },
  {
    icon: Laptop,
    title: "Produk Berkualitas",
    description:
      "Peralatan komputer dan aksesoris dengan kualitas terbaik",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    link: "/produk",
    stats: "7+ Produk",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description:
      "Solusi domain dan hosting untuk kebutuhan website Anda",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    link: "/domain",
    stats: "8+ Domain",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Keunggulan Kami
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mengapa Memilih{" "}
            <span className="gradient-text">ASTA CLOUD</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Kami menyediakan solusi terbaik untuk semua kebutuhan digital Anda
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link href={feature.link}>
                <div className="relative h-full">
                  {/* Gradient border */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
                  />

                  {/* Card */}
                  <div className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Stats badge */}
                    <div className="absolute top-8 right-8">
                      <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        {feature.stats}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 mt-6 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm">Lihat Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
