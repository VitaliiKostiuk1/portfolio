import { useEffect } from "react";
import { ScrollTrigger } from "./shared";

// Після завантаження шрифтів і сторінки висота змінюється: перераховуємо позиції тригерів
export default function useScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState !== "complete") addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => removeEventListener("load", refresh);
  }, []);
}
