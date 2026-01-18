function Card({ icon, title, description, cta, onClick, className = "" }) {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 ${className}`}>
      {icon && (
        <div className="text-cyan-400 text-3xl mb-4 text-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-300 mb-4 leading-relaxed">
        {description}
      </p>
      {cta && (
        <button 
          onClick={onClick}
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          {cta} →
        </button>
      )}
    </div>
  );
}

export default Card;