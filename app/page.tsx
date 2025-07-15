'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="FedFlo.ai" 
                width={180} 
                height={60} 
                className="h-14 md:h-16 w-auto"
                priority
              />
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Expertise
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="bg-blue-900 text-white px-6 py-2.5 rounded hover:bg-blue-800 transition-colors font-medium">
              Contact Us
            </a>
          </nav>

          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col py-4">
              <a href="#services" className="px-6 py-3 text-gray-700 hover:bg-gray-50">Services</a>
              <a href="#expertise" className="px-6 py-3 text-gray-700 hover:bg-gray-50">Expertise</a>
              <a href="#about" className="px-6 py-3 text-gray-700 hover:bg-gray-50">About</a>
              <a href="#contact" className="mx-6 my-3 bg-blue-900 text-white px-6 py-2.5 rounded text-center">Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 to-white" style={{backgroundImage: 'url("/hero-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            AI-Powered Operations for Federal Contractors
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            We automate the repetitive tasks that consume 70% of your day. 
            Custom solutions built specifically for NAICS 541 firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-900 text-white px-8 py-4 rounded hover:bg-blue-800 transition-colors font-semibold text-lg flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded hover:bg-blue-50 transition-colors font-semibold text-lg text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
    </section>
  )
}

const StatsSection = () => {
  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">10-200</div>
            <div className="text-gray-600 font-medium">Employee Count</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">$500K-$50M</div>
            <div className="text-gray-600 font-medium">Annual Contract Value</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">70%</div>
            <div className="text-gray-600 font-medium">Time Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">NIST</div>
            <div className="text-gray-600 font-medium">Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      title: "Email Intelligence System",
      description: "Process 1000+ daily emails in minutes. Our ML algorithms extract contract mods, cure notices, and action items automatically.",
      features: [
        "Auto-detection of contract modifications",
        "CLIN-level requirement tracking",
        "Automated CDRL deadline alerts",
        "Subcontractor communication routing"
      ]
    },
    {
      title: "Proposal Development Engine",
      description: "Cut proposal time by 60%. Generate compliant responses using your past performance data and technical approach library.",
      features: [
        "Automated L/M/H compliance matrices",
        "Section L/M requirement parsing",
        "Past performance volume generation",
        "Red Team finding integration"
      ]
    },
    {
      title: "Contract Performance Monitor",
      description: "Real-time visibility into every task order, IDIQ, and subcontract. Predictive analytics identify at-risk deliverables before they impact CPARS.",
      features: [
        "Multi-vehicle contract tracking",
        "PoP and option year management",
        "Burn rate analysis by CLIN",
        "Automated monthly status reports"
      ]
    },
    {
      title: "Capture & BD Intelligence",
      description: "Track opportunities from SAM.gov to award. Analyze win themes, competitor patterns, and pricing strategies across your pipeline.",
      features: [
        "Automated SAM.gov opportunity matching",
        "Competitor bid pattern analysis",
        "Price-to-win modeling by NAICS",
        "Capture maturity scoring"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Purpose-Built Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Purpose-built automation for federal contractors. We understand FAR compliance, 
            CPARS ratings, and the complexities of contract vehicles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Deep Domain Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're not another SaaS company. FedFlo.ai combines deep federal market knowledge 
              with advanced automation to solve the specific challenges you face every day.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team combines decades of federal contracting experience with cutting-edge 
              AI expertise to deliver solutions that actually work in your environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Federal Market Expertise</h4>
                  <p className="text-gray-600">FAR/DFARS fluency, GSA schedules, SEWP/CIO-SP3 vehicles, socioeconomic programs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Automation</h4>
                  <p className="text-gray-600">NLP for contract analysis, ML-powered forecasting, API integrations with GovWin/SAM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Security Cleared Development</h4>
                  <p className="text-gray-600">NIST 800-171 compliant, FedRAMP-ready architecture, ITAR/EAR considerations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-6">Why FedFlo.ai?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Built for Your Scale</h4>
                <p className="text-blue-100">
                  Designed specifically for contractors with 10-200 employees. 
                  Not scaled-down enterprise software.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Real ROI, Fast</h4>
                <p className="text-blue-100">
                  Our solutions pay for themselves through efficiency gains, 
                  typically within the first contract cycle.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">No IT Army Required</h4>
                <p className="text-blue-100">
                  Fully managed solutions that don't require dedicated technical staff. 
                  We handle the complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
            Bridging the Gap
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              FedFlo.ai was founded to solve a specific problem: small to mid-sized government 
              contractors are caught in an operational gap. They've outgrown manual processes 
              but can't justify enterprise software designed for billion-dollar primes.
            </p>
            <p className="mb-6">
              We saw talented firms losing contracts not because they lacked capability, but 
              because they were drowning in administrative overhead. Email overload preventing 
              focus on strategy. Manual proposal processes limiting bid capacity. Contract 
              management chaos affecting performance.
            </p>
            <p className="mb-6">
              Our mission is simple: give these firms the operational efficiency they need to 
              compete and grow. We combine deep government contracting expertise with custom 
              AI development to create solutions that work in the real world of federal contracting.
            </p>
            <p>
              Every FedFlo.ai solution is purpose-built for the unique requirements, compliance 
              needs, and growth challenges of government contractors. Because generic business 
              software doesn't understand your world. We do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how FedFlo.ai can help your firm compete more effectively 
            and grow beyond current limitations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:nick@fedflo.ai" className="bg-white text-blue-900 px-8 py-4 rounded hover:bg-gray-100 transition-colors font-semibold text-lg">
              Schedule a Consultation
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded hover:bg-blue-800 transition-colors font-semibold text-lg">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="FedFlo.ai" 
                width={120} 
                height={40} 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm">
              Intelligent automation solutions for government contractors.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Email Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Proposal Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Contract Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Intelligence</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Ready to streamline your operations?<br />
              <a href="mailto:nick@fedflo.ai" className="hover:text-white transition-colors">nick@fedflo.ai</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 FedFlo.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}