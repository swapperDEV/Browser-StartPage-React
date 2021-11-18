import React, {useEffect, useState} from 'react'
import bgTWO from '../Assets/bg/two.jpg'
import bgTHREE from '../Assets/bg/three.jpg'
import bgFOUR from '../Assets/bg/four.jpg'
import bgSIX from '../Assets/bg/six.jpg'
import bgONE from '../Assets/bg/one.jpg'

import './styles/background.css'
const backgrounds = [bgTWO, bgTHREE, bgFOUR, bgSIX, bgONE]
//https://cloudconvert.com/mp4-to-gif
const Background = (props: any) => {
    const [background, setBackground] = useState(backgrounds[2])
    const randomizeBackground = () => {
        let random:number = Math.floor(Math.random()*5+1); 
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