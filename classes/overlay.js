import React from 'react';
import OverlayStyle from './styles/overlayStyle.js';

class Overlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="overlay">
                {this.props.children}
                {this.props.style}
                {OverlayStyle()}
            </div>
        )

    }
}

export default Overlay
