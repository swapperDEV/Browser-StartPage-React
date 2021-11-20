import React, {useContext} from 'react'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
import MainSetting from './MainSetting'
import ModalContext from '../../../Store/modal-context'

const FooterLeft = () => {
    const ctx = useContext(ModalContext)
    const {mainSettingDisplay, handleChangeSettingDisplay} = ctx
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