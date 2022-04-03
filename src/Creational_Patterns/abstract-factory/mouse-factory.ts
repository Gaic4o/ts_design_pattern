import MinsuMouse from './minsu-mouse';
import AppleeMouse from './applee-mouse';
import SamsangMouse from './samsang-mouse';
import { IMouse } from './mouse'

export default class MouseFactory {
    static getMouse(mouse: string) : IMouse {
       switch(mouse) {
           case "AppleeMouse":
               return new AppleeMouse();
            case "MinsuMouse":
                return new MinsuMouse();
            case "SamsangMouse":
                return new SamsangMouse();
            default:
                throw Error('없는 마우스 입니다.')
        } 
    }
}