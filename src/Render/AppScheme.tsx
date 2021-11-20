import React, {useState} from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'
import Top from '../Components/Top/Top'
import Footer from '../Components/Footer/footer'
import ModalContext from '../Store/modal-context'

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
        if(e.target.classList.contains('links') || e.target.classList.contains('weather') || e.target.classList.contains('footer') || e.target.closest('div').classList.contains('main-down') || e.target.closest('div').classList.contains('main')|| e.target.closest('div').classList.contains('clockBox')|| e.target.closest('div').classList.contains('focus-enter')){
            closeLinksModal()
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
    }
    return (
        <>
            <ModalContext.Provider value={{
                handleChangeSettingDisplay: handleChangeSettingDisplay,
                mainSettingDisplay: mainSettingDisplay,
                widgetDisplay: widgetDisplay,
                handleWidgetDisplay: handleWidgetDisplay,
                toggleLinksModal: toggleLinksModal,
                toggleWeatherModal: toggleWeatherModal,
                weatherVisible: weatherVisible,
                settingVisible: settingVisible,
            }}>
                <Wrapper classes='main-menu' onClick={handleClick}>
                    <Top/>
                    <Main/>
                    <MainDown/>
                    <Footer/>
                </Wrapper>
            </ModalContext.Provider>
        </>
    )}

export default Scheme