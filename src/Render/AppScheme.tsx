import React from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'

const Scheme = () => {
    return (
    <Wrapper classes='main-menu'>
        <div className="top"></div>
        <div className="top-content"></div>
        <Main/>
        <MainDown/>
        <div className="footer"></div>
    </Wrapper>
    )}

export default Scheme