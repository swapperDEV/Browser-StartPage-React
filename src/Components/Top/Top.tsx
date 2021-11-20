import React, {useState} from 'react'
import Wrapper from '../../UI/Wrapper';
import Weather from './Right/weather';
import Links from './Left/links';
import './styles/top.css'

const Top = (props:any) => {
    const {closeWeatherModal, closeLinksModal, toggleWeatherModal, toggleLinksModal, settingVisible, weatherVisible} = props
    return (
        <>
            <Wrapper classes='top'>
                <Links closeWeatherModal={closeWeatherModal} toggleLinksModal={toggleLinksModal} visibility={settingVisible} onClick={() => {          closeWeatherModal()}}/>
                <Weather visibility={weatherVisible} toggleWeatherModal={toggleWeatherModal} closeLinksModal={closeLinksModal} onClick={() => {closeLinksModal()}}/>
            </Wrapper>
        </>
    )
}

export default Top;