import { GROUPS, LEARNING, SKILLS_SECTION } from "../data";
import common from "../styles/common.module.css";
import styles from "./Skills.module.css";
import Pills from "./Pills";

export default function Skills() {
  return (
    <section id="skills">
      <div className={common.wrap}>
        <h2 data-a="rv">{SKILLS_SECTION.title}</h2>
        <div className={styles.cards}>
          {GROUPS.map((g) => (
            <div key={g.title} className={`${styles.card} ${common.glass} ${common.spot}`} data-a="card spot">
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <Pills list={g.skills} />
            </div>
          ))}
        </div>
        <div className={`${styles.learn} ${common.glass}`} data-a="rv">
          <strong>{SKILLS_SECTION.learning}</strong>
          <Pills list={LEARNING} dashed />
          <small>{SKILLS_SECTION.note}</small>
        </div>
      </div>
    </section>
  );
}
