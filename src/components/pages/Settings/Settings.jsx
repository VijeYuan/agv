import PageShell from '../PageShell';
import styles from './Settings.module.css';

function ToggleRow({ label, defaultChecked }) {
  return (
    <div className="tr">
      <span className="trl">{label}</span>
      <label className="sw">
        <input type="checkbox" defaultChecked={defaultChecked} />
        <div className="sw-t" />
      </label>
    </div>
  );
}

export default function Settings() {
  return (
    <PageShell title="参数设置">
      <div className="sc">
        <div className="sc-title">运动参数</div>
        <div className="f2">
          <div className="fg"><label className="fl">最大速度 (m/s)</label><input type="number" defaultValue="2.0" step="0.1"/></div>
          <div className="fg"><label className="fl">最大加速度 (m/s²)</label><input type="number" defaultValue="0.8" step="0.1"/></div>
          <div className="fg"><label className="fl">最大减速度 (m/s²)</label><input type="number" defaultValue="1.2" step="0.1"/></div>
          <div className="fg"><label className="fl">转弯角速度 (rad/s)</label><input type="number" defaultValue="0.8" step="0.05"/></div>
          <div className="fg"><label className="fl">定位精度 (mm)</label><input type="number" defaultValue="10"/></div>
          <div className="fg"><label className="fl">角度精度 (°)</label><input type="number" defaultValue="2" step="0.1"/></div>
        </div>
        <div className="btn-row"><button className="btn btn-p">保存</button><button className="btn btn-g">恢复默认</button></div>
      </div>

      <div className="sc">
        <div className="sc-title">通信参数</div>
        <div className="fg"><label className="fl">调度服务器 IP</label><input type="text" defaultValue="192.168.1.10"/></div>
        <div className="f2">
          <div className="fg"><label className="fl">端口</label><input type="number" defaultValue="8080"/></div>
          <div className="fg"><label className="fl">本机 IP</label><input type="text" defaultValue="192.168.1.101"/></div>
          <div className="fg"><label className="fl">心跳间隔 (ms)</label><input type="number" defaultValue="500"/></div>
          <div className="fg"><label className="fl">重连超时 (s)</label><input type="number" defaultValue="10"/></div>
        </div>
        <div className={styles.toggleBox}>
          <ToggleRow label="自动重连" defaultChecked />
          <ToggleRow label="远程调试" />
        </div>
        <div className="btn-row"><button className="btn btn-p">保存</button></div>
      </div>

      <div className="sc">
        <div className="sc-title">电量管理</div>
        <div className="f2">
          <div className="fg"><label className="fl">低电量阈值 (%)</label><input type="number" defaultValue="20"/></div>
          <div className="fg"><label className="fl">自动充电触发 (%)</label><input type="number" defaultValue="25"/></div>
          <div className="fg"><label className="fl">充满阈值 (%)</label><input type="number" defaultValue="95"/></div>
          <div className="fg"><label className="fl">充电站优先</label>
            <select><option>C-01（最近）</option><option>C-02</option></select>
          </div>
        </div>
        <div className={styles.toggleBox}>
          <ToggleRow label="低电量自动充电" defaultChecked />
          <ToggleRow label="任务中断充电" />
        </div>
        <div className="btn-row"><button className="btn btn-p">保存</button></div>
      </div>

      <div className="sc">
        <div className="sc-title">系统 &amp; 配置</div>
        <div className="fg"><label className="fl">系统版本</label><input type="text" defaultValue="AGV-OS v2.5.0" readOnly/></div>
        <div className={styles.toggleBox}>
          <ToggleRow label="开机自启动" defaultChecked />
          <ToggleRow label="详细日志" />
        </div>
        <div className="btn-row"><button className="btn btn-p">导出配置</button><button className="btn btn-g">导入配置</button></div>
        <div className={styles.danger}>
          <div className={styles.dangerLabel}>⚠ 危险操作</div>
          <div className="btn-row"><button className="btn btn-g">软重启</button><button className="btn btn-d">恢复出厂</button></div>
        </div>
      </div>
    </PageShell>
  );
}
