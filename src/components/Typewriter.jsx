// TypewriterEffect.js
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, displayedText]);

  return (
    <div>
      <h1>{displayedText}</h1>
    </div>
  );
};

export default TypewriterEffect;
