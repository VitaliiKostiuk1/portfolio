import { useEffect, useRef, useState } from "react";
import { NAV, UI } from "../data";
import common from "../styles/common.module.css";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = () => setOpen(false);

  // Меню закривається: Escape, клік поза хедером
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const onDown = (e) => !ref.current?.contains(e.target) && close();
    addEventListener("keydown", onKey);
    addEventListener("pointerdown", onDown);
    return () => {
      removeEventListener("keydown", onKey);
      removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // ...і коли вікно розтягують до десктопної ширини
  useEffect(() => {
    const mq = matchMedia("(min-width: 861px)");
    const onChange = (e) => e.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={styles.header}>
      <div ref={ref} className={`${styles.inner} ${common.glass}`}>
        <a className={styles.logo} href="#">frontend<b>.dev</b></a>

        <div id="site-menu" className={`${styles.menu} ${open ? styles.open : ""}`}>
          <nav className={styles.nav} aria-label={UI.navLabel}>
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={close}>{label}</a>
            ))}
          </nav>
          <a className={`${common.btn} ${common.pri} ${styles.cta}`} data-a="mag" href="#contact" onClick={close}>{UI.contact}</a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? UI.menuClose : UI.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
