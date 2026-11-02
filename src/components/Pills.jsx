import common from "../styles/common.module.css";

export default function Pills({ list, dashed = false }) {
  return (
    <div className={common.pills}>
      {list.map((s) => (
        <span key={s} className={`${common.pill} ${dashed ? common.ln : ""}`}>{s}</span>
      ))}
    </div>
  );
}
