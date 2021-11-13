import React from 'react'
import './Wrapper.css'

const Background = props => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}

export default Background;