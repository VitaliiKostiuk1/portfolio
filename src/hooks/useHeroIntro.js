import { useEffect } from "react";
import { gsap, q, reducedMotion } from "./shared";

// Поява Hero при завантаженні: слова, підписи й чипи
export default function useHeroIntro() {
  useEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(q("hw"), { yPercent: 115, duration: 1.1, stagger: 0.09, ease: "power4.out", delay: 0.15 });
      gsap.from(q("hfade"), { y: 26, opacity: 0, duration: 0.9, stagger: 0.12, delay: 0.7, ease: "power3.out" });
      gsap.from(q("chip"), { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.12, delay: 1.1, ease: "back.out(2)" });
    });
    return () => ctx.revert();
  }, []);
}
