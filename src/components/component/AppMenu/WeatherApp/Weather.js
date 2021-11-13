import React, {useContext} from 'react'
import Background from '../../../UI/Wrapper'
import './Weather.css'
import DataContext from '../../../../store/data-context'
import { WEATHER_API_KEY, WEATHER_API_LINK, WEATHER_API_UNITS } from '../../../../store/api'
import useFetch from 'react-fetch-hook'
import WeatherImg from './WeatherImg'
import TopData from './TopData'
import BottomData from './BottomData'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Weather = () => {
    const ctx = useContext(DataContext)
    const city = ctx.city
    let URL = WEATHER_API_LINK + city + WEATHER_API_KEY + WEATHER_API_UNITS + '&exclude=daily'
    const {data} = useFetch(URL)
    let country
    let day
    let actTime
    let weatherDescription
    let temp;
    let feelTemp;
    let wind; 
    let humidity; 
    let status; 

    if(data !== undefined) {
        console.log(data)
        country = data.sys.country
        let date = new Date()
        let localTime = date.getTime()
        let localOfffset = date.getTimezoneOffset()*60000
        let utc = localTime + localOfffset
        let time = utc + (1000 * data.timezone)
        let actDate = new Date(time)
        day = days[actDate.getDay()]
        let h = actDate.getHours();
        let m = actDate.getMinutes();
        let x = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0'+m: m;
        actTime = h + ':' + m + ' ' + x;
        weatherDescription = data.weather[0].description
        temp = data.main.temp.toFixed(0)
        feelTemp = data.main.feels_like.toFixed(0)
        wind = data.wind.speed.toFixed(0)
        humidity = data.main.humidity
        status = data.weather[0].id
    }

    return (
        <Background classes='weatherBack'>
            <Background classes='weatherApp'>
                <Background classes='data'>
                    <TopData city={city} country={country} day={day} actTime={actTime} weatherDescription={weatherDescription}/>
                    <Background classes='bottomInfo'>
                        <BottomData temp={temp} feelTemp={feelTemp} wind={wind} humidity={humidity}/>
                    </Background>
                </Background>
                <Background classes='graphic'>
                    <WeatherImg id={status}/>
                </Background>
            </Background>
        </Background>
    )
}

export default Weather;