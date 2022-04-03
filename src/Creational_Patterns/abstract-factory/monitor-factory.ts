import AppleeMonitor from './applee-monitor';
import MinsuMonitor from './minsu-monitor';
import SamsangMonitor from './samsang-monitor';

import { IMonitor } from './monitor'

export default class MonitorFactory {
    static getMonitor(monitor: string) : IMonitor {
       switch(monitor) {
           case "AppleeMonitor":
               return new AppleeMonitor();
            case "MinsuMonitor":
                return new MinsuMonitor();
            case "SamsangMonitor":
                return new SamsangMonitor();
            default:
                throw Error('없는 모니터 입니다.')
        } 
    }
}