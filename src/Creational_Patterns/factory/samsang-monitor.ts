import Monitor from "./monitor";

export default class SamSangMonitor extends Monitor {
    constructor() {
        super() 
        this.screensize = 32
        this.injection_rate = 'FHD'
        this.resolution = 165
        this.brightness = 300
        this.panel = 'WideViewingAngle'
    }
}