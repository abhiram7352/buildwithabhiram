import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-slate-950/55"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-cyan-900/30 border border-cyan-700/50 rounded-full text-cyan-300 text-sm font-medium mb-6">
            Career Accelerator • Personal SaaS Founder • Tech Mentor
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Building careers through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              real-world experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Not theory. Not generic advice. Practical guidance from someone who has cracked certifications, 
            secured internships, and built a community of successful professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="https://forms.gle/YtKZWdrEeNYENQFg6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Work With Me
            </a>
            <Link to="/portfolio" className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors">
              View My Journey
            </Link>
          </div>
          
          <div className="pt-12 text-sm text-slate-400">
            <p>Trusted by 500+ students and early professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;