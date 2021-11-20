import { API } from '../Store/api';

export const weatherSearch = async (city) => {
    let data = {
        temp: '',
        description: '',
        id: '',
        pressure: '',
    }
    if(city !== null || city !== undefined || city !== 'null' || city !== 'undefined' || city !== '') {
    const URL = API.WEATHER_LINK + city + API.WEATHER_KEY + API.WEATHER_UNITS
    await fetch(URL).then(res => res.json()).then(res => {
    data = {
        temp: res.main.temp.toFixed(0),
        description: res.weather[0].description,
        id: res.weather[0].id,
        pressure: res.main.pressure
    }})}
    return data
}
