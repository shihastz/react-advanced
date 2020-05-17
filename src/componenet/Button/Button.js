import React from 'react'

export default function Buttons(props) {
    return (
        <button className={props.className} id={props.id} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
