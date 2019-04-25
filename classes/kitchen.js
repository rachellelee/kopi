import Button from './components/button.js';
import React from 'react';

import { MAPS } from '../consts/maps.js';

class Kitchen extends React.Component {
    render() {
        return this.props.visible ? <>
            <div>this is the kitchen</div>
            <Button onClick={() => { this.props.changeMap(MAPS.FOREST) }}>go back</Button>
        </> : null;
    }
}
export default Kitchen
