import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

function Services() {
  const services = [
    {
      title: "Mock Interviews",
      description: "Real interview scenarios with detailed feedback from someone who has been on both sides of the table.",
      whoFor: "Final year students, job seekers",
      outcome: "Confidence and clarity in technical interviews",
      price: "Premium"
    },
    {
      title: "Resume Building",
      description: "ATS-optimized resumes that highlight your strengths and get you past the initial screening.",
      whoFor: "Students, career changers",
      outcome: "Higher callback rates and interview invitations",
      price: "Standard"
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive preparation covering technical, behavioral, and system design interviews.",
      whoFor: "Software engineers, cloud professionals",
      outcome: "Systematic approach to crack any interview",
      price: "Premium"
    },
    {
      title: "Portfolio Websites",
      description: "Professional portfolio websites that showcase your skills and projects effectively.",
      whoFor: "Developers, designers, students",
      outcome: "Stand out from the competition",
      price: "Custom"
    },
    {
      title: "Projects & Case Studies",
      description: "Guided project development with real-world applications and detailed documentation.",
      whoFor: "Students building their portfolio",
      outcome: "Industry-relevant projects that impress recruiters",
      price: "Premium"
    },
    {
      title: "Web / App Solutions",
      description: "Full-stack development services for businesses and startups looking to build digital products.",
      whoFor: "Startups, small businesses",
      outcome: "Production-ready applications",
      price: "Enterprise"
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