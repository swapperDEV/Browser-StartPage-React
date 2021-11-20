import React, {useState, useContext} from 'react'
import Wrapper from '../../../UI/Wrapper'
import View from './View'
import ModalContext from '../../../Store/modal-context'
const FooterRight = () => {
    const ctx = useContext(ModalContext)
    const {widgetDisplay, handleWidgetDisplay} = ctx
    return (
        <Wrapper classes='footer-right'>
            {widgetDisplay && <View/>}
            <Wrapper classes='widgetText'>
                <p className='widgetOpen' onClick={handleWidgetDisplay}>Widget</p>
            </Wrapper>
        </Wrapper>
    )
}

export default FooterRight