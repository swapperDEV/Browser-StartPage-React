import React, {useContext, useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import DataContext from '../../store/data-context';
import './styles/Options.css'
import Notification from '../UI/Notification'
import ReactDOM from 'react-dom'

const Options = (props) => {
    let actColorMode = useContext(DataContext)
    let [resetInfo, changeResetInfo] = useState('')
    const [icon, changeIcon] = useState(<i className="fas fa-sun"></i>)
    let changeColor;
    const changeColorMode = () => {
        actColorMode = actColorMode.color
        if(actColorMode === 'darkmode') {
            changeColor = 'lightmode'
            changeIcon(<i className="far fa-moon"></i>)
        } else {
            changeColor = 'darkmode'
            changeIcon(<i className="fas fa-sun"></i>)

        }
        localStorage.setItem("colorMode", changeColor) 
        props.methodChangeMode()
    }
    useEffect(() => {
        const color = localStorage.getItem("colorMode")
        if(color === 'darkmode') {
            changeIcon(<i className="fas fa-sun"></i>)
        } else {
            changeIcon(<i className="far fa-moon"></i>)
        }
    }, [])
    const settingReset = () => {
        localStorage.removeItem("actBg")
        localStorage.removeItem("userName")
        localStorage.removeItem("userCity")
        localStorage.removeItem("userLat")
        localStorage.removeItem("userLon")
        localStorage.removeItem('oneshortcut')
        localStorage.removeItem('twoshortcut')
        localStorage.removeItem('threeshortcut')
        localStorage.removeItem('oneshortcutlink')
        localStorage.removeItem('twoshortcutlink')
        localStorage.removeItem('threeshortcutlink')
        changeResetInfo('The page will refresh in')
        setTimeout(() => {
            window.location.reload(false);
        }, 10000)
    }
    const linksReset = () => {
        localStorage.removeItem('oneshortcut')
        localStorage.removeItem('twoshortcut')
        localStorage.removeItem('threeshortcut')
        localStorage.removeItem('oneshortcutlink')
        localStorage.removeItem('twoshortcutlink')
        localStorage.removeItem('threeshortcutlink')
        changeResetInfo('The page will refresh in')
        setTimeout(() => {
            window.location.reload(false);
        }, 10000)
    }
    return (
        <div className='options'>
            {resetInfo !== '' ? ReactDOM.createPortal(<Notification text={resetInfo} type={'error'}/>, document.querySelector('#notify')): null}
            <div className='optionsDiv'>
                Options:
                <div className='btn'>
                    <button onClick={settingReset}><i className="fas fa-signature"></i> Reset Settings</button>
                    <button onClick={linksReset}><i class="fas fa-link"></i> Reset Shortcuts</button>
                    <button onClick={changeColorMode}>{icon} Switch Color Mode </button>
                </div>
                <NavLink to='/' className='link'><i className="fas fa-times-circle"></i></NavLink>
            </div>
        </div>
    )
}

export default Options;