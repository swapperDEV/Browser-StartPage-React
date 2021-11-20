import React, {useState} from 'react'
import Wrapper from '../../../UI/Wrapper'
import View from './View'
const FooterRight = (props:any) => {
    const {widgetDisplay, handleWidgetDisplay} = props
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