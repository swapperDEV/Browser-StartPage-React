import React, {useState} from 'react'
import './styles/Form.css'

const Form = (props) => {
    const [value, changeInputValue] = useState()
    const changeValue = (e) => {
        changeInputValue(e.target.value)
    }
    const save = () => {
        const name = props.toEdit + 'shortcut'
        const link = props.toEdit + 'shortcutlink'
        localStorage.setItem(link, value)
        localStorage.setItem(name, true)
        props.method()
    }
    return (
        <>
            <div className='editForm'>
                <input value={value} onChange={changeValue} placeholder='link' className='formInput'/><br/>
                <button onClick={save}>Save</button>
            </div>
        </>
    )}

export default Form;