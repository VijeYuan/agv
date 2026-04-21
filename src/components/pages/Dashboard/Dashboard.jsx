import { useState } from 'react';
import LeftPanel from '../../LeftPanel/LeftPanel';
import MapView from '../../MapView/MapView';
import DetailPanel from '../../DetailPanel/DetailPanel';
import Modal from '../../Modal/Modal';
import styles from './Dashboard.module.css';

export default function Dashboard({ showToast }) {
  const [pendingMission, setPendingMission] = useState(null);

  const handleExecTask = (mission) => setPendingMission(mission);

  const handleConfirm = () => {
    showToast('任务已下发成功', `AGV-001 正在执行 · #${pendingMission.id}`, 'success');
    setPendingMission(null);
  };

  return (
    <div className={styles.layout}>
      <LeftPanel onExecTask={handleExecTask} />
      <MapView />
      <DetailPanel />
      <Modal mission={pendingMission} onCancel={() => setPendingMission(null)} onConfirm={handleConfirm} />
    </div>
  );
}
