import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MISSIONS, HISTORY } from '../../data/mockData';
import styles from './LeftPanel.module.css';

function TaskCard({ mission, onExec }) {
  return (
    <div className={styles.tc}>
      <div className={styles.tcTop}>
        <div className={styles.tcName}>
          <div className={`${styles.tcDot} ${styles[mission.status]}`} />
          {mission.name}
        </div>
        <span className={styles.tcId}>#{mission.id}</span>
      </div>
      <button className={styles.tcBtn} onClick={() => onExec(mission)}>
        <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        立即执行
      </button>
    </div>
  );
}

function HistCard({ item }) {
  const ok = item.result === '完成';
  return (
    <div className={styles.hc}>
      <div className={styles.hcHead}>
        <span className={styles.hcName}>{item.name}</span>
        <span className={styles.hcId}>#{item.id}</span>
      </div>
      <div className={styles.hcFoot}>
        <span className={styles.hcTime}>{item.time}</span>
        <span className={`stag ${ok ? 'ok' : 'err'}`}>{item.result}</span>
      </div>
    </div>
  );
}

export default function LeftPanel({ onExecTask }) {
  const { activePane, setActivePane, leftPanelOpen, setLeftPanelOpen } = useApp();
  const [query, setQuery] = useState('');

  const filtered = MISSIONS.filter(m =>
    !query || m.id.toLowerCase().includes(query.toLowerCase()) || m.name.includes(query)
  );

  return (
    <>
      {/* Mobile overlay */}
      {leftPanelOpen && (
        <div className={styles.overlay} onClick={() => setLeftPanelOpen(false)} />
      )}

      <aside className={`${styles.panel} ${leftPanelOpen ? styles.open : ''}`}>
        {/* Tab header */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activePane === 'tasks' ? styles.activeTab : ''}`}
            onClick={() => setActivePane('tasks')}
          >
            任务列表
          </button>
          <button
            className={`${styles.tab} ${activePane === 'hist' ? styles.activeTab : ''}`}
            onClick={() => setActivePane('hist')}
          >
            执行记录
          </button>
        </div>

        {/* Task pane */}
        {activePane === 'tasks' && (
          <div className={styles.pane}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="搜索任务..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div className={styles.scroll}>
              {filtered.map(m => (
                <TaskCard key={m.id} mission={m} onExec={onExecTask} />
              ))}
            </div>
          </div>
        )}

        {/* History pane */}
        {activePane === 'hist' && (
          <div className={styles.pane}>
            <div className={styles.scroll}>
              {HISTORY.map(h => <HistCard key={h.id} item={h} />)}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
