import React, {useState, useEffect} from 'react'
import './styles/App.css';
import './styles/Modes.css';
import Setup from './Setup'
import AppScheme from './AppScheme'
import Background from '../UI/Background'
import DataContext from '../Store/data-context';
import NotifyContainer from '../UI/Notification/NotifyContainer';

const App = () => {
  const [myName, setName] = useState(localStorage.getItem('userName'))
  const [myCity, setCity] = useState(localStorage.getItem('userCity'))
  const [lat, setLat] = useState(localStorage.getItem('userLat'))
  const [lon, setLon] = useState(localStorage.getItem('userLon'))
  const [weatherCity, setWeatherCity] = useState(localStorage.getItem('weatherCity'))
  const [status, changeStatus] = useState(true)

  const isDataExist = () => {
    if(localStorage.getItem("userName") === null || localStorage.getItem("userName") === '' || localStorage.getItem("userCity") === null || localStorage.getItem("userCity") === '' || localStorage.getItem('userName') === 'null') {
      console.log('null')
      changeStatus(false)
    }  else {
      changeStatus(true)
    }
  }

  const updateStorage = (what:string, value:string, value2:any, value3:any) => {
    if(what === 'name') {
      localStorage.setItem('userName', value)
    } else if (what === 'city') {
      localStorage.setItem('userCity', value)
      localStorage.setItem('weatherCity', value)
      localStorage.setItem('userLat', value2)
      localStorage.setItem('userLon', value3)
      localStorage.setItem('units', 'metric')
    }
  }
  const sendName = (newName:any) => {
    console.log(newName)
    setName(newName)
    updateStorage('name', newName, null, null)
  }
  const sendCity = (newCity:string, lat:any, lon:any) => {
    console.log(newCity, lat, lon)
    setCity(newCity)
    setWeatherCity(newCity)
    setLat(lat)
    setLon(lon)
    updateStorage('city', newCity, lat, lon)
    registerCompleted()
  }
  const registerCompleted = () => {
    changeStatus(true)
  }
  const updateWeatherCity = (city:string) => {
    console.log(city);
    localStorage.setItem('weatherCity',  city)
    setWeatherCity(city)
  }
  useEffect(() => {
    isDataExist()
  },[])
  return (
    //@ts-ignore
    <DataContext.Provider value={{image: '', name: myName, city: myCity, lat: lat, lon: lon, weatherCity: weatherCity, updateWeatherCity: updateWeatherCity}}>
      <Background classes='light background'>
        <NotifyContainer/>
        {status ? <AppScheme/> : <Setup sendName={sendName} sendCity={sendCity} registerCompleted={registerCompleted}/>}
      </Background>
    </DataContext.Provider>
  );
}

export default App;
