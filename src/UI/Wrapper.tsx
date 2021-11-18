import React from 'react'

const Wrapper = (props: any) => {
    return (
    <>
        <div className={props.classes} onMouseLeave={props.onMouseLeave}>
            {props.children}
        </div>
    </>
)}

export default Wrapper