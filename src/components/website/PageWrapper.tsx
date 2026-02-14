"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={`min-h-screen flex flex-col ${className || ""}`}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-16 md:pt-20"
      >
        {children}
      </motion.div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
