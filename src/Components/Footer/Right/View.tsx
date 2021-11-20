import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
const View = () => {
    return (
        <>
            <Zoom duration={200}>
                <Wrapper classes='widgetView'>
                    <Icon classes="triagle-right fas fa-sort-down"></Icon>
                </Wrapper>
            </Zoom>
        </>
    )
}

export default View