import React, {useEffect, useState} from 'react'
import bgONE from '../Assets/bg/one.jpg'
import bgTWO from '../Assets/bg/two.jpg'
import bgTHREE from '../Assets/bg/three.jpg'
import gifONE from '../Assets/bg/one.gif'

import './styles/background.css'
const backgrounds = [gifONE, bgONE, bgTWO, bgTHREE]
//https://cloudconvert.com/mp4-to-gif
const Background = (props: any) => {
    const [background, setBackground] = useState(backgrounds[2])
    const randomizeBackground = () => {
        let random:number = Math.floor(Math.random()*4+1); 
        setBackground(backgrounds[random-1])
    }
    useEffect(() => {
        randomizeBackground()
        
    },[])

    let styles = {
        backgroundImage: `url("${background}")`
    }

    return (
    <div style={styles} className='newBg'>
        <div className={props.classes}>
            {props.children}
        </div>
    </div>
)}

export default Background