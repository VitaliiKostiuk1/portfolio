import { useEffect } from "react";
import { gsap, ScrollTrigger, q, reducedMotion } from "./shared";

// Стрічка стеку нахиляється залежно від швидкості скролу й повертається назад, коли скрол зупинився
export default function useMarqueeSkew() {
  useEffect(() => {
    if (reducedMotion()) return;
    let timer;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0, end: "max",
        onUpdate: (self) => {
          gsap.to(q("mqs"), { skewX: gsap.utils.clamp(-10, 10, -self.getVelocity() / 250), duration: 0.5, overwrite: true });
          clearTimeout(timer);
          timer = setTimeout(() => gsap.to(q("mqs"), { skewX: 0, duration: 0.7 }), 120);
        },
      });
    });
    return () => { clearTimeout(timer); ctx.revert(); };
  }, []);
}
