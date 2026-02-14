"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Selamat Datang di",
    highlight: "ASTA CLOUD",
    description: "Solusi lengkap untuk kebutuhan digital dan teknologi Anda",
    cta: "Jelajahi Layanan",
    ctaLink: "/layanan",
    image:
      "https://image2url.com/r2/default/images/1769764648540-53d343cc-e010-40c4-bb56-6c8802266d3b.webp",
    accent: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Produk",
    highlight: "Berkualitas",
    description: "Peralatan komputer dan aksesoris dengan kualitas terbaik",
    cta: "Lihat Produk",
    ctaLink: "/produk",
    image:
      "https://image2url.com/r2/default/images/1769764694970-8c69768b-7b54-4d8b-a5a7-d54b3c066227.png",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Layanan",
    highlight: "Profesional",
    description: "Desain, editing video, dan perbaikan device",
    cta: "Pesan Sekarang",
    ctaLink: "/layanan",
    image:
      "https://image2url.com/r2/default/images/1769764838786-fc6f8681-0b2f-4081-8f24-341ec63bbd92.png",
    accent: "from-orange-500 via-red-500 to-pink-500",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden"
    >
      {/* Background Slides */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-70 mix-blend-multiply`}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full min-h-[70vh] md:min-h-[80vh] flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 pt-20">
          <div className="max-w-3xl">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90">Marketplace Terpercaya</span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </div>

            {/* Highlight */}
            <div className="overflow-hidden">
              <motion.h2
                key={`highlight-${currentSlide}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${slides[currentSlide].accent} bg-clip-text text-transparent mb-6`}
              >
                {slides[currentSlide].highlight}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link href={slides[currentSlide].ctaLink}>
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${slides[currentSlide].accent} text-white px-8 py-6 text-base font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/testimoni">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white px-8 py-6 text-base font-semibold rounded-2xl hover:bg-white/20 transition-all"
                >
                  Lihat Testimoni
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Arrows - Repositioned to bottom corners */}
      <div className="absolute bottom-20 left-4 md:left-8 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>
      <div className="absolute bottom-20 right-4 md:right-8 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`transition-all duration-500 rounded-full ${
                currentSlide === index
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 group-hover:bg-white/60"
              }`}
            />
            {currentSlide === index && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", bounce: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          className={`h-full bg-gradient-to-r ${slides[currentSlide].accent}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={currentSlide}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </section>
  );
}
