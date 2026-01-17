function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            I'm not "trying an idea".
          </h1>
          
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            <p className="mb-6">I'm building:</p>
            
            <div className="space-y-4 text-xl md:text-3xl lg:text-4xl text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <span className="text-blue-500 mr-4">•</span>
                <span>A personal SaaS</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-4">•</span>
                <span>A career accelerator</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-4">•</span>
                <span>A long-term brand</span>
              </div>
            </div>
          </div>
          
          <div className="pt-8 space-y-4 text-xl md:text-2xl lg:text-3xl text-slate-300">
            <p>Most people never start.</p>
            <p className="text-white font-semibold">
              I already have the stack, domain, clarity, and credibility.
            </p>
            <p className="text-blue-400">
              Something big is coming...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;