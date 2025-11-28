"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  MessageCircle,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Beaker,
      title: "Custom Herbal Blends",
      description:
        "Tailored mixes created to support your unique health needs — from digestion and immunity to relaxation and hormonal balance.",
      features: [
        "Personalized consultations",
        "Custom formulations",
        "Quality sourced ingredients",
        "Small batch preparation",
      ],
      bgGradient: "from-blue-400 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=400&fit=crop",
    },
    {
      icon: MessageCircle,
      title: "Wellness Consultations",
      description:
        "One-on-one herbal guidance to help you understand your body, choose the right herbs, and build sustainable wellness routines.",
      features: [
        "Individual assessment",
        "Herbal education",
        "Lifestyle recommendations",
        "Ongoing support",
      ],
      bgGradient: "from-green-400 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    },
    {
      icon: BookOpen,
      title: "Natural Remedies & Education",
      description:
        "Workshops, guides, and community sessions that teach the healing power of herbs and how to incorporate them into daily life.",
      features: [
        "Educational workshops",
        "Comprehensive guides",
        "Community sessions",
        "Practical applications",
      ],
      bgGradient: "from-purple-400 to-violet-500",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
    },
    {
      icon: Sparkles,
      title: "Skincare & Self-Care Formulations",
      description:
        "Handcrafted balms, oils, and botanical treatments designed to rejuvenate your skin naturally.",
      features: [
        "Natural ingredients",
        "Handcrafted formulations",
        "Skin-specific solutions",
        "Holistic approach",
      ],
      bgGradient: "from-pink-400 to-rose-500",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Listen & Understand",
      description:
        "We take time to understand your unique needs, goals, and wellness journey.",
      icon: MessageCircle,
    },
    {
      step: "02",
      title: "Create & Formulate",
      description:
        "Using traditional knowledge and quality ingredients, we craft personalized solutions.",
      icon: Beaker,
    },
    {
      step: "03",
      title: "Support & Guide",
      description:
        "We provide ongoing support and education to help you achieve lasting wellness.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden section-bg pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
              <Sparkles className="h-4 w-4" />
              <span>Our Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              Herbal Wellness, <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
                Crafted for You
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              At Earth Kissed Herbs, we offer a range of services to help you
              embrace holistic living
            </p>

            <p className="text-2xl font-semibold text-foreground/80 italic">
              Your wellness is personal — we simply walk the journey with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-3xl border-2 border-emerald-200/30 dark:border-emerald-400/30 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-foreground mb-3">
                        {service.title}
                      </h3>
                      <div
                        className={`h-1 bg-gradient-to-r ${service.bgGradient} rounded-full w-16 group-hover:w-24 transition-all duration-500`}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.05,
                          }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-border/50">
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold group/link transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
              <CheckCircle className="h-4 w-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              How We Work With You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in a holistic approach to wellness that honors both
              ancient wisdom and modern understanding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                    >
                      <span className="text-3xl font-black text-white">
                        {step.step}
                      </span>
                    </motion.div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent" />
                    )}
                  </div>

                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-6 mx-auto w-12 group-hover:w-20 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="emerald-glass-strong rounded-3xl p-8 md:p-12 border-2 border-emerald-200/30 dark:border-emerald-400/30 max-w-4xl mx-auto shadow-xl">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Ready to Begin Your Wellness Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to create a personalized approach to your
                health and wellbeing using the gentle power of nature&apos;s
                remedies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
                  >
                    Start Your Consultation
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/products"
                    className="glass-card hover:emerald-glass-strong border-2 border-emerald-200/30 dark:border-emerald-400/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 text-foreground font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
                  >
                    Browse Our Products
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
