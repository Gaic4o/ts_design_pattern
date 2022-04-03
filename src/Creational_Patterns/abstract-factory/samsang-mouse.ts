import { Mouse } from './mouse'

export default class SamsangMouse extends Mouse {
    constructor() {
        super()
        this.reactionRate = '상하'
        this.transmissionSystem = '1300dpi'
        this.numberOfButtons = '6버튼'
        this.connectionSystem = '무선'
    }
}