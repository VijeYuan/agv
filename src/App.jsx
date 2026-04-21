import { useApp } from './context/AppContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Settings from './components/pages/Settings/Settings';
import AlertCenter from './components/pages/AlertCenter/AlertCenter';
import TaskEditor from './components/pages/TaskEditor/TaskEditor';
import PathManagement from './components/pages/PathManagement/PathManagement';
import IOConfig from './components/pages/IOConfig/IOConfig';
import LaserPage from './components/pages/LaserPage/LaserPage';
import Toast from './components/Toast/Toast';
import { useToast } from './hooks/useToast';
import styles from './App.module.css';

const PAGE_MAP = {
  dashboard: Dashboard,
  settings:  Settings,
  alerts:    AlertCenter,
  tasks:     TaskEditor,
  path:      PathManagement,
  io:        IOConfig,
  laser:     LaserPage,
};

export default function App() {
  const { activePage } = useApp();
  const { toasts, showToast } = useToast();

  const PageComponent = PAGE_MAP[activePage] || Dashboard;

  return (
    <div className={styles.shell}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <PageComponent showToast={showToast} />
      </div>
      <Toast toasts={toasts} />
    </div>
  );
}
