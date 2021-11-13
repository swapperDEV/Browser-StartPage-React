import React from 'react'
import './ChooseBtn.css'
import '../component/SetUp.css'

const ChooseBtn = (props) => {
    const changeTheme = () => {
        console.log(`theme change to ${props.choose}`)
        localStorage.setItem("actBg", props.choose);
        props.method()
    }
    return (
        <button className='btnChoose' onClick={changeTheme}>Choose</button>
    )
}

export default ChooseBtn;