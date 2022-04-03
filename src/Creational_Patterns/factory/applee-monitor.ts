import Monitor from "./monitor";

export default class AppleeMonitor extends Monitor {
    constructor() {
        super() 
        this.screensize = 24 
        this.injection_rate = 'FHD'
        this.resolution = 75
        this.brightness = 16
        this.panel = 'IPS'
    }
}