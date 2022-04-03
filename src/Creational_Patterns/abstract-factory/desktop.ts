import { desktop } from './specification'

export interface IDeskTop { 
    cpu: string;
    core: string;
    graphic: string;
    speed: string;

    getDeskTop(): desktop
}

export class Desktop implements IDeskTop {
    cpu = ''
    core = ''
    graphic = ''
    speed = ''

    getDeskTop(): desktop {
        return {
            cpu: this.cpu,
            core: this.core,
            graphic: this.graphic,
            speed: this.speed
        }
    }
}