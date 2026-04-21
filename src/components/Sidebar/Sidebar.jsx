import { useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { NAV_ITEMS } from '../../data/mockData';
import styles from './Sidebar.module.css';

const ICONS = {
  dashboard: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  path:      <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M7.5 12h9M19 7.5v9"/></svg>,
  tasks:     <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
  alerts:    <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  io:        <svg viewBox="0 0 24 24"><rect x="2" y="7" width="4" height="10" rx="1"/><rect x="18" y="7" width="4" height="10" rx="1"/><rect x="9" y="4" width="6" height="16" rx="1"/><line x1="6" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="18" y2="12"/></svg>,
  laser:     <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
  settings:  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
};

function NavItem({ item, active, onNav, sidebarOpen }) {
  const tooltipRef = useRef(null);
  const innerRef = useRef(null);

  // Set tooltip top position precisely to the icon center on mouse enter
  const handleMouseEnter = () => {
    if (sidebarOpen || !tooltipRef.current || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    tooltipRef.current.style.top = (rect.top + rect.height / 2) + 'px';
  };

  return (
    <div
      className={`${styles.navItem} ${active ? styles.active : ''}`}
      onClick={() => onNav(item.key)}
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.navInner} ref={innerRef}>{ICONS[item.key]}</div>
      <span className={`${styles.navLabel} ${sidebarOpen ? styles.visible : ''}`}>{item.label}</span>
      {item.badge && (
        <div className={`${styles.badge} ${sidebarOpen ? styles.visible : ''}`}>{item.badge}</div>
      )}
      {!sidebarOpen && (
        <div className={styles.tooltip} ref={tooltipRef}>
          {item.badge ? `${item.label}（${item.badge}）` : item.label}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { sidebarOpen, activePage, setActivePage } = useApp();

  return (
    <nav className={`${styles.sidebar} ${sidebarOpen ? styles.expanded : ''}`}>
      {NAV_ITEMS.slice(0, 3).map(item => (
        <NavItem key={item.key} item={item} active={activePage === item.key} onNav={setActivePage} sidebarOpen={sidebarOpen} />
      ))}

      <div className={styles.sep} />

      {NAV_ITEMS.slice(3).map(item => (
        <NavItem key={item.key} item={item} active={activePage === item.key} onNav={setActivePage} sidebarOpen={sidebarOpen} />
      ))}

      <div className={styles.bottom}>
        <div className={styles.sep} />
        <NavItem
          item={{ key: 'settings', label: '参数设置', badge: null }}
          active={activePage === 'settings'}
          onNav={setActivePage}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </nav>
  );
}
