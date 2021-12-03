import React, {useState, useContext} from 'react'
import Wrapper from '../../../UI/Wrapper'
import View from './View'
import ModalContext from '../../../Store/modal-context'
import FuncDisplayContext from '../../../Store/funcdisplay-context'

const FooterRight = () => {
    const displayCtx = useContext(FuncDisplayContext)
    const ctx = useContext(ModalContext)
    const {widgetDisplay, handleWidgetDisplay} = ctx
    return (
        <Wrapper classes='footer-right'>
            {widgetDisplay && <View/>}
            {displayCtx.display.widget && 
            <Wrapper classes='widgetText'>
                <p className='widgetOpen' onClick={handleWidgetDisplay}>W</p>
            </Wrapper>
            }
        </Wrapper>
    )
}

export default FooterRight