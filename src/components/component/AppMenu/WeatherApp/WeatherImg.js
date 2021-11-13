import React from 'react'
import cloud from '../../../../assets/img/weather/static/cloudy-day-1.svg'
import clear from '../../../../assets/img/weather/static/day.svg'
import rain from '../../../../assets/img/weather/static/rainy-6.svg'
import smallrain from '../../../../assets/img/weather/static/rainy-1.svg'
import snow from '../../../../assets/img/weather/static/snowy-5.svg'
import thunder from '../../../../assets/img/weather/static/thunder.svg'
import fog from '../../../../assets/img/weather/static/cloudy-day-1.svg'
import unkown from '../../../../assets/img/weather/static/weather.svg'

const WeatherImg = (props) => {
    const {id} = props
    let status;
    if(id >= 200 && id < 300) {
        status = 'thunder'
    } else if(id >= 300 && id < 400) {
        status = 'smallrain'
    } else if(id >= 500 && id < 600) {
        status = 'rain'
    } else if(id >= 600 && id < 700) {
        status = 'snow'
    } else if(id >= 700 && id < 800) {
        status = 'fog'
    } else if(id === 800) {
        status = 'clear'
    } else if(id > 800 && id < 900) {
        status = 'cloud'
    } else {
        status = 'unkown'
    }
    return (
        <>
        {status === 'thunder' ? <img src={thunder} alt='weather'></img> : null }
        {status === 'smallrain' ? <img src={smallrain} alt='weather'></img> : null }
        {status === 'rain' ? <img src={rain} alt='weather'></img> : null }
        {status === 'snow' ? <img src={snow} alt='weather'></img> : null }
        {status === 'fog' ? <img src={fog} alt='weather'></img> : null }
        {status === 'clear' ? <img src={clear} alt='weather'></img> : null }
        {status === 'cloud' ? <img src={cloud} alt='weather'></img> : null }
        {status === 'unkown' ? <img src={unkown} alt='weather'></img> : null }
        </>
    )
}

export default WeatherImg;