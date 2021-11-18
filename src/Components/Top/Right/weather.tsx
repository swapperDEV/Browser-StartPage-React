import React, {useState, useEffect} from 'react'
import Wrapper from '../../../UI/Wrapper';
import { Fade } from 'react-awesome-reveal'
import './styles/weather.css'
import { useContext } from 'react';
import { API } from '../../../Store/api';
import DataContext from '../../../Store/data-context';
import { weatherSearch } from '../../../Hooks/use-weather-request';
import { fullWeatherSearch } from '../../../Hooks/use-full-weather-request';

const Weather = () => {
    const [city, changeCity] = useState(useContext(DataContext).city)
    const [dataInfo, changeDataInfo] = useState<any>({
        temp: 0,
        description: ''
    })
    const getWeather = async () => {
        let data = await weatherSearch(city)
        console.log(data);
        changeDataInfo(data)
        let fullData = await fullWeatherSearch(city)
        console.log(fullData);
    }
    
    useEffect(() => {
        getWeather()
    }, [])

    return (
        <Wrapper classes='weather'>
            <Fade>
                <Wrapper classes='weatherChild'>
                    <Wrapper classes='up'><i className="fas fa-cloud-sun"></i> <b>{dataInfo.temp}°</b></Wrapper>
                    <Wrapper classes='bottom'>{city}</Wrapper>
                </Wrapper>
            </Fade>
        </Wrapper>
    )
}

export default Weather;