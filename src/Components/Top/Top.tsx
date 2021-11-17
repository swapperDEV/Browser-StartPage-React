import React, {useState, useEffect} from 'react'
import Wrapper from '../../UI/Wrapper';
import Weather from './Right/weather';
import Links from './Left/links';
import './styles/top.css'

const Top = () => {

    return (
        <>
            <Wrapper classes='top'>
                <Links/>
                <Weather/>
            </Wrapper>
            <Wrapper classes='top-content'>
                
            </Wrapper>
        </>
    )
}

export default Top;