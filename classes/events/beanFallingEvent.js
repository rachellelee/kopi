import Event from './event.js'
import Bean from '../items/bean.js'
import { DIRECTIONS } from '../../consts/directions.js';
import { DIMENSIONS } from '../../consts/dimensions.js';

class BeanFallingEvent extends Event {
    constructor(startTime, events, grid, incrementCounter, removeFromGrid) {
        super(events, grid);
        this.time = startTime;
        this.bean = new Bean(incrementCounter, removeFromGrid);
        this.beanRow = 0;
        this.lastRow = 5;
    }

    handle() {
        if (this.beanRow == 0) {
            let xPos = Math.floor(Math.random() * DIMENSIONS.GRIDWIDTH);
            this.beanId = this.grid.putItem(this.bean, [this.beanRow, xPos]);
            this.bean.setId(this.beanId);
        }
        if (this.beanRow != this.lastRow) {
            this.grid.moveItem(this.beanId, DIRECTIONS.DOWN, 1);
            this.time += 1000;
            this.events.addEvent(this);
        }
        this.beanRow += 1;
    }
}

export default BeanFallingEvent
