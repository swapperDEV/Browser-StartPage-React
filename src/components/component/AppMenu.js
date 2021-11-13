import React from 'react'
import './styles/AppMenu.css'
import Search from './AppMenu/search'
import Background from '../UI/Wrapper'
import Time from './AppMenu/time'
import Folder from '../UI/Folder'
import Content from './AppMenu/Content'

const AppMenu = (props) => {
    return (
        <Background classes='mainMenu'>
            <Time/>
            <Background classes='folders'>
                <Folder  type='maps'><i className="fas fa-map-marked-alt"></i></Folder>
                <Folder type='todo'><i className="fas fa-th-list"></i></Folder>
                <Folder  type='notes'><i className="far fa-sticky-note"></i></Folder>
                <Folder type='weather'><i className="fas fa-smog"></i></Folder>
                <Folder type='calendar'><i class="far fa-calendar"></i></Folder>
            </Background>
            <Search/>
            <Background classes='actualContent'>
              <Content/>
            </Background>
        </Background>
    )
}

export default AppMenu;