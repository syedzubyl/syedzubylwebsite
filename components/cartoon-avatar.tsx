"use client"

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// SVGs for the tech icons (added more languages/technologies)
const icons = [
  {
    name: 'Flutter',
    svg: (
      <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon fill="#47C5FB" points="156,16 16,156 56,196 236,16"/>
          <polygon fill="#00569E" points="156,16 56,116 96,156 236,16"/>
          <polygon fill="#00B5F8" points="56,196 96,236 236,96 196,56"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Google',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="#4285F4" d="M43.6 20.5H42V20.5H24V27.5H35.1C33.6 31.1 30.1 33.5 24 33.5C17.4 33.5 12 28.1 12 21.5C12 14.9 17.4 9.5 24 9.5C27.1 9.5 29.7 10.6 31.7 12.4L36.6 7.5C33.3 4.5 28.9 2.5 24 2.5C12.9 2.5 4 11.4 4 21.5C4 31.6 12.9 40.5 24 40.5C34.6 40.5 43.6 32.5 43.6 21.5C43.6 20.7 43.6 20.1 43.6 20.5Z"/>
          <path fill="#34A853" d="M6.3 14.1L12.5 18.6C14.2 14.6 18.7 11.5 24 11.5C26.7 11.5 29.1 12.4 31 13.8L36.7 8.1C33.3 5.2 28.9 3.5 24 3.5C15.2 3.5 7.7 9.7 6.3 14.1Z"/>
          <path fill="#FBBC05" d="M24 44.5C29.6 44.5 34.5 42.6 38.1 39.6L32.2 34.5C30.1 36.1 27.3 37.1 24 37.1C18.7 37.1 14.2 34 12.5 30L6.3 34.9C7.7 39.3 15.2 44.5 24 44.5Z"/>
          <path fill="#EA4335" d="M43.6 21.5C43.6 20.7 43.6 20.1 43.6 20.5H24V27.5H35.1C34.3 29.6 32.7 31.3 30.1 32.5L36.7 37.9C40.2 34.7 43.6 29.6 43.6 21.5Z"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Java',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="#5382A1" d="M24 44c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14zm0-26c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"/>
          <path fill="#E76F00" d="M24 6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect width="48" height="48" rx="24" fill="#306998"/>
          <path fill="#FFD43B" d="M24 12c-6.6 0-12 5.4-12 12h8v-4h8v4h8c0-6.6-5.4-12-12-12z"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Dart',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon fill="#00B4AB" points="24,4 44,24 24,44 4,24"/>
          <polygon fill="#29C9C1" points="24,4 44,24 24,44"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon fill="#FFA000" points="24,4 44,44 4,44"/>
          <polygon fill="#F57C00" points="24,4 44,44 24,24"/>
          <polygon fill="#FFCA28" points="24,24 24,44 4,44"/>
        </g>
      </svg>
    ),
  },
  // More icons
  {
    name: 'C++',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#00599C"/>
        <text x="24" y="30" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">C++</text>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F7DF1E"/>
        <text x="24" y="30" textAnchor="middle" fontSize="18" fill="#222" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#3178C6"/>
        <text x="24" y="30" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#222"/>
        <text x="24" y="30" textAnchor="middle" fontSize="16" fill="#61DAFB" fontWeight="bold">React</text>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#3C873A"/>
        <text x="24" y="30" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">Node</text>
      </svg>
    ),
  },
];

export default function AnimatedAvatar() {
  // Detect dark mode
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(match.matches);
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      match.addEventListener('change', handler);
      return () => match.removeEventListener('change', handler);
    }
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <Image
        src="/images/meeee.png"
        alt="Syed Zubyl - Avatar"
        fill
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
        }}
        priority
      />
    </div>
  );
}
