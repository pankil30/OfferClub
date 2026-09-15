'use client';

import { useEffect } from "react";

export default function GoogleAutorelaxedAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="flex justify-center w-full mb-2">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-3990057144186847"
        data-ad-slot="8076254925"
        data-ad-format="autorelaxed"
      />
    </div>
  );
}