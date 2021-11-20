import React, {useState} from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'
import Top from '../Components/Top/Top'

const Scheme = () => {
    const [settingVisible, changeSettingVisible] = useState(false)
    const [weatherVisible, setWeatherVisible] = useState(false)
    const toggleWeatherModal = () => {
        setWeatherVisible(!weatherVisible)
    }
    const closeWeatherModal = () => {
        setWeatherVisible(false)
    }
    const toggleLinksModal = () => {
        changeSettingVisible(!settingVisible)
    }
    const closeLinksModal = () => {
        changeSettingVisible(false)
    }
    const handleClick = (e:any) => {
        console.log(e.target.closest('div'));
        if(e.target.classList.contains('links') || e.target.classList.contains('weather') || e.target.classList.contains('footer') || e.target.closest('div').classList.contains('main-down') || e.target.closest('div').classList.contains('main')|| e.target.closest('div').classList.contains('clockBox')|| e.target.closest('div').classList.contains('focus-enter')){
            closeLinksModal()
            closeWeatherModal()
        }
    }
    return (
    <Wrapper classes='main-menu' onClick={handleClick}>
        <Top closeWeatherModal={closeWeatherModal} closeLinksModal={closeLinksModal} toggleLinksModal={toggleLinksModal} toggleWeatherModal={toggleWeatherModal} weatherVisible={weatherVisible} settingVisible={settingVisible}/>
        <Main/>
        <MainDown/>
        <div className="footer"></div>
    </Wrapper>
    )}

export default Scheme