import React, {useContext} from 'react'
import Wrapper from '../../../UI/Wrapper';
import './styles/link.css'
import Icon from '../../../UI/Icon';
import { Fade } from 'react-awesome-reveal';
import ModalContext from '../../../Store/modal-context';
import Search from './search';
import LinksView from './links/LinksView';

const Links = (props:any) => {
    const ctx = useContext(ModalContext)
    const {settingVisible, toggleLinksModal} = ctx
    const handleSettingVisible = () => {
        toggleLinksModal()
    }
    return (
        <>
        <Wrapper classes='links'>
            <Wrapper classes='topLinks'>
                <Wrapper classes='link'>
                    <p className='linkText' onClick={handleSettingVisible}>Links</p>
                    <input/>
                </Wrapper>
                <Wrapper classes='search'>
                    <Search/>
                </Wrapper>
            </Wrapper>
                    {settingVisible && 
                    <Fade duration={200}>
                    <Wrapper classes='bottomLinks'>
                        <Wrapper classes='linkSettings'>
                            <Icon classes="triagle triagle-left fas fa-sort-up"></Icon>
                            <LinksView/>
                        </Wrapper>
                    </Wrapper>
                    </Fade>}
        </Wrapper>
        </>
    )
}

export default Links;