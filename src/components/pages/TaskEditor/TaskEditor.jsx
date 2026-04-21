import PageShell from '../PageShell';

export default function TaskEditor() {
  return (
    <PageShell title="任务编辑 & 计划">
      <div className="sc">
        <div className="sc-title">新建任务</div>
        <div className="f2">
          <div className="fg"><label className="fl">任务类型</label><select><option>搬运</option><option>充电</option><option>回库</option></select></div>
          <div className="fg"><label className="fl">优先级</label><select><option>高</option><option selected>中</option><option>低</option></select></div>
          <div className="fg"><label className="fl">起始节点</label><select><option>N-01</option><option>N-02</option><option>D-01</option></select></div>
          <div className="fg"><label className="fl">目标节点</label><select><option>D-01</option><option>C-01</option></select></div>
          <div className="fg"><label className="fl">最大重量 (kg)</label><input type="number" defaultValue="100"/></div>
          <div className="fg"><label className="fl">停靠时长 (s)</label><input type="number" defaultValue="5"/></div>
        </div>
        <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px', marginBottom: 10 }}>
          <div className="tr"><span className="trl">完成后自动充电</span><label className="sw"><input type="checkbox"/><div className="sw-t"/></label></div>
          <div className="tr"><span className="trl">循环执行</span><label className="sw"><input type="checkbox"/><div className="sw-t"/></label></div>
        </div>
        <div className="btn-row">
          <button className="btn btn-b">立即执行</button>
          <button className="btn btn-p">加入队列</button>
          <button className="btn btn-g">保存草稿</button>
        </div>
      </div>

      <div className="sc">
        <div className="sc-title">执行队列</div>
        <div className="tw">
          <table className="tbl">
            <thead><tr><th>任务 ID</th><th>路线</th><th>状态</th><th>进度</th></tr></thead>
            <tbody>
              <tr><td className="mono" style={{ color: 'var(--blue)' }}>#TK-2241</td><td>A12→B03</td><td><span className="sbadge moving" style={{ fontSize: 10, padding: '2px 7px' }}><span className="sbadge-dot"/>运行</span></td><td className="mono">65%</td></tr>
              <tr><td className="mono" style={{ color: 'var(--txt3)' }}>#TK-2242</td><td>D01→P01</td><td><span className="sbadge idle" style={{ fontSize: 10, padding: '2px 7px' }}>等待</span></td><td className="mono">0%</td></tr>
              <tr><td className="mono" style={{ color: 'var(--txt3)' }}>#TK-2243</td><td>N03→C01</td><td><span className="sbadge charge" style={{ fontSize: 10, padding: '2px 7px' }}>排队</span></td><td className="mono">0%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="sc-title" style={{ marginTop: 14 }}>计划任务</div>
        <div className="tw">
          <table className="tbl">
            <thead><tr><th>名称</th><th>时间</th><th>重复</th><th>状态</th></tr></thead>
            <tbody>
              <tr><td>午夜充电</td><td className="mono">23:00</td><td>每日</td><td><span className="sbadge charge" style={{ fontSize: 10, padding: '2px 7px' }}>启用</span></td></tr>
              <tr><td>早班搬运</td><td className="mono">08:30</td><td>工作日</td><td><span className="sbadge charge" style={{ fontSize: 10, padding: '2px 7px' }}>启用</span></td></tr>
              <tr><td>月度自检</td><td className="mono">01:00</td><td>每月</td><td><span className="sbadge idle" style={{ fontSize: 10, padding: '2px 7px' }}>禁用</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
