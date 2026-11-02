import { STACK } from "../data";
import styles from "./Marquee.module.css";

// Список дублюється для безшовного циклу; ключ складається з номера копії й назви технології
const ITEMS = [0, 1].flatMap((copy) => STACK.map((name) => ({ key: `${copy}-${name}`, name })));

export default function Marquee() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div data-a="mqs">
        <div className={styles.track}>
          {ITEMS.map(({ key, name }) => <span key={key}>{name}</span>)}
        </div>
      </div>
    </div>
  );
}
