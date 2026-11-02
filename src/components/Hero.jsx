import { NAME, HERO, CHIPS, UI } from "../data";
import common from "../styles/common.module.css";
import styles from "./Hero.module.css";

// Кожне слово в масці: GSAP піднімає його знизу (yPercent), маска ховає зайве.
// Ключ = позиція слова: текст ділиться один раз і ніколи не переставляється, тому індекс тут коректний.
const Mask = ({ text, accent = false }) =>
  text.split(" ").map((w, i) => (
    <span className={styles.wm} key={i}>
      <span className={`${styles.hw} ${accent ? styles.acc : ""}`} data-a="hw">{w}</span>
    </span>
  ));

export default function Hero() {
  return (
    <section className={styles.hero} data-a="hero">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb1}`} data-a="orb1" aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} data-a="orb2" aria-hidden="true" />
      {CHIPS.map(([label, top, right], i) => (
        <span key={label} className={`${styles.chip} ${common.glass}`} data-a="chip" aria-hidden="true"
          style={{ top, right, animationDelay: `${-i * 1.4}s` }}>{label}</span>
      ))}
      <div className={common.wrap}>
        <div className={`${styles.tag} ${common.glass}`} data-a="hfade">
          <span className={styles.dot} />
          {NAME} · {HERO.status}
        </div>
        <h1>
          {HERO.lines.map((line) => (
            <Mask key={line.text} text={line.text} accent={line.accent} />
          ))}
        </h1>
        <p className={styles.sub} data-a="hfade">{HERO.sub}</p>
        <div className={styles.btns} data-a="hfade">
          <a className={`${common.btn} ${common.pri}`} data-a="mag" href="#projects">{HERO.primary}</a>
          <a className={common.btn} data-a="mag" href="#contact">{UI.contact}</a>
        </div>
      </div>
      <div className={styles.cue} aria-hidden="true" />
    </section>
  );
}
