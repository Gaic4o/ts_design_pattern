import AppleeDesktop from "./applee-desktop";
import MinsuDesktop from "./minsu-desktop";
import SamsangDesktop from "./samsang-desktop";
import { IDeskTop } from './desktop'

export default class DesktopFactory {
    static getDesktop(desktop: string) : IDeskTop {
       switch(desktop) {
           case "AppleeDesktop":
               return new AppleeDesktop();
            case "MinsuDesktop":
                return new MinsuDesktop();
            case "SamsangDesktop":
                return new SamsangDesktop();
            default:
                throw Error('없는 모니터 입니다.')
        } 
    }
}