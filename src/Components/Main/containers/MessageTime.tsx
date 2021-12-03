import React, { useContext, useState, useEffect} from 'react'
import DataContext from '../../../Store/data-context'
import Wrapper from '../../../UI/Wrapper'
import { getTime } from '../../../Functions/getTime'
import FuncDisplayContext from '../../../Store/funcdisplay-context'

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
    const displayCtx = useContext(FuncDisplayContext)
    return (
        <>
        <Wrapper classes='messageBox'>
            {displayCtx.display.timemessage ?
            <p className='messageTime'>{message}, {ctx.name}.</p>            
            : <p className='messageTime'>        -</p>}
        </Wrapper>
        </>
    )
}

export default MessageTime