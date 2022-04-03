import { Monitor } from './monitor'

export default class MinsuMonitor extends Monitor {
    constructor() {
        super()
        this.screensize = 27
        this.injection_rate = '144Hz'
        this.resolution = 1920
        this.brightness = 1500
        this.panel = 'VA패널' 
    }
}