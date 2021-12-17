import React, {useState} from 'react'
import { Zoom } from 'react-awesome-reveal'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
import TodoList from './Views/ToDo/TodoList'
import './Styles/widget.css'
import Maps from './Views/Map/Map'
const View = (props:any) => {
    const {actView} = props
    return (
        <>
            <Zoom duration={200}>
                <Wrapper classes='widgetView'>
                    <Icon classes="triagle-right fas fa-sort-down"></Icon>
                    {actView === 'TodoList' && <TodoList/>}
                    {actView === 'Map' && <Maps/>}
                </Wrapper>
            </Zoom>
        </>
    )
}

export default View