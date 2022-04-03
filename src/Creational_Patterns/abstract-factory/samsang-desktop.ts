import { Desktop } from './desktop'

export default class SamsangDesktop extends Desktop {
    constructor() {
        super()
        this.cpu = '인텔코어'
        this.core = '코어i9'
        this.graphic = '6GB'
        this.speed = '20W'
    }
}