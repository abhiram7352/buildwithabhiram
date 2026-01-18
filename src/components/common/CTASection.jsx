function CTASection({ title, description, primaryCTA, secondaryCTA }) {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <div className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
              {primaryCTA}
            </div>
          )}
          {secondaryCTA && (
            <div className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors">
              {secondaryCTA}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTASection;