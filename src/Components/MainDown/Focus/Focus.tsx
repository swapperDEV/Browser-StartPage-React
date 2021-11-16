import React, { useState, useEffect } from 'react'
import Wrapper from '../../../UI/Wrapper'
import './styles/focus.css'
import { Fade } from 'react-awesome-reveal'
import { getDay } from '../../../Functions/getDay'

const Focus = () => {
    const [todayFocus, changeFocus] = useState<any>('')
    const [previousFocus, changePreviousFocus] = useState<any>('')
    const [input, changeInputValue] = useState<string>('')
    const [focusSetting, changeFocusSetting] = useState<boolean>(false)
    const [isCompleted, changeComplete] = useState(false)
    const [previousIsCompleted, previousChangeComplete] = useState(false)

    const handleInput = (e:any) => {
        changeInputValue(e.target.value)
    }
    const keyPress = (e:any) => { 
        if(e.key === 'Enter') {
            changeFocus(input)
            console.log(input);
            localStorage.setItem('todayFocus', input)
            localStorage.setItem('focusDate', getDay())
        }
    }
    const handleChangeSettingDisplay = () => {
        changeFocusSetting(!focusSetting)
    }
    const handleCloseSetting = () => {
        changeFocusSetting(false)
    }
    const handlePreviousFocus = () => {
        let actFocus = todayFocus
        let actFocusCom = isCompleted
        changeFocus(previousFocus)
        changeComplete(previousIsCompleted)
        changePreviousFocus(actFocus)
        previousChangeComplete(actFocusCom)
        handleCloseSetting()
    }
    const handleClearFocus = () => {
        changeFocus('')
        localStorage.setItem('todayFocus', '')
        localStorage.setItem('focusDate', '')
        handleCloseSetting()
    }
    const handleDoneFocus = () => {
        if(!isCompleted === true) {
            let storage = 'true'
            localStorage.setItem('focusComplete', storage)
        } else {
            localStorage.setItem('focusComplete', 'false')
        }
        changeComplete(!isCompleted)
        handleCloseSetting()
    }
    useEffect(() => {
        if(localStorage.getItem('todayFocus') !== null || localStorage.getItem('todayFocus') !== 'null') {
            let dayFocus
            dayFocus = localStorage.getItem('todayFocus')
            if(dayFocus !== null) {
                if(localStorage.getItem('focusDate') === getDay()) {
                    changeFocus(dayFocus)
                    let storage = localStorage.getItem('focusComplete')
                    console.log(storage);
                    if(storage === 'true') {
                        changeComplete(true)
                    }
                } else {
                    changePreviousFocus(dayFocus)
                    let storage = localStorage.getItem('focusComplete')
                    console.log(storage);
                    if(storage === 'true') {
                        previousChangeComplete(true)
                    }
                }
        }}
    },[])
    return (
        <Wrapper classes='focus'>
            {todayFocus !== '' ? 
            <div className='viewFocus' onMouseLeave={handleCloseSetting}>
                <p>TODAY</p>
                <span className={isCompleted ? 'completed' : ''}>{todayFocus}</span>
                {isCompleted ? <p className='completedMessage'>You are best!</p> : null}
                <div>
                    <i onClick={handleChangeSettingDisplay} className="fas fa-ellipsis-h settingFocus"></i>
                    {focusSetting && 
                    <Fade>
                        <div className='viewSetting'>
                            <div onClick={handleDoneFocus}><i className="fas fa-check"></i> <span className={isCompleted ? 'completed' : ''}>Done</span></div>
                            <div onClick={handleClearFocus}><i className="fas fa-eraser"></i> Clear</div>
                            <div onClick={handlePreviousFocus}><i className="fas fa-undo-alt"></i> Prev</div>
                        </div>
                    </Fade>
                    }   
                </div>
            </div> 
            : 
            <>
                <p>What is your main Focus Today?</p>
                <input value={input} onChange={handleInput} maxLength={50} onKeyPress={keyPress}/>
            </>
            }
        </Wrapper>
    )
}

export default Focus