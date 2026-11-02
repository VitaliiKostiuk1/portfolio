import { NAME, FOOTER } from "../data";
import common from "../styles/common.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${common.wrap} ${styles.row}`}>
        <span>© {new Date().getFullYear()} {NAME}</span>
        <span>{FOOTER.made}</span>
        <a href="#">{FOOTER.top}</a>
      </div>
    </footer>
  );
}
