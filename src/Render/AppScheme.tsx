import React, {useState} from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'
import Top from '../Components/Top/Top'
import Footer from '../Components/Footer/footer'

const Scheme = () => {
    const [settingVisible, changeSettingVisible] = useState(false)
    const [weatherVisible, setWeatherVisible] = useState(false)
    const [mainSettingDisplay, changeSettingDisplay] = useState(false)
    const [widgetDisplay, changeWidgetDisplay] = useState(false)
    const closeWeatherModal = () => {
        setWeatherVisible(false)
    }
    const closeLinksModal = () => {
        changeSettingVisible(false)
    }
    const closeChangeSettingDisplay = () => [
        changeSettingDisplay(false)
    ]
    const closeWidgetDisplay = () => {
        changeWidgetDisplay(false)
    }
    const toggleWeatherModal = () => {
        if(weatherVisible === false) {
            closeLinksModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
        setWeatherVisible(!weatherVisible)    
    }
    const toggleLinksModal = () => {
        if(settingVisible === false) {
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
        changeSettingVisible(!settingVisible)
    }
    const handleWidgetDisplay = () => {
        if(widgetDisplay === false) {
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeLinksModal()
        }
        changeWidgetDisplay(!widgetDisplay)
    }
    const handleChangeSettingDisplay = () => {
        if(mainSettingDisplay === false) {
            closeWeatherModal()
            closeLinksModal()
            closeWidgetDisplay()
        }
        changeSettingDisplay(!mainSettingDisplay)
    }
    const handleClick = (e:any) => {
        console.log(e.target.closest('div'));
        if(e.target.classList.contains('links') || e.target.classList.contains('weather') || e.target.classList.contains('footer') || e.target.closest('div').classList.contains('main-down') || e.target.closest('div').classList.contains('main')|| e.target.closest('div').classList.contains('clockBox')|| e.target.closest('div').classList.contains('focus-enter')){
            closeLinksModal()
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
    }
    return (
    <Wrapper classes='main-menu' onClick={handleClick}>
        <Top closeWeatherModal={closeWeatherModal} closeLinksModal={closeLinksModal} toggleLinksModal={toggleLinksModal} toggleWeatherModal={toggleWeatherModal} weatherVisible={weatherVisible} settingVisible={settingVisible}/>
        <Main/>
        <MainDown/>
        <Footer handleChangeSettingDisplay={handleChangeSettingDisplay} mainSettingDisplay={mainSettingDisplay} widgetDisplay={widgetDisplay} handleWidgetDisplay={handleWidgetDisplay}/>
    </Wrapper>
    )}

export default Scheme