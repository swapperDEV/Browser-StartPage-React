import React from 'react'
import Wrapper from '../../UI/Wrapper'
import Focus from './Focus/Focus'
import './styles/maindown.css'
import { Fade } from 'react-awesome-reveal'

const MainDown = (props:any) => {
    const {onClick} = props
    return (
        <Wrapper classes='main-down' onClick={onClick}>
            <Fade>
                <Focus/>
            </Fade>
        </Wrapper>
    )
}

export default MainDown