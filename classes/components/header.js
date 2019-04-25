import HeaderStyle from '../styles/headerStyle.js';
import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.counter} beans
            <HeaderStyle />
        </div>

    }

}

export default Header;
