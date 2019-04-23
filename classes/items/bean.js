import Item from './item.js'

class Bean extends Item {
    constructor(incrementCounter) {
        super()
        this.incrementCounter = incrementCounter;
    }

    getShape() {
        let bean = (
            <a href="#" onClick={this.incrementCounter}>
                O
            </a>
        );
       return [[bean]];
    }
}

export default Bean
