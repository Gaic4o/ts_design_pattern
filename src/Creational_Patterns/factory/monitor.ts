import { quality } from './quality'

interface IMonitor {
    screensize: number;
    injection_rate: string;
    resolution: number;
    brightness: number;
    panel: string;
    getQuality(): quality
}

export default class Monitor implements IMonitor {
    screensize = 0
    injection_rate = ''
    resolution = 0
    brightness = 0
    panel = ''

    getQuality(): quality {
        return {
            screensize: this.screensize,
            injection_rate: this.injection_rate,
            resolution: this.resolution,
            brightness: this.brightness,
            panel: this.panel,
        }
    }
}