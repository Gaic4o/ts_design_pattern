import { Mouse } from './mouse'

export default class AppleeMouse extends Mouse {
    constructor() {
        super()
        this.reactionRate = '상하'
        this.transmissionSystem = '2000dpi'
        this.numberOfButtons = '6버튼'
        this.connectionSystem = '유선'
    }
}