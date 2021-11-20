import React from 'react'
import { Slide } from 'react-awesome-reveal'
import Icon from '../../../UI/Icon'
import Wrapper from '../../../UI/Wrapper'

const MainSetting = () => {
    return (
        <>
            <Slide duration={200}>
                <Wrapper classes='mainSetting'>
                    <Icon classes="triagle-bottom fas fa-sort-down"></Icon>
                </Wrapper>
            </Slide>
        </>
    )
}

export default MainSetting