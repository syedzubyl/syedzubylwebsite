"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ReactDOM from 'react-dom';

const NUM_LINES = 18;
const NUM_ORBS = 6;
const COLORS = ['#00fff7', '#00ff85', '#00b3ff', '#ff00e6', '#ff6bcb', '#a084ee', '#f9f871'];

function BinaryTreeAnimation() {
  // Simple static binary tree structure for demo
  const nodes = [
    { id: 1, x: 240, y: 40, label: 'R' },
    { id: 2, x: 120, y: 100, label: 'L' },
    { id: 3, x: 360, y: 100, label: 'R' },
    { id: 4, x: 60, y: 180, label: 'LL' },
    { id: 5, x: 180, y: 180, label: 'LR' },
    { id: 6, x: 300, y: 180, label: 'RL' },
    { id: 7, x: 420, y: 180, label: 'RR' },
  ];
  const links = [
    [1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]
  ];
  return (
    <svg width="480" height="240" style={{ width: '100%', height: '100%' }}>
      {links.map(([from, to], i) => {
        const n1 = nodes.find(n => n.id === from);
        const n2 = nodes.find(n => n.id === to);
        return n1 && n2 ? (
          <line key={i} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} className="binary-tree-link" />
        ) : null;
      })}
      {nodes.map((n, i) => (
        <g key={n.id} className="binary-tree-node-group">
          <circle cx={n.x} cy={n.y} r={18} className="binary-tree-node" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="1rem" fill="#fff" fontWeight="bold">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [orbs, setOrbs] = useState(() =>
    Array.from({ length: NUM_ORBS }).map(() => ({
      x: 0.5 + (Math.random() - 0.5) * 0.2,
      y: 0.5 + (Math.random() - 0.5) * 0.2,
      vx: 0,
      vy: 0,
      idleAngle: Math.random() * Math.PI * 2,
    }))
  );
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>();

 

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let last = performance.now();
    function animate(now: number) {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      setOrbs((prev) =>
        prev.map((orb, i) => {
          // Idle orbiting
          const idleRadius = 0.18 + 0.08 * Math.sin(now / 2000 + i);
          const idleAngle = orb.idleAngle + dt * (0.2 + 0.1 * i);
          // Mouse attraction
          const targetX = mouse.x + Math.cos(idleAngle) * idleRadius;
          const targetY = mouse.y + Math.sin(idleAngle) * idleRadius;
          // Springy movement
          const dx = targetX - orb.x;
          const dy = targetY - orb.y;
          const vx = orb.vx * 0.85 + dx * 0.12;
          const vy = orb.vy * 0.85 + dy * 0.12;
          return {
            x: orb.x + vx,
            y: orb.y + vy,
            vx,
            vy,
            idleAngle,
          };
        })
      );
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [mouse]);

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
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.2s cubic-bezier(.4,0,.2,1)',
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
      {/* Animated Orbs (Color Clouds) */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `calc(${orb.x * 100}vw - 60px)`,
            top: `calc(${orb.y * 100}vh - 60px)`,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS[i % COLORS.length]} 0%, #222 100%)`,
            opacity: 0.18,
            filter: 'blur(16px) drop-shadow(0 0 32px #fff)',
            zIndex: 2,
            mixBlendMode: 'screen',
            pointerEvents: 'none',
            transition: 'background 0.3s',
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
