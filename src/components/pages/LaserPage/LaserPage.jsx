import { useState } from 'react';
import PageShell from '../PageShell';
import styles from './LaserPage.module.css';

export default function LaserPage() {
  const [stopDist, setStopDist] = useState(0.30);
  const [slowDist, setSlowDist] = useState(0.80);
  const [slowSpeed, setSlowSpeed] = useState(0.30);

  return (
    <PageShell title="激光避障">
      <div className="sc">
        <div className="sc-title">扫描视图</div>
        <div className={styles.laserView}>
          <div className={styles.ring} style={{ width: 60, height: 60 }} />
          <div className={styles.ring} style={{ width: 110, height: 110 }} />
          <div className={styles.ring} style={{ width: 165, height: 165 }} />
          <div className={styles.sweep} />
          <div className={styles.robot}>AGV</div>
          <div className={styles.obs} style={{ left: 'calc(50% + 62px)', top: 'calc(50% - 46px)' }} />
          <div className={styles.obs} style={{ left: 'calc(50% - 38px)', top: 'calc(50% + 65px)' }} />
          <div className={styles.rangeLabel}>5.0 m</div>
          <div className={styles.obsCount}><span className={styles.obsDot}/>障碍 ×2</div>
        </div>
      </div>
      <div className="sc">
        <div className="sc-title">避障参数</div>
        <div className="fg">
          <label className="fl">急停距离 &nbsp;<span style={{ fontFamily: 'JetBrains Mono,monospace', color: 'var(--red)' }}>{stopDist.toFixed(2)}</span> m</label>
          <input type="range" min="0.1" max="1.0" step="0.05" value={stopDist} onChange={e => setStopDist(+e.target.value)}/>
        </div>
        <div className="fg">
          <label className="fl">减速距离 &nbsp;<span style={{ fontFamily: 'JetBrains Mono,monospace', color: 'var(--orange)' }}>{slowDist.toFixed(2)}</span> m</label>
          <input type="range" min="0.3" max="3.0" step="0.1" value={slowDist} onChange={e => setSlowDist(+e.target.value)}/>
        </div>
        <div className="fg">
          <label className="fl">减速后速度 &nbsp;<span style={{ fontFamily: 'JetBrains Mono,monospace', color: 'var(--green)' }}>{slowSpeed.toFixed(2)}</span> m/s</label>
          <input type="range" min="0.1" max="1.0" step="0.05" value={slowSpeed} onChange={e => setSlowSpeed(+e.target.value)}/>
        </div>
        <div className="fg">
          <label className="fl">扫描频率</label>
          <select><option>10 Hz</option><option selected>20 Hz</option><option>40 Hz</option></select>
        </div>
        <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px', marginBottom: 8 }}>
          <div className="tr"><span className="trl">前向激光</span><label className="sw"><input type="checkbox" defaultChecked/><div className="sw-t"/></label></div>
          <div className="tr"><span className="trl">后向激光</span><label className="sw"><input type="checkbox" defaultChecked/><div className="sw-t"/></label></div>
          <div className="tr"><span className="trl">静态障碍过滤</span><label className="sw"><input type="checkbox"/><div className="sw-t"/></label></div>
        </div>
        <button className="btn btn-p" style={{ width: '100%' }}>应用设置</button>
      </div>
    </PageShell>
  );
}
