import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

function Services() {
  const services = [
    {
      title: "Mock Interviews",
      description: "Real interview simulations with structured feedback based on current industry expectations.",
      whoFor: "Final-year students, job seekers, professionals switching roles",
      outcome: "Confidence, clarity, and improved interview performance",
      price: "Premium"
    },
    {
      title: "Resume & LinkedIn Optimization",
      description: "ATS-optimized resumes and LinkedIn profiles that clearly communicate impact, not just skills.",
      whoFor: "Students, working professionals, career switchers",
      outcome: "Higher response rates from recruiters and hiring managers",
      price: "Standard"
    },
    {
      title: "Interview Preparation",
      description: "End-to-end interview preparation covering technical, behavioral, and system design rounds.",
      whoFor: "Software engineers, cloud professionals, tech leads",
      outcome: "A structured and repeatable approach to crack interviews",
      price: "Premium"
    },
    {
      title: "Portfolio & Personal Branding Websites",
      description: "Modern, performance-focused portfolio websites tailored to your career or business goals.",
      whoFor: "Developers, designers, founders, consultants",
      outcome: "Stronger personal brand and professional visibility",
      price: "Custom"
    },
    {
      title: "Project Development & Case Studies",
      description: "Real-world, industry-aligned project development with proper architecture and documentation.",
      whoFor: "Students, early-career professionals",
      outcome: "Production-grade projects that stand out",
      price: "Premium"
    },
    {
      title: "Web Application Development",
      description: "Scalable, secure, and performance-optimized web applications built for real business use.",
      whoFor: "Startups, SMEs, product teams",
      outcome: "Production-ready web platforms",
      price: "Enterprise"
    },
    {
      title: "Mobile Application Development",
      description: "Cross-platform mobile apps designed for usability, performance, and long-term scalability.",
      whoFor: "Startups, businesses, founders",
      outcome: "High-quality mobile experiences",
      price: "Enterprise"
    },
    {
      title: "AI Integration & Intelligent Systems",
      description: "Integrate AI-driven features like chatbots, recommendation systems, and automation into products.",
      whoFor: "Startups, businesses, product teams",
      outcome: "Smarter products with real AI impact",
      price: "Enterprise"
    },
    {
      title: "Chatbot Development",
      description: "Custom chatbots for websites, applications, and internal tools using modern AI frameworks.",
      whoFor: "Businesses, support teams, founders",
      outcome: "Improved engagement and automated support",
      price: "Custom"
    },
    {
      title: "Cloud Architecture & Deployment",
      description: "Design and deploy secure, scalable cloud infrastructure tailored to your workload.",
      whoFor: "Startups, businesses, SaaS teams",
      outcome: "Reliable and cost-optimized cloud environments",
      price: "Enterprise"
    },
    {
      title: "DevOps & CI/CD Solutions",
      description: "Automated pipelines, infrastructure as code, and monitoring for faster and safer releases.",
      whoFor: "Engineering teams, startups, enterprises",
      outcome: "Faster deployments with fewer failures",
      price: "Enterprise"
    },
    {
      title: "System Design & Architecture Consulting",
      description: "High-level architecture guidance for scalable, maintainable, and future-ready systems.",
      whoFor: "Senior engineers, tech leads, founders",
      outcome: "Clear technical direction and architectural confidence",
      price: "Premium"
    },
    {
      title: "Technical Mentorship & 1:1 Consulting",
      description: "Focused, outcome-driven mentorship tailored to your career or business challenges.",
      whoFor: "Individuals, professionals, founders",
      outcome: "Clarity, direction, and faster decision-making",
      price: "Premium"
    }
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Services"
            subtitle="Premium offerings designed for real career acceleration"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-cyan-400 font-medium">Who it's for: </span>
                    <span className="text-slate-300">{service.whoFor}</span>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-medium">Outcome: </span>
                    <span className="text-slate-300">{service.outcome}</span>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/YtKZWdrEeNYENQFg6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors block text-center"
                >
                  Book a Session
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;