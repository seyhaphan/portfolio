"use client"
import React, { useState, useEffect } from 'react';

const AboutMeSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [codeAnimation, setCodeAnimation] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👨‍💻' },
    { id: 'journey', label: 'Journey', icon: '🚀' },
    { id: 'expertise', label: 'Expertise', icon: '⚡' },
    { id: 'philosophy', label: 'Philosophy', icon: '💭' }
  ];

  const codeSnippets = [
    {
      title: "Enterprise Mindset",
      code: `@Component
public class EnterpriseEngineer {
    private final ProblemSolver solver;
    private final InnovationDriver innovation;
    
    public Solution buildEnterpriseSolution(Challenge challenge) {
        return Solution.builder()
            .scalable(true)
            .maintainable(true)
            .secure(true)
            .performant(true)
            .build();
    }
}`
    },
    {
      title: "AI Integration Approach",
      code: `@Service
public class AIWorkflowOrchestrator {
    
    public WorkflowResult orchestrate(BusinessProcess process) {
        return SpringAIChain.builder()
            .withRAGKnowledgeBase()
            .withMultiToolIntegration()
            .withSemanticSearch()
            .execute(process);
    }
}`
    },
    {
      title: "Payment System Architecture",
      code: `@RestController
public class PaymentGateway {
    
    @PostMapping("/process")
    public PaymentResponse processPayment(@RequestBody PaymentRequest request) {
        return PaymentProcessor.builder()
            .withBankingAPIs(BAKONG, ABA_BANK)
            .withNotifications(SMS, EMAIL, ZALO, KAKAO)
            .withEncryption(RSA_AES_HYBRID)
            .process(request);
    }
}`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeAnimation((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-400">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm an <span className="text-blue-400 font-semibold">Enterprise Full-Stack Developer</span> with 4+ years of experience 
          building scalable, mission-critical applications. I specialize in bridging the gap between 
          <span className="text-green-400 font-semibold"> cutting-edge AI technology</span> and 
          <span className="text-purple-400 font-semibold"> enterprise-grade business solutions</span>.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 font-mono text-lg mb-4">🎯 Current Focus</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">▪</span>
              <span>AI-powered workflow automation with Spring AI</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">▪</span>
              <span>Multi-tenant SaaS architecture design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">▪</span>
              <span>Payment system integration & fintech solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">▪</span>
              <span>Enterprise security & encryption implementations</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 font-mono text-lg mb-4">🚀 What Drives Me</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▪</span>
              <span>Solving complex business problems with elegant code</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▪</span>
              <span>Building systems that scale from startup to enterprise</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▪</span>
              <span>Mentoring teams & sharing knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▪</span>
              <span>Staying ahead of technology curves</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderJourney = () => (
    <div className="space-y-6">
      <div className="text-gray-300 text-lg mb-8">
        My journey from curious problem-solver to enterprise architect, driven by passion for innovation and excellence.
      </div>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            4+
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex-1 border-l-4 border-green-400">
            <h3 className="text-green-400 font-mono text-lg mb-2">Enterprise Experience</h3>
            <p className="text-gray-300">
              Built and maintained large-scale applications serving thousands of users. 
              Specialized in Spring Boot microservices, payment integrations, and AI-powered automation systems.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex-1 border-l-4 border-blue-400">
            <h3 className="text-blue-400 font-mono text-lg mb-2">AI Integration Pioneer</h3>
            <p className="text-gray-300">
              Early adopter of Spring AI framework. Built RAG systems, chatbots, and workflow automation tools 
              that transform how businesses operate and make decisions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            💳
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex-1 border-l-4 border-purple-400">
            <h3 className="text-purple-400 font-mono text-lg mb-2">Fintech Specialist</h3>
            <p className="text-gray-300">
              Deep experience with payment gateways, virtual banking APIs, and multi-channel notification systems. 
              Built secure, compliant financial applications handling real transactions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
            🏗️
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex-1 border-l-4 border-yellow-400">
            <h3 className="text-yellow-400 font-mono text-lg mb-2">Architecture & Leadership</h3>
            <p className="text-gray-300">
              Designed microservices architectures, led development teams, and mentored junior developers. 
              Focus on scalable, maintainable, and secure system design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExpertise = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 font-mono">Technical DNA</h3>
        <p className="text-gray-300">The core technologies and methodologies that define my approach</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Code Animation */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <h4 className="text-green-400 font-mono text-lg">{codeSnippets[codeAnimation].title}</h4>
            <div className="ml-auto flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <pre className="text-xs text-gray-300 bg-gray-900 p-4 rounded overflow-x-auto">
            <code>{codeSnippets[codeAnimation].code}</code>
          </pre>
          <div className="flex mt-4 space-x-1">
            {codeSnippets.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded ${
                  index === codeAnimation ? 'bg-green-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Expertise Breakdown */}
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-blue-400">
            <h4 className="text-blue-400 font-mono mb-2">🎯 Core Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Java', 'TypeScript', 'PostgreSQL', 'Spring AI'].map((skill) => (
                <span key={skill} className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-green-400">
            <h4 className="text-green-400 font-mono mb-2">🚀 Innovation Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['AI Workflows', 'RAG Systems', 'Chatbots', 'Automation'].map((skill) => (
                <span key={skill} className="bg-green-500 text-white px-2 py-1 rounded text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-purple-400">
            <h4 className="text-purple-400 font-mono mb-2">💳 Financial Systems</h4>
            <div className="flex flex-wrap gap-2">
              {['Banking APIs', 'Payment Gateways', 'Kafka', 'Multi-channel'].map((skill) => (
                <span key={skill} className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-yellow-400">
            <h4 className="text-yellow-400 font-mono mb-2">🏗️ Architecture</h4>
            <div className="flex flex-wrap gap-2">
              {['Microservices', 'Multi-tenant', 'Security', 'Scalability'].map((skill) => (
                <span key={skill} className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhilosophy = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-green-400">
        <h3 className="text-green-400 font-mono text-xl mb-4">💭 Development Philosophy</h3>
        <blockquote className="text-gray-300 text-lg italic leading-relaxed">
          "Great software isn't just about clean code—it's about understanding business needs, 
          anticipating future challenges, and building solutions that empower people to do their best work."
        </blockquote>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h4 className="text-cyan-400 font-mono text-lg mb-4">🎯 My Approach</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 font-bold">1.</span>
              <div>
                <strong className="text-blue-400">Business First:</strong> Understanding the problem before jumping to solutions
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">2.</span>
              <div>
                <strong className="text-green-400">Scale Smart:</strong> Building for current needs while preparing for growth
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 font-bold">3.</span>
              <div>
                <strong className="text-purple-400">Security by Design:</strong> Integrating security from day one, not as an afterthought
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-3 font-bold">4.</span>
              <div>
                <strong className="text-yellow-400">Continuous Learning:</strong> Staying ahead of technology trends and best practices
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h4 className="text-cyan-400 font-mono text-lg mb-4">🌟 Core Values</h4>
          <div className="space-y-4">
            <div className="p-3 bg-gray-800 rounded">
              <h5 className="text-green-400 font-semibold mb-1">Excellence</h5>
              <p className="text-gray-300 text-sm">Delivering high-quality solutions that exceed expectations</p>
            </div>
            <div className="p-3 bg-gray-800 rounded">
              <h5 className="text-blue-400 font-semibold mb-1">Innovation</h5>
              <p className="text-gray-300 text-sm">Leveraging cutting-edge tech to solve real-world problems</p>
            </div>
            <div className="p-3 bg-gray-800 rounded">
              <h5 className="text-purple-400 font-semibold mb-1">Collaboration</h5>
              <p className="text-gray-300 text-sm">Building strong teams and mentoring the next generation</p>
            </div>
            <div className="p-3 bg-gray-800 rounded">
              <h5 className="text-yellow-400 font-semibold mb-1">Impact</h5>
              <p className="text-gray-300 text-sm">Creating systems that make a meaningful difference</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-400">
        <div className="text-center">
          <h4 className="text-blue-400 font-mono text-lg mb-2">🚀 What's Next?</h4>
          <p className="text-gray-300 mb-4">
            I'm always looking for challenging projects that push the boundaries of what's possible. 
            Whether it's integrating AI into business workflows, building scalable payment systems, 
            or architecting the next generation of enterprise applications.
          </p>
          <div className="text-green-400 font-mono">
            Ready to build something amazing together? Let's talk.
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0: return renderOverview();
      case 1: return renderJourney();
      case 2: return renderExpertise();
      case 3: return renderPhilosophy();
      default: return renderOverview();
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 font-mono">
            // About Me
          </h2>
          <p className="text-xl text-gray-300">
            Enterprise developer, AI enthusiast, and problem solver
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 flex items-center space-x-2 ${
                activeTab === index
                  ? 'bg-blue-500 text-white font-bold shadow-lg'
                  : 'bg-gray-800 text-blue-400 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;