import React, { Component } from 'react'
import UpdatedCOmponent from './withCounter.js'

class ClickCounter extends Component {
    
    render() {
        const {name , numb, count, incrementcount} = this.props
        return (
            <div>
                <hr/>
                <h2>HOC Click Counter</h2>
                <button onClick={incrementcount}>{numb}. {name} CLicked {count} times</button>
                <hr/>
            </div>
        )
    }
}

export default UpdatedCOmponent(ClickCounter, 5)
