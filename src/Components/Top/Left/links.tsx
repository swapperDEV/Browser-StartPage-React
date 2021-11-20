import React from 'react'
import Wrapper from '../../../UI/Wrapper';
import './styles/link.css'
import Icon from '../../../UI/Icon';
import { Slide } from 'react-awesome-reveal';
const Links = (props:any) => {
    const {toggleLinksModal, closeWeatherModal, visibility} = props
    const handleSettingVisible = () => {
        closeWeatherModal()
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
                    <p className='searchText'>Search</p>
                </Wrapper>
            </Wrapper>
                <Wrapper classes='bottomLinks'>
                    {visibility && 
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