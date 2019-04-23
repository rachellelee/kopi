import Blank from './components/blank.js';
import { DIRECTIONS } from '../consts/directions.js';

class Grid {
    constructor() {
        this.idInc = 0;
        this.items = {};
        this.grid = new Array(36).fill(<Blank/>).map(() => new Array(36).fill(<Blank/>));
    }

    getGrid() {
        return this.grid;
    }

    putItem(item, position) {
        let newId = this.idInc;
        this.idInc += 1;
        this.items[newId] = {
            position: position,
            item: item,
        };
        this.updateGrid();
        return newId;
    }

    removeItem(id) {
        delete this.items[id];
    }

    moveItem(id, direction, steps) {
        let item = this.items[id];
        switch(direction) {
            case DIRECTIONS.UP:
                item.position[0] = item.position[0] - steps;
                // TODO check if valid position
            case DIRECTIONS.DOWN:
                this.items[id].position[0] = this.items[id].position[0] + steps;
            case DIRECTIONS.LEFT:
                item.position[1] = item.position[1] - steps;
            case DIRECTIONS.RIGHT:
                item.position[1] = item.position[1] + steps;
        }
        this.updateGrid();
    }

    // todo only update ones that have changed
    updateGrid() {
        const itemKeys = Object.keys(this.items);
        this.grid = new Array(36).fill(<Blank/>).map((val, ind) => new Array(36).fill(<Blank/>));
        itemKeys.forEach(key => {
            let shape = this.items[key].item.getShape();
            let position = this.items[key].position;
            shape.forEach((row, rowInd) => {
                row.forEach((cell, cellInd) => {
                    this.grid[position[0] + rowInd][position[1] + cellInd] = cell;
                });
            });
        });
    }
}

export default Grid
