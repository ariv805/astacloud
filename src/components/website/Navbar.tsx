"use client";

import { useState, useEffect, useSyncExternalStore, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Bell,
  ShoppingBag,
  Globe,
  MessageCircle,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "", label: "Beranda", icon: Home },
  { id: "layanan", label: "Layanan", icon: Bell },
  { id: "produk", label: "Produk", icon: ShoppingBag },
  { id: "domain", label: "Domain", icon: Globe },
  { id: "testimoni", label: "Testimoni", icon: MessageCircle },
];

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = (path: string) => {
    if (path === "") {
      return pathname === "/";
    }
    return pathname === `/${path}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 glass shadow-lg shadow-black/5"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu}>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="https://files.catbox.moe/ew2x0g.jpg"
                    alt="ASTA CLOUD"
                    className="relative w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-white/50"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold gradient-text leading-tight">
                    ASTA CLOUD
                  </span>
                  <span className="text-[10px] text-muted-foreground hidden sm:block">
                    Marketplace Terpercaya
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link key={item.id} href={`/${item.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                      isActive(item.id)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive(item.id) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <item.icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              ))}

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-3 p-2.5 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 text-primary hover:from-primary hover:to-purple-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-primary/10 text-primary"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 rounded-full"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-20 blur-xl"
                />
              </div>

              <div className="relative flex flex-col gap-2 mt-4">
                {navItems.map((item, index) => (
                  <Link key={item.id} href={`/${item.id}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 px-5 py-3 rounded-2xl text-base font-medium transition-all",
                        isActive(item.id)
                          ? "bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg"
                          : "hover:bg-muted"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                      {isActive(item.id) && (
                        <Sparkles className="w-4 h-4 ml-auto" />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
