import AppleeMonitor from "./applee-monitor";
import MinsuMonitor from "./minsu-monitor";
import SamSangMonitor from "./samsang-monitor";
import IMonitor from './monitor'


export default class MonitorFactory {

    static getMonitor(monitor: string): IMonitor {
        switch(monitor) {
            case "AppleeMonitor":
                return new AppleeMonitor();
            case "MinsuMonitor":
                return new MinsuMonitor();
            case "SamSangMonitor":
                return new SamSangMonitor();
            default:
                throw Error('없는 상품 입니다.')
        }
        // if (monitor === 'AppleeMonitor') {
        //     return new AppleeMonitor()
        // } else if (monitor === 'MinsuMonitor') {
        //     return new MinsuMonitor() 
        // } else {
        //     return new SamSangMonitor() 
        // }
    } 
}