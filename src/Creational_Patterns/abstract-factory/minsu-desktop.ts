import { Desktop } from './desktop'

export default class MinsuDesktop extends Desktop {
    constructor() {
        super()
        this.cpu = '인텔'
        this.core = '코어i7'
        this.graphic = '4GB'
        this.speed = '100W'
    }
}