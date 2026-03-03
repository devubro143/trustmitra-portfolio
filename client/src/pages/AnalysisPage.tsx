import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowLeft, Palette, Type, Zap, Layout, Eye } from "lucide-react";

/**
 * Portfolio Design Analysis Page
 * Interactive visualization of design decisions, color theory, and metrics
 */

export default function AnalysisPage() {
  // Color palette data
  const colorPaletteData = [
    { name: "Navy", value: 35, color: "#1E3A8A", hex: "#1E3A8A", purpose: "Professional, Trustworthy" },
    { name: "Cyan", value: 25, color: "#06B6D4", hex: "#06B6D4", purpose: "Energy, Innovation" },
    { name: "Orange", value: 15, color: "#EA580C", hex: "#EA580C", purpose: "Emphasis, Action" },
    { name: "Neutrals", value: 25, color: "#E5E7EB", hex: "#E5E7EB", purpose: "Structure, Background" }
  ];

  // Typography hierarchy data
  const typographyData = [
    { level: "Display", font: "Poppins", weight: 700, size: "56px", usage: "Hero titles" },
    { level: "Heading", font: "Poppins", weight: 600, size: "32px", usage: "Section titles" },
    { level: "Subheading", font: "Poppins", weight: 600, size: "24px", usage: "Card titles" },
    { level: "Body", font: "Inter", weight: 400, size: "16px", usage: "Main text" },
    { level: "Small", font: "Inter", weight: 400, size: "14px", usage: "Captions" }
  ];

  // Animation metrics
  const animationData = [
    { name: "Fade-in", duration: 0.8, type: "Entrance" },
    { name: "Slide-up", duration: 0.6, type: "Entrance" },
    { name: "Scale", duration: 0.5, type: "Entrance" },
    { name: "Hover", duration: 0.3, type: "Interactive" },
    { name: "Flip", duration: 0.6, type: "Interactive" }
  ];

  // Content breakdown
  const contentData = [
    { section: "Skills", items: 19, color: "#1E3A8A" },
    { section: "Projects", items: 3, color: "#06B6D4" },
    { section: "Experience", items: 3, color: "#EA580C" },
    { section: "Certifications", items: 3, color: "#9333EA" },
    { section: "Values", items: 4, color: "#10B981" }
  ];

  // Responsive breakpoints
  const responsiveData = [
    { breakpoint: "Mobile", width: 375, sections: "1 col", nav: "Hamburger" },
    { breakpoint: "Tablet", width: 768, sections: "2 col", nav: "Drawer" },
    { breakpoint: "Desktop", width: 1024, sections: "3 col", nav: "Sticky" },
    { breakpoint: "Large", width: 1280, sections: "3 col", nav: "Sticky" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center gap-4 h-16">
          <a href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </a>
          <div className="flex-1" />
          <h1 className="font-display text-xl">Design Analysis</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/analysis-hero-bg-nNhSTmWgwresoCCfvPQujy.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl mb-4 text-primary">
              Portfolio Design Analysis
            </h2>
            <p className="text-xl text-foreground/80 mb-6">
              Comprehensive breakdown of design decisions, color theory, typography, and interactive elements
            </p>
            <p className="text-base text-foreground/70">
              Explore the strategic design choices that make this portfolio stand out through modern aesthetics, smooth animations, and professional presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="colors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
              <TabsTrigger value="colors" className="flex items-center gap-2">
                <Palette size={16} />
                <span className="hidden sm:inline">Colors</span>
              </TabsTrigger>
              <TabsTrigger value="typography" className="flex items-center gap-2">
                <Type size={16} />
                <span className="hidden sm:inline">Typography</span>
              </TabsTrigger>
              <TabsTrigger value="animations" className="flex items-center gap-2">
                <Zap size={16} />
                <span className="hidden sm:inline">Animations</span>
              </TabsTrigger>
              <TabsTrigger value="layout" className="flex items-center gap-2">
                <Layout size={16} />
                <span className="hidden sm:inline">Layout</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <Eye size={16} />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
            </TabsList>

            {/* Colors Tab */}
            <TabsContent value="colors" className="space-y-8">
              <div>
                <h3 className="font-heading mb-6">Color Palette & Theory</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-foreground/80 mb-6">
                      The portfolio uses a Navy + Cyan complementary color scheme that creates visual harmony while communicating professionalism and innovation.
                    </p>
                    <div className="space-y-4">
                      {colorPaletteData.map((color, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div 
                            className="w-16 h-16 rounded-lg shadow-md border-2 border-border"
                            style={{ backgroundColor: color.color }}
                          />
                          <div className="flex-1">
                            <h4 className="font-subheading">{color.name}</h4>
                            <p className="text-sm text-muted-foreground">{color.hex}</p>
                            <p className="text-xs text-foreground/60">{color.purpose}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="p-6 border-border">
                    <h4 className="font-subheading mb-4">Color Distribution</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={colorPaletteData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name} ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {colorPaletteData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Card>
                </div>
              </div>

              <Card className="p-6 border-border">
                <h4 className="font-subheading mb-4">Color Psychology</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <h5 className="font-medium text-primary mb-2">Navy Blue</h5>
                    <p className="text-sm text-foreground/70">Conveys stability, professionalism, and trustworthiness. Essential for building credibility in tech portfolios.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <h5 className="font-medium text-accent mb-2">Cyan</h5>
                    <p className="text-sm text-foreground/70">Represents innovation, forward-thinking, and technology. Creates visual tension with navy for attention capture.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <h5 className="font-medium text-secondary mb-2">Orange</h5>
                    <p className="text-sm text-foreground/70">Provides urgency and emphasis for CTAs. Breaks monotony and adds personality to the design.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Typography Tab */}
            <TabsContent value="typography" className="space-y-8">
              <div>
                <h3 className="font-heading mb-6">Typography System</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-foreground/80 mb-6">
                      The portfolio uses a strategic font pairing: Poppins for bold, modern headlines and Inter for readable, professional body text.
                    </p>
                    <div className="space-y-4">
                      {typographyData.map((item, idx) => (
                        <Card key={idx} className="p-4 border-border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-subheading text-primary">{item.level}</h4>
                              <p className="text-sm text-muted-foreground">{item.font} • Weight {item.weight}</p>
                            </div>
                            <span className="text-sm font-medium text-accent">{item.size}</span>
                          </div>
                          <p className="text-xs text-foreground/60">{item.usage}</p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card className="p-6 border-border">
                    <h4 className="font-subheading mb-4">Font Hierarchy Visualization</h4>
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663240011608/RDtcqQS6nedP3Gdk4KDDnR/typography-system-finWHT7K34MSfbL8dk5qHr.webp"
                      alt="Typography system"
                      className="w-full rounded-lg"
                    />
                  </Card>
                </div>
              </div>

              <Card className="p-6 border-border">
                <h4 className="font-subheading mb-4">Typography Rationale</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-primary">Poppins (Display Font)</h5>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      <li>✓ Geometric, modern letterforms</li>
                      <li>✓ Bold weight creates energetic feel</li>
                      <li>✓ Conveys innovation and tech-savviness</li>
                      <li>✓ Excellent for brand identity</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-primary">Inter (Body Font)</h5>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      <li>✓ Neutral, highly readable typeface</li>
                      <li>✓ Optimized for screen display</li>
                      <li>✓ Professional and approachable</li>
                      <li>✓ Ensures accessibility</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Animations Tab */}
            <TabsContent value="animations" className="space-y-8">
              <div>
                <h3 className="font-heading mb-6">Animations & Micro-Interactions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-foreground/80 mb-6">
                      Smooth, purposeful animations create engagement and reward user interaction. All animations are GPU-accelerated for optimal performance.
                    </p>
                    <div className="space-y-4">
                      {animationData.map((anim, idx) => (
                        <Card key={idx} className="p-4 border-border">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-subheading text-primary">{anim.name}</h4>
                              <p className="text-sm text-muted-foreground">{anim.type}</p>
                            </div>
                            <span className="text-sm font-medium text-accent">{anim.duration}s</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card className="p-6 border-border">
                    <h4 className="font-subheading mb-4">Animation Timeline</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={animationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="duration" fill="#06B6D4" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </div>
              </div>

              <Card className="p-6 border-border">
                <h4 className="font-subheading mb-4">Animation Philosophy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm font-medium text-primary mb-1">Engagement</p>
                      <p className="text-xs text-foreground/70">Rewards user interaction and exploration</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-sm font-medium text-accent mb-1">Guidance</p>
                      <p className="text-xs text-foreground/70">Draws attention to important elements</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                      <p className="text-sm font-medium text-secondary mb-1">Feedback</p>
                      <p className="text-xs text-foreground/70">Confirms user actions and interactions</p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-100 border border-purple-200">
                      <p className="text-sm font-medium text-purple-700 mb-1">Premium Feel</p>
                      <p className="text-xs text-foreground/70">Creates perception of craftsmanship</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="space-y-8">
              <div>
                <h3 className="font-heading mb-6">Responsive Design & Breakpoints</h3>
                <p className="text-foreground/80 mb-8">
                  The portfolio uses a mobile-first responsive design approach, optimizing the experience across all device sizes.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-subheading">Breakpoint</th>
                        <th className="text-left py-3 px-4 font-subheading">Width</th>
                        <th className="text-left py-3 px-4 font-subheading">Sections</th>
                        <th className="text-left py-3 px-4 font-subheading">Navigation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {responsiveData.map((item, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-primary">{item.breakpoint}</td>
                          <td className="py-3 px-4">{item.width}px</td>
                          <td className="py-3 px-4">{item.sections}</td>
                          <td className="py-3 px-4">{item.nav}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <Card className="p-6 border-border">
                <h4 className="font-subheading mb-4">Layout Principles</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-muted border border-border">
                      <h5 className="font-medium mb-2">Asymmetric Design</h5>
                      <p className="text-sm text-foreground/70">Breaks from generic centered layouts, creates visual interest and modern feel</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted border border-border">
                      <h5 className="font-medium mb-2">Generous Spacing</h5>
                      <p className="text-sm text-foreground/70">Ample whitespace creates premium feel and improves readability</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-muted border border-border">
                      <h5 className="font-medium mb-2">Mobile-First</h5>
                      <p className="text-sm text-foreground/70">Optimized for mobile, then enhanced for larger screens</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted border border-border">
                      <h5 className="font-medium mb-2">Flexible Grids</h5>
                      <p className="text-sm text-foreground/70">Content adapts smoothly across all breakpoints</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-8">
              <div>
                <h3 className="font-heading mb-6">Content Structure & Metrics</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 border-border">
                    <h4 className="font-subheading mb-4">Content Distribution</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={contentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="section" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="items" fill="#06B6D4" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>

                  <div className="space-y-4">
                    {contentData.map((item, idx) => (
                      <Card key={idx} className="p-4 border-border">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium">{item.section}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{item.items} items</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="p-6 border-border">
                <h4 className="font-subheading mb-4">Information Architecture</h4>
                <div className="space-y-3 text-sm">
                  <p className="text-foreground/80">
                    The portfolio follows a clear hierarchical structure that guides visitors through the content:
                  </p>
                  <ol className="space-y-2 text-foreground/70 list-decimal list-inside">
                    <li>Hero section introduces the professional</li>
                    <li>Core values establish brand positioning</li>
                    <li>About section provides personal narrative</li>
                    <li>Skills showcase technical and professional abilities</li>
                    <li>Projects demonstrate real-world work</li>
                    <li>Certifications build credibility</li>
                    <li>Contact section provides multiple engagement options</li>
                  </ol>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-primary/5 border-y border-border">
        <div className="container">
          <h3 className="font-heading mb-12 text-center">Key Design Takeaways</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-border hover:border-accent transition-colors">
              <h4 className="font-subheading mb-3 text-primary">Color Theory</h4>
              <p className="text-sm text-foreground/70">
                Navy + Cyan complementary scheme creates professional yet energetic feel. Strategic use of warm orange accents for emphasis and CTAs.
              </p>
            </Card>
            <Card className="p-6 border-border hover:border-accent transition-colors">
              <h4 className="font-subheading mb-3 text-primary">Typography</h4>
              <p className="text-sm text-foreground/70">
                Poppins for bold headlines conveys innovation. Inter for body text ensures readability. Clear hierarchy guides user attention.
              </p>
            </Card>
            <Card className="p-6 border-border hover:border-accent transition-colors">
              <h4 className="font-subheading mb-3 text-primary">Animations</h4>
              <p className="text-sm text-foreground/70">
                Smooth, purposeful animations reward engagement. GPU-accelerated for performance. Creates premium, crafted feel.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h3 className="font-heading mb-4">Explore the Live Portfolio</h3>
          <p className="text-foreground/80 mb-8">
            Experience the design principles, animations, and responsive layout in action. Visit the portfolio to see how all these elements work together.
          </p>
          <a href="/" className="inline-block">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              View Portfolio
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
        <div className="container text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2026 Devendra Gupta Portfolio. Design Analysis by Manus AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
