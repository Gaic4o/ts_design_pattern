import { IDeskTop } from "./desktop";
import DesktopFactory from "./desktop-factory";
import { IMonitor } from "./monitor";
import MonitorFactory from "./monitor-factory";
import { IMouse } from "./mouse";
import MouseFactory from "./mouse-factory";

interface IComputer extends IDeskTop, IMonitor, IMonitor {}

export default class ComputerFactory {
    static getComputer(computer: string): IDeskTop | IMonitor | IMouse | undefined {
        try {
            if (['AppleeDesktop', 'MinsuDesktop', 'SamsangDesktop'].indexOf(computer) > -1) {
                return DesktopFactory.getDesktop(computer)
            }
            if (['AppleeMonitor', 'MinsuMonitor', 'SamsangMonitor'].indexOf(computer) > -1) {
                return MonitorFactory.getMonitor(computer)
            }
            if (['AppleeMouse', 'MinsuMouse', 'SamsangMouse'].indexOf(computer) > -1) {
                return MouseFactory.getMouse(computer)
            }
            throw new Error('없는 제품');
        } catch(e) {
            console.log(e);
        }
    }
}