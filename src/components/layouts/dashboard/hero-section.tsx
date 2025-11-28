"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    scale: 0.8 + Math.random() * 0.4,
  }));

  const trustBadges = [
    "100% Natural",
    "Handcrafted",
    "Expert Formulated",
    "Sustainably Sourced",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg pt-32 pb-20">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              scale: element.scale,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [element.scale, element.scale * 1.2, element.scale],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 emerald-glass-strong text-emerald-800 dark:text-emerald-200 px-6 py-3 rounded-2xl font-bold text-sm shadow-xl mb-8 border border-emerald-200/30 dark:border-emerald-400/30"
          >
            <Sparkles className="h-4 w-4" />
            <span>Navigating wellness through nature</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-tight tracking-tight"
          >
            <span className="block">Earth Kissed</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
              Herbs
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We handcraft herbal products and remedies made with care, intention,
            and pure ingredients from the earth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            Whether you&apos;re here to nourish your body, restore balance, or
            explore plant-based living, you&apos;re in the right place.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                className="flex items-center space-x-2 glass-card px-4 py-2 rounded-xl border border-emerald-200/30 dark:border-emerald-400/30 shadow-sm"
              >
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-semibold text-foreground">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href=""
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <span className="text-lg">Explore Our Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href=""
                className="inline-flex items-center space-x-2 glass-card hover:emerald-glass-strong border-2 border-emerald-200/30 dark:border-emerald-400/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 text-foreground font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-lg">Learn Our Story</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Statistics or Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "100%", label: "Natural Ingredients" },
              { value: "500+", label: "Happy Customers" },
              { value: "15+", label: "Herbal Products" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 glass-card rounded-2xl border border-emerald-200/30 dark:border-emerald-400/30"
              >
                <div className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
