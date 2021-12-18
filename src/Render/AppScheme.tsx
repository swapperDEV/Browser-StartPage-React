import React, {useState} from 'react'
import Wrapper from '../UI/Wrapper'
import './styles/Scheme.css'
import Main from '../Components/Main/Main'
import MainDown from '../Components/MainDown/MainDown'
import Top from '../Components/Top/Top'
import Footer from '../Components/Footer/Footer'
import ModalContext from '../Store/modal-context'
import FuncDisplayContext from '../Store/funcdisplay-context'

const Scheme = () => {
    const [settingVisible, changeSettingVisible] = useState(false)
    const [weatherVisible, setWeatherVisible] = useState(false)
    const [mainSettingDisplay, changeSettingDisplay] = useState(false)
    const [widgetDisplay, changeWidgetDisplay] = useState(false)
    const [funcDisplay, changeFuncDisplay] = useState<any>({
        links: true,
        search: true,
        weather: true,
        widget: true,
        photoinfo: true,
        quotes: true,
        focus: true,
        timemessage: true,
    })
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
        if(!weatherVisible) {
            closeLinksModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
        setWeatherVisible(!weatherVisible)    
    }
    const toggleLinksModal = () => {
        if(!settingVisible) {
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeWidgetDisplay()
        }
        changeSettingVisible(!settingVisible)
    }
    const handleWidgetDisplay = () => {
        if(!widgetDisplay) {
            closeWeatherModal()
            closeChangeSettingDisplay()
            closeLinksModal()
        }
        changeWidgetDisplay(!widgetDisplay)
    }
    const handleChangeSettingDisplay = () => {
        if(!mainSettingDisplay) {
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
    const displaySettingSave = () => {
        localStorage.setItem("displaySettings", JSON.stringify(funcDisplay));
    }
    const handleChangeDisplay = (element:String) => {
        console.log(element);
        let actTable = funcDisplay
        switch(element) {
            case 'links':
                actTable.links = !actTable.links
                break;
            case 'search':
                actTable.search = !actTable.search
                break;
            case 'weather':
                actTable.weather = !actTable.weather
                break;
            case 'widget':
                actTable.widget = !actTable.widget
                break;
            case 'photoinfo':
                actTable.photoinfo = !actTable.photoinfo
                break;
            case 'quotes':
                actTable.quotes = !actTable.quotes
                break;
            case 'focus':
                actTable.focus = !actTable.focus
                break;
            case 'timemessage':
                actTable.timemessage = !actTable.timemessage
                break;
        }
        changeFuncDisplay(actTable)
        closeChangeSettingDisplay()
        displaySettingSave()
    }
    React.useEffect(() => {
        //@ts-ignore
        const storageDisplaySettings = JSON.parse(localStorage.getItem("displaySettings"));
        if(storageDisplaySettings !== null) {
            changeFuncDisplay(storageDisplaySettings)
        }
    },[])
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
                <FuncDisplayContext.Provider value={{
                    //@ts-ignore
                    changeDisplay: handleChangeDisplay,
                    display: funcDisplay, 
                }}>
                    <Wrapper classes='main-menu' onClick={handleClick}>
                        <Top/>
                        <Main/>
                        <MainDown/>
                        <Footer/>
                    </Wrapper>
                </FuncDisplayContext.Provider>
            </ModalContext.Provider>
        </>
    )}

export default Scheme