import React, {useEffect, useState} from 'react'
import '../styles/Time.css'
import ClockSetting from './ClockSetting'

const Time = (props:any) => {
    const [time, changeTime] = useState<any>()
    const [clockSetting, changeClockSetting] = useState<boolean>(false)
    let timeTypes:string
    
    const timeRead = () => {
        if(localStorage.getItem('clockType24') === 'true') {
            timeTypes = '24'
        } else {
            timeTypes = '12'
        }
        getTime()
        setInterval(() => {
            getTime()
        }, 1000)
    }
    const getTime = () => {
        if(timeTypes === '24') {
            twofourType()
        } else {
            onetwoType()
        }
    }
    const twofourType = () => {
        if(localStorage.getItem('clockType24') === 'true') {
        let today = new Date();
        let string
        if(today.getMinutes() < 10) {
            string = '0' + today.getMinutes()
        } else {
            string = today.getMinutes()
        }
        changeTime(today.getHours() + ":" + string)
    }}
    const onetwoType = () => {
        if(localStorage.getItem('clockType24') !== 'true') {
        let date = new Date()
        let hours = date.getHours();
        let minutes:any = date.getMinutes();
        let ampm = hours >= 12 ? '' : '';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = hours + ':' + minutes + ' ' + ampm;
        changeTime(strTime)
    }}
    const updateTime = () => {
        timeRead()
    }
    const settingClock = () => {
        changeClockSetting(!clockSetting)
    }
    const exitClockSetting = () => {
        changeClockSetting(false)
    }
    useEffect(() => {
        timeRead()
    },[])
    return (
        <div className='clockBox'>
            <p className='clock'>
                {time}
            </p>
            <div className='settingBox'  onMouseLeave={exitClockSetting}>
                <i className="fas fa-ellipsis-h settingClock" onClick={settingClock}></i>
                {clockSetting && <ClockSetting method={updateTime}/>}
            </div>
        </div>
    )
}

export default Time;