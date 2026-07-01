'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    atOptions: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
}

export default function AdsterraBanner({
  adKey,
  width,
  height,
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    window.atOptions = {
      key: adKey,
      format: 'iframe',
      width,
      height,
      params: {},
    };

    const script = document.createElement('script');
    script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current?.replaceChildren();
    };
  }, [adKey, width, height]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        margin: '0 auto',
      }}
    />
  );
}