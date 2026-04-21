export const MISSIONS = [
  { id: 'TK-2241', name: 'A-12 → B-03 搬运', status: 'running' },
  { id: 'TK-2242', name: 'D-01 → P-01 回库', status: 'waiting' },
  { id: 'TK-2243', name: 'N-03 → C-01 充电', status: 'waiting' },
  { id: 'TK-2244', name: 'A-05 → D-02 搬运', status: 'waiting' },
  { id: 'TK-2245', name: 'B-01 → C-03 搬运', status: 'waiting' },
  { id: 'TK-2246', name: '全场巡检任务',       status: 'waiting' },
];

export const HISTORY = [
  { id: 'TK-2238', name: 'A-12 → B-03 搬运', time: '13:20:44', result: '完成' },
  { id: 'TK-2235', name: 'D-01 → P-01 回库', time: '12:58:10', result: '完成' },
  { id: 'TK-2231', name: 'N-03 → C-01 充电', time: '12:30:05', result: '中断' },
  { id: 'TK-2228', name: 'A-05 → D-02 搬运', time: '11:55:22', result: '完成' },
  { id: 'TK-2224', name: 'B-01 → C-03 搬运', time: '11:20:11', result: '完成' },
];

export const ALERTS = [
  { id: 1, level: '高', time: '13:42:07', msg: 'AGV 电量不足低于 15% 阈值' },
  { id: 2, level: '高', time: '13:41:55', msg: '路径规划失败，B-3 有障碍' },
  { id: 3, level: '中', time: '13:38:12', msg: '通信延迟超过 500ms'        },
];

export const DI_DATA = [
  { n: 'DI-01', desc: '货物检测', on: true  },
  { n: 'DI-02', desc: '急停按钮', on: false },
  { n: 'DI-03', desc: '装载确认', on: true  },
  { n: 'DI-04', desc: '卸载完成', on: false },
  { n: 'DI-05', desc: '门磁信号', on: true  },
  { n: 'DI-06', desc: '备用',     on: false },
];

export const DO_DATA = [
  { n: 'DO-01', desc: '蜂鸣器',  on: false },
  { n: 'DO-02', desc: '警示灯',  on: true  },
  { n: 'DO-03', desc: '电磁铁',  on: true  },
  { n: 'DO-04', desc: '继电器1', on: false },
  { n: 'DO-05', desc: '继电器2', on: false },
  { n: 'DO-06', desc: '备用',    on: false },
];

export const NAV_ITEMS = [
  { key: 'dashboard', label: '仪表盘',  badge: null },
  { key: 'path',      label: '路径管理', badge: null },
  { key: 'tasks',     label: '任务编辑', badge: null },
  { key: 'alerts',    label: '告警中心', badge: 3    },
  { key: 'io',        label: 'IO 配置',  badge: null },
  { key: 'laser',     label: '激光避障', badge: null },
];

export const ZONES = [
  { zone: '仓库 A 区', floor: '1F' },
  { zone: '仓库 A 区', floor: '2F' },
  { zone: '仓库 B 区', floor: '1F' },
  { zone: '仓库 C 区', floor: '1F' },
];
