import React from 'react'
import { Fade } from 'react-awesome-reveal'

const FocusSetting = (props:any) => {
    return (
        <>
        {props.focusSetting && 
            <Fade>
                <div className='viewSetting'>
                    <div onClick={props.handleDoneFocus}><i className="fas fa-check"></i> <span className={props.isCompleted ? 'completed' : ''}>Done</span></div>
                    <div onClick={props.handleClearFocus}><i className="fas fa-eraser"></i> Clear</div>
                    <div onClick={props.handlePreviousFocus}><i className="fas fa-undo-alt"></i> Prev</div>
                </div>
            </Fade>
        } 
        </>
    )
}

export default FocusSetting