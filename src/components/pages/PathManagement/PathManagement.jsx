import PageShell from '../PageShell';

export default function PathManagement() {
  return (
    <PageShell title="路径管理">
      <div className="sc">
        <div className="sc-title">路径列表</div>
        <div className="tw">
          <table className="tbl">
            <thead><tr><th>ID</th><th>名称</th><th>节点数</th><th>状态</th></tr></thead>
            <tbody>
              {[['P-001','主通道 A→D',6,'启用'],['P-002','回库路径',4,'启用'],['P-003','紧急避让',3,'启用'],['P-004','充电专用道',5,'禁用']].map(([id,name,nodes,status]) => (
                <tr key={id}>
                  <td className="mono" style={{ color: status === '启用' ? 'var(--blue)' : 'var(--txt3)' }}>{id}</td>
                  <td>{name}</td><td>{nodes}</td>
                  <td><span className={`sbadge ${status === '启用' ? 'charge' : 'idle'}`} style={{ fontSize: 10, padding: '2px 7px' }}>{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sc">
        <div className="sc-title">路径详情</div>
        <div className="f2">
          <div className="fg"><label className="fl">路径名称</label><input type="text" defaultValue="主通道A→D"/></div>
          <div className="fg"><label className="fl">优先级</label><select><option selected>中</option><option>高</option><option>低</option></select></div>
        </div>
        <div className="fg"><label className="fl">节点序列</label><input type="text" defaultValue="N1 → N2 → N3 → N4 → D1"/></div>
        <div className="f2">
          <div className="fg"><label className="fl">最大速度 (m/s)</label><input type="number" defaultValue="1.5" step="0.1"/></div>
          <div className="fg"><label className="fl">转弯限速 (m/s)</label><input type="number" defaultValue="0.5" step="0.1"/></div>
        </div>
        <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px', marginBottom: 9 }}>
          <div className="tr"><span className="trl">双向通行</span><label className="sw"><input type="checkbox" defaultChecked/><div className="sw-t"/></label></div>
          <div className="tr"><span className="trl">启用路径</span><label className="sw"><input type="checkbox" defaultChecked/><div className="sw-t"/></label></div>
        </div>
        <div className="btn-row"><button className="btn btn-p">保存</button><button className="btn btn-d">删除路径</button></div>
      </div>
    </PageShell>
  );
}
