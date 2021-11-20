import React, {useState, useContext} from 'react'
import '../styles/WeatherDisplay.css'
import Wrapper from '../../../../UI/Wrapper'
import { Slide } from 'react-awesome-reveal'
import Day from './Elements/Day'
import { getUserGps } from '../../../../Functions/getGps'
import { API } from '../../../../Store/api'
import { notify } from '../../../../UI/Notification/ErrorNotify'
import DataContext from '../../../../Store/data-context'
import Icon from '../../../../UI/Icon'
import Daily from './Elements/Daily'

const WeatherDisplay = (props:any) => {
    const ctx = useContext(DataContext)
    let { updateWeatherCity } = ctx
    let { city, updateWeatherCityParent } = props
    const [dayData] = useState(props.dayData)
    const [fullData] = useState(props.fullData)
    const [cityIfInput, changeCityIfInput] = useState(false)
    const [inputCity, changeCityInput] = useState<any>('')
    const [units, changeUnits] = useState(localStorage.getItem('units'))
    let days
    if(fullData !== null) {
        days = fullData.map((day:any) => (
            <Day daykey={day.key} key={day.key} dayday={day.day} dayicon={day.icon} daytempMax={day.tempMax} daytempMin={day.tempMin}/>
        ))
    } else {
        days = ''
    }
    const editCity = () => {
        changeCityIfInput(!cityIfInput)
    }
    const closeWeather = () => {
        props.close()
    }
    const locationSend = async (value:string) => {
        const URL = API.WEATHER_LINK + value + API.WEATHER_KEY
        let response
        await fetch(URL).then(res => res.json()).then((res:any) => {
            console.log(res);
            if(res.message === 'city not found' || res.message === 'bad query') {
                notify('City not found!')
                response = 'false'
            } else {
                response = 'true'
                // @ts-ignore
                updateWeatherCity(value)
                updateWeatherCityParent(value)
                changeCityIfInput(!cityIfInput)
                changeCityInput('')
            }
        })
        return response
    }
    const setCity = async (e:any) => {
        if(e.key === 'Enter') {
            localStorage.setItem('weatherCity', inputCity)
            let response = await locationSend(inputCity)
            console.log(response);
        }
    }
    const handleInputCity = (e:any) => {
        changeCityInput(e.target.value)
    }
    const getGps = async () => {
        let city = await getUserGps()
        if(city.city !== null || city.city !== undefined || city.city !== 'null' || city.city !== 'undefined' || city.city !== '') {
            changeCityInput(city.city)
        } else {
            let userCity = localStorage.getItem('userCity')
            changeCityInput(userCity)
        }
    }
    const resetInput = () => {
        changeCityInput('')
    }
    const unitsSwitch = () => {
        if(localStorage.getItem('units') === 'metric') {
            localStorage.setItem('units', 'imperial')
            changeUnits('imperial')
        } else {
            localStorage.setItem('units', 'metric')
            changeUnits('metric')
        }
        // @ts-ignore
        updateWeatherCity(city)
        updateWeatherCityParent(city)
        
    }
    return (
        <>
            <Slide direction={'right'} duration={200}>
                <Wrapper classes={cityIfInput ? 'weatherDisplay weatherOpacity' : 'weatherDisplay'}>
                    <Icon classes="triagle fas fa-sort-up"></Icon>
                    <Wrapper classes='daily'>
                        <Daily cityIfInput={cityIfInput} inputCity={inputCity} handleInputCity={handleInputCity} setCity={setCity} getGps={getGps} resetInput={resetInput} closeWeather={closeWeather} city={city} editCity={editCity} dayData={dayData}/>
                    </Wrapper>
                    <Wrapper classes='nextDays'>
                        {days}
                    </Wrapper>
                    <Wrapper classes='units' onClick={unitsSwitch}>
                        <Icon classes='fas fa-thermometer-empty'/>{units === 'metric' ? <p>°C</p> : <p>°F</p>}
                    </Wrapper>
                </Wrapper>        
            </Slide>
        </>
    )
}

export default WeatherDisplay