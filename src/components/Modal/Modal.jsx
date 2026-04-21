import styles from './Modal.module.css';

export default function Modal({ mission, onCancel, onConfirm }) {
  if (!mission) return null;

  return (
    <div className={`${styles.overlay} ${mission ? styles.show : ''}`} onClick={e => e.target === e.currentTarget && onCancel()}>
      <div className={styles.modal}>
        <div className={styles.hero}>
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            <span>任务下发确认</span>
          </div>
          <div className={styles.heroTitle}>即将执行搬运任务</div>
          <div className={styles.heroRoute}>
            <svg viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2"/>
              <circle cx="19" cy="12" r="2"/>
              <path d="M7 12h10"/>
              <polyline points="15 8 19 12 15 16"/>
            </svg>
            <span>{mission.name}</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>任务编号</span>
            <span className={styles.infoVal}>#{mission.id}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>执行设备</span>
            <span className={styles.infoVal}>AGV-001</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>当前状态</span>
            <span className={`${styles.infoVal} ${styles.green}`}>待机中</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={onCancel}>取消</button>
            <button className={styles.confirmBtn} onClick={onConfirm}>确认执行</button>
          </div>
        </div>
      </div>
    </div>
  );
}
