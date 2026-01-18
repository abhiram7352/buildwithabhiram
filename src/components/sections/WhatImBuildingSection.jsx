import SectionHeader from '../common/SectionHeader';

function WhatImBuildingSection() {
  const projects = [
    {
      title: "Personal SaaS",
      description: "Building scalable software solutions that solve real problems for professionals and businesses.",
      status: "In Development"
    },
    {
      title: "Career Accelerator",
      description: "A comprehensive platform connecting students with mentors, opportunities, and practical learning paths.",
      status: "Active"
    },
    {
      title: "Long-term Tech Brand",
      description: "Establishing a trusted brand that represents quality, authenticity, and real-world expertise in tech.",
      status: "Growing"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-950/60"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="What I'm Building"
          subtitle="Long-term vision, sustainable impact"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatImBuildingSection;