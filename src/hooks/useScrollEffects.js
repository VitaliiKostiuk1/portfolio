import { useEffect } from "react";
import { gsap, ScrollTrigger, q, all, reducedMotion } from "./shared";

const heroScrub = () => ({ trigger: q("hero"), start: "top top", end: "bottom top", scrub: 1 });

// scrub: анімація прив'язана до прокрутки
function progressBar() {
  gsap.to(q("bar"), { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
}
function heroParallax() {
  gsap.to(q("orb1"), { yPercent: -45, ease: "none", scrollTrigger: heroScrub() });
  gsap.to(q("orb2"), { yPercent: 70, ease: "none", scrollTrigger: heroScrub() });
}
function aboutHighlight() {
  gsap.fromTo(q("aw"), { opacity: 0.14 }, {
    opacity: 1, stagger: 0.12, ease: "none",
    scrollTrigger: { trigger: q("aboutText"), start: "top 80%", end: "bottom 50%", scrub: true },
  });
}
// once: true: програється один раз, коли елемент з'явився у вікні
function revealOnScroll() {
  all("rv").forEach((el) =>
    gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } })
  );
}
function cardsWave() {
  ScrollTrigger.batch(q("card"), {
    start: "top 90%", once: true,
    onEnter: (batch) => gsap.from(batch, { y: 70, opacity: 0, rotateX: -14, stagger: 0.14, duration: 0.9, ease: "power3.out" }),
  });
}
function projectsReveal() {
  all("proj").forEach((el) => {
    const once = { trigger: el, start: "top 80%", once: true };
    gsap.from(el.querySelector(q("pimg")), { clipPath: "inset(0 100% 0 0)", duration: 1.2, ease: "power4.inOut", scrollTrigger: once });
    gsap.from([...el.querySelector(q("pbody")).children], { y: 24, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.3, scrollTrigger: { ...once } });
    gsap.fromTo(el.querySelector(q("pbg")), { yPercent: -10 }, {
      yPercent: 10, ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}

export default function useScrollEffects() {
  useEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      progressBar();
      heroParallax();
      aboutHighlight();
      revealOnScroll();
      cardsWave();
      projectsReveal();
    });
    return () => ctx.revert();
  }, []);
}
