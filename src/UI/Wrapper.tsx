import React from 'react'

const Wrapper = (props: any) => {
    return (
    <>
        <div className={props.classes} onMouseLeave={props.onMouseLeave} onClick={props.onClick}>
            {props.children}
        </div>
    </>
)}

export default Wrapper