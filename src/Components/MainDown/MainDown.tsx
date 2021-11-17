import React from 'react'
import Wrapper from '../../UI/Wrapper'
import Focus from './Focus/Focus'
import './styles/maindown.css'
import { Fade } from 'react-awesome-reveal'

const MainDown = () => {
    return (
        <Wrapper classes='main-down'>
            <Fade>
                <Focus/>
            </Fade>
        </Wrapper>
    )
}

export default MainDown