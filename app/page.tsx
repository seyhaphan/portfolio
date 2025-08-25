"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const [typewriterText, setTypewriterText] = useState('')

  const fullText = "Full-Stack Java Developer"

  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            {/* Terminal Window */}
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl mx-auto">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono ml-4">~/portfolio</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-8 font-mono text-left">
                <div className="space-y-4">
                  <div>
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400 ml-2">whoami</span>
                  </div>
                  <div className="text-cyan-300 text-2xl md:text-4xl font-bold">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </div>
                  
                  <div className="mt-8 space-y-2 text-sm">
                    <div><span className="text-blue-400">$</span> <span className="text-green-400">cat skills.txt</span></div>
                    <div className="text-gray-300 ml-4">
                      ├── Backend: Spring Boot, Java, PostgreSQL<br/>
                      ├── Frontend: Next.js, React, TypeScript<br/>
                      ├── AI/ML: Spring AI, RAG Systems, OpenAI<br/>
                      └── DevOps: Docker, AWS, Microservices
                    </div>
                    
                    <div className="mt-4">
                      <span className="text-blue-400">$</span> 
                      <span className="text-green-400 ml-2">git status</span>
                    </div>
                    <div className="text-gray-300 ml-4">
                      On branch <span className="text-yellow-300">main</span><br/>
                      Your branch is up to date with <span className="text-green-400">'enterprise-ready'</span><br/>
                      <span className="text-green-400">Ready for new challenges!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6 font-mono">
                // About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Enterprise-level Full-Stack Developer with 4+ years of experience 
                  building scalable applications using Java and modern web technologies.
                </p>
                <p>
                  Specialized in Spring Boot microservices, AI integration, and 
                  Next.js frontend development. Currently available for new opportunities.
                </p>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mt-6">
                  <div className="font-mono text-sm">
                    <div className="text-purple-400">public class <span className="text-yellow-300">Developer</span> &#123;</div>
                    <div className="ml-4 space-y-1 text-xs">
                      <div><span className="text-purple-400">String</span> <span className="text-cyan-300">name</span> = <span className="text-green-300">"Your Name"</span>;</div>
                      <div><span className="text-purple-400">String[]</span> <span className="text-cyan-300">expertise</span> = &#123;<span className="text-green-300">"Java"</span>, <span className="text-green-300">"Spring"</span>, <span className="text-green-300">"Next.js"</span>&#125;;</div>
                      <div><span className="text-purple-400">boolean</span> <span className="text-cyan-300">passionate</span> = <span className="text-orange-400">true</span>;</div>
                    </div>
                    <div className="text-gray-300">&#125;</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Recent Projects</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="text-cyan-300 font-semibold">RAG FAQ System</h4>
                    <p className="text-gray-400">Spring AI + PgVector + Next.js</p>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <h4 className="text-cyan-300 font-semibold">FEP Server Core API</h4>
                    <p className="text-gray-400">Microservices architecture</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="text-cyan-300 font-semibold">Billing Management</h4>
                    <p className="text-gray-400">AES encryption + JWT auth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 font-mono">
            // Let's Connect
          </h2>
          
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:your.email@gmail.com" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-green-400 transition-colors group"
              >
                <div className="text-2xl mb-2">📧</div>
                <div className="text-green-400 font-mono group-hover:text-green-300">Email</div>
                <div className="text-gray-400 text-sm">your.email@gmail.com</div>
              </a>
              
              <a 
                href="#" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors group"
              >
                <div className="text-2xl mb-2">💼</div>
                <div className="text-blue-400 font-mono group-hover:text-blue-300">LinkedIn</div>
                <div className="text-gray-400 text-sm">Connect with me</div>
              </a>
              
              <a 
                href="#" 
                className="p-4 bg-gray-900 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors group"
              >
                <div className="text-2xl mb-2">🐙</div>
                <div className="text-purple-400 font-mono group-hover:text-purple-300">GitHub</div>
                <div className="text-gray-400 text-sm">View my code</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-gray-500 font-mono text-sm">
            <div>// Compiled successfully - Build time: {currentTime}</div>
            <div className="text-green-400 mt-2">System.out.println("Thanks for visiting!");</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
