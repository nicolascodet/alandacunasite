'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Users, Target, Sparkles, Brain, Cpu, Shield, Rocket, Code, Database, Cloud, ChevronRight, Star, Award, TrendingUp, Lock, Globe, Layers } from 'lucide-react'

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
            Acuna Consulting
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['Solutions', 'Agile DNA', 'AI Tools', 'Technology', 'About', 'Contact'].map((item, index) => (
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
              🚀 Enterprise AI • Government Ready • Security First
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Modern AI for{' '}
            <span className="gradient-text">Real-World Operations</span>,{' '}
            <br />Not Speculation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            Rooted in Agile transformation. Supercharged with deployable AI. 
            <br />
            <span className="text-lg text-gray-500 mt-2 block">Delivering secure, scalable AI solutions for government contractors and enterprise organizations.</span>
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
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
            >
              Preview AI Stack
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
              <span className="text-3xl font-bold text-gray-900">20+</span>
              <span className="text-sm text-gray-600">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">Proven</span>
              <span className="text-sm text-gray-600">AI Deployments</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">Trusted</span>
              <span className="text-sm text-gray-600">by Industry Leaders</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">99.9%</span>
              <span className="text-sm text-gray-600">Security Compliance</span>
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
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mr-2">Certified Scrum Trainer</span>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">DASA DevOps</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enterprise Agile Coach, founder of Agile DNA™, 20+ years of transformation leadership across federal and commercial organizations. Specializes in large-scale Agile implementations and organizational change management.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                • Led 200+ Agile transformations<br/>
                • Former Federal CTO Advisory Board<br/>
                • Published author on Agile methodologies
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Team</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mr-2">Powered by Thunderbird Labs</span>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">AI Specialists</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our AI development team is powered by <strong>Thunderbird Labs</strong>, a leader in AI custom software solutions. Experts in machine learning, natural language processing, and enterprise AI deployment.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                • Extensive experience in production AI deployments<br/>
                • FedRAMP & SOC2 compliant solutions<br/>
                • Enterprise-grade AI infrastructure
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
              Two powerhouses. One mission — bring practical, secure, team-ready AI into real organizations.
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
      title: "Agile DNA™ + AI",
      description: "Embed intelligent workflows into your Agile adoption process with AI-powered automation and insights.",
      example: "GPT-powered retros, daily standup recorders, backlog grooming bots.",
      features: ["Automated retrospective analysis", "Sprint velocity prediction", "User story optimization", "Team performance insights"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Agile DNA™ + DevOps",
      description: "Continuous deployment meets continuous intelligence with AI-enhanced DevOps pipelines.",
      example: "Copilot for DevOps pipelines, story-to-code analysis, code quality checkers.",
      features: ["Automated code review", "Deployment risk assessment", "Performance optimization", "Security vulnerability detection"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "GovCon Optimization Stack",
      description: "Specialized AI tools designed for proposal teams, compliance officers, and capture managers in government contracting.",
      example: "RFP Navigator, Past Performance Generator, Clause Extractor.",
      features: ["Automated compliance checking", "Proposal win probability scoring", "Contract risk analysis", "Bid/no-bid decision support"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Bespoke AI tools tailored to your specific business challenges and operational workflows.",
      example: "Workflow copilots, knowledge search, internal LLM apps — all secure, with fast turnaround.",
      features: ["Custom model training", "API integrations", "Real-time analytics", "Scalable architecture"],
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Agile transformation to custom AI development, we provide end-to-end solutions that integrate seamlessly with your existing workflows and security requirements.
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

const TechnologyStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      tools: ["OpenAI GPT-4", "Azure AI Services", "TensorFlow", "PyTorch", "Hugging Face", "LangChain"],
      color: "from-blue-500 to-purple-600"
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      tools: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      color: "from-green-500 to-blue-500"
    },
    {
      category: "Development & Integration",
      icon: <Code className="w-6 h-6" />,
      tools: ["Python", "Node.js", "React", "FastAPI", "GraphQL", "REST APIs"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      tools: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Elasticsearch", "Tableau"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Security & Compliance",
      icon: <Lock className="w-6 h-6" />,
      tools: ["FedRAMP", "SOC2", "NIST Framework", "Zero Trust", "HashiCorp Vault", "OAuth 2.0"],
      color: "from-red-500 to-orange-500"
    },
    {
      category: "DevOps & Monitoring",
      icon: <TrendingUp className="w-6 h-6" />,
      tools: ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "ELK Stack", "DataDog"],
      color: "from-cyan-500 to-blue-500"
    }
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Enterprise-Grade Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built with best-in-class technologies, ensuring security, scalability, and compliance for government and enterprise environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ToolsPreview = () => {
  const tools = [
    { 
      name: "Contract Analyzer", 
      description: "Parse complex agreements instantly with 99% accuracy",
      status: "demo",
      details: "AI-powered contract analysis with risk assessment and compliance checking"
    },
    { 
      name: "Pipeline Ranker", 
      description: "Prioritize opportunities with AI scoring algorithms",
      status: "demo",
      details: "Machine learning models trained on historical win/loss data"
    },
    { 
      name: "Proposal Builder Copilot", 
      description: "AI-assisted proposal development and optimization",
      status: "soon",
      details: "Natural language generation for proposal sections and compliance matrices"
    },
    { 
      name: "Internal Knowledge Search", 
      description: "Find answers across all your documents in seconds",
      status: "demo",
      details: "Vector-based semantic search with context-aware responses"
    },
    { 
      name: "Email Thread Summarizer", 
      description: "Extract key decisions from long email chains",
      status: "soon",
      details: "Advanced NLP for action item extraction and decision tracking"
    },
    { 
      name: "SOP Generator", 
      description: "Create standard procedures from examples automatically",
      status: "soon",
      details: "Process automation with compliance verification and version control"
    },
    {
      name: "Compliance Monitor",
      description: "Real-time compliance tracking and alerts",
      status: "demo",
      details: "Automated regulatory compliance checking with audit trails"
    },
    {
      name: "Risk Assessment Engine",
      description: "AI-powered project and contract risk analysis",
      status: "demo", 
      details: "Predictive analytics for risk identification and mitigation strategies"
    }
  ]

  return (
    <section id="ai-tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Tools Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A comprehensive suite of AI-powered tools designed for government contractors and enterprise organizations. Each tool is built with security, compliance, and scalability in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{tool.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">{tool.details}</p>
              <div className="flex justify-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tool.status === 'demo' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {tool.status === 'demo' ? 'Launch Demo' : 'Coming Soon'}
                </span>
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
    <section id="agile-dna" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
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
            "Agile DNA™ gave organizations the blueprint. This next layer gives them foresight."
          </motion.blockquote>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Our AI tooling integrates with your existing Agile, DevOps, and leadership culture. We don't replace workflows. We enhance them — securely, ethically, and with no extra fluff.
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
            <h3 className="text-xl font-bold mb-4">Agile DNA™ Foundation</h3>
            <p className="text-gray-300">
              Proven Agile transformation methodology with 20+ years of enterprise success across government and commercial sectors.
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
            <h3 className="text-xl font-bold mb-4">AI Integration Layer</h3>
            <p className="text-gray-300">
              Intelligent automation and insights that amplify your team's capabilities without disrupting existing processes.
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
            <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
            <p className="text-gray-300">
              Enterprise-grade security with government compliance standards, ensuring your AI solutions meet the highest requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SocialProof = () => {
  const certifications = ['Scrum Alliance', 'AWS Partner', 'CompTIA', 'DASA', 'LeanKanban', 'FedRAMP Ready', 'SOC2 Type II', 'NIST Cybersecurity']

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
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by Government Agencies and Fortune 500 Companies</h3>
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
            You Don't Need a SaaS. You Need a Thought Partner and a Toolkit.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            Let's scope something lean. Then build what actually works for your organization's unique challenges and security requirements.
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
              Book Discovery Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border border-gray-200 text-gray-700 px-10 py-5 rounded-xl font-semibold text-xl"
            >
              Download Capability Statement
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
      <TechnologyStack />
      <ToolsPreview />
      <MethodologySection />
      <SocialProof />
      <FinalCTA />
    </main>
  )
} 