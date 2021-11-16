import React from 'react'

const CompletedMessage = (props:any) => {
    return (
        <>
        {props.isCompleted ? <p className='completedMessage'>You are best!</p> : null}
        </>

    )
}

export default CompletedMessage