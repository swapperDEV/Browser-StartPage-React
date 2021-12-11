import React, {useEffect, useState} from 'react'
import bgTWO from '../Assets/bg/two.jpg'
import bgTHREE from '../Assets/bg/three.jpg'
import bgFOUR from '../Assets/bg/four.jpg'
import bgSIX from '../Assets/bg/six.jpg'
import bgONE from '../Assets/bg/one.jpg'
import bgFIVE from '../Assets/bg/five.jpg'
import bgSEVEN from '../Assets/bg/seven.jpg'
import bgEIGHT from '../Assets/bg/eight.jpg'
import bgNINE from '../Assets/bg/nine.jpg'
import gray from '../Assets/bg/bg.png'
import PhotoContext from '../Store/photo-data-context'



import './styles/background.css'
const backgrounds = [{
    name: bgONE,
    location: 'Li Jiang, China',
    },{
    name: bgTWO,
    location: 'Alps',
    }, {
    name: bgTHREE,
    location: 'Unkown Beach',
    }, {
    name: bgFOUR,
    location: 'Kolorado, USA',
    }, {
    name: bgFIVE,
    location: 'Arizona, USA',
    },{
    name: bgSIX,
    location: 'NY City, USA',
    }, {
    name: bgSEVEN,
    location: 'Asia'
    }, {
    name: bgEIGHT,
    location: 'Oberschwillach, Germany',
    }, {
    name: bgNINE,
    location: 'Norway',
    }
]
//https://cloudconvert.com/mp4-to-gif
const Background = (props: any) => {
    const [background, setBackground] = useState(backgrounds[2])
    const randomizeBackground = () => {
        let random:number = Math.floor(Math.random()*backgrounds.length+1); 
        setBackground(backgrounds[random-1])
        setBackground(backgrounds[0])
    }
    useEffect(() => {
        randomizeBackground()
        
    },[])

    let styles = {
        backgroundImage: `url("${background.name}")`
    }

    let stylesGray = {
        backgroundImage: `url("${gray}")`
    }

    return (
    <div style={styles} className='newBg'>
        <div style={stylesGray} className='grayBg'>
            <PhotoContext.Provider value={{location: background.location}}>
                <div className={props.classes}>
                    {props.children}
                </div>
            </PhotoContext.Provider>
        </div>
    </div>
)}

export default Background