"use client"
import React, { useState, useEffect } from 'react';
import Loader from './loader';
import AnimatedBackground from './animated-background';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <AnimatedBackground />
          {children}
        </>
      )}
    </>
  );
} 