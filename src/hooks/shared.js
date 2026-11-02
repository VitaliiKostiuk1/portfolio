import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// CSS Modules хешують імена класів, тому елементи для GSAP позначені data-a="..."
export const q = (name) => `[data-a~="${name}"]`;
export const all = (name) => [...document.querySelectorAll(q(name))];
export const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
export const finePointer = () => matchMedia("(pointer: fine)").matches;

export { gsap, ScrollTrigger };
