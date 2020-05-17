import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()

    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = ()=> {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <hr/>
                <h2>Refs</h2>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
                <hr/>
            </div>
        )
    }
}
