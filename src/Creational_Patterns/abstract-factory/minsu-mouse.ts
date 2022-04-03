import { Mouse } from './mouse'

export default class MinsuMouse extends Mouse {
    constructor() {
        super()
        this.reactionRate = '상하'
        this.transmissionSystem = '3300dpi'
        this.numberOfButtons = '4버튼'
        this.connectionSystem = '무선'
    }
}