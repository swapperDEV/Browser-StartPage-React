import React, {useState} from 'react'
import { Zoom } from 'react-awesome-reveal'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
import TodoList from './Views/TodoList'
import './Styles/widget.css'

const View = () => {
    const [actView, changeView] = useState('TodoList')
    return (
        <>
            <Zoom duration={200}>
                <Wrapper classes='widgetView'>
                    <Icon classes="triagle-right fas fa-sort-down"></Icon>
                    {actView === 'TodoList' && <TodoList/>}
                </Wrapper>
            </Zoom>
        </>
    )
}

export default View