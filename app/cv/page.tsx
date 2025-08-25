'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono text-sm">
      {/* Header Comment */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-gray-500 text-xs">
          /** 4 years enterprise, 1 year startup. Available IMMEDIATELY. */
        </div>
        <div className="text-gray-500 text-xs">
          /** @author Your Name */
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 p-6">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-32 h-40 bg-gray-700 border border-gray-600 flex items-center justify-center text-gray-500 text-xs">
              &lt;img/&gt;
            </div>
          </div>

          {/* INFORMATION Class */}
          <div className="mb-8">
            <div className="text-blue-400 text-sm mb-2">public class <span className="text-yellow-300">Information</span> &#123;</div>
            <div className="ml-4 space-y-1 text-xs">
              <div><span className="text-purple-400">private static final String</span> <span className="text-cyan-300">NOM</span> = <span className="text-green-300">"YOUR_NAME"</span>;</div>
              <div><span className="text-purple-400">private static final String</span> <span className="text-cyan-300">TITRE</span> = <span className="text-green-300">"Full-Stack Developer"</span>;</div>
              <div><span className="text-purple-400">private static final String</span> <span className="text-cyan-300">EMAIL</span> = <span className="text-green-300">"your.email@gmail.com"</span>;</div>
              <div><span className="text-purple-400">private static final long</span> <span className="text-cyan-300">TELEPHONE</span> = <span className="text-orange-400">0123456789L</span>;</div>
              <div><span className="text-purple-400">private static final String[]</span> <span className="text-cyan-300">POSITION</span> = &#123;<span className="text-green-300">"Remote"</span>, <span className="text-green-300">"On-site"</span>&#125;;</div>
              <div><span className="text-purple-400">private static final boolean</span> <span className="text-cyan-300">PERMIS_B_VEHICULE</span> = <span className="text-orange-400">true</span>;</div>
              <div><span className="text-purple-400">private static final int</span> <span className="text-cyan-300">AGE</span> = <span className="text-orange-400">28</span>;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* PLATFORMS Enum */}
          <div className="mb-6">
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Plateformes</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-cyan-300">SPRING_BOOT,</div>
              <div className="text-cyan-300">NEXT_JS,</div>
              <div className="text-cyan-300">REACT,</div>
              <div className="text-cyan-300">NODE_JS;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* LANGUAGES Enum */}
          <div className="mb-6">
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Langages</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-cyan-300">JAVA, TYPESCRIPT,</div>
              <div className="text-cyan-300">PYTHON, BASH,</div>
              <div className="text-cyan-300">SQL, JAVASCRIPT;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* LOGICIELS Enum */}
          <div className="mb-6">
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Logiciels</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-cyan-300">SPRING_AI,</div>
              <div className="text-cyan-300">SPRING_SECURITY,</div>
              <div className="text-cyan-300">INTELLIJ_IDEA,</div>
              <div className="text-cyan-300">VS_CODE,</div>
              <div className="text-cyan-300">DOCKER,</div>
              <div className="text-cyan-300">POSTGRESQL,</div>
              <div className="text-cyan-300">AWS;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* MÉDIA */}
          <div className="mb-6">
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Media</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-cyan-300">GITHUB,</div>
              <div className="text-gray-500 text-xs">//github.com/yourusername</div>
              <div className="text-cyan-300">LINKEDIN,</div>
              <div className="text-gray-500 text-xs">//linkedin.com/in/yourprofile</div>
              <div className="text-cyan-300">PORTFOLIO;</div>
              <div className="text-gray-500 text-xs">//yourportfolio.com</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* LANGUES */}
          <div className="mb-6">
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Langues</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-gray-500">// Native</div>
              <div className="text-cyan-300">FRANCAIS<span className="text-gray-400">("C2")</span>,</div>
              <div className="text-gray-500">// Fluent</div>
              <div className="text-cyan-300">ANGLAIS<span className="text-gray-400">("B2")</span>,</div>
              <div className="text-gray-500">// Basic</div>
              <div className="text-cyan-300">ESPANOL<span className="text-gray-400">("A2")</span>;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* PROFIL */}
          <div>
            <div className="text-blue-400 text-sm mb-2">public enum <span className="text-yellow-300">Profil</span> &#123;</div>
            <div className="ml-4 text-xs space-y-1">
              <div className="text-cyan-300">INNOVANT,</div>
              <div className="text-cyan-300">ANALYTIQUE,</div>
              <div className="text-cyan-300">COLLABORATIF,</div>
              <div className="text-cyan-300">RIGOUREUX;</div>
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* FORMATIONS */}
          <div className="bg-gray-800 border border-gray-700 p-6">
            <div className="text-blue-400 mb-4">public class <span className="text-yellow-300">Formations</span> extends <span className="text-green-300">EcolesSuperieure</span> &#123;</div>
            
            <div className="ml-4 mb-4">
              <div className="text-purple-400 text-sm">private void <span className="text-cyan-300">masterInnovation</span>() &#123;</div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">niveau</span> = <span className="text-green-300">"Master"</span>; <span className="text-gray-500">// 2-year program</span></div>
                <div><span className="text-purple-400">LocalDate</span> <span className="text-cyan-300">dateDebut</span> = <span className="text-green-300">LocalDate.now()</span>;</div>
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">type</span> = <span className="text-green-300">"Computer Science"</span>;</div>
              </div>
              <div className="text-gray-300 ml-4">&#125;</div>
            </div>

            <div className="ml-4">
              <div className="text-purple-400 text-sm">private void <span className="text-cyan-300">bachelor</span>(List&lt;String&gt; <span className="text-cyan-300">diplomes</span>) &#123;</div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">niveau</span> = <span className="text-green-300">"Bachelor"</span>;</div>
                <div><span className="text-purple-400">Period</span> <span className="text-cyan-300">periode</span> = <span className="text-green-300">Period.between(2020, 2023)</span>;</div>
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">type</span> = <span className="text-green-300">"Software Engineering"</span>;</div>
                <div><span className="text-cyan-300">diplomes</span> = <span className="text-green-300">Arrays.asList("Computer Science", "Full-Stack Dev")</span>;</div>
                <div><span className="text-purple-400">LocalDate</span> <span className="text-cyan-300">obtention</span> = <span className="text-green-300">LocalDate.of(2023, 6, 1)</span>;</div>
              </div>
              <div className="text-gray-300 ml-4">&#125;</div>
            </div>
            
            <div className="text-gray-300">&#125;</div>
          </div>

          {/* EXPÉRIENCES */}
          <div className="bg-gray-800 border border-gray-700 p-6">
            <div className="text-blue-400 mb-4">public class <span className="text-yellow-300">Experiences</span> &#123;</div>

            <div className="ml-4 mb-6">
              <div className="text-purple-400 text-sm">@Experience(level = "SENIOR")</div>
              <div className="text-purple-400 text-sm">public void <span className="text-cyan-300">seniorFullStackDeveloper</span>() &#123;</div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="text-purple-400">Duration</span> <span className="text-cyan-300">duree</span> = <span className="text-green-300">Duration.between("2024-01", "Current")</span>;</div>
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">entreprise</span> = <span className="text-green-300">"Enterprise Solutions Inc."</span>;</div>
                <div><span className="text-purple-400">Role</span> <span className="text-cyan-300">type</span> = <span className="text-green-300">Role.SENIOR_DEVELOPER</span>;</div>
                <div className="text-gray-500 text-xs mt-2">
                  /**<br/>
                  * Built RAG FAQ system with Spring AI and PgVector for semantic search.<br/>
                  * Developed FEP server core API with microservices architecture.<br/>
                  * Implemented billing system with AES encryption and JWT auth.<br/>
                  * Led team of 3 developers, increased API performance by 40%.<br/>
                  */
                </div>
              </div>
              <div className="text-gray-300 ml-4">&#125;</div>
            </div>

            <div className="ml-4 mb-6">
              <div className="text-purple-400 text-sm">@Experience(level = "MID")</div>
              <div className="text-purple-400 text-sm">public void <span className="text-cyan-300">fullStackDeveloper</span>() &#123;</div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="text-purple-400">Duration</span> <span className="text-cyan-300">duree</span> = <span className="text-green-300">Duration.between("2022-03", "2023-12")</span>;</div>
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">entreprise</span> = <span className="text-green-300">"Tech Startup Co."</span>;</div>
                <div><span className="text-purple-400">Role</span> <span className="text-cyan-300">type</span> = <span className="text-green-300">Role.MID_LEVEL_DEVELOPER</span>;</div>
                <div className="text-gray-500 text-xs mt-2">
                  /**<br/>
                  * Developed chat applications with streaming responses using Next.js 15.<br/>
                  * Built RESTful APIs with Spring Boot and PostgreSQL.<br/>
                  * Implemented real-time features with WebSocket connections.<br/>
                  * Collaborated with design team to create responsive UIs.<br/>
                  */
                </div>
              </div>
              <div className="text-gray-300 ml-4">&#125;</div>
            </div>

            <div className="ml-4">
              <div className="text-purple-400 text-sm">@Experience(level = "JUNIOR")</div>
              <div className="text-purple-400 text-sm">public void <span className="text-cyan-300">juniorDeveloper</span>() &#123;</div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="text-purple-400">Duration</span> <span className="text-cyan-300">duree</span> = <span className="text-green-300">Duration.between("2021-06", "2022-02")</span>;</div>
                <div><span className="text-purple-400">String</span> <span className="text-cyan-300">entreprise</span> = <span className="text-green-300">"Software Agency Ltd."</span>;</div>
                <div><span className="text-purple-400">Role</span> <span className="text-cyan-300">type</span> = <span className="text-green-300">Role.ENTRY_LEVEL</span>;</div>
                <div className="text-gray-500 text-xs mt-2">
                  /**<br/>
                  * Started as intern, promoted to junior developer after 3 months.<br/>
                  * Worked on React components and Spring Boot controllers.<br/>
                  * Learned best practices in code review and testing.<br/>
                  * Contributed to legacy system modernization projects.<br/>
                  */
                </div>
              </div>
              <div className="text-gray-300 ml-4">&#125;</div>
            </div>

            <div className="text-gray-300 mt-4">&#125;</div>
          </div>

          {/* PROJETS RÉCENTS */}
          <div className="bg-gray-800 border border-gray-700 p-6">
            <div className="text-blue-400 mb-4">public class <span className="text-yellow-300">ProjetsRecents</span> &#123;</div>

            <div className="ml-4 space-y-4">
              <div>
                <div className="text-purple-400 text-sm">@Component</div>
                <div className="text-purple-400 text-sm">public static final <span className="text-cyan-300">Project</span> AI_RAG_SYSTEM = new Project() &#123;</div>
                <div className="ml-4 text-xs space-y-1">
                  <div><span className="text-cyan-300">technologies</span> = <span className="text-green-300">"Spring AI, PgVector, Next.js 15, OpenAI"</span>;</div>
                  <div><span className="text-cyan-300">description</span> = <span className="text-green-300">"RAG FAQ system with semantic search"</span>;</div>
                  <div><span className="text-cyan-300">status</span> = <span className="text-green-300">ProjectStatus.PRODUCTION_READY</span>;</div>
                </div>
                <div className="text-gray-300">&#125;;</div>
              </div>

              <div>
                <div className="text-purple-400 text-sm">@Service</div>
                <div className="text-purple-400 text-sm">public static final <span className="text-cyan-300">Project</span> FEP_SERVER = new Project() &#123;</div>
                <div className="ml-4 text-xs space-y-1">
                  <div><span className="text-cyan-300">architecture</span> = <span className="text-green-300">"Microservices with request routing"</span>;</div>
                  <div><span className="text-cyan-300">logging</span> = <span className="text-green-300">"Correlation ID tracking to database"</span>;</div>
                  <div><span className="text-cyan-300">technology</span> = <span className="text-green-300">"Spring Boot, PostgreSQL"</span>;</div>
                </div>
                <div className="text-gray-300">&#125;;</div>
              </div>

              <div>
                <div className="text-purple-400 text-sm">@RestController</div>
                <div className="text-purple-400 text-sm">public static final <span className="text-cyan-300">Project</span> BILLING_SYSTEM = new Project() &#123;</div>
                <div className="ml-4 text-xs space-y-1">
                  <div><span className="text-cyan-300">security</span> = <span className="text-green-300">"AES-256 encryption, JWT authentication"</span>;</div>
                  <div><span className="text-cyan-300">frontend</span> = <span className="text-green-300">"Next.js with TypeScript"</span>;</div>
                  <div><span className="text-cyan-300">features</span> = <span className="text-green-300">"Payment processing, subscription management"</span>;</div>
                </div>
                <div className="text-gray-300">&#125;;</div>
              </div>
            </div>

            <div className="text-gray-300 mt-4">&#125;</div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
            <div>// Compiled successfully - Build time: {currentTime}</div>
            <div>// Status: Available for new projects and collaborations</div>
            <div className="text-green-400 mt-2">System.out.println("Ready to contribute to your team!");</div>
          </div>
        </div>
      </div>
    </div>
  )
}