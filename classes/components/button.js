import React from 'react';
import ButtonStyle from '../styles/buttonStyle.js'

class Button extends React.Component {
    constructor(props) {super(props)}

    render() {
        if (!this.props.hidden) {
            return <button className="button" {...this.props}>
                {this.props.children}
                <ButtonStyle/>
            </button>;
        } else {
            return null;
        }
    }
}

export default Button;
