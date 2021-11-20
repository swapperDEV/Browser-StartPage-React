import React, {useContext} from 'react'
import Wrapper from '../../../UI/Wrapper';
import './styles/link.css'
import Icon from '../../../UI/Icon';
import { Slide } from 'react-awesome-reveal';
import ModalContext from '../../../Store/modal-context';
import Search from './search';

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
                </Wrapper>
                <Wrapper classes='search'>
                    <Search/>
                </Wrapper>
            </Wrapper>
                <Wrapper classes='bottomLinks'>
                    {settingVisible && 
                    <Slide duration={200} direction={'left'}>
                        <Wrapper classes='linkSettings'>
                            <Icon classes="triagle triagle-left fas fa-sort-up"></Icon>
                        </Wrapper>
                    </Slide>}
                </Wrapper>
        </Wrapper>
        </>
    )
}

export default Links;