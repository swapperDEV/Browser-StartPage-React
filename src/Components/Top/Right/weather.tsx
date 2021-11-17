import React, {useState, useEffect} from 'react'
import Wrapper from '../../../UI/Wrapper';
import { Fade } from 'react-awesome-reveal'
import './styles/weather.css'
import { useContext } from 'react';
import { API } from '../../../Store/api';
import DataContext from '../../../Store/data-context';

const Weather = () => {
    const [city, changeCity] = useState(useContext(DataContext).city)
    const [dataInfo, changeDataInfo] = useState<any>({
        temp: 0,
        description: ''
    })
    

    const fullWeather = () => {
        const URL = API.WEATHER_FULL + city + API.WEATHER_KEY + API.WEATHER_UNITS
        fetch(URL).then(res => res.json()).then(res => {console.log(res);})
    }
    
    const getWeather = () => {
        console.log(city == null);
        if(city == null) {
        } else {
        console.log('fetching');
        const URL = API.WEATHER_LINK + city + API.WEATHER_KEY + API.WEATHER_UNITS
        fetch(URL).then(res => res.json()).then(res => {
        let data = {
            temp: res.main.temp.toFixed(0),
            description: ''
        }
        changeDataInfo(data)
        fullWeather()
    })}}
    
    useEffect(() => {
        getWeather()
    }, [])

    return (
        <Wrapper classes='weather'>
            <Fade>
                <Wrapper classes='weatherChild'>
                    <Wrapper classes='up'><i className="fas fa-cloud-sun"></i> {dataInfo.temp}°</Wrapper>
                    <Wrapper classes='bottom'>{city}</Wrapper>
                </Wrapper>
            </Fade>
        </Wrapper>
    )
}

export default Weather;