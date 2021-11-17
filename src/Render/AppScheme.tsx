import React from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'
import Top from '../Components/Top/Top'

const Scheme = () => {
    return (
    <Wrapper classes='main-menu'>
        <Top/>
        <Main/>
        <MainDown/>
        <div className="footer"></div>
    </Wrapper>
    )}

export default Scheme