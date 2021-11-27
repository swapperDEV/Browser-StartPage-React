import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Clock = () => {
    return (
        <Slide>
            <p className='settingName'>Clock</p>
            <p className='settingDescription'>Clock setting</p>
            <ul className='settingList'>
                <li>Clock type</li>
            </ul>
        </Slide>
    )
}



export default Clock