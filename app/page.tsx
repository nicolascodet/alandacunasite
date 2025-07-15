'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Brain, Shield, Globe, Layers, Sparkles, Cpu, Rocket } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            FedFlo.ai
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['Solutions', 'Why FedFlo', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              🚀 Purpose-Built for GovCon • 10-200 Employees • $500K-$50M Contracts
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Automation Platform for{' '}
            <span className="gradient-text">Growing Government Contractors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            Stop drowning in manual processes. Start scaling your business.
            <br />
            <span className="text-lg text-gray-500 mt-2 block">Built specifically for government contractors with 10-200 employees who are ready to compete at the next level.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg btn-hover-effect flex items-center justify-center gap-2 shadow-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
            >
              See How It Works
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-center"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">10-200</span>
              <span className="text-sm text-gray-600">Employee Sweet Spot</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">$500K-$50M</span>
              <span className="text-sm text-gray-600">Contract Range</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">Built for</span>
              <span className="text-sm text-gray-600">Growing GovCon Firms</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">Purpose-Built</span>
              <span className="text-sm text-gray-600">Not Adapted Software</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

const FoundersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-gray-200 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                AA
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aland Acuna</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mr-2">GovCon Domain Expert</span>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Business Strategy</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deep government contracting expertise with years of experience understanding the unique challenges facing small-to-mid-sized contractors. Knows firsthand the operational bottlenecks that prevent firms from scaling.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                • Government contracting specialist<br/>
                • Small business growth strategist<br/>
                • Operational efficiency expert
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                NC
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nicolas Codet</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mr-2">Technical Automation Lead</span>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">AI Architecture</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Technical expertise in building custom automation solutions. Specializes in creating AI-powered workflows that integrate seamlessly with existing systems while maintaining the security and compliance requirements essential to government contracting.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                • Custom automation development<br/>
                • AI integration specialist<br/>
                • Secure system architecture
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center border-t border-gray-200 pt-8"
          >
            <p className="text-xl text-gray-600 italic mb-4">
              Two experts. One mission — help small-to-mid-sized government contractors compete at the next level through intelligent automation.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Security First
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Government Ready
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Enterprise Scale
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Email Overload Solution",
      description: "Stop drowning in email. Our AI automatically categorizes, prioritizes, and surfaces critical contract communications so you can focus on high-value work.",
      example: "Transform chaos into clarity - know what needs attention now vs. later.",
      features: ["Smart email categorization", "Contract deadline alerts", "Action item extraction", "Priority inbox management"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Proposal Process Automation",
      description: "Stop losing bids to manual processes. Streamline your proposal development so you can respond to more opportunities with higher quality submissions.",
      example: "Compete for prime contractor work without prime contractor resources.",
      features: ["Automated workflows", "Team coordination", "Compliance tracking", "Response quality improvement"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Contract Management Clarity",
      description: "Eliminate contract chaos. Know exactly where you stand on every contract, what's due when, and what opportunities exist for growth.",
      example: "Professional contract management without a dedicated contracts team.",
      features: ["Centralized contract tracking", "Automated compliance alerts", "Performance monitoring", "Growth opportunity identification"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Business Intelligence Dashboard",
      description: "Make strategic decisions with confidence. Get clear visibility into your pipeline, performance, and growth opportunities without expensive BI tools.",
      example: "Enterprise-level insights sized for your business reality.",
      features: ["Pipeline analytics", "Win/loss analysis", "Resource optimization", "Strategic forecasting"],
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built for Your Reality, Not Enterprise Fantasy</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We understand you're too big for spreadsheets but too small for enterprise software. Our automation platform is designed specifically for government contractors ready to scale beyond manual processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-500 italic border-l-4 border-gray-200 pl-4">
                Example: {service.example}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


const MethodologySection = () => {
  return (
    <section id="why-fedflo" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 italic leading-relaxed"
          >
            "You're caught between being too big for spreadsheets and too small for enterprise software. We built FedFlo.ai to fill that gap."
          </motion.blockquote>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            We know you don't have dedicated IT resources or millions for enterprise systems. Our automation platform is built specifically for government contractors with 10-200 employees who need professional systems without the complexity.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Built for Small-Mid GovCon</h3>
            <p className="text-gray-300">
              Designed specifically for firms managing $500K-$50M in contracts. We understand your unique position between small business and prime contractor status.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Automation That Works</h3>
            <p className="text-gray-300">
              Not generic business software adapted for GovCon - purpose-built automation for the unique compliance, documentation, and operational requirements of this industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Growth-Focused Design</h3>
            <p className="text-gray-300">
              Eliminate the operational bottlenecks that prevent you from competing for larger contracts and growing your business to the next level.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SocialProof = () => {
  const certifications = ['FedRAMP Ready', 'CMMC Level 3', 'ISO 27001', 'SOC2 Type II', 'NIST 800-171', 'GSA Schedule', 'SBA 8(a) Partners', 'IL4/IL5 Capable']

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Built with Government Contracting Standards in Mind</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:opacity-100 transition-opacity duration-300"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FinalCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-16 text-center border border-gray-200 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Stop Playing Catch-Up?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            You know manual processes are holding you back. You've seen how the big players operate. Now it's time to level the playing field with automation built specifically for firms like yours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-10 py-5 rounded-xl font-semibold text-xl btn-hover-effect shadow-lg pulse-glow"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border border-gray-200 text-gray-700 px-10 py-5 rounded-xl font-semibold text-xl"
            >
              See Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FoundersSection />
      <ServicesSection />
      <MethodologySection />
      <SocialProof />
      <FinalCTA />
    </main>
  )
} 