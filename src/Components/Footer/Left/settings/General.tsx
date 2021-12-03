import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { notify } from '../../../../UI/Notification/ErrorNotify';

const General = () => {

    const pageReload = () => {
        window.location.reload();
        console.log('page reload');
        notify('Restarting Setting...')
    }
    const resetAll = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('userCity')
        localStorage.removeItem('weatherCity')
        localStorage.removeItem('userLat')
        localStorage.removeItem('userLon')
        localStorage.removeItem('units')
        localStorage.removeItem('todayFocus')
        localStorage.removeItem('focusDate')
        localStorage.removeItem('focusComplete')
        localStorage.removeItem('clockType24')
        pageReload()
    }
    const resetName = () => {
        localStorage.removeItem('userName')
        pageReload()
    }
    const resetCity = () => {
        console.log('city res');
        localStorage.removeItem('userCity')
        localStorage.removeItem('weatherCity')
        pageReload()
    }
    const settings = [{
        name: 'Reset All Settings',
        onClick: resetAll
    },{
        name: 'Reset Your Name',
        onClick: resetName
    },{
        name: 'Reset City',
        onClick: resetCity
    }]
    let list = settings.map((listItem, index) => (
        <span key={index} className='listLi' onClick={() => listItem.onClick()}>
            <span><p>{listItem.name}</p></span>
            <span className='icon'><i className="fas fa-angle-double-right"></i></span>
        </span>
    ))
    return (
        <Slide>
            <p className='settingName'>General</p>
            <p className='settingDescription'>General setting</p>
            <span className='settingList'>
                {list}
            </span>
        </Slide>
    )
}



export default General