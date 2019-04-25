import React from 'react';
import OverlayStyle from './styles/overlayStyle.js';

class Overlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return this.props.hidden ? null : (
            <div className="overlay">
                {this.props.children}
                {OverlayStyle()}
            </div>
        );
    }
}

export default Overlay
