import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Menu, X, ChevronDown, ExternalLink, MessageCircle } from "lucide-react";

/**
 * Premium Portfolio Homepage - Matching Reference Design
 * Design: Modern, dark-themed with cyan accents, smooth animations, premium feel
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCerts, setFlippedCerts] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DG
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "journey", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors capitalize ${
                  activeSection === item ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 border-t border-slate-700 py-4 px-4 space-y-3">
            {["home", "about", "journey", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors capitalize py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <p className="text-cyan-400 font-medium mb-2 text-sm">Welcome to my portfolio</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Devendra Gupta</span>
                </h1>
                <p className="text-xl text-slate-300 mb-4">
                  Full Stack Developer | HR & Social Media Manager | Startup Enthusiast
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Computer Applications undergraduate with hands-on experience in web development, SaaS marketing, and startup execution. Passionate about building tech-driven products that solve real-world problems.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/devubro143" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 gap-2 text-white border-0">
                    <Github size={18} /> GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com/in/devendra-gupta-" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 gap-2">
                    <Linkedin size={18} /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="animate-slide-up hidden md:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/myprofessionalimage_29789670.png"
                  alt="Devendra Gupta"
                  className="relative w-80 h-96 rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
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
              I'm a passionate developer crafting digital experiences with innovation and precision. With 1.5+ years of startup and project experience, I've worked on everything from MVP development to digital marketing strategy.
            </p>
            <p>
              Currently, I'm the Head of Social Media & Marketing at Utsavy, a Rajasthan Government-registered wedding tech startup, where I manage digital strategy, content creation, and HR operations.
            </p>
            <p>
              When I'm not coding, you can find me exploring cutting-edge technologies, contributing to open-source communities, and mentoring the next generation of developers.
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
                year: "2025",
                title: "Head of Social Media & Marketing",
                company: "Utsavy (Wedding Tech Startup)",
                desc: "Built digital marketing strategy, created high-converting reels, worked on product positioning & competitor analysis"
              },
              {
                year: "2026",
                title: "Founder",
                company: "TrustMitra (Gig Worker Marketplace MVP)",
                desc: "Developed MVP platform, built commission-based model, focused on informal worker digital identity system"
              },
              {
                year: "2024-2025",
                title: "Team Lead",
                company: "KaamSetu (Ideathon MVP Project)",
                desc: "Led team to conceptualize and build gig worker marketplace MVP, defined roadmap, coordinated rapid product development"
              },
              {
                year: "2023-2026",
                title: "B.Tech in Computer Applications",
                company: "University Education",
                desc: "Completed degree with focus on web development, databases, and modern software practices"
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
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["C", "C++", "Java", "Python", "HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "NumPy", "Pandas", "OpenCV", "Git", "DSA", "OOPs", "TypeScript", "Tailwind CSS"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-sm hover:border-cyan-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Digital Marketing", "Social Media Strategy", "Content Creation", "HR Coordination", "Startup Execution", "Team Leadership", "Product Strategy", "UX Design"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-medium text-sm hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Web-based gig worker marketplace with OTP-based job start, UPI payments, and rating system. Focused on building digital identity for informal workers with seamless payment integration.
                    </p>
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

          {/* Additional Projects Grid */}
          <div className="mt-20 pt-12 border-t border-slate-700/50">
            <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
                <h4 className="font-semibold text-lg mb-3 group-hover:text-cyan-400 transition-colors">Startup Digital Marketing Dashboard</h4>
                <p className="text-slate-300 mb-4 text-sm">Analytics dashboard for tracking social media metrics, engagement rates, and campaign performance with real-time data visualization.</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Chart.js", "Tailwind CSS"].map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-800/30 border-y border-slate-700/50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Featured Certifications</h2>
          <p className="text-slate-400 mb-8 text-center">Click cards to flip</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-300 mb-12">
            Have a project in mind? Let's discuss how we can work together.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/devubro143" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/devendra-gupta-" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://wa.me/919376813483" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <MessageCircle size={32} />
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-slate-300 mb-6">
              I'm always interested in hearing about new opportunities, whether that's a freelance project, a full-time role, or just a chat about technology.
            </p>
            <a href="https://wa.me/919376813483" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 gap-2">
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
