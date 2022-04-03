import Monitor from "./monitor";

export default class MinsuMonitor extends Monitor {
    constructor() {
        super() 
        this.screensize = 26
        this.injection_rate = 'FHD'
        this.resolution = 65
        this.brightness = 20
        this.panel = 'VA'
    }
}