import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Loader() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotate: 360,
        repeat: -1,
        duration: 2.5,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #a084ee 100%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
      }}
    >
      <div
        ref={logoRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          boxShadow: '0 0 32px #00fff7',
          marginBottom: 24,
          background: 'rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/meeee.png"
          alt="Syed Zubyl Logo"
          width={100}
          height={100}
          style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>
      <h1
        style={{
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: 12,
          letterSpacing: 1.5,
        }}
      >
        Syed Zubyl Portfolio
      </h1>
      <p
        style={{
          color: '#00fff7',
          fontSize: '1.1rem',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        Mobile App Developer | Contact: syedzubyl96@gmail.com
      </p>
      <p
        style={{
          color: '#fff',
          fontSize: '1rem',
          textAlign: 'center',
          opacity: 0.7,
        }}
      >
        Welcome to my tech portfolio website. Explore my projects, skills, and more!
      </p>
    </div>
  );
} 