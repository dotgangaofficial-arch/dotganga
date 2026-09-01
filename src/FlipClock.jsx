import React, { useState, useEffect, useRef } from 'react';

const CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function FlipChar({ char, delay }) {
  const [displayChar, setDisplayChar] = useState(char);
  const [isFlipping, setIsFlipping] = useState(false);
  const queueRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    if (char === displayChar) return;

    const startIndex = CHARS.indexOf(displayChar);
    const endIndex = CHARS.indexOf(char);
    
    if (startIndex === -1 || endIndex === -1) {
      setDisplayChar(char);
      return;
    }

    // Determine sequence of characters to flip through (e.g., 6 steps)
    const stepsCount = 6;
    const sequence = [];
    for (let i = 1; i <= stepsCount; i++) {
      const t = i / stepsCount;
      const idx = Math.round(startIndex + (endIndex - startIndex) * t);
      const clampedIdx = Math.max(0, Math.min(CHARS.length - 1, idx));
      sequence.push(CHARS[clampedIdx]);
    }

    queueRef.current = sequence;
    
    const startTimeout = setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      
      const stepInterval = 75; // ms per step. 6 steps * 75ms = 450ms total sequence
      
      const tick = () => {
        if (queueRef.current.length === 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setIsFlipping(false);
          return;
        }
        
        const nextVal = queueRef.current.shift();
        
        // Trigger flip animation
        setIsFlipping(false);
        // Force reflow/repaint to restart animation
        void document.documentElement.offsetHeight;
        
        setDisplayChar(nextVal);
        setIsFlipping(true);
      };

      tick();
      timerRef.current = setInterval(tick, stepInterval);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <span className={`flip-char-cell ${isFlipping ? 'flipping' : ''}`}>
      <span className="char-content">{displayChar}</span>
    </span>
  );
}

export function FlipWord({ word, className }) {
  const chars = word.split('');

  return (
    <span className={`flip-word-container ${className}`}>
      {chars.map((c, i) => (
        <FlipChar key={i} char={c} delay={i * 45} />
      ))}
    </span>
  );
}
