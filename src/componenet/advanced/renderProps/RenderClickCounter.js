import React, { Component } from 'react' 

class RenderClickCounter extends Component {
    
    render() {
        const {name , numb, count, incrementcount} = this.props
        return (
            <div>
                <h3>Click counter using render props</h3>
                <button onClick={incrementcount}>{numb}. {name} CLicked {count} times</button>
            </div>
        )
    }
}

export default RenderClickCounter
