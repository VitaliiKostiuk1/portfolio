import { ABOUT } from "../data";
import common from "../styles/common.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className={common.wrap}>
        <p className={styles.text} data-a="aboutText">
          {ABOUT.main.split(" ").map((w, i) => <span data-a="aw" key={i}>{w} </span>)}
        </p>
        <p className={styles.lead} data-a="rv">{ABOUT.lead}</p>
      </div>
    </section>
  );
}
