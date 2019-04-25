import BeanFallingEvent from './events/beanFallingEvent.js';
import Blank from './components/blank.js';
import Events from './events.js';
import ForestStyle from './styles/forestStyle.js';
import Grid from './grid.js';
import Intro from './story/intro.js';
import Overlay from './overlay.js';
import React from 'react';

import { DIRECTIONS } from '../consts/directions.js';

class Forest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            generatingBeans: true,
            showIntro: false,
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

    handleBeanClick = () => {
        this.props.incrementCounter();
        if (this.props.counter == 1) {
            this.setState({ showIntro: true })
        }
    }

    generateBeans() {
        if (!this.state.generatingBeans) return;
        setTimeout(() => {
            this.events.addEvent(
                new BeanFallingEvent(
                    (new Date()).getTime(),
                    this.events,
                    this.grid,
                    this.handleBeanClick,
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

    removeFromGrid = (id) => {
        this.grid.removeItem(id);
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
        return this.props.visible ? (
            <>
                <Overlay>
                    <Intro showCoffee={this.state.showIntro} changeMap={this.props.changeMap}/>
                </Overlay>
                {this.renderGrid()}
                {ForestStyle()}
            </>
        ) : null;
    }

}

export default Forest;
