import Forest from './forest.js';
import GameStyle from './styles/gameStyle.js';
import Header from './components/header.js';
import Kitchen from './kitchen.js';
import React from 'react';

import { MAPS } from '../consts/maps.js'
import { Switch, View } from 'react-view-switch';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            map: MAPS.FOREST,
        }
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 };
        });
    }

    changeMap = (map) => {
        console.log('changemap', map)
        this.setState({ map: map });
    }

    render() {
        return (
            <div className="section">
                <Header counter={this.state.counter}/>
                <Forest visible={this.state.map == MAPS.FOREST} counter={this.state.counter} incrementCounter={this.incrementCounter} changeMap={this.changeMap}/>
                <Kitchen visible={this.state.map == MAPS.KITCHEN} changeMap={this.changeMap}/>
                <GameStyle />
            </div>
        );
    }
}

export default Game
