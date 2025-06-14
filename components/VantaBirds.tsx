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
            backgroundAlpha: 1.00,
            backgroundColor: 0x0f0f23,
            color1: 0xc084fc,
            color2: 0xfbcfe8,
            quantity: 4.00,
            birdSize: 1.50,
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
    >
      {/* Gradient overlay to match the assessment page style */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Additional radial gradients for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `,
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default VantaBirds;
