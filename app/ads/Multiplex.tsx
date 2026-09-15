'use client';

import { useEffect } from "react";

export default function GoogleAutorelaxedAd() {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex justify-center mb-2">
      <div className="w-full max-w-5xl mx-auto">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3990057144186847"
          data-ad-slot="8076254925"
          data-ad-format="autorelaxed"
        />
      </div>
    </div>
  );
}