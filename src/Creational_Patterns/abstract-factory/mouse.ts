import { mouse } from './specification'

export interface IMouse { 
    reactionRate: string; 
    transmissionSystem: string; 
    numberOfButtons: string; 
    connectionSystem: string;

    getMouse(): mouse
}

export class Mouse implements IMouse {
    
    reactionRate = ''
    transmissionSystem = ''
    numberOfButtons = ''
    connectionSystem = ''

    getMouse(): mouse {
        return  {
            reactionRate: this.reactionRate,
            transmissionSystem: this.transmissionSystem,
            numberOfButtons: this.numberOfButtons,
            connectionSystem: this.connectionSystem
        }
    } 
}