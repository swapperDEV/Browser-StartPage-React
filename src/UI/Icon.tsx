import React from 'react'
const Icon = (props:any) => {
    return (
        <>
            <i style={{transition: '0.3s ease'}} className={props.classes} onClick={props.onClick}></i>
        </>
    )
}

export default Icon