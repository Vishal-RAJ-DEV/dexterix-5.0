"use client";


import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-[30px] h-[30px] rounded-full bg-white/80 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;