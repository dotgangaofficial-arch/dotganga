import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import logo from '../assets/images/dotgangalogo.webp';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let target = 25; // Initial stage

    // Check when all page resources (DOM, images, fonts, scripts) are loaded
    const onFullyLoaded = () => {
      if (!isMounted) return;
      target = 100;
    };

    // 1. Font readiness
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!isMounted) return;
        target = Math.max(target, 60);
      }).catch(() => {});
    }

    // 2. Window complete load check
    if (document.readyState === 'complete') {
      target = 100;
    } else {
      window.addEventListener('load', onFullyLoaded, { once: true });
      document.addEventListener('DOMContentLoaded', () => {
        if (!isMounted) return;
        target = Math.max(target, 50);
      }, { once: true });
    }

    // 3. Fallback safety timer: never block user longer than 2.8s
    const safetyTimer = setTimeout(() => {
      target = 100;
    }, 2800);

    // 4. Smooth progress animation towards target
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        if (target === 100) {
          // Accelerate to finish once everything is up to date and loaded
          const jump = Math.max(3, Math.ceil((100 - prev) * 0.28));
          return Math.min(100, prev + jump);
        } else {
          // Smoothly advance toward intermediate target
          if (prev < target) {
            return prev + 1;
          }
          return prev;
        }
      });
    }, 25);

    return () => {
      isMounted = false;
      window.removeEventListener('load', onFullyLoaded);
      clearTimeout(safetyTimer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timerFade = setTimeout(() => {
        setIsFadingOut(true);
      }, 120);

      const timerDone = setTimeout(() => {
        setIsDone(true);
        if (onFinish) onFinish();
      }, 550);

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
