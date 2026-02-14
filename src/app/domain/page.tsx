"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/website/PageWrapper";
import DomainSection from "@/components/website/DomainSection";

export default function DomainPage() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10" />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              Domain & Hosting
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pilih <span className="gradient-text">Domain</span> Anda
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Solusi domain dan hosting untuk kebutuhan website Anda
            </p>
          </motion.div>
        </div>
      </section>
      <DomainSection />
    </PageWrapper>
  );
}
