"use client";

import { Phone, Mail, Leaf } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navGroups } from "./data/nav.data";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  const navItems = navGroups[0].items;

  return (
    <motion.header
      style={{ opacity, scale }}
      className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto"
    >
      <motion.div
        className="emerald-glass-strong rounded-3xl border border-emerald-200/30 dark:border-emerald-400/30 shadow-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-6 py-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  Earth Kissed Herbs
                </span>
                <span className="text-sm text-muted-foreground -mt-1 hidden sm:block font-medium">
                  naturally yours
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href || "/"}
                  className="relative px-4 py-2 text-foreground/80 hover:text-foreground font-semibold transition-all duration-300 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-8 transform -translate-x-1/2 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle - Now at the top */}
              <ThemeToggle />

              {/* Contact Icons - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-1">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-300"
                >
                  <a href="tel:+254704154839">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-300"
                >
                  <a href="mailto:dyjunini@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navGroups={navGroups} />

              {/* CTA Button - Enhanced with gradient */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-300 border-0"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
