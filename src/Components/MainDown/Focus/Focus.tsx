import React, { useState, useEffect } from 'react'
import Wrapper from '../../../UI/Wrapper'
import './styles/focus.css'
import { getDay } from '../../../Functions/getDay'
import FocusEnter from './FocusEnter'
import CompletedMessage from './Completed'
import FocusDisplay from './FocusDisplay'
import FocusSetting from './FocusSetting'
import SettingButton from './SettingButton'

const Focus = () => {
    const [todayFocus, changeFocus] = useState<any>('')
    const [previousFocus, changePreviousFocus] = useState<any>('')
    const [focusSetting, changeFocusSetting] = useState<boolean>(false)
    const [isCompleted, changeComplete] = useState(false)
    const [previousIsCompleted, previousChangeComplete] = useState(false)

    const fromInput = (input:string) => {
        console.log(input);
        changeFocus(input)
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
        localStorage.setItem('todayFocus', previousFocus)
        localStorage.setItem('focusDate', getDay())
        if(previousIsCompleted=== true) {
            let storage = 'true'
            localStorage.setItem('focusComplete', storage)
        }        
        changePreviousFocus(actFocus)
        previousChangeComplete(actFocusCom)
        handleCloseSetting()
    }
    const handleClearFocus = () => {
        changePreviousFocus(todayFocus)
        previousChangeComplete(isCompleted)
        changeFocus('')
        changeComplete(false)
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
                <>
                    <Wrapper classes='viewFocus' onMouseLeave={handleCloseSetting}>
                        <FocusDisplay isCompleted={isCompleted} todayFocus={todayFocus}/>
                        <CompletedMessage isCompleted={isCompleted}/>
                        <Wrapper>
                            <SettingButton handleChangeSettingDisplay={handleChangeSettingDisplay}/>
                            <FocusSetting focusSetting={focusSetting} handleDoneFocus={handleDoneFocus} isCompleted={isCompleted} handlePreviousFocus={handlePreviousFocus} handleClearFocus={handleClearFocus}/>
                        </Wrapper>
                    </Wrapper> 
                </>
            : 
                <>
                    <FocusEnter method={fromInput}/>
                </>
            }
        </Wrapper>
    )
}

export default Focus