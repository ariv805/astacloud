"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Button */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
