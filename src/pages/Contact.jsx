import SectionHeader from '../components/common/SectionHeader';

function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "contactabhiram8780@gmail.com",
      description: "For business inquiries, partnerships, and detailed discussions",
      icon: "📧"
    },
    {
      title: "LinkedIn",
      value: "Abhiram Kumar",
      description: "Connect for professional networking and career discussions",
      icon: "💼"
    },
    {
      title: "Book a Session",
      value: "Schedule directly",
      description: "1:1 mentorship, mock interviews, and career guidance",
      icon: "📅"
    }
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Contact Us"
            subtitle="Let's discuss how we can accelerate your career journey"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{method.value}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-800/20 border border-slate-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're looking for career guidance, technical mentorship, or want to discuss a project, 
                I'm here to help. Let's have a conversation about your goals and how we can achieve them together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/YtKZWdrEeNYENQFg6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
              >
                Book a 1:1 Session
              </a>
              <a 
                href="mailto:abhiram@buildwithabhiram.com" 
                className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors"
              >
                Send an Email
              </a>
              </div>
            </div>
            
            <div className="mt-12 bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">What to Expect</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-cyan-400 font-medium mb-2">Response Time</h5>
                  <p className="text-slate-300 text-sm">Within 24 hours for all inquiries</p>
                </div>
                <div>
                  <h5 className="text-cyan-400 font-medium mb-2">Session Format</h5>
                  <p className="text-slate-300 text-sm">Video calls, structured discussions, actionable outcomes</p>
                </div>
                <div>
                  <h5 className="text-cyan-400 font-medium mb-2">Follow-up</h5>
                  <p className="text-slate-300 text-sm">Detailed notes and next steps after each session</p>
                </div>
                <div>
                  <h5 className="text-cyan-400 font-medium mb-2">Commitment</h5>
                  <p className="text-slate-300 text-sm">Genuine interest in your success and growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;