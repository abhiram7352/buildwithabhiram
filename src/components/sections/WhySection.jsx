import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';

function WhySection() {
  const usps = [
    {
      icon: "🎯",
      title: "Real-World Experience",
      description: "Built by someone who has actually cracked AWS certifications, secured tech internships, and navigated the placement process successfully."
    },
    {
      icon: "🚀",
      title: "Proven Track Record",
      description: "Helped 500+ students and early professionals accelerate their careers with practical, outcome-driven guidance."
    },
    {
      icon: "💡",
      title: "Community Leadership",
      description: "Active community builder and mentor, connecting aspiring professionals with opportunities and real industry insights."
    },
    {
      icon: "⚡",
      title: "No-Fluff Approach",
      description: "Skip the theory and generic advice. Get actionable strategies that work in today's competitive tech landscape."
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Why Build With Abhiram"
          subtitle="Built by experience, trusted by results"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <Card
              key={index}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;