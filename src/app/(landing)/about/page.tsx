'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Award, Users, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Purity',
      description: 'We source clean, natural ingredients without fillers or artificial additives.',
      bgGradient: 'from-red-400 to-pink-500',
    },
    {
      icon: Award,
      title: 'Knowledge',
      description: 'Every product is backed by herbal wisdom and careful formulation.',
      bgGradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Sparkles,
      title: 'Intention',
      description: 'We craft in small batches to maintain quality, potency, and care.',
      bgGradient: 'from-emerald-400 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We are dedicated to educating, empowering, and supporting your wellness journey.',
      bgGradient: 'from-purple-400 to-violet-500',
    },
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
              <Heart className="h-4 w-4" />
              <span>Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              Rooted in Nature. <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
                Guided by Tradition.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Earth Kissed Herbs was created from a deep belief: that nature carries 
              everything we need to heal, thrive, and reconnect with ourselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop" 
                  alt="Herbal wellness mission" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="h-6 w-6 text-white" />
                      <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-white/90">
                      To make herbal wellness accessible, trustworthy, and beautifully simple
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We exist to make herbal wellness accessible, trustworthy, and beautifully 
                simple. Our approach is grounded in the belief that every leaf, root, and 
                flower we use holds a purpose — and we honour that purpose in every blend we create.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our carefully sourced ingredients to our small-batch crafting process, 
                every step is taken with intention and care. We believe in the power of 
                nature to heal, restore, and nurture both body and spirit.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {['Sustainably Sourced', 'Ethically Prepared', 'Lovingly Crafted'].map((badge) => (
                  <div key={badge} className="flex items-center space-x-2 glass-card px-4 py-2 rounded-xl border border-emerald-200/30 dark:border-emerald-400/30">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
              <Users className="h-4 w-4" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 md:p-12 border-2 border-emerald-200/30 dark:border-emerald-400/30 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto lg:mx-0 max-w-[300px]">
                    <img 
                      src="nini.jpeg" 
                      alt="Judy Nini - Founder" 
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                      Judy Nini
                    </h3>
                    <p className="text-muted-foreground font-semibold text-lg">
                      Founder & Lead Herbalist
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Earth Kissed Herbs was founded by Judy Nini, a passionate herbal enthusiast 
                    with a lifelong love for plants and natural healing. Judy blends traditional 
                    herbal knowledge with a deep commitment to holistic wellbeing.
                  </p>
                  
                  <div className="emerald-glass rounded-2xl p-6 border border-emerald-200/20 dark:border-emerald-400/20">
                    <h4 className="font-bold text-foreground mb-3">Her Vision</h4>
                    <p className="text-muted-foreground italic">
                      &quot;To reconnect people to nature&apos;s medicine and inspire a lifestyle 
                      rooted in balance, care, and gentle healing.&quot;
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Every product and service at Earth Kissed Herbs reflects Judy&apos;s heart, 
                    curiosity, and dedication to helping others feel supported by the earth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 section-bg-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 emerald-glass text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-2xl font-bold text-sm mb-6 border border-emerald-200/30 dark:border-emerald-400/30">
              <Sparkles className="h-4 w-4" />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              What Guides Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach is grounded in four core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                    className={`w-16 h-16 bg-gradient-to-br ${value.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {value.description}
                  </p>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-br ${value.bgGradient} rounded-full mt-6 mx-auto w-12 group-hover:w-20 transition-all duration-500`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}