import { Desktop } from './desktop'

export default class AppleeDesktop extends Desktop {
    constructor() {
        super()
        this.cpu = '인텔'
        this.core = '코어i5'
        this.graphic = '2GB'
        this.speed = '500W'
    }
}