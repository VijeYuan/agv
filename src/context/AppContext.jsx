import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [detailPanelOpen, setDetailPanelOpen] = useState(true);
  const [activePane, setActivePane] = useState('tasks'); // 'tasks' | 'hist'
  const [leftPanelOpen, setLeftPanelOpen] = useState(false); // mobile

  const toggleTheme = useCallback(() => {
    setTheme(t => {
      const next = t === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen(v => !v), []);
  const toggleDetailPanel = useCallback(() => setDetailPanelOpen(v => !v), []);
  const toggleLeftPanel = useCallback(() => setLeftPanelOpen(v => !v), []);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      sidebarOpen, toggleSidebar, setSidebarOpen,
      activePage, setActivePage,
      detailPanelOpen, toggleDetailPanel,
      activePane, setActivePane,
      leftPanelOpen, toggleLeftPanel, setLeftPanelOpen,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
