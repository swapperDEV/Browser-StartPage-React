import React, {useState, useEffect} from 'react'
import './styles/App.css';
import './styles/Modes.css';
import Setup from './Setup'
import AppScheme from './AppScheme.tsx'
import Background from '../UI/Background'
import DataContext from '../Store/data-context';

const App = () => {
  const [myName, setName] = useState(localStorage.getItem('userName'))
  const [myCity, setCity] = useState(localStorage.getItem('userCity'))
  const [status, changeStatus] = useState(false)

  const isDataExist = () => {
    if(localStorage.getItem("userName") === null || localStorage.getItem("userName") === '' || localStorage.getItem("userCity") === null || localStorage.getItem("userCity") === '') 
    {
      changeStatus(false)
    } else {
      changeStatus(true)
    }
  }

  const updateStorage = (what) => {
    if(what === 'name') {
      localStorage.setItem('userName', myName)
    } else if (what === 'city') {
      localStorage.setItem('userCity', myCity)
    }
  }
  const sendName = (newName) => {
    console.log(newName)
    setName(newName)
    updateStorage('name')
  }
  const sendCity = (newCity) => {
    console.log(newCity)
    setCity(newCity)
    updateStorage('city')
    changeStatus(true)
  }

  useEffect(() => {
    isDataExist()
  },[])
  return (
    <DataContext.Provider value={{image: '', name: myName, city: myCity, lat: '', lon: ''}}>
      <Background classes='light background'>
        {status ? <AppScheme/> : <Setup sendName={sendName} sendCity={sendCity}/>}
      </Background>
    </DataContext.Provider>
  );
}

export default App;
