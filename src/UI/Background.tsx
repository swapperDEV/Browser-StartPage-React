import React from 'react'
import background from '../Assets/bg/two.jpg'
import './styles/background.css'

const Background = (props: any) => {
    return (
    <>
        <img src={background} alt='error' className='background'/>  
        <div className={props.classes}>
            {props.children}
        </div>
    </>
)}

export default Background