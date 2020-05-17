import React, { Component } from 'react' 

class RenderClickCounter extends Component {
    
    render() {
        const {name , numb, count, incrementcount} = this.props
        return (
            <div>
                <button onClick={incrementcount}>{numb}. {name} CLicked {count} times</button>
            </div>
        )
    }
}

export default RenderClickCounter
