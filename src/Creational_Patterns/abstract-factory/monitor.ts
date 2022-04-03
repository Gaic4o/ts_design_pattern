import { monitor } from './specification'

export interface IMonitor { 
    screensize: number;
    injection_rate: string;
    resolution: number;
    brightness: number;
    panel: string;

    getMonitor(): monitor
}

export class Monitor implements IMonitor {
    
    screensize = 0
    injection_rate = ''
    resolution = 0
    brightness = 0
    panel = ''

    getMonitor(): monitor {
        return {
            screensize: this.screensize,
            injection_rate: this.injection_rate,
            resolution: this.resolution,
            brightness: this.brightness,
            panel: this.panel,
        }
    }
}