import React, {useState} from 'react'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
import MainSetting from './MainSetting'
const FooterLeft = (props:any) => {
    const {mainSettingDisplay, handleChangeSettingDisplay} = props
    return (
        <>
        <Wrapper classes='footer-left'>
            {mainSettingDisplay && <MainSetting/>}
            <Wrapper classes='settingOpen'><Icon onClick={handleChangeSettingDisplay} classes={mainSettingDisplay ? 'fas fa-cog settingRotate sets' : 'fas fa-cog sets'}/></Wrapper>
        </Wrapper>
        </>
    )
}

export default FooterLeft