import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

function ToastItem({ toast }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`${styles.toast} ${styles[toast.type]} ${visible ? styles.show : ''}`}>
      <div className={styles.dot} />
      <div className={styles.msg}>
        {toast.msg}
        {toast.sub && <div className={styles.sub}>{toast.sub}</div>}
      </div>
    </div>
  );
}

export default function Toast({ toasts }) {
  return (
    <div className={styles.wrap}>
      {toasts.map(t => <ToastItem key={t.id} toast={t} />)}
    </div>
  );
}
