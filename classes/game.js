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
            generatingBeans: true,
            showCoffee: false,
        }
        this.grid = new Grid(this.performUpdates);
    }

    componentDidMount() {
        this.events = new Events(this.performUpdates);
        this.generateBeans();
        setInterval(() => {
            this.events.handleNextEvents();
            this.performUpdates();
        }, 200);
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    generateBeans() {
        if (!this.state.generatingBeans) return;
        setTimeout(() => {
            this.events.addEvent(
                new BeanFallingEvent(
                    (new Date()).getTime(),
                    this.events,
                    this.grid,
                    this.incrementCounter,
                    this.removeFromGrid
                )
            );
            this.generateBeans();
        }, Math.floor(Math.random() * 3000) + 1000)
    }

    performUpdates = (updates) => {
        this.setState({
            grid: this.grid.getGrid(),
        });
    }

    counter() {
        return this.counter;
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            let obj = {};
            if (prevState.counter == 3) {
                obj.showCoffee = true;
            }
            obj.counter = prevState.counter + 1;
            return obj;
        });
    }

    removeFromGrid = (id) => {
        this.grid.removeItem(id);
    }

    header() {
        return <div>{this.state.counter} beans</div>
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

    renderCoffeeButton() {
        if (this.state.showCoffee) {
            return (<div className="example">
                make coffee
            </div>);
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="section">
                <Overlay>
                    {this.renderCoffeeButton()}
                </Overlay>
                {this.header()}
                {this.renderGrid()}
                {GameStyle()}
            </div>
        );
    }
}

export default Game
