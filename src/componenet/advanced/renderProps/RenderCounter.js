import React, { Component } from 'react'

export default class RenderCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incrementCount = () =>{
        this.setState(prevState => {
            return { count : prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                <hr/>
                <h2>Render props Counter</h2>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}
