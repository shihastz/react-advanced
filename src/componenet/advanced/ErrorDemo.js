import React from 'react'

function ErrorDemo({name}) {
    if(name === 'joker'){
        throw new Error('Not a Hero')
    }
    return (
        <div>
            <hr/>
            <h2>Error Boundary</h2>
            {name}
            <hr/>
        </div>
    )
}

export default ErrorDemo
