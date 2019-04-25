import BeanFallingEvent from './events/beanFallingEvent.js';
import Blank from './components/blank.js';
import Events from './events.js';
import GameStyle from './styles/gameStyle.js';
import Grid from './grid.js';
import Overlay from './overlay.js';
import React from 'react';

import { DIRECTIONS } from '../consts/directions.js';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            grid: [],
        }
        this.grid = new Grid();
    }

    componentDidMount() {
        this.events = new Events(this.performUpdates)
        let beanFallingEvent = new BeanFallingEvent(this.events, this.grid, this.incrementCounter);
        setInterval(() => {
            this.events.handleNextEvents();
            this.performUpdates();
        }, 1000);
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    performUpdates(updates) {
        this.setState({
            grid: this.grid.getGrid(),
        });
    }

    counter() {
        return this.counter;
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
    }

    header() {
        return <div>{this.state.counter}</div>
    }

    renderGrid() {
        return this.grid ? this.state.grid.map(row => {
            return (
                <div className="row">
                    {row.map(item => item)}
                </div>
            );
        }) : <div/>;
    }


    render() {
        return (
            <div className="section">
                <Overlay>
                    <div className="wsup">
                        wsup
                    </div>
                </Overlay>
                {this.header()}
                {this.renderGrid()}
                {GameStyle()}
            </div>
        );
    }
}

export default Game
