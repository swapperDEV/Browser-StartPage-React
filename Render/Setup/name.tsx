import React, {useState} from 'react'
import './box.css'

const NameBox = (props:any) => {
    const [input, setInput] = useState(props.startValue)
    const [error, errorSet] = useState('')
    const sendForm = (e:any) => {
        if(e.key === 'Enter') {
            if(input.length > 3) {
                props.method(input)
            } else{
                errorSet('error')
            }
        }
    }
    const handleSetInput = (e:any) => {
        setInput(e.target.value)
        if(input.length <3) {
            errorSet('error')
        } else {
            errorSet('')
        }
    }
    const handleReset = () => {
        setInput(props.startValue)
    }
    return (
        <>
            <b>{props.text}</b>
            <div className='formInput'>
                <input value={input} onChange={handleSetInput} onKeyPress={sendForm} placeholder={props.placeholder} className={error} maxLength={props.maxLength}/>
                {props.type === 'city' && <i onClick={handleReset} className="fas fa-location-arrow key"></i>}
                {props.type === 'name' && <i onClick={handleReset} className="fas fa-times key"></i>}
            </div>
        </>
    )
}

export default NameBox