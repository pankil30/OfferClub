'use client';

import { useEffect } from "react";

export default function GoogleAdsense() {
  useEffect(() => {
    // Small timeout ensures the DOM element has rendered and has a non-zero width
    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("Adsense error:", err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center w-full mb-2">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-3990057144186847"
        data-ad-slot="8487318465"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}