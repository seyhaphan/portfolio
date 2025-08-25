"use client"
import React, { useState, useEffect } from 'react';

const ModernHomePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  const fullText = "Enterprise Full-Stack Developer";

  const skillCategories = [
    {
      title: "Programming & Development",
      icon: "💻",
      color: "blue",
      skills: [
        { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Kotlin", "SQL"] },
        { category: "Frameworks & Libraries", items: ["Spring Boot 3", "Next.js", "Ionic Vue", "Zustand", "Redux"] },
        { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3"] },
        { category: "Backend", items: ["REST API", "JWT Authentication", "Spring Data JPA", "Quartz Scheduler"] },
        { category: "Database", items: ["PostgreSQL", "JSON dynamic mapping", "PostgresML"] },
        { category: "DevOps & Deployment", items: ["Vercel", "Nginx", "Subdomain routing", "Docker"] }
      ]
    },
    {
      title: "System Design & Architecture",
      icon: "🏗️",
      color: "green",
      skills: [
        { category: "Architecture", items: ["Microservices & multi-WAR architecture", "Clustered job scheduling (Quartz + PostgreSQL)"] },
        { category: "Automation", items: ["Workflow automation (Spring AI integration)", "Dynamic JSON mapping for multi-tenant systems"] },
        { category: "Security", items: ["Hybrid encryption: RSA + AES key sharing"] }
      ]
    },
    {
      title: "Payments & Finance Systems",
      icon: "💳",
      color: "yellow",
      skills: [
        { category: "Payment Systems", items: ["Stablecoin payment system concepts", "Virtual banking APIs (Bakong, ABA Bank QR)"] },
        { category: "Notifications", items: ["Multi-channel invoice notifications: SMS, Email, Zalo, Kakao, WeChat, Telegram"] },
        { category: "Processing", items: ["Sequential invoice generation and event publishing with Kafka"] }
      ]
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      color: "purple",
      skills: [
        { category: "AI Integration", items: ["Spring AI integration for workflow automation", "FAQ chatbot building"] },
        { category: "Orchestration", items: ["Multi-tool workflow orchestration", "Embedding models for knowledge base / AI search"] }
      ]
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: any) => {
    const colors: any = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-400' },
      green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-400' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-400' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-400' }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            {/* Terminal Window */}
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-5xl mx-auto">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono ml-4">~/enterprise-portfolio</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-8 font-mono text-left">
                <div className="space-y-6">
                  <div>
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400 ml-2">whoami</span>
                  </div>
                  <div className="text-cyan-300 text-2xl md:text-4xl font-bold">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div><span className="text-blue-400">$</span> <span className="text-green-400">cat expertise.json</span></div>
                    <div className="text-gray-300 ml-4 bg-gray-900 p-4 rounded border-l-4 border-cyan-400">
                      <div className="space-y-1">
                        <div><span className="text-cyan-300">"specializations"</span>: [</div>
                        <div className="ml-4">
                          <div><span className="text-green-300">"Enterprise Spring Boot Applications"</span>,</div>
                          <div><span className="text-green-300">"AI-Powered Workflow Automation"</span>,</div>
                          <div><span className="text-green-300">"Payment & Banking System Integration"</span>,</div>
                          <div><span className="text-green-300">"Multi-tenant SaaS Architecture"</span>,</div>
                          <div><span className="text-green-300">"Real-time Notification Systems"</span></div>
                        </div>
                        <div>],</div>
                        <div><span className="text-cyan-300">"experience"</span>: <span className="text-orange-400">"4+ years enterprise"</span>,</div>
                        <div><span className="text-cyan-300">"status"</span>: <span className="text-green-300">"available_immediately"</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-4 font-mono">
              // Technical Expertise
            </h2>
            <p className="text-gray-300">Specialized in enterprise-grade solutions and cutting-edge technologies</p>
          </div>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={index}
                  onClick={() => setActiveSkillCategory(index)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 flex items-center space-x-2 ${
                    activeSkillCategory === index
                      ? `${colors.bg} text-gray-900 font-bold`
                      : `bg-gray-700 ${colors.text} hover:bg-gray-600`
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Skills Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeSkillCategory].skills.map((skillGroup, index) => {
              const colors = getColorClasses(skillCategories[activeSkillCategory].color);
              return (
                <div
                  key={index}
                  className={`bg-gray-900 p-6 rounded-lg border ${colors.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <h3 className={`text-lg font-bold ${colors.text} mb-4 font-mono`}>
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-gray-300 text-sm bg-gray-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-4 font-mono">
              // Featured Solutions
            </h2>
            <p className="text-gray-300">Enterprise-grade projects showcasing technical excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RAG AI System */}
            <div className="bg-gray-800 p-6 rounded-lg border border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🤖</div>
                <h3 className="text-xl font-bold text-purple-400 font-mono">AI Workflow System</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Enterprise RAG system with Spring AI integration, featuring semantic search, 
                multi-tool orchestration, and intelligent workflow automation.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-purple-300">Spring AI • PgVector • OpenAI • Next.js</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-green-400 text-xs font-mono">Production Ready</span>
                </div>
              </div>
            </div>

            {/* Payment System */}
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">💳</div>
                <h3 className="text-xl font-bold text-yellow-400 font-mono">Banking Integration</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Multi-channel payment system with virtual banking APIs (Bakong, ABA Bank), 
                stablecoin concepts, and real-time notifications across 6 platforms.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-yellow-300">Kafka • JWT • Multi-channel APIs</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-blue-400 text-xs font-mono">Enterprise Scale</span>
                </div>
              </div>
            </div>

            {/* Microservices Architecture */}
            <div className="bg-gray-800 p-6 rounded-lg border border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏗️</div>
                <h3 className="text-xl font-bold text-green-400 font-mono">Microservices Core</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Multi-WAR microservices architecture with clustered job scheduling, 
                dynamic JSON mapping, and hybrid RSA+AES encryption for multi-tenant systems.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-green-300">Spring Boot • Quartz • PostgreSQL</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                  <span className="text-orange-400 text-xs font-mono">High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center font-mono">
            // Additional Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">Technical Specializations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">▪</span>
                  <span className="text-gray-300">PDF generation from HTML (Flying Saucer)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">▪</span>
                  <span className="text-gray-300">UBL invoice XML handling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">▪</span>
                  <span className="text-gray-300">API client abstraction with reusable modules</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">▪</span>
                  <span className="text-gray-300">Secure authentication and refresh token handling</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">Professional Expertise</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">▪</span>
                  <span className="text-gray-300">Problem solving & system analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">▪</span>
                  <span className="text-gray-300">Multi-platform integration (banking, messaging, web)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">▪</span>
                  <span className="text-gray-300">Workflow optimization and automation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">▪</span>
                  <span className="text-gray-300">Team collaboration & mentoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-800 p-8 rounded-lg border border-green-400 shadow-lg shadow-green-400/10">
            <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
              // Ready for Your Next Project
            </h2>
            <p className="text-gray-300 mb-6">
              Bringing enterprise-grade solutions with modern technologies and AI integration. 
              Available immediately for challenging projects and team collaboration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="mailto:your.email@gmail.com" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2">📧</div>
                <div className="text-green-400 font-mono group-hover:text-green-300">Email</div>
                <div className="text-gray-400 text-sm">Direct Contact</div>
              </a>
              
              <a 
                href="/cv" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2">📄</div>
                <div className="text-blue-400 font-mono group-hover:text-blue-300">View CV</div>
                <div className="text-gray-400 text-sm">Detailed Resume</div>
              </a>
              
              <a 
                href="#" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-purple-400 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2">💼</div>
                <div className="text-purple-400 font-mono group-hover:text-purple-300">LinkedIn</div>
                <div className="text-gray-400 text-sm">Professional Network</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-gray-500 font-mono text-sm space-y-2">
            <div>// Build time: {currentTime}</div>
            <div>// Status: <span className="text-green-400">Available for enterprise projects</span></div>
            <div className="text-green-400">System.out.println("Let's build something amazing together!");</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernHomePage;