import SectionHeader from '../components/common/SectionHeader';

function About() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="About Abhiram"
            subtitle="From building skills to building solutions — driven by clarity, execution, and impact"
          />

          <div className="prose prose-lg prose-invert max-w-none">
            
            {/* Foundation */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Foundation</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                My work is rooted in one principle: <strong>technology should solve real problems, not just look impressive</strong>. 
                I started my journey by learning systems deeply — cloud, development, automation, and architecture — 
                not to chase trends, but to understand how things actually work end to end.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Over time, that foundation evolved into building real-world solutions across web platforms, cloud infrastructure, 
                DevOps workflows, and intelligent systems — while also helping others avoid the mistakes I made early on.
              </p>
            </div>

            {/* What I Do */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I work at the intersection of <strong>engineering, problem-solving, and mentorship</strong>.
                That means designing and delivering solutions that are practical, scalable, and future-ready.
              </p>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Building web, app, and cloud-based solutions
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Designing AI-powered tools, chatbots, and automation workflows
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Helping individuals and teams level up through clear technical guidance
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Build With Abhiram exists to cut through noise and complexity. 
                Too many people — students, professionals, and even founders — struggle not because of lack of talent, 
                but because of unclear direction and poor execution.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My mission is simple: <strong>provide clarity, build systems, and create outcomes</strong> — whether that’s 
                a strong technical product, a scalable architecture, or a career move done right.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                This is not a short-term project or a services page. It’s a long-term platform built around trust and results.
              </p>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Individuals grow faster with the right guidance and tools
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Businesses get solutions that scale, not shortcuts that break
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  Technology is used with purpose, not hype
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
