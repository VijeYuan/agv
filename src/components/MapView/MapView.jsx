import { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { ZONES } from '../../data/mockData';
import styles from './MapView.module.css';

export default function MapView() {
  const { detailPanelOpen, toggleDetailPanel } = useApp();
  const [zoneIdx, setZoneIdx] = useState(0);
  const [mapMode, setMapMode] = useState('path');
  const agvRef = useRef({ x: 40, y: 82, vx: 0.013, vy: 0.009 });
  const [agvPos, setAgvPos] = useState({ x: 40, y: 82 });

  const zone = ZONES[zoneIdx];

  useEffect(() => {
    const id = setInterval(() => {
      const a = agvRef.current;
      a.x += a.vx; a.y += a.vy;
      if (a.x < 8 || a.x > 88) a.vx = -a.vx;
      if (a.y < 8 || a.y > 88) a.vy = -a.vy;
      setAgvPos({ x: a.x, y: a.y });
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.wrap}>
      {/* Toolbar: left | center | right */}
      <div className={styles.toolbar}>

        {/* LEFT — zone selector */}
        <div className={styles.zoneSelector} onClick={() => setZoneIdx(i => (i + 1) % ZONES.length)}>
          <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          <span>{zone.zone}</span>
          <span className={styles.zoneSep}>/</span>
          <span className={styles.floorBadge}>{zone.floor}</span>
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        {/* CENTER — AGV pill */}
        <div className={styles.agvPill}>
          <svg viewBox="0 0 24 24"><path d="M12 2L4 6v6c0 5 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11V6L12 2z"/></svg>
          <span>AGV-001</span>
          <span className={styles.agvStatus}>
            <span className={styles.agvDot} />
            运行中
          </span>
        </div>

        {/* RIGHT — mode icon buttons */}
        <div className={styles.modeBtns}>
          <button
            className={`${styles.mapBtn} ${mapMode === 'path' ? styles.active : ''}`}
            onClick={() => setMapMode('path')}
            title="路径管理"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="19" cy="5" r="2.5"/>
              <circle cx="19" cy="19" r="2.5"/>
              <path d="M7.5 12h9M19 7.5v9"/>
            </svg>
          </button>
          <button
            className={`${styles.mapBtn} ${mapMode === 'map' ? styles.active : ''}`}
            onClick={() => setMapMode('map')}
            title="地图管理"
          >
            <svg viewBox="0 0 24 24">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
              <line x1="8" y1="2" x2="8" y2="18"/>
              <line x1="16" y1="6" x2="16" y2="22"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Map canvas */}
      <div className={styles.mapView}>
        <div className={styles.gridBg} />
        <svg className={styles.mapSvg} viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
          <rect x="58" y="28" width="784" height="444" rx="18" fill="none" stroke="var(--border2)" strokeWidth="1.5"/>
          <line x1="58" y1="250" x2="842" y2="250" stroke="var(--border)" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="450" y1="28" x2="450" y2="472" stroke="var(--border)" strokeWidth="1" strokeDasharray="4,4"/>
          {[[88,52],[208,52],[88,152],[208,152],[88,268],[208,268],[88,368],[208,368]].map(([x,y],i) => (
            <rect key={i} x={x} y={y} width="100" height="80" rx="6" fill="var(--shelf-fill)" stroke="var(--shelf-stroke)" strokeWidth="1"/>
          ))}
          {[['A1',138,96],['A2',258,96],['B1',138,196],['B2',258,196],['C1',138,312],['C2',258,312],['D1',138,412],['D2',258,412]].map(([t,x,y]) => (
            <text key={t} x={x} y={y} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--txt3)">{t}</text>
          ))}
          {[[498,52,100],[618,52,100],[738,52,82],[498,152,100],[618,152,100],[738,152,82],[498,268,100],[618,268,100],[738,268,82],[498,368,100],[618,368,100]].map(([x,y,w],i) => (
            <rect key={i} x={x} y={y} width={w} height="80" rx="6" fill="var(--shelf-green)" stroke="var(--shelf-green-s)" strokeWidth="1"/>
          ))}
          <path d="M 360 410 L 360 250 L 548 250 L 548 92" stroke="var(--path-color)" strokeWidth="2" fill="none" strokeDasharray="8,4" opacity="0.45"/>
          <circle cx="360" cy="410" r="4" fill="var(--path-color)" opacity="0.55"/>
          <circle cx="548" cy="92"  r="4" fill="var(--path-color)" opacity="0.55"/>
          <rect x="798" y="38"  width="28" height="28" rx="7" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5"/>
          <text x="812" y="57"  textAnchor="middle" fontSize="15">⚡</text>
          <rect x="798" y="268" width="28" height="28" rx="7" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5"/>
          <text x="812" y="287" textAnchor="middle" fontSize="15">⚡</text>
          <text x="450" y="462" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--txt3)" opacity="0.35">{zone.zone} · {zone.floor}</text>
        </svg>

        <div className={styles.agvMarker} style={{ left: `${agvPos.x}%`, top: `${agvPos.y}%` }}>
          <div className={styles.agvInner}>
            <svg viewBox="0 0 24 24"><path d="M12 2L4 6v6c0 5 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11V6L12 2z"/></svg>
            <div className={styles.agvRing} />
          </div>
          <div className={styles.agvBubble}>AGV-001 · 1.2 m/s</div>
        </div>

        <div className={styles.scale}><div className={styles.scaleBar}/><span>10 m</span></div>
        <div className={styles.controls}>
          <div className={styles.ctrlBtn}>⤢</div>
          <div className={styles.ctrlBtn}>+</div>
          <div className={styles.ctrlBtn}>−</div>
        </div>
      </div>
    </div>
  );
}
