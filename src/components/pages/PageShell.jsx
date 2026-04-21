import styles from './PageShell.module.css';

export default function PageShell({ title, children }) {
  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
