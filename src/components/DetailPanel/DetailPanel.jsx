import { useApp } from '../../context/AppContext';
import styles from './DetailPanel.module.css';

function TimelineRow({ label, time, state }) {
  return (
    <div className={styles.tlRow}>
      <div className={styles.tlAside}>
        <div className={`${styles.tlDot} ${styles[state]}`} />
        <div className={styles.tlLine} />
      </div>
      <div className={styles.tlContent}>
        <div className={`${styles.tlTitle} ${state === 'now' ? styles.tlNow : state === 'wait' ? styles.tlWait : ''}`}>
          {label}
        </div>
        <div className={styles.tlMeta}>{time}</div>
      </div>
    </div>
  );
}

function StatRow({ label, value, color }) {
  return (
    <div className={styles.row}>
      <span className={styles.key}>{label}</span>
      <span className={`${styles.val} ${color ? styles[color] : ''}`}>{value}</span>
    </div>
  );
}

export default function DetailPanel() {
  const { detailPanelOpen, toggleDetailPanel } = useApp();

  return (
    <div className={styles.wrapper}>
      {/* Floating pull-tab on the panel's left edge */}
      <button
        className={styles.handle}
        onClick={toggleDetailPanel}
        title={detailPanelOpen ? '收起详情' : '展开详情'}
      >
        <svg viewBox="0 0 24 24">
          {detailPanelOpen
            ? <polyline points="15 18 9 12 15 6" />
            : <polyline points="9 18 15 12 9 6" />
          }
        </svg>
      </button>

      <aside className={`${styles.panel} ${!detailPanelOpen ? styles.collapsed : ''}`}>

        {/* Header: name left, status badge right */}
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <div className={styles.agvDot} />
            <span className={styles.title}>AGV-001 详情</span>
          </div>
          <div className={styles.headRight}>
            <span className="sbadge moving" style={{ fontSize: 10, padding: '2px 8px' }}>
              <span className="sbadge-dot" />运行中
            </span>
            <span className={styles.taskTag}>#TK-2241</span>
          </div>
        </div>

        <div className={styles.scroll}>

          {/* Position info grid */}
          <div className={styles.sec}>
            <div className={styles.secTitle}>位置 &amp; 运动</div>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <span className={styles.infoLabel}>当前节点</span>
                <span className={`${styles.infoVal} ${styles.blue}`}>N-06</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoLabel}>下一节点</span>
                <span className={styles.infoVal}>D-01</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoLabel}>速度</span>
                <span className={`${styles.infoVal} ${styles.orange}`}>1.2 m/s</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoLabel}>朝向</span>
                <span className={styles.infoVal}>90.0°</span>
              </div>
            </div>
            <div className={styles.coordRow}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
              <span>坐标 4.82, 2.31 m</span>
            </div>
          </div>

          {/* Battery */}
          <div className={styles.sec}>
            <div className={styles.secTitle}>电量状态</div>
            <div className={styles.batWrap}>
              <div className={styles.batHeader}>
                <span className={styles.batPct}>78%</span>
                <span className={styles.batHint}>预计剩余 3.2 小时</span>
              </div>
              <div className={styles.batTrack}>
                <div className={styles.batFill} style={{ width: '78%' }} />
              </div>
            </div>
          </div>

          {/* Quick controls — ABOVE timeline */}
          <div className={styles.sec}>
            <div className={styles.secTitle}>快捷控制</div>
            <div className={styles.ctrlRow}>
              <button className={styles.ctrlCancel}>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                取消任务
              </button>
              <button className={styles.ctrlStop}>
                <svg viewBox="0 0 24 24">
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                急停
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.sec}>
            <div className={styles.secTitle}>任务进度</div>
            <div className={styles.tl}>
              <TimelineRow label="接收任务"        time="13:40:02"      state="done" />
              <TimelineRow label="前往取货点 A-12" time="13:40:15"      state="done" />
              <TimelineRow label="装载 42.5 kg"    time="13:42:30"      state="done" />
              <TimelineRow label="前往 B-03"        time="预计 13:45:20" state="now"  />
              <TimelineRow label="卸载货物"          time="等待中"         state="wait" />
            </div>
          </div>

          {/* System info */}
          <div className={styles.sec}>
            <div className={styles.secTitle}>系统信息</div>
            <StatRow label="IP 地址"  value="192.168.1.101" />
            <StatRow label="总里程"   value="2890 km" />
            <StatRow label="CPU 占用" value="32%" />
            <StatRow label="温度"     value="42°C"     color="orange" />
            <StatRow label="信号强度" value="−42 dBm" color="green" />
          </div>

        </div>
      </aside>
    </div>
  );
}
