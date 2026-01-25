import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
  const [faqOpen, setFaqOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const footerLinks = {
    Platform: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Team', path: '/team' }
    ],
    Resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const faqs = [
    {
      q: 'What is Build With Abhiram?',
      a: `Build With Abhiram is a founder-led tech and career solutions platform focused on building real-world technology, systems, and outcomes. It combines hands-on engineering, mentorship, and practical guidance across web, cloud, AI, DevOps, and career growth.`
    },
    {
      q: 'Who is this platform for?',
      a: `Students preparing for tech careers; working professionals looking to upskill or switch roles; founders and startups needing reliable tech solutions; individuals who value clarity, execution, and real results.`
    },
    {
      q: 'What kind of services do you offer?',
      a: `Mock interviews, resume/LinkedIn help, portfolio sites, web/app development, AI/chatbot solutions, cloud/DevOps, and 1:1 mentorship — customized per need.`
    },
    {
      q: 'Are these services automated or personalized?',
      a: `All services are personally reviewed and guided by Abhiram. No mass automation or generic outsourcing — every engagement is tailored.`
    },
    {
      q: 'Do you work only with students?',
      a: `No — Build With Abhiram serves students, professionals, founders, and teams.`
    },
    {
      q: 'How does the process work?',
      a: `You submit a request via 'Work With Me', requirements are reviewed, scope/timeline/pricing are shared, then work begins once aligned.`
    },
    {
      q: 'How is pricing decided?',
      a: `Pricing depends on scope, complexity, timeline, and level of involvement; transparent pricing is shared upfront.`
    },
    {
      q: 'Do you offer free consultations?',
      a: `Introductory discussions may be offered; in-depth sessions are paid to ensure focused time and quality.`
    },
    {
      q: 'Can you help with end-to-end solutions?',
      a: `Yes — from idea validation and architecture to development, deployment, and optimization.`
    },
    {
      q: 'What technologies do you work with?',
      a: `Frontend & backend, Azure/AWS, DevOps/CI-CD, AI tools and chatbots, system design and architecture.`
    },
    {
      q: 'How is Build With Abhiram different from agencies or coaching platforms?',
      a: `Founder-led involvement, real-world experience, limited engagements for quality, and focus on long-term outcomes.`
    },
    {
      q: 'Where can I contact you?',
      a: `If you have more questions, feel free to email me at conatctabhiram8780@gmail.com. if there is urget you can call me at +91 7352823318.`
    },
    {
      q: 'How can I get started?',
      a: `Click 'Work With Me' and submit your requirement — you'll receive clear next steps.`
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Build With Abhiram
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Helping individuals and teams grow through practical career guidance and reliable technology solutions.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/abhiram7352/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22zM8.98 8.98h4.38v2.06h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.28c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.9-2.79 3.86V24H8.98z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100010808074352" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.2 10.44 22v-7.01H7.9v-2.92h2.54V9.35c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.92h-2.34V22C18.34 21.2 22 17.08 22 12.07z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/abhi_ram7352" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm6.8-3.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
                </svg>
              </a>
              <a href="mailto:contactabhiram8780@gmail.com" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Email">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a href="https://x.com/abhiram7352" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="X">
                <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3L21 21M21 3L3 21" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {category === 'Resources' && (
                  <li>
                    <button onClick={() => setFaqOpen(true)} className="text-slate-400 hover:text-white transition-colors">
                      Frequently Asked Questions (FAQs)
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 buildwithabhiram.com. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="mailto:contactabhiram8780@gmail.com" className="inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
              Email
            </a>
            <button onClick={() => setFaqOpen(true)} className="px-4 py-2 border border-slate-700 text-slate-300 rounded-lg hover:text-white">View FAQs</button>
          </div>
        </div>

        {/* FAQ modal */}
        {faqOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={() => setFaqOpen(false)} />
            <div className="relative z-10 max-w-3xl w-full mx-4 bg-slate-900 rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold text-white">Frequently Asked Questions</h2>
                <button onClick={() => setFaqOpen(false)} className="text-slate-400 hover:text-white">Close</button>
              </div>
              <div className="p-6 max-h-[70vh] overflow-auto space-y-4">
                {faqs.map((item, idx) => (
                  <div key={idx} className="border border-slate-800 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-slate-700 flex justify-between items-center"
                    >
                      <span className="text-slate-100 font-medium">{item.q}</span>
                      <span className="text-slate-400">{openIndex === idx ? '−' : '+'}</span>
                    </button>
                    {openIndex === idx && (
                      <div className="px-4 py-3 bg-slate-900 text-slate-300 prose prose-invert">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;