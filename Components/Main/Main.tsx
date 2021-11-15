import React from 'react'
import './styles/Main.css'
import Time from './containers/Time'
import MessageTime from './containers/MessageTime'
import Wrapper from '../../UI/Wrapper'

const Main = () => {
    return (
        <Wrapper classes='main'>
            <Time/>
            <MessageTime/>
        </Wrapper>
    )
}

export default Main;