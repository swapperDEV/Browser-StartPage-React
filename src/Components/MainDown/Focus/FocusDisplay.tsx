import React from 'react'

const FocusDisplay = (props:any) => {
    return (
        <>
            <p>TODAY</p>
            <span className={props.isCompleted ? 'completed' : ''}>{props.todayFocus}</span>
        </>
    )
}

export default FocusDisplay