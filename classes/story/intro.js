import Button from '../components/button.js';
import IntroStyle from '../styles/introStyle.js'
import React from 'react';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCoffee: false,
            showDialog: false,
        }
    }

    onCoffeeClick = () => {
        this.setState({showDialog: true});
    }

    onDunnoClcik = () => {

    }

    render() {
        let dialog = this.state.showDialog ? <div className="dialog">
            how are you gonna grind your beans?
        </div> : null;
        return <>
            <Button hidden={!this.props.showCoffee} onClick={this.onCoffeeClick}>
                make coffee
            </Button>
            {dialog}
            <Button className="dunno" hidden={!this.state.showDialog} onClick={this.onDunnoClick}>
                i dunno
            </Button>
            <IntroStyle/>
        </>;
    }
}

export default Intro;
