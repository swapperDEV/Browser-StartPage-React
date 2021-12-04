import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Clock = () => {
    const [typeOfClockMessage, changeClockTypeMessage] = React.useState('24h')

    React.useEffect(() => {
        if(localStorage.getItem('clockType24') !== 'true') {
            changeClockTypeMessage('12h')
        }
    },[])
    return (
        <Slide>
            <p className='settingName'>Clock</p>
            <p className='settingDescription'>Clock setting</p>
            <ul className='settingList'>
                <li>Clock type <b>{typeOfClockMessage}</b>
                <br/>To Change Clock <br/> Options hover Clock</li>
            </ul>
        </Slide>
    )
}



export default Clock