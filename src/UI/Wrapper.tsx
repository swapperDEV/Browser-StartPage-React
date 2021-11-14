import React from 'react'

const Wrapper = (props: any) => {
    return (
    <>
        <div className={props.classes}>
            {props.children}
        </div>
    </>
)}

export default Wrapper