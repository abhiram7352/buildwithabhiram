import SectionHeader from '../components/common/SectionHeader';

function Portfolio() {
  const projects = [
    {
      title: "Career Accelerator Platform",
      category: "Web Application",
      description: "A comprehensive platform connecting students with mentors and opportunities. Built with React, Node.js, and AWS.",
      impact: "500+ active users, 95% satisfaction rate",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      status: "Live"
    },
    {
      title: "AWS Certification Tracker",
      category: "SaaS Tool",
      description: "Personal project to track AWS certification progress and study materials. Helped 200+ students prepare effectively.",
      impact: "200+ users, featured in AWS community",
      tech: ["React", "Firebase", "AWS SDK"],
      status: "Active"
    },
    {
      title: "Tech Community Hub",
      category: "Community Platform",
      description: "Built and managed a tech community platform for knowledge sharing and networking among professionals.",
      impact: "1000+ members, 50+ events organized",
      tech: ["Discord Bot", "Python", "APIs"],
      status: "Growing"
    }
  ];

  const initiatives = [
    {
      title: "Student Mentorship Program",
      description: "Structured mentorship program helping students transition from college to industry.",
      impact: "300+ students mentored, 85% placement rate"
    },
    {
      title: "Tech Interview Workshop Series",
      description: "Monthly workshops covering technical interviews, system design, and career guidance.",
      impact: "50+ workshops conducted, 1000+ attendees"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various open source projects and maintainer of educational repositories.",
      impact: "500+ GitHub stars, 100+ forks"
    }
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Portfolio"
            subtitle="Selected projects and community initiatives"
          />
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-cyan-400 font-medium">Impact: </span>
                    <span className="text-slate-300">{project.impact}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700 text-slate-300 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Community Initiatives</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{initiative.title}</h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">{initiative.description}</p>
                  <div className="text-cyan-400 font-medium text-sm">{initiative.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;