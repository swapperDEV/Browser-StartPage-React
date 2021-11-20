import {createContext} from 'react'

const ModalContext = createContext({
    handleChangeSettingDisplay: () => {},
    mainSettingDisplay: false, 
    widgetDisplay: false,
    handleWidgetDisplay: () => {},
    toggleLinksModal: () => {},
    toggleWeatherModal: () => {},
    weatherVisible: false,
    settingVisible: false
})
    

export default ModalContext;

