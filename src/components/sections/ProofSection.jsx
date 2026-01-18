import SectionHeader from '../common/SectionHeader';

function ProofSection() {
  const achievements = [
    {
      category: "Certifications",
      items: ["AWS Solutions Architect", "Cloud Practitioner", "Developer Associate"]
    },
    {
      category: "Community Impact",
      items: ["500+ Students Mentored", "Tech Community Leader", "Industry Speaker"]
    },
    {
      category: "Professional Experience",
      items: ["Full-Stack Development", "Cloud Architecture", "System Design"]
    }
  ];

  const stats = [
    { number: "500+", label: "Students Mentored" },
    { number: "95%", label: "Success Rate" },
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/65"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Proof of Trust"
          subtitle="Results speak louder than promises"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {achievement.category}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProofSection;