import React from 'react'
import './styles/Main.css'
import Time from './containers/Time'
import MessageTime from './containers/MessageTime'
import Wrapper from '../../UI/Wrapper'
import { Fade } from 'react-awesome-reveal'

const Main = (props:any) => {
    const {onClick} = props
    return (
        <Wrapper classes='main' onClick={onClick}>
            <Fade cascade>
                <Time/>
                <MessageTime/>
            </Fade>
        </Wrapper>
    )
}

export default Main;