import React, {useState, useEffect} from 'react'
import Apps from './App'

const App = () => {
    const [ifLoaded, changeLoaded] = useState(false)
    useEffect(() => {
    changeLoaded(!ifLoaded)
    },[])
    return (
        <>
            {ifLoaded ? <Apps/>:null}
        </>
    )
}

export default App