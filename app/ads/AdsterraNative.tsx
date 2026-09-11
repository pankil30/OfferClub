// 'use client';

// import { useEffect } from "react";

// export default function AdsterraNative() {
//   useEffect(() => {
//     const container = document.getElementById(
//       "container-d8021b4bbede04ccfaac6d49c735ac5f"
//     );

//     if (!container) return;

//     container.innerHTML = "";

//     const script = document.createElement("script");
//     script.async = true;
//     script.setAttribute("data-cfasync", "false");
//     script.src =
//       "https://pl30136131.effectivecpmnetwork.com/d8021b4bbede04ccfaac6d49c735ac5f/invoke.js";

//     container.appendChild(script);
//   }, []);

//   return (
//     <div id="container-d8021b4bbede04ccfaac6d49c735ac5f" />
//   );
// }

'use client';

import { useEffect } from "react";

export default function GoogleAdsense() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3990057144186847"
      data-ad-slot="8487318465"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}