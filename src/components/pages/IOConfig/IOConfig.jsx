import PageShell from '../PageShell';
import { DI_DATA, DO_DATA } from '../../../data/mockData';
import styles from './IOConfig.module.css';

function IOItem({ item, type }) {
  const cls = item.on ? (type === 'in' ? styles.ledIn : styles.ledOut) : '';
  return (
    <div className={styles.ioItem}>
      <div className={`${styles.led} ${cls}`} />
      <div>
        <div className={styles.ioN}>{item.n}</div>
        <div className={styles.ioD}>{item.desc}</div>
      </div>
      <div className={styles.ioV}>{item.on ? 'HIGH' : 'LOW'}</div>
    </div>
  );
}

export default function IOConfig() {
  return (
    <PageShell title="IO 口配置">
      <div className="sc">
        <div className="sc-title">数字输入 DI</div>
        <div className={styles.ioGrid}>
          {DI_DATA.map(d => <IOItem key={d.n} item={d} type="in" />)}
        </div>
      </div>
      <div className="sc">
        <div className="sc-title">数字输出 DO</div>
        <div className={styles.ioGrid}>
          {DO_DATA.map(d => <IOItem key={d.n} item={d} type="out" />)}
        </div>
      </div>
      <div className="sc" style={{ gridColumn: '1/-1' }}>
        <div className="sc-title">通道配置</div>
        <div className="f2" style={{ marginBottom: 10 }}>
          <div className="fg"><label className="fl">选择通道</label><select><option>DI-01</option><option>DI-02</option><option>DO-01</option></select></div>
          <div className="fg"><label className="fl">功能映射</label><select><option>货物检测</option><option>急停信号</option><option>报警输出</option></select></div>
          <div className="fg"><label className="fl">触发方式</label><select><option>高电平</option><option>低电平</option><option>上升沿</option></select></div>
          <div className="fg"><label className="fl">防抖 (ms)</label><input type="number" defaultValue="20"/></div>
        </div>
        <button className="btn btn-p">保存配置</button>
      </div>
    </PageShell>
  );
}
