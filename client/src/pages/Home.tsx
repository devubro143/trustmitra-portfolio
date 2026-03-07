import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Github, Linkedin, Menu, X, ChevronDown, ExternalLink, MessageCircle, Moon, Sun, Play, Sparkles, Rocket, Lightbulb, Code2, Database, Globe, Wrench } from "lucide-react";
import { Link } from "wouter";
import { buildLogs } from "@/data/buildLogs";

/**
 * Premium Portfolio Homepage - Matching Reference Design
 * Design: Modern, dark-themed with cyan accents, smooth animations, premium feel
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCerts, setFlippedCerts] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState("home");
  const [showCredentials, setShowCredentials] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleCert = (index: number) => {
    setFlippedCerts(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const getYouTubeThumbnail = (url: string) => {
    const match = url.match(/embed\/([^?&]+)/);
    return match?.[1] ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
  };

  const latestBuildLogs = [...buildLogs].sort((a, b) => b.day - a.day).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl animate-blob animation-delay-2000 dark:bg-blue-500/10" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-blob animation-delay-4000 dark:bg-purple-500/5" />
      </div>

      {/* Navigation */}
<nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-700/60 dark:bg-slate-900/80">
  <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    
    <button
      onClick={() => scrollToSection("home")}
      className="flex items-center gap-2 group"
    >
      <span className="font-display bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-2xl text-transparent transition-opacity group-hover:opacity-80">
        Devendra
      </span>
      <span className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-700 sm:inline dark:text-cyan-300">
        Founder
      </span>
    </button>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "journey", "skills", "projects", "build in public", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "build in public" ? "build-in-public" : item)}
                className={`text-sm font-medium transition-colors capitalize ${
                  activeSection === (item === "build in public" ? "build-in-public" : item) ? "text-cyan-600 dark:text-cyan-300" : "text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="hidden items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 md:inline-flex dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:text-cyan-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="space-y-3 border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden dark:border-slate-700 dark:bg-slate-800/95">
            {["home", "about", "journey", "skills", "projects", "build in public", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "build in public" ? "build-in-public" : item)}
                className="block w-full py-2 text-left text-sm font-medium capitalize text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:text-cyan-300"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              Switch to {theme === "dark" ? "light" : "dark"}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 dark:opacity-100">
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl animate-blob" />
        </div>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <p className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Welcome to my portfolio</p>
                <h1 className="font-display mb-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Devendra Gupta</span>
                </h1>
                <p className="mb-4 max-w-xl text-lg font-medium text-slate-700 dark:text-slate-300">
                  Startup Builder | Founder of TrustMitra | Product & Growth Execution
                </p>
                <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
                  I build and execute tech-driven startup ideas that solve real-world problems.
                </p>
                <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
                  My journey includes building a marketplace MVP (TrustMitra) from concept to execution, gaining invaluable experience within the government-backed startup ecosystem, and focusing on developing robust product systems for scalable execution.
                </p>
                <p className="max-w-2xl leading-relaxed font-semibold text-slate-800 dark:text-slate-200">
                  Currently building a digital trust layer for India’s gig workforce.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://github.com/devubro143" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5 hover:from-cyan-600 hover:to-blue-700">
                    <Github size={18} /> GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/devendra-gupta-a0967539a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
                    <Linkedin size={18} /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="mt-8 flex animate-float justify-center md:mt-0">
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/60 to-blue-600/50 blur-2xl opacity-40 transition-opacity group-hover:opacity-60" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/myprofessionalimage_29789670.png"
                  alt="Devendra Gupta"
                  className="relative h-96 w-80 rounded-3xl border border-white/20 object-cover shadow-2xl shadow-cyan-900/20 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30 border-y border-slate-700/50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              My journey began as a BCA (Computer Applications) student, where I quickly became fascinated by the intersection of coding and product systems. This led me to dive deep into the dynamic world of startups.
            </p>
            <p>
              I gained invaluable exposure within the government-backed startup ecosystem, including hands-on experience at Utsavy, a Rajasthan Government-registered wedding tech startup. This experience solidified my understanding of digital strategy, content creation, and HR operations within a fast-paced startup environment.
            </p>
            <p>
              Today, my primary focus is building TrustMitra, a venture aimed at creating a digital trust layer for India's gig workforce. I am dedicated to transforming innovative ideas into tangible products that address real-world challenges.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "🚀", title: "Innovation", desc: "Cutting-edge tech adoption" },
              { icon: "🤝", title: "Collaboration", desc: "Team-first mindset" },
              { icon: "🧠", title: "Problem Solving", desc: "Analytical approach" },
              { icon: "✨", title: "Creativity", desc: "Unique solutions" }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-colors">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">My Journey</h2>
          <div className="space-y-8">
            {[
              {
  year: "Jan 2026 – Present",
  title: "Founder",
  company: "TrustMitra",
  desc: "Conceptualized and architected a commission-based gig marketplace focused on building digital trust for India’s informal workforce.\n\nBuilt MVP with OTP-based job verification and seamless UPI payments.\n\nCurrently executing pilot rollout strategy and scaling core product systems."
},


              {
  year: "March 2025 – Present",
  title: "Head of Social Media & HR Strategy",
  company: "Utsavy (Government of Rajasthan backed | iStart | Favcy Venture Builders)",
  desc: "Operated within a government-backed funded startup ecosystem, contributing to strategic growth initiatives.\n\nLed digital positioning, brand narrative development, and cross-functional execution across marketing and HR systems."
},
              

              {
                year: "2024 – 2027",
                title: "BCA in Artificial Intelligence & Data Science",
                company: "Poornima University, Jaipur",
                desc: "Building strong foundations in AI systems, data-driven decision making, and scalable software architecture while applying concepts to real-world product execution."
        }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 last:pb-0 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900" />
                <p className="text-sm font-medium text-cyan-400 mb-1">{item.year}</p>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{item.company}</p>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30 border-y border-slate-700/50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Core Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Startup Execution", icon: Rocket },
                  { name: "Product Strategy", icon: Lightbulb },
                  { name: "Marketplace Model Design", icon: Sparkles },
                  { name: "MVP Development", icon: Code2 },
                  { name: "Growth Systems Thinking", icon: Wrench }
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-sm hover:border-cyan-500 transition-colors"
                  >
                    <skill.icon size={14} className="text-cyan-200" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Stack</h3>
<div className="flex flex-wrap gap-3">
  {[
    "Java",
    "C & C++ (DSA Practice)",
    "Python",
    "MySQL",
    "HTML & CSS",
    "JavaScript",
    "React (Learning & Building)",
    "Node.js (Exploring Backend)"
  ].map((skill, idx) => (
    <span
      key={idx}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-medium text-sm hover:border-purple-500 transition-colors"
    >
      {idx < 3 ? <Code2 size={14} className="text-purple-200" /> : idx < 6 ? <Database size={14} className="text-purple-200" /> : <Globe size={14} className="text-purple-200" />}
      {skill}
    </span>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Credentials Section */}
<section className="py-16 bg-slate-900/40 border-y border-slate-700/50">
  <div className="container max-w-4xl mx-auto px-4">
    
    <h2 className="text-2xl font-semibold mb-4">
      Learning & Credentials
    </h2>

    <p className="text-slate-400 mb-4">
      Continuous learner with 15+ certifications across AI, Programming, and Startup Ecosystems.
    </p>

    <button
      onClick={() => setShowCredentials(!showCredentials)}
      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
    >
      {showCredentials ? "Hide Detailed Credentials ↑" : "View Detailed Credentials ↓"}
    </button>

    {showCredentials && (
      <div className="mt-8 grid md:grid-cols-2 gap-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-cyan-400">
            AI & Data
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>ISRO (IIRS) – Geodata Processing & Machine Learning</li>
            <li>NPTEL – IIT Kanpur – Cloud, IoT & Edge ML</li>
            <li>AI Fundamentals – Data Science Basics</li>
            <li>Machine Learning & Python Training</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-purple-400">
            Programming & DSA
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>Java Programming – Core & OOP</li>
            <li>C & C++ – Data Structures & Algorithms</li>
            <li>Python Development</li>
            <li>MySQL Essentials</li>
            <li>Web Development – HTML, CSS, JavaScript</li>
          </ul>
        </div>

      </div>
    )}
  </div>
</section>

      {/* Projects Section - Enhanced with Images */}
      <section id="projects" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          
          {/* Main Featured Projects with Images */}
          <div className="space-y-16">
            {/* TrustMitra */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-all">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/trustmitra-project-ihp7RzdQTX3nkVKfQKRWsZ.webp"
                      alt="TrustMitra Dashboard"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div>
                    <p className="text-cyan-400 font-medium text-sm mb-2">Gig Worker Marketplace</p>
                    <h3 className="text-2xl font-bold mb-3">TrustMitra - Worker Marketplace MVP</h3>
                      <p className="font-semibold text-slate-300 mb-2">Problem:</p>
                      <p className="text-slate-400 leading-relaxed mb-4">Millions of informal gig workers lack verified digital work identity and payment trust.</p>
                      <p className="font-semibold text-slate-300 mb-2">Solution:</p>
                      <p className="text-slate-400 leading-relaxed mb-4">TrustMitra is a commission-based marketplace with OTP job start, UPI payments, and rating system.</p>
                      <p className="font-semibold text-slate-300 mb-2">My Role:</p>
                      <p className="text-slate-400 leading-relaxed mb-4">Founder & Product Architect — Defined business model, built MVP, designed rollout roadmap.</p>
                      <p className="font-semibold text-slate-300 mb-2">Vision:</p>
                      <p className="text-slate-400 leading-relaxed mb-4">Building India’s trusted digital infrastructure for gig workers.</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Tech Stack:</span> React, Node.js, MongoDB, UPI Integration</p>
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Key Features:</span> Worker profiles, Job listings, OTP verification, UPI payments, Rating system</p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all">
                      <ExternalLink size={16} /> View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Old Age Care */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-all">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/oldage-care-project-jeN9vL4dNouxJfnhmjtGU3.webp"
                      alt="Old Age Care Platform"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="order-2 space-y-4">
                  <div>
                    <p className="text-cyan-400 font-medium text-sm mb-2">Healthcare Platform</p>
                    <h3 className="text-2xl font-bold mb-3">Old Age Care Web Platform</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Responsive web application for elderly care booking with accessibility focus and clean UI design. Features appointment scheduling, caregiver profiles, and service packages tailored for elderly users.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Tech Stack:</span> HTML5, CSS3, JavaScript, Responsive Design</p>
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Key Features:</span> Appointment booking, Caregiver profiles, Service packages, Testimonials</p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all">
                      <ExternalLink size={16} /> View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sketch Generator */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-all">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/sketch-generator-project-BYw4puz6NegC9gqe8oCFRT.webp"
                      alt="Sketch Generator"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div>
                    <p className="text-cyan-400 font-medium text-sm mb-2">Computer Vision</p>
                    <h3 className="text-2xl font-bold mb-3">Live Image to Pencil Sketch Generator</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Computer vision application that converts live/stored images into artistic pencil sketches using OpenCV and Python. Features real-time processing, comparison gallery, and multiple image format support.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Tech Stack:</span> Python, OpenCV, Tkinter, Image Processing</p>
                    <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Key Features:</span> Live video processing, Edge detection, Gaussian blur, Comparison gallery</p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href="https://github.com/devubro143" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all">
                      <ExternalLink size={16} /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-800/30 border-y border-slate-700/50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Ecosystem & Learning Exposure</h2>
          <p className="text-slate-400 mb-8 text-center">Exposure across government-backed startup ecosystem, ISRO (IIRS), and advanced technology programs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { front: "🛰️ ISRO (IIRS)", back: "Geodata Processing using Python & ML" },
              { front: "☁️ NPTEL – IIT Kanpur", back: "Foundation of Cloud IoT Edge ML" },
              { front: "😊 NPTEL", back: "Science of Happiness & Wellbeing" }
            ].map((cert, idx) => (
              <div
                key={idx}
                onClick={() => toggleCert(idx)}
                className="h-48 cursor-pointer perspective"
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 transform-gpu"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCerts.includes(idx) ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* Front */}
                  <div
                    className={`absolute w-full h-full p-6 flex items-center justify-center text-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl hover:border-cyan-500 transition-colors ${
                      !flippedCerts.includes(idx) ? "visible" : "hidden"
                    }`}
                  >
                    <p className="font-semibold">{cert.front}</p>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute w-full h-full p-6 flex items-center justify-center text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl ${
                      flippedCerts.includes(idx) ? "visible" : "hidden"
                    }`}
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <p className="text-slate-300">{cert.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Build Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Why I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold mb-2">Real-World Problem Focus</h3>
              <p className="text-sm text-slate-400">I focus on solving tangible real-world trust and marketplace problems.</p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold mb-2">Execution Over Ideas</h3>
              <p className="text-sm text-slate-400">I believe disciplined execution matters more than ideas alone.</p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold mb-2">Product + Growth Hybrid Thinking</h3>
              <p className="text-sm text-slate-400">I combine product architecture with positioning and growth systems.</p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="font-semibold mb-2">Long-Term Impact Vision</h3>
              <p className="text-sm text-slate-400">I aim to build scalable digital infrastructure that creates systemic impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Building */}
      <section className="pb-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/40 p-6 md:p-7 shadow-[0_0_0_1px_rgba(56,189,248,0.06)]">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Currently Building</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "TrustMitra MVP",
                "Worker identity system",
                "Build in Public documentation"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Build in Public Section */}
      <section id="build-in-public" className="py-20 border-y border-slate-700/50 bg-slate-900/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-2">Build in Public</h2>
              <p className="text-slate-300 max-w-2xl">
                Daily founder notes from building TrustMitra in public — what I shipped, what I learned, and how the journey evolves.
              </p>
            </div>
            <Link href="/build">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                View All Logs
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestBuildLogs.map((log) => (
              <article
                key={log.day}
                className="group rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_0_0_1px_rgba(56,189,248,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_18px_40px_-22px_rgba(56,189,248,0.65)]"
              >
                <p className="text-sm font-semibold text-cyan-300 mb-2">Day {log.day}</p>
                <h3 className="text-xl font-bold leading-tight mb-2">{log.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{log.date}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{log.summary}</p>

                {getYouTubeThumbnail(log.youtubeVideo) && (
                  <Link href={`/build#day-${log.day}`}>
                    <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/60 mb-5 cursor-pointer transition-all duration-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.18)]">
                      <img
                        src={getYouTubeThumbnail(log.youtubeVideo)}
                        alt={`Day ${log.day} vlog thumbnail`}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/35 transition-colors duration-300 group-hover:bg-slate-950/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/50 bg-slate-900/75 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.35)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Play size={22} className="ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                <Link href={`/build#day-${log.day}`}>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-200 transition-colors hover:bg-slate-800 hover:text-white">
                    Read Full Log
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Statement */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-slate-900/40 px-6 py-10 text-center shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          <p className="text-2xl font-semibold leading-snug text-slate-100 md:text-3xl md:leading-tight [text-shadow:0_0_18px_rgba(34,211,238,0.25)]">
            "I am not just building products. I am building systems that scale trust."
          </p>
        </div>
      </div>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
  <div className="container max-w-2xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
    <p className="text-lg text-slate-300 mb-12">
      Open to meaningful startup collaborations, product roles, and ecosystem partnerships.
    </p>

    <div className="flex justify-center gap-6 mb-12">
      <a
        href="https://github.com/devubro143"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <Github size={32} />
      </a>

      <a
        href="https://linkedin.com/in/devendra-gupta-"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <Linkedin size={32} />
      </a>

      <a
        href="https://wa.me/919376813483?text=Hi%20Devendra%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20explore%20a%20startup%20collaboration%20or%20product%20opportunity."
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <MessageCircle size={32} />
      </a>
    </div>

    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
      <p className="text-slate-300 mb-6">
        If you're building in marketplaces, fintech, or digital infrastructure — let's connect and explore collaboration.
      </p>

      <a
        href="https://wa.me/919376813483?text=Hi%20Devendra%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20explore%20a%20startup%20collaboration%20or%20product%20opportunity."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 gap-2 px-6 py-6 text-base font-semibold shadow-[0_12px_30px_-14px_rgba(34,211,238,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-14px_rgba(34,211,238,0.95)]">
          <MessageCircle size={18} /> Chat on WhatsApp
        </Button>
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2026 Devendra Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
