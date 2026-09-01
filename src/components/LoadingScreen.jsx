import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import logo from '../assets/images/dotgangalogo.webp';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly towards 100%
        const remaining = 100 - prev;
        const jump = Math.max(2, Math.floor(remaining * 0.18));
        return Math.min(100, prev + jump);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timerFade = setTimeout(() => {
        setIsFadingOut(true);
      }, 150);

      const timerDone = setTimeout(() => {
        setIsDone(true);
        if (onFinish) onFinish();
      }, 700);

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
