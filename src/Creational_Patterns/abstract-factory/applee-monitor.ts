import { Monitor } from './monitor'

export default class AppleeMonitor extends Monitor {
    constructor() {
        super()
        this.screensize = 32
        this.injection_rate = '75Hz'
        this.resolution = 1920
        this.brightness = 1500
        this.panel = 'VA패널' 
    }
}