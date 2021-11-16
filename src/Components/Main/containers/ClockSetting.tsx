import React, {useEffect, useState} from 'react'
import { Fade } from 'react-awesome-reveal'

const ClockSetting = (prop:any) => {
    const [ifChecked, changeChecked] = useState(false)
    const handleChangeChecked = () => {
        let is = !ifChecked
        localStorage.setItem("clockType24", is.toString())
        changeChecked(!ifChecked)
        prop.method()
    }
    useEffect(() => {
        if(localStorage.getItem('clockType24') === 'true') {
            changeChecked(true)
        } else {
            changeChecked(false)
        }
    },[])
    return (
        <>
            <Fade>
                <div className='setting box arrow-top'>
                    24-hour clock
                    <label className="switch">
                        <input type="checkbox" checked={ifChecked} onChange={handleChangeChecked}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </Fade>
        </>
    )
}

export default ClockSetting;