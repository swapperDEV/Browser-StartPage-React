import React from 'react'
import './Styles/footer.css'
import Wrapper from '../../UI/Wrapper'
import FooterCenter from './Center/FooterCenter'
import FooterLeft from './Left/FooterLeft'
import FooterRight from './Right/FooterRight'

const Footer = (props:any) => {
    const {handleChangeSettingDisplay, mainSettingDisplay, widgetDisplay, handleWidgetDisplay} = props
    return (
        <Wrapper classes='footer'>
            <FooterLeft handleChangeSettingDisplay={handleChangeSettingDisplay} mainSettingDisplay={mainSettingDisplay}/>
            <FooterCenter/>
            <FooterRight widgetDisplay={widgetDisplay} handleWidgetDisplay={handleWidgetDisplay}/>
        </Wrapper>
    )
}

export default Footer