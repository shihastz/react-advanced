import React, { Component } from 'react'
import ComponentE from './ComponentE'

export default class ComponentC extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>Context</h2>
                <ComponentE/>
                <hr/>
            </div>
        )
    }
}
