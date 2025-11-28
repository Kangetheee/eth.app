"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Leaf,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Beaker,
} from "lucide-react";

const ServicesSection = () => {
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
      ],
      bgColor: "bg-gradient-to-br from-emerald-400/10 to-emerald-500/10",
      iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-500",
      borderColor: "border-emerald-200/30 dark:border-emerald-400/30",
      hoverBg: "hover:from-emerald-400/20 hover:to-emerald-500/20",
    },
    {
      icon: Heart,
      title: "Wellness Consultations",
      description:
        "One-on-one herbal guidance to help you understand your body, choose the right herbs, and build sustainable wellness routines.",
      features: [
        "Individual assessment",
        "Herbal education",
        "Lifestyle recommendations",
      ],
      bgColor: "bg-gradient-to-br from-pink-400/10 to-rose-500/10",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      borderColor: "border-pink-200/30 dark:border-pink-400/30",
      hoverBg: "hover:from-pink-400/20 hover:to-rose-500/20",
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
      ],
      bgColor: "bg-gradient-to-br from-blue-400/10 to-indigo-500/10",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
      borderColor: "border-blue-200/30 dark:border-blue-400/30",
      hoverBg: "hover:from-blue-400/20 hover:to-indigo-500/20",
    },
    {
      icon: Sparkles,
      title: "Skincare & Self-Care",
      description:
        "Handcrafted balms, oils, and botanical treatments designed to rejuvenate your skin naturally.",
      features: [
        "Natural ingredients",
        "Handcrafted formulations",
        "Skin-specific solutions",
      ],
      bgColor: "bg-gradient-to-br from-purple-400/10 to-violet-500/10",
      iconBg: "bg-gradient-to-br from-purple-400 to-violet-500",
      borderColor: "border-purple-200/30 dark:border-purple-400/30",
      hoverBg: "hover:from-purple-400/20 hover:to-violet-500/20",
    },
    {
      icon: MessageCircle,
      title: "Herbal Consultations",
      description:
        "Expert guidance on herbal remedies, dosages, and combinations for your specific wellness goals.",
      features: [
        "Expert guidance",
        "Dosage recommendations",
        "Safety protocols",
      ],
      bgColor: "bg-gradient-to-br from-amber-400/10 to-orange-500/10",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      borderColor: "border-amber-200/30 dark:border-amber-400/30",
      hoverBg: "hover:from-amber-400/20 hover:to-orange-500/20",
    },
    {
      icon: Leaf,
      title: "Organic Products",
      description:
        "Premium quality herbs and botanical products sourced directly from trusted organic farms.",
      features: ["Organic certified", "Direct sourcing", "Quality assured"],
      bgColor: "bg-gradient-to-br from-teal-400/10 to-cyan-500/10",
      iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
      borderColor: "border-teal-200/30 dark:border-teal-400/30",
      hoverBg: "hover:from-teal-400/20 hover:to-cyan-500/20",
    },
  ];

  return (
    <section className="py-24 section-bg-alt">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
            <Sparkles className="h-4 w-4" />
            <span>Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Comprehensive Herbal Wellness Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a range of services designed to support your journey to
            optimal health and vitality through the power of nature.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className={`relative p-8 rounded-3xl border-2 ${service.borderColor} ${service.bgColor} ${service.hoverBg} glass-card transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-black/10`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:emerald-glass-strong"
                  >
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
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
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 mt-auto border-t border-border/50">
                  <button className="inline-flex items-center space-x-2 text-foreground/80 hover:text-foreground font-semibold text-sm group/btn">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
