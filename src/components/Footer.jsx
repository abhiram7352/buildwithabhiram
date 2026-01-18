import { Link } from 'react-router-dom';

function Footer() {
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

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              Build With Abhiram
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Career accelerator and personal SaaS founder helping professionals 
              build meaningful careers through real-world experience.
            </p>
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
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 buildwithabhiram.com. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/abhiram7352/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contactabhiram8780@gmail.com" 
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;