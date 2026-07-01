'use client';

import { useEffect } from "react";

export default function AdsterraNative() {
  useEffect(() => {
    const container = document.getElementById(
      "container-d8021b4bbede04ccfaac6d49c735ac5f"
    );

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl30136131.effectivecpmnetwork.com/d8021b4bbede04ccfaac6d49c735ac5f/invoke.js";

    container.appendChild(script);
  }, []);

  return (
    <div id="container-d8021b4bbede04ccfaac6d49c735ac5f" />
  );
}