import { PROJECTS, PROJECTS_SECTION } from "../data";
import common from "../styles/common.module.css";
import styles from "./Projects.module.css";
import Pills from "./Pills";

export default function Projects() {
  return (
    <section id="projects">
      <div className={common.wrap}>
        <h2 data-a="rv">{PROJECTS_SECTION.title}</h2>
        <div className={styles.list}>
          {PROJECTS.map((p) => (
            <article key={p.id} className={`${styles.proj} ${common.glass} ${common.spot}`} data-a="proj spot">
              <div className={styles.img} data-a="pimg" aria-hidden="true">
                <i className={styles.bg} data-a="pbg" style={{ "--bgp": p.bg }} />
              </div>
              <div className={styles.body} data-a="pbody">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Pills list={p.tags} />
                <div className={styles.links}>
                  <a href={p.live}>{PROJECTS_SECTION.live}</a>
                  <a href={p.repo}>{PROJECTS_SECTION.code}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
