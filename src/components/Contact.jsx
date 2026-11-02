import { EMAIL, SOCIAL, CONTACT_SECTION } from "../data";
import common from "../styles/common.module.css";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.root}>
      <div className={common.wrap}>
        <h2 data-a="rv">{CONTACT_SECTION.title}</h2>
        <a className={styles.mail} href={`mailto:${EMAIL}`} data-a="rv">{EMAIL}</a>
        <div className={styles.soc} data-a="rv">
          {SOCIAL.map(([label, href]) => (
            <a key={label} className={common.btn} data-a="mag" href={href}>{label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
