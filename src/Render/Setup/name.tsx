import React, {useState, useEffect} from 'react'
import './box.css'
import { Fade } from "react-awesome-reveal";
import { notify } from '../../UI/Notification/ErrorNotify';
import { getUserGps } from '../../Functions/getGps';

const NameBox = (props:any) => {
    const [input, setInput] = useState(props.startValue)
    const [error, errorSet] = useState('')
    const sendForm = (e:any) => {
        if(e.key === 'Enter') {
            if(input.length > 3) {
                props.method(input)
            } else{
                notify('Too short name!')
            }
        }
    }
    const handleSetInput = (e:any) => {
        setInput(e.target.value)
    }
    const handleReset = () => {
        setInput(props.startValue)
    }
    const dataPrint = async (data:Object) => {
        //@ts-ignore
        setInput(data.city)
    }
    useEffect(() => {
        errorFix()
    },[])
    const errorFix = async () => {
        if(props.type === 'city') {
        if(input.length > 1) {
        } else {
            const data = await getUserGps()
            await dataPrint(data)
        }}}
    return (
        <>
            <Fade>
                <b>{props.text}</b>
                <div className='formInput'>
                    <input value={input} onChange={handleSetInput} onKeyPress={sendForm} placeholder={props.placeholder} maxLength={props.maxLength}/>
                    {props.type === 'city' && <i onClick={handleReset} className="fas fa-location-arrow key"></i>}
                    {props.type === 'name' && <i onClick={handleReset} className="fas fa-times key"></i>}
                </div>
            </Fade>
        </>
    )
}

export default NameBox