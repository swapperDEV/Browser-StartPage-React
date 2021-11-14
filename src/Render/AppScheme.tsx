import React from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import './styles/GridTemplate.css'
import Main from '../Components/Main/Main'
const Scheme = () => {
    return (
    <Wrapper classes='main-menu'>
        <div className="top"></div>
        <Wrapper classes="main">
            <Main/>
        </Wrapper>
        <div className="main-down"></div>
        <div className="footer"></div>
    </Wrapper>
    )}

export default Scheme