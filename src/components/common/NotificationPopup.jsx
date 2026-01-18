import { useState, useEffect } from 'react';

function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenNotification = localStorage.getItem('hasSeenImprovementNotification');
    if (!hasSeenNotification) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenImprovementNotification', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full mx-auto">
        <div className="text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-xl font-bold text-white mb-3">
            We're Improving!
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We're constantly working to enhance your experience. 
            Please bear with us as we make improvements to serve you better.
          </p>
          <button 
            onClick={handleClose}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors w-full"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationPopup;