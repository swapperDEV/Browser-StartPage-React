import React, {useEffect} from 'react';
import '../styles/App.css';
import App from './App'
import Loader from './Loader'
import SetUp from '../components/component/SetUp'
import DataContext from '../store/data-context';

const Loading = () => {
  const [actBg, changeActBg] = React.useState('')
  const [colorMode, changeColorMode] = React.useState('darkmode')
  const [userName, changeUserName] = React.useState('')
  const [userCity, changeUserCity] = React.useState('')
  const [userLat, changeUserLat] = React.useState('')
  const [userLon, changeUserLon] = React.useState('')
  const [ifLoader, changeLoader] = React.useState(true)
  const [ifChoosed, changeChoosed] = React.useState(true)
  const updates = () => {
    changeActBg(localStorage.getItem("actBg"))
    changeUserName(localStorage.getItem("userName"))
    changeColorMode(localStorage.getItem("colorMode"))
    changeUserLon(localStorage.getItem("userLon"))
    changeUserCity(localStorage.getItem("userCity"))
    changeUserLat(localStorage.getItem("userLat"))
  }
  useEffect(() => {
    setTimeout(() => {
      changeLoader(true)
    },1000)
  }, [])
  useEffect(() => {
    if(localStorage.getItem("colorMode") == null) {
      localStorage.setItem("colorMode", 'darkmode');}
    if (localStorage.getItem("actBg") === null || localStorage.getItem("actBg") === '' || localStorage.getItem("userName") === null || localStorage.getItem("userName") === '') {
      console.log('blad danych')
      changeChoosed(false)
    } else {
      updates()
    }
  }, [])
  const addedSave = () => {
    changeChoosed(true)
    updates()
  }
  const changeMode = () => {
    changeColorMode(localStorage.getItem("colorMode"))
  }
  return (
    <DataContext.Provider value={{image: actBg, name: userName, color: colorMode, city: userCity, lat: userLat, lon: userLon}}>
        <div id='notify' className='notifbox'></div>
        { !ifChoosed ?
        <div className='prePage'>
          {ifLoader ? <SetUp method={addedSave}/> : <Loader/>}
        </div> :
        <div className='page'>
          <App methodChangeMode={changeMode}/>
        </div>
        }
    </DataContext.Provider>
  );
}

export default Loading;
