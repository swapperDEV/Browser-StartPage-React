import React, {useState} from 'react'
import { getDay } from '../../../Functions/getDay'

const FocusEnter = (props:any) => {
    const [input, changeInputValue] = useState<string>('')
    const handleInput = (e:any) => {
        changeInputValue(e.target.value)
    }
    const keyPress = (e:any) => { 
        if(e.key === 'Enter') {
            localStorage.setItem('todayFocus', input)
            localStorage.setItem('focusDate', getDay())
            props.method(input)
        }
    }
    return (
        <>
            <p>What is your main Focus Today?</p>
            <input value={input} onChange={handleInput} maxLength={50} onKeyPress={keyPress}/>
        </>
    )
}

export default FocusEnter;