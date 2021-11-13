import React, {useEffect, useState} from 'react'
import './styles/time.css'

const Time = () => {
    const [time, changeTime] = useState()
    const getTime = () => {
        let today = new Date();
        let string
        if(today.getMinutes() < 10) {
            string = '0' + today.getMinutes()
        } else {
            string = today.getMinutes()
        }
        changeTime(today.getHours() + ":" + string)
    }
    useEffect(() => {
        getTime()
        setInterval(() => {
            getTime()
        }, 1000)
    },[])
    return (
        <div className='timeCounter'>
            {time}
        </div>
    )
}

export default Time;