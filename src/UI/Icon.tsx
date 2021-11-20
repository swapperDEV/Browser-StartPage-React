import React from 'react'
const Icon = (props:any) => {
    return (
        <>
            <i className={props.classes} onClick={props.onClick}></i>
        </>
    )
}

export default Icon