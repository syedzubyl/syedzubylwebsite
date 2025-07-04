"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const NUM_LINES = 18;
const NUM_ORBS = 6;
const COLORS = ['#00fff7', '#00ff85', '#00b3ff', '#ff00e6', '#ff6bcb', '#a084ee', '#f9f871'];

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #a084ee 100%)',
      }}
      aria-hidden="true"
    >
      {/* Static Gradient Overlay */}
      <div style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at 70% 30%, #ff6bcb55 0%, transparent 60%), radial-gradient(circle at 20% 80%, #00fff755 0%, transparent 60%)',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }} />
      {/* Static Orbs */}
      {Array.from({ length: NUM_ORBS }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `calc(50vw - 60px + ${Math.cos((i / NUM_ORBS) * Math.PI * 2) * 180}px)`,
            top: `calc(50vh - 60px + ${Math.sin((i / NUM_ORBS) * Math.PI * 2) * 120}px)`,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS[i % COLORS.length]} 0%, #222 100%)`,
            opacity: 0.18,
            filter: 'blur(8px) drop-shadow(0 0 32px #fff)',
            zIndex: 2,
            mixBlendMode: 'screen',
          }}
        />
      ))}
      {/* Static Tech Lines */}
      {Array.from({ length: NUM_LINES }).map((_, i) => (
        <div
          key={i}
          className="cyber-line"
          style={{
            position: 'absolute',
            left: `${(i / NUM_LINES) * 100}%`,
            top: 0,
            width: '2px',
            height: '100vh',
            background: COLORS[i % COLORS.length],
            opacity: 0.18,
            filter: 'blur(1.5px) drop-shadow(0 0 8px #00fff7)',
            mixBlendMode: 'screen',
            zIndex: 3,
          }}
        />
      ))}
    </div>
  );
}
