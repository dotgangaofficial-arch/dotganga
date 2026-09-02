import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import logo from '../assets/images/dotgangalogo.webp';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Snappy luxury sweep: completes in 750ms so user is never stuck
    const startTime = Date.now();
    const duration = 750;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));

      // Ease-out curve for a natural, fast acceleration
      const easeOutPct = Math.min(100, Math.round(100 * Math.sin((pct * Math.PI) / 200)));
      setProgress(easeOutPct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timerFade = setTimeout(() => {
        setIsFadingOut(true);
      }, 100);

      const timerDone = setTimeout(() => {
        setIsDone(true);
        if (onFinish) onFinish();
      }, 350);

      return () => {
        clearTimeout(timerFade);
        clearTimeout(timerDone);
      };
    }
  }, [progress, onFinish]);

  if (isDone) return null;

  return (
    <div className={`loading-screen-backdrop ${isFadingOut ? 'loading-screen-fadeout' : ''}`}>
      <div className="loading-screen-content">
        <div className="loading-logo-wrapper">
          <img src={logo} alt="DotGanga Logo" className="loading-logo-img" />
        </div>

        <div className="loading-bar-container">
          <div 
            className="loading-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
