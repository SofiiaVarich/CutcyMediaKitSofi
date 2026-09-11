'use client';
import { useEffect, useState } from 'react';
export function ScrollProgress() { const [progress, setProgress] = useState(0); useEffect(() => { const update = () => setProgress((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100); window.addEventListener('scroll', update); update(); return () => window.removeEventListener('scroll', update); }, []); return <div className="scroll-progress" style={{ width: `${progress}%` }} />; }
