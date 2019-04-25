import Item from './item.js'

class Bean extends Item {
    constructor(incrementCounter, removeFromGrid) {
        super()
        this.incrementCounter = incrementCounter;
        this.removeFromGrid = removeFromGrid;
    }

    setId(id) {
        this.id = id;
    }

    handleOnClick = () => {
        this.incrementCounter();
        this.removeFromGrid(this.id);
    }

    getShape() {
        let bean = (
            <a href="#" onClick={this.handleOnClick}>
                º
            </a>
        );
       return [[bean]];
    }
}

export default Bean
