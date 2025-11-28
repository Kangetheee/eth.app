"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Users,
  Leaf,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Purity",
      description:
        "We source clean, natural ingredients without fillers or artificial additives. Every herb is carefully selected for maximum potency and safety.",
      color: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-400/10 to-pink-500/10",
      iconBg: "bg-gradient-to-br from-red-400 to-pink-500",
      borderColor: "border-red-200/30 dark:border-red-400/30",
      hoverBg: "hover:from-red-400/20 hover:to-pink-500/20",
    },
    {
      icon: BookOpen,
      title: "Knowledge",
      description:
        "Every product is backed by herbal wisdom and careful formulation. Our team combines traditional knowledge with modern research.",
      color: "text-blue-500",
      bgColor: "bg-gradient-to-br from-blue-400/10 to-indigo-500/10",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
      borderColor: "border-blue-200/30 dark:border-blue-400/30",
      hoverBg: "hover:from-blue-400/20 hover:to-indigo-500/20",
    },
    {
      icon: Leaf,
      title: "Intention",
      description:
        "We craft in small batches to maintain quality, potency, and care. Each product is made with intention and mindfulness.",
      color: "text-emerald-500",
      bgColor: "bg-gradient-to-br from-emerald-400/10 to-emerald-500/10",
      iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-500",
      borderColor: "border-emerald-200/30 dark:border-emerald-400/30",
      hoverBg: "hover:from-emerald-400/20 hover:to-emerald-500/20",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We are dedicated to educating, empowering, and supporting your wellness journey. Join our growing community of wellness enthusiasts.",
      color: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-400/10 to-violet-500/10",
      iconBg: "bg-gradient-to-br from-purple-400 to-violet-500",
      borderColor: "border-purple-200/30 dark:border-purple-400/30",
      hoverBg: "hover:from-purple-400/20 hover:to-violet-500/20",
    },
  ];

  return (
    <section className="py-24 section-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
            <Sparkles className="h-4 w-4" />
            <span>Our Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Rooted in Nature. Guided by Tradition.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Earth Kissed Herbs was created from a deep belief: that nature
            carries everything we need to heal, thrive, and reconnect with
            ourselves. We exist to make herbal wellness accessible, trustworthy,
            and beautifully simple.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-8 rounded-3xl border-2 ${feature.borderColor} ${feature.bgColor} ${feature.hoverBg} glass-card transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-xl`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className={`h-1 ${feature.iconBg} rounded-full mt-6 mx-auto w-12 group-hover:w-20 transition-all duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="emerald-glass-strong rounded-3xl p-8 md:p-12 border-2 border-emerald-200/30 dark:border-emerald-400/30 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <CheckCircle className="h-8 w-8 text-white" />
            </motion.div>

            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              &quot;Every leaf, root, and flower we use holds a purpose — and we
              honour that purpose in every blend we create.&quot;
            </blockquote>

            <div className="flex items-center justify-center space-x-4 text-muted-foreground font-semibold">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>Sustainably Sourced</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>Ethically Prepared</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>Lovingly Crafted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
