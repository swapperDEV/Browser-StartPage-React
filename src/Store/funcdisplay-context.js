import {createContext} from 'react'

const FuncDisplayContext = createContext({
    changeDisplay: () => {},
    display: {
        links: false,
        search: false,
        weather: false,
        widget: false,
        photoinfo: false,
        quotes: false,
        focus: false,
        timemessage: false,
    }, 
})
    

export default FuncDisplayContext;

