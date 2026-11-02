import { useEffect } from "react";
import { gsap, q, all, reducedMotion, finePointer } from "./shared";

// Ефекти курсора: світіння, паралакс чипів, підсвітка карток, магнітні кнопки, нахил проєктів
export default function usePointerEffects() {
  useEffect(() => {
    if (reducedMotion() || !finePointer()) return;
    const root = document.documentElement;
    const ctx = gsap.context(() => {}); // збирає твіни, створені в обробнику, щоб cleanup їх прибрав
    const active = { magnet: null, tilt: null };

    const glow = (e) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    };
    const chips = (e) => {
      const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
      all("chip").forEach((c, i) => gsap.to(c, { x: nx * (30 + i * 14), y: ny * (30 + i * 14), duration: 1.2, overwrite: "auto" }));
    };
    const spotlight = (e) => {
      const el = e.target.closest?.(q("spot"));
      if (!el) return;
      const b = el.getBoundingClientRect();
      el.style.setProperty("--cx", e.clientX - b.left + "px");
      el.style.setProperty("--cy", e.clientY - b.top + "px");
    };
    const magnet = (e) => {
      const el = e.target.closest?.(q("mag"));
      if (active.magnet && active.magnet !== el) {
        gsap.to(active.magnet, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" });
        active.magnet = null;
      }
      if (!el) return;
      const b = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - b.left - b.width / 2) * 0.3, y: (e.clientY - b.top - b.height / 2) * 0.4, duration: 0.3 });
      active.magnet = el;
    };
    const tilt = (e) => {
      const el = e.target.closest?.(q("proj"));
      if (active.tilt && active.tilt !== el) {
        gsap.to(active.tilt, { rotationX: 0, rotationY: 0, duration: 0.7, ease: "power3.out" });
        active.tilt = null;
      }
      if (!el) return;
      const b = el.getBoundingClientRect();
      gsap.to(el, {
        rotationY: ((e.clientX - b.left) / b.width - 0.5) * 4,
        rotationX: -((e.clientY - b.top) / b.height - 0.5) * 4,
        transformPerspective: 1000, duration: 0.4,
      });
      active.tilt = el;
    };

    const onMove = (e) => ctx.add(() => { glow(e); chips(e); spotlight(e); magnet(e); tilt(e); });
    addEventListener("mousemove", onMove);
    return () => { removeEventListener("mousemove", onMove); ctx.revert(); };
  }, []);
}
