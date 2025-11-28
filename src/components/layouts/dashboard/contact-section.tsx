"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    contactType: "sayHi", // 'sayHi' or 'getQuote'
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      contactType: type,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            <MessageCircle className="h-4 w-4" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Connect with Us: Let&apos;s Discuss Your Wellness Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your herbal wellness journey? Get in touch with our
            team and let us help you find the perfect natural solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 shadow-xl border border-emerald-200/30 dark:border-emerald-400/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type Radio Buttons */}
              <div className="mb-8">
                <div className="flex space-x-6">
                  <motion.label
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-3 cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                      formData.contactType === "sayHi"
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "glass-card border-emerald-200/30 dark:border-emerald-400/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 text-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactType"
                      value="sayHi"
                      checked={formData.contactType === "sayHi"}
                      onChange={() => handleContactTypeChange("sayHi")}
                      className="hidden"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.contactType === "sayHi"
                          ? "border-white"
                          : "border-emerald-400"
                      }`}
                    >
                      {formData.contactType === "sayHi" && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-semibold">Say Hi</span>
                  </motion.label>

                  <motion.label
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-3 cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                      formData.contactType === "getQuote"
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "glass-card border-emerald-200/30 dark:border-emerald-400/30 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 text-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactType"
                      value="getQuote"
                      checked={formData.contactType === "getQuote"}
                      onChange={() => handleContactTypeChange("getQuote")}
                      className="hidden"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.contactType === "getQuote"
                          ? "border-white"
                          : "border-emerald-400"
                      }`}
                    >
                      {formData.contactType === "getQuote" && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-semibold">Get a Quote</span>
                  </motion.label>
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-4 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 glass-card text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-4 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 glass-card text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 glass-card text-foreground placeholder-muted-foreground resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            {/* Decorative Graphic Area */}
            <div className="glass-card rounded-3xl p-8 shadow-xl border border-emerald-200/30 dark:border-emerald-400/30 mb-8 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-6 w-16 h-16 bg-emerald-500/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-6 left-6 w-12 h-12 bg-amber-500/20 rotate-45"
              />

              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Wellness?
              </h3>
              <p className="text-muted-foreground">
                Join hundreds of satisfied customers who have improved their
                health naturally with our herbal solutions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  Contact us:
                </span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-200" />
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a
                      href="mailto:dyjunini@gmail.com"
                      className="text-emerald-200 hover:text-emerald-100 transition-colors"
                    >
                      dyjunini@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-200" />
                  <div>
                    <div className="font-semibold">Phone:</div>
                    <a
                      href="tel:+254704154839"
                      className="text-emerald-200 hover:text-emerald-100 transition-colors"
                    >
                      +254 704 154 839
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-200" />
                  <div>
                    <div className="font-semibold">Address:</div>
                    <span className="text-emerald-200">Kenya, East Africa</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-500">
                <div className="text-sm text-emerald-200">
                  © 2024 Earth Kissed Herbs. All Rights Reserved.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
