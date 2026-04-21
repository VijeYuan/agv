import { useApp } from '../../context/AppContext';
import { useClock } from '../../hooks/useClock';
import styles from './Header.module.css';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;
}

export default function Header() {
  const { theme, toggleTheme, sidebarOpen, toggleSidebar } = useApp();
  const time = useClock();

  return (
    <header className={styles.hdr}>
      <div
        className={`${styles.logo} ${sidebarOpen ? styles.logoExpanded : ''}`}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <div className={styles.logoFull}>
            <div className={styles.logoMark}>
              <svg viewBox="0 0 24 24"><path d="M12 2L4 6v6c0 5.1 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11V6L12 2z"/></svg>
            </div>
            <span className={styles.logoName}>AGV 控制</span>
            <div className={styles.collapseBtn}>
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </div>
          </div>
        ) : (
          <div className={styles.hamburger}>
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </div>
        )}
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="搜索任务、节点、配置..." />
      </div>

      <div className={styles.right}>
        <span className={styles.clock}>{time}</span>

        <button className={styles.iconBtn} onClick={toggleTheme} title="切换主题">
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>

        <div className={styles.iconBtn} title="网络连接">
          <div className={styles.wifiBars}>
            {[1,2,3,4].map(i => (
              <div key={i} className={`${styles.wifiBar} ${i <= 3 ? styles.wifiOn : ''}`} style={{ height: `${i * 3 + 1}px` }} />
            ))}
          </div>
        </div>

        <div className={`${styles.iconBtn} ${styles.batBtn}`} title="设备电量">
          <div className={styles.batBody}>
            <div className={styles.batFill} style={{ width: '78%' }} />
          </div>
          <span className={styles.batPct}>78%</span>
        </div>
      </div>
    </header>
  );
}
