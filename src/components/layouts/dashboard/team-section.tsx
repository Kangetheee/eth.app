"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Linkedin, Star, Award } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Judy Nini",
      role: "Founder & Lead Herbalist",
      experience:
        "10+ years of experience in herbal medicine. Expertise in traditional remedies, plant medicine, and holistic wellness strategy",
      image: "🌿",
      bgGradient: "from-emerald-400 to-emerald-500",
      borderColor: "border-emerald-200/30 dark:border-emerald-400/30",
    },
    {
      name: "Sarah Kamau",
      role: "Wellness Consultant",
      experience:
        "7+ years of experience in nutritional therapy and wellness coaching. Strong background in personalized health plans and client care",
      image: "🍃",
      bgGradient: "from-blue-400 to-indigo-500",
      borderColor: "border-blue-200/30 dark:border-blue-400/30",
    },
    {
      name: "David Mwangi",
      role: "Product Formulation Specialist",
      experience:
        "5+ years of experience in herbal product development. Proficient in quality control, extraction methods, and product optimization",
      image: "🌱",
      bgGradient: "from-purple-400 to-violet-500",
      borderColor: "border-purple-200/30 dark:border-purple-400/30",
    },
    {
      name: "Grace Wanjiku",
      role: "Customer Experience Manager",
      experience:
        "8+ years of experience in customer relations and wellness education. Skilled in client consultation and herbal guidance",
      image: "🌸",
      bgGradient: "from-pink-400 to-rose-500",
      borderColor: "border-pink-200/30 dark:border-pink-400/30",
    },
    {
      name: "James Ochieng",
      role: "Quality Assurance Lead",
      experience:
        "6+ years of experience in herbal quality control. Expert in testing protocols, safety standards, and compliance management",
      image: "🍀",
      bgGradient: "from-amber-400 to-orange-500",
      borderColor: "border-amber-200/30 dark:border-amber-400/30",
    },
    {
      name: "Mary Nyong",
      role: "Research & Education Director",
      experience:
        "9+ years of experience in herbal research and education. Specializes in traditional knowledge documentation and wellness training",
      image: "🌺",
      bgGradient: "from-teal-400 to-cyan-500",
      borderColor: "border-teal-200/30 dark:border-teal-400/30",
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
            <Users className="h-4 w-4" />
            <span>Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Meet the skilled and experienced team behind our successful herbal
            wellness strategies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate team combines traditional herbal knowledge with
            modern wellness science to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative glass-card rounded-3xl border-2 ${member.borderColor} p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500`}
              >
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${member.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-4xl`}
                  >
                    {member.image}
                  </motion.div>

                  {/* LinkedIn Icon */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-6 right-6 w-10 h-10 emerald-glass text-foreground rounded-xl flex items-center justify-center hover:emerald-glass-strong transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold">
                    {member.role}
                  </p>
                </div>

                {/* Experience Description */}
                <div className="emerald-glass rounded-2xl p-4 mb-6 border border-emerald-200/20 dark:border-emerald-400/20">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {member.experience}
                  </p>
                </div>

                {/* Stats or Achievements */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-muted-foreground">
                      Expert
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-muted-foreground">
                      Certified
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* See All Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See all team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
