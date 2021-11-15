import React, {useEffect, useState} from 'react'
import '../styles/Time.css'
import ClockSetting from './ClockSetting'
import { getTimeUs } from '../../../Functions/getTimeUS'
import { getTimeEu } from '../../../Functions/getTimeEu'

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
        //time in 24hours type
        let strTime = undefined
        if(localStorage.getItem('clockType24') === 'true') {
        strTime = getTimeEu()
        }
        if(strTime !== undefined) {
        changeTime(strTime)}
    }
    const onetwoType = () => {
        //time in 12 hours type
        let strTime = undefined
        if(localStorage.getItem('clockType24') !== 'true') {
        strTime = getTimeUs()}
        if(strTime !== undefined) {
            changeTime(strTime)}
    }
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