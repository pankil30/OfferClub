'use client';

import { useEffect, useState } from 'react';
import AdsterraBanner from './AdsterraBanner';

export default function ResponsiveAdsterraBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <AdsterraBanner
        adKey="078e7b967e365d46fabc523deb156af9"
        width={300}
        height={250}
      />
    );
  }

  return (
    <AdsterraBanner
      adKey="0f94af93128d8d271fa632fa8d2bc8c7"
      width={728}
      height={90}
    />
  );
}