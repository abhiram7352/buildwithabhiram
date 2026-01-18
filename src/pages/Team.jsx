import SectionHeader from '../components/common/SectionHeader';
import founderPhoto from '../assets/founder_photo.jpg';

function Team() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Team"
            subtitle="Quality over quantity, expertise over volume"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 mb-12">
              <div className="text-center mb-8">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400/30">
                  <img 
                    src={founderPhoto} 
                    alt="Abhiram - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Abhiram</h3>
                <p className="text-cyan-400 font-medium mb-4">Founder & Lead Mentor</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Expertise</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      Full-Stack Development
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      AWS Cloud Architecture
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      Career Mentorship
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      Technical Interviews
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Achievements</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      AWS Certified Solutions Architect
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      500+ Students Mentored
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Tech Community Leader
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Industry Speaker
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-slate-800/20 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Growing the Team</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We're building a carefully curated team of industry experts and mentors who share our commitment 
                to practical education and real-world impact. Quality over quantity, always.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Future Mentors</h4>
                  <p className="text-slate-400 text-sm">Industry professionals with proven track records</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Technical Reviewers</h4>
                  <p className="text-slate-400 text-sm">Experts who ensure content quality and relevance</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Community Leaders</h4>
                  <p className="text-slate-400 text-sm">Passionate individuals who foster growth and connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;