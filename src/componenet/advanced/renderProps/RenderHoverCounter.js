import React, { Component } from 'react'

class RenderHoverCounter extends Component {
    
    render() {
        const {count, incrementcount} = this.props
        return (
            <div>
                <h3>Hover counter using render props</h3>
                <h2 onMouseOver={incrementcount}>Hovered {count} times</h2>
                <hr/>
            </div>
        )
    }
}

export default RenderHoverCounter
