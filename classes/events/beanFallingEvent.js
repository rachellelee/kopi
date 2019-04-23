import Event from './event.js'
import Bean from '../items/bean.js'
import { DIRECTIONS } from '../../consts/directions.js';

class BeanFallingEvent extends Event {
    constructor(events, grid, incrementCounter) {
        super(events, grid);
        this.bean = new Bean(incrementCounter);
        this.beanRow = 0;
        this.lastRow = 5;
        this.events.addNextEvent(this);
    }

    handle() {
        if (this.beanRow == 0) {
            this.beanId = this.grid.putItem(this.bean, [this.beanRow, 3]);
        }
        if (this.beanRow != this.lastRow) {
            this.grid.moveItem(this.beanId, DIRECTIONS.DOWN, 1);
            this.events.addNextEvent(this);
        }
        this.beanRow += 1;
    }
}

export default BeanFallingEvent
