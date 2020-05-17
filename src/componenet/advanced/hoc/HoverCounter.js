import React, { Component } from 'react'
import UpdatedCOmponent from './withCounter.js'

class HoverCounter extends Component {
    
    render() {
        const {name , count, incrementcount} = this.props
        return (
            <div>
                <hr/>
                <h2>Hoc</h2>
                <h3 onMouseOver={incrementcount}>{name} Hovered {count} times</h3>
                <hr/>
            </div>
        )
    }
}

export default UpdatedCOmponent(HoverCounter, 2)
