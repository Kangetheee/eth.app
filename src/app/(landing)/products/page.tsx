"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Star,
  ShoppingBag,
  Info,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      name: "Stinging Nettle",
      description:
        "A nutrient-rich herbal staple known for its earthy flavour and supportive properties. Perfect for teas, infusions, and daily wellness routines.",
      benefits: ["Nutrient-rich", "Earthy flavor", "Daily wellness"],
      image:
        "https://images.unsplash.com/photo-1502224562085-639556652f33?w=400&h=400&fit=crop",
    },
    {
      name: "Avocado Seed",
      description:
        "Sun-dried and crushed to bring out its natural richness. Commonly used in traditional blends for general wellbeing and detox-inspired routines.",
      benefits: ["Sun-dried", "Natural richness", "Detox support"],
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop",
    },
    {
      name: "Soursop Leaves",
      description:
        "A soothing, aromatic leaf cherished in many cultures. Ideal for calming herbal teas and grounding infusions.",
      benefits: ["Soothing", "Aromatic", "Calming"],
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    },
    {
      name: "Mulberry Leaves",
      description:
        "Light, smooth, and refreshing. A great choice for gentle daily tea, offering a clean, calming herbal experience.",
      benefits: ["Light & smooth", "Refreshing", "Gentle"],
      image:
        "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&h=400&fit=crop",
    },
    {
      name: "Avocado Leaves",
      description:
        "Naturally fragrant with a soft, woody aroma. Traditionally brewed for relaxation and digestive comfort.",
      benefits: ["Fragrant", "Woody aroma", "Digestive comfort"],
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
    },
    {
      name: "Loquat Leaves",
      description:
        "A beautifully mild leaf known for its smooth taste. Often enjoyed in warm teas, especially for soothing your system.",
      benefits: ["Mild taste", "Smooth", "Soothing"],
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop",
    },
    {
      name: "Guava Leaves",
      description:
        "A staple in many traditional households. Crisp, aromatic, and great for brewing into a supportive everyday herbal drink.",
      benefits: ["Traditional", "Crisp & aromatic", "Supportive"],
      image:
        "https://images.unsplash.com/photo-1564594985645-4427910a8f0c?w=400&h=400&fit=crop",
    },
    {
      name: "Rosemary",
      description:
        "Fresh, bold, and invigorating. Rosemary adds aroma, clarity, and vitality to teas and natural wellness blends.",
      benefits: ["Fresh & bold", "Invigorating", "Mental clarity"],
      image:
        "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=400&h=400&fit=crop",
    },
    {
      name: "Lion's Tail (Leaf & Flower)",
      description:
        "A unique, uplifting herb with a gentle earthy flavour. Traditionally used for calming blends and relaxation rituals.",
      benefits: ["Unique", "Uplifting", "Relaxation"],
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",
    },
  ];

  const trustBadges = [
    { icon: Star, text: "Hand-selected" },
    { icon: Leaf, text: "Naturally dried" },
    { icon: ShoppingBag, text: "Small batch prepared" },
  ];

  const qualityPromises = [
    {
      icon: Leaf,
      title: "Sustainably Sourced",
      description:
        "We work with trusted suppliers who share our commitment to environmental stewardship and ethical harvesting practices.",
      bgGradient: "from-emerald-400 to-emerald-500",
    },
    {
      icon: Star,
      title: "Quality Tested",
      description:
        "Every batch is carefully inspected for purity, potency, and freshness to ensure you receive only the highest quality herbs.",
      bgGradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Info,
      title: "Traditionally Prepared",
      description:
        "Our herbs are processed using time-honored methods that preserve their natural properties and therapeutic benefits.",
      bgGradient: "from-purple-400 to-violet-500",
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
              <ShoppingBag className="h-4 w-4" />
              <span>Our Products</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              Pure Earth Grown <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
                Herbs
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Every herb is carefully selected, dried, and prepared to preserve
              its natural goodness. Our products are pure, earth-grown, and
              hand-handled with intention.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center space-x-2 glass-card px-4 py-2 rounded-xl border border-emerald-200/30 dark:border-emerald-400/30"
                >
                  <badge.icon className="h-4 w-4 text-emerald-500" />
                  <span className="font-semibold text-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
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
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="glass-card px-3 py-1 rounded-full border border-white/20">
                        <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                        <span className="text-white font-semibold text-sm">
                          Premium
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    {/* Product Name */}
                    <h3 className="text-2xl font-black text-foreground mb-3">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-3 py-1 emerald-glass text-foreground rounded-full text-sm font-medium border border-emerald-200/30 dark:border-emerald-400/30"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More & Order</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
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
              <span>Quality Promise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              Our Commitment to Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {qualityPromises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${promise.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <promise.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                    {promise.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {promise.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
                <Sparkles className="h-4 w-4" />
                <span>Usage Guide</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                How to Use Our Herbs
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple preparation methods to help you get the most from your
                herbal wellness journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Herbal Teas & Infusions
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  {[
                    "Use 1-2 teaspoons of dried herbs per cup of water",
                    "Steep in hot water for 5-10 minutes",
                    "Strain and enjoy warm or let cool for iced tea",
                    "Add honey or lemon to taste if desired",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Herbal Blends & Custom Mixes
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  {[
                    "Combine different herbs for enhanced benefits",
                    "Start with equal parts and adjust to taste",
                    "Store blends in airtight containers",
                    "Consult with us for personalized recommendations",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="emerald-glass rounded-3xl p-8 md:p-12 border-2 border-emerald-200/30 dark:border-emerald-400/30 text-center"
            >
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Need Guidance?
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;re here to help you create the perfect herbal routine for
                your wellness goals. Book a consultation or reach out with any
                questions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Personal Guidance
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
