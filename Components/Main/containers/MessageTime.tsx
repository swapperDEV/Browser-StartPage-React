import React, { useContext, useState, useEffect} from 'react'
import DataContext from '../../../Store/data-context'
import Wrapper from '../../../UI/Wrapper'
import { getTime } from '../../../Functions/getTime'

const MessageTime = (props:any) => {
    const [message, changeMessage] = useState('Hello')
    const ctx = useContext(DataContext)


    const timeMessageSearch = () => {
        let time:any = getTime()
        time = time.slice(0, 2)
        time = parseInt(time)
        if(time >= 20) {
            changeMessage('Good afternoon')
        } else if(time >= 12) {
            changeMessage('Good evening')
        } else {
            changeMessage('Good morning')
        }
    }
    useEffect(() => {
        timeMessageSearch()
    },[])
    return (
        <Wrapper classes='messageBox'>
            <p className='messageTime'>{message}, {ctx.name}.</p>
        </Wrapper>
    )
}

export default MessageTime