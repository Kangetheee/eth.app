'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Sparkles, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 704 154 839',
      action: 'tel:+254704154839',
      description: 'Call us for immediate assistance',
      bgGradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'dyjunini@gmail.com',
      action: 'mailto:dyjunini@gmail.com',
      description: 'Send us a detailed message',
      bgGradient: 'from-emerald-400 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kenya',
      description: 'East Africa',
      bgGradient: 'from-purple-400 to-violet-500',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'We respond to all inquiries promptly',
      bgGradient: 'from-amber-400 to-orange-500',
    }
  ]

  const services = [
    'Custom Herbal Blends',
    'Wellness Consultations',
    'Natural Remedies & Education',
    'Skincare & Self-Care Formulations',
    'General Inquiry'
  ]

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'We typically process and ship orders within 2-3 business days throughout Kenya.'
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Yes! We offer personalized wellness consultations to help you choose the right herbs for your needs.'
    },
    {
      question: 'Can you create custom blends?',
      answer: 'Absolutely! We specialize in creating custom herbal blends tailored to your specific wellness goals.'
    }
  ]

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
              <MessageCircle className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              We&apos;d Love to <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Have a question, need a recommendation, or want to make an order? 
              Get in touch and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 h-full flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${info.bgGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold mb-2 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-semibold mb-2">
                      {info.content}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground/80">
                    {info.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-xl">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground">
                    Send Us a Message
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all glass-card text-foreground placeholder-muted-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all glass-card text-foreground placeholder-muted-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all glass-card text-foreground placeholder-muted-foreground"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all glass-card text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-emerald-200/30 dark:border-emerald-400/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none glass-card text-foreground placeholder-muted-foreground"
                      placeholder="Tell us about your needs, questions, or how we can help you on your wellness journey..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Additional Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 emerald-glass rounded-xl border border-emerald-200/20 dark:border-emerald-400/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <a 
                        href="tel:+254704154839" 
                        className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        +254 704 154 839
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 emerald-glass rounded-xl border border-emerald-200/20 dark:border-emerald-400/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <a 
                        href="mailto:dyjunini@gmail.com" 
                        className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        dyjunini@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Common Questions
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-sm text-muted-foreground ml-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Times */}
              <div className="glass-card rounded-3xl p-8 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Response Times
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Email inquiries', time: 'Within 24 hours' },
                    { label: 'Phone calls', time: 'Same day' },
                    { label: 'Consultations', time: 'By appointment' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 emerald-glass rounded-lg border border-emerald-200/20 dark:border-emerald-400/20">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have questions about our products, need personalized recommendations, 
                or want to schedule a consultation, we&apos;re here to help.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                {['100% Natural', 'Expert Guidance', 'Fast Response'].map((badge) => (
                  <div key={badge} className="flex items-center space-x-2 glass-card px-4 py-2 rounded-xl border border-emerald-200/30 dark:border-emerald-400/30">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}