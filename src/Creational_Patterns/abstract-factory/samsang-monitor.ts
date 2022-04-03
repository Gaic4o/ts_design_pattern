import { Monitor } from './monitor'

export default class SamsangMonitor extends Monitor {
    constructor() {
        super()
        this.screensize = 32
        this.injection_rate = '190Hz'
        this.resolution = 2120
        this.brightness = 1500
        this.panel = 'VA패널' 
    }
}