"use client";

import { useEffect, useState } from "react";

export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
      // Method 1: Fake ad element
      const ad = document.createElement("div");
      ad.className =
        "adsbox ad ads ad-banner ad-placement textads advertisement";
      ad.style.position = "absolute";
      ad.style.left = "-999px";
      ad.style.height = "1px";
      ad.style.width = "1px";

      document.body.appendChild(ad);

      await new Promise((resolve) => setTimeout(resolve, 150));

      const blocked =
        ad.offsetHeight === 0 ||
        ad.clientHeight === 0 ||
        getComputedStyle(ad).display === "none" ||
        getComputedStyle(ad).visibility === "hidden";

      document.body.removeChild(ad);

      // Method 2: Try loading a common ad script
      let scriptBlocked = false;

      try {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");

          script.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

          script.async = true;

          script.onload = () => {
            script.remove();
            resolve();
          };

          script.onerror = () => {
            script.remove();
            reject();
          };

          document.body.appendChild(script);
        });
      } catch {
        scriptBlocked = true;
      }

      if (blocked || scriptBlocked) {
        setAdBlockDetected(true);
      }
    };

    detectAdBlock();
  }, []);

  if (!adBlockDetected) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[92%] max-w-md rounded-3xl bg-[#262626] p-8 text-center shadow-2xl">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl">
          ✋
        </div>

        <h2 className="mb-5 text-3xl font-bold text-white">
          Ads Blocker Detected!!!
        </h2>

        <p className="mb-8 text-gray-300 leading-8">
          We have detected that you are using an extension to block ads.
          Please support us by disabling your ad blocker.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-xl bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}