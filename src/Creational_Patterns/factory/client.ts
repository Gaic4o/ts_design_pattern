import MonitorFactory from './monitor-factory'

const MONITOR = MonitorFactory.getMonitor('MinsuMonitor')
console.log(MONITOR.getQuality());