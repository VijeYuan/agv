import PageShell from '../PageShell';
import { ALERTS } from '../../../data/mockData';

export default function AlertCenter() {
  return (
    <PageShell title="告警中心">
      <div className="sc" style={{ gridColumn: '1/-1' }}>
        <div className="sc-title">未处理告警 ({ALERTS.length})</div>
        <div className="tw" style={{ maxHeight: 360 }}>
          <table className="tbl">
            <thead>
              <tr><th>级别</th><th>时间</th><th>内容</th><th>操作</th></tr>
            </thead>
            <tbody>
              {ALERTS.map(a => (
                <tr key={a.id}>
                  <td><span className={`sbadge ${a.level === '高' ? 'error' : 'idle'}`} style={{ fontSize: 10, padding: '2px 7px' }}>{a.level}</span></td>
                  <td className="mono">{a.time}</td>
                  <td>{a.msg}</td>
                  <td><button className="btn btn-g" style={{ padding: '3px 9px', fontSize: 11, borderRadius: 7 }}>处理</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
