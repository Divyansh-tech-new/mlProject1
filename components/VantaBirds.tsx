// In file: app/components/VantaBirds.tsx

'use client'; // This component must run on the client

import { useState, useEffect, useRef } from 'react';

// @ts-ignore
// Add this at the top of the file to declare the vanta module

const VantaBirds = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null); // Use 'any' for Vanta's effect type
  const vantaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let effect: any;
    if (typeof window !== 'undefined' && vantaRef.current && !vantaEffect) {
      Promise.all([
        import('vanta/dist/vanta.birds.min.js'),
        import('three')
      ]).then(([vantaModule, threeModule]) => {
        const BIRDS = vantaModule.default || vantaModule;
        const THREE = threeModule;
        if (typeof BIRDS === 'function') {
          effect = BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundAlpha: 0.00,
            color1: 0xc084fc,
            color2: 0xfbcfe8,
            quantity: 3.00,
            birdSize: 1.20,
            vertexColors: false,
          });
          setVantaEffect(effect);
        } else {
          console.error('Vanta BIRDS is not a function:', BIRDS);
        }
      });
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      ref={vantaRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0, // Places it behind content but in front of the page background
      }}
    />
  );
};

export default VantaBirds;
