"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle } from "lucide-react";

const WorkingProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your wellness goals and objectives, health concerns, and current herbal knowledge. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      details: [
        "Comprehensive health assessment",
        "Discussion of wellness goals",
        "Review of current supplements",
        "Lifestyle and dietary analysis",
        "Personalized recommendation plan",
      ],
      bgGradient: "from-emerald-400 to-emerald-600",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "We conduct thorough research on your specific health needs and develop a comprehensive herbal strategy that aligns with your wellness goals.",
      details: [
        "Herb interaction analysis",
        "Custom blend formulation",
        "Dosage optimization",
        "Safety protocol development",
        "Timeline creation",
      ],
      bgGradient: "from-blue-400 to-indigo-600",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We begin implementing your personalized herbal wellness plan with carefully selected products and detailed guidance.",
      details: [
        "Custom product preparation",
        "Usage instruction provision",
        "Initial monitoring setup",
        "Adjustment protocols",
        "Support system activation",
      ],
      bgGradient: "from-purple-400 to-violet-600",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor your progress and optimize your herbal regimen based on your response and changing needs.",
      details: [
        "Regular progress assessments",
        "Formula adjustments",
        "Side effect monitoring",
        "Effectiveness tracking",
        "Continuous optimization",
      ],
      bgGradient: "from-amber-400 to-orange-600",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "We provide detailed reports on your progress and maintain open communication throughout your wellness journey.",
      details: [
        "Progress reporting",
        "Regular check-ins",
        "Educational materials",
        "Adjustment recommendations",
        "Ongoing support",
      ],
      bgGradient: "from-pink-400 to-rose-600",
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
        "We continuously refine and improve your herbal wellness plan based on your evolving needs and the latest herbal research.",
      details: [
        "Plan refinement",
        "Research integration",
        "Long-term planning",
        "Seasonal adjustments",
        "Lifestyle adaptations",
      ],
      bgGradient: "from-teal-400 to-cyan-600",
    },
  ];

  return (
    <section className="py-24 section-bg">
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
            <CheckCircle className="h-4 w-4" />
            <span>Our Working Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Step-by-Step Guide to Achieving Your Wellness Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 6-step process ensures you receive personalized,
            effective herbal wellness solutions.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div
                className={`relative rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                  activeStep === index
                    ? `bg-gradient-to-br ${step.bgGradient} border-transparent shadow-xl text-white`
                    : "glass-card border-emerald-200/30 dark:border-emerald-400/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 shadow-lg hover:shadow-xl text-foreground"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveStep(activeStep === index ? -1 : index)
                  }
                  className="w-full p-8 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-3xl"
                >
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl ${
                        activeStep === index
                          ? "bg-white/20 text-white"
                          : "emerald-glass text-foreground"
                      }`}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p
                        className={`text-lg leading-relaxed ${
                          activeStep === index
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: activeStep === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeStep === index
                        ? "bg-white/20 text-white"
                        : "glass-card text-foreground group-hover:emerald-glass-strong"
                    }`}
                  >
                    <Plus className="h-6 w-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <h4 className="text-lg font-bold text-white mb-4">
                            What&apos;s included:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detail}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: detailIndex * 0.1 }}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                                <span className="text-white/90 font-medium">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
