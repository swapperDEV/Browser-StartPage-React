import { API } from '../Store/api';

export const weatherSearch = async (city) => {
    let data
    const URL = API.WEATHER_LINK + city + API.WEATHER_KEY + API.WEATHER_UNITS
    await fetch(URL).then(res => res.json()).then(res => {
    data = {
        temp: res.main.temp.toFixed(0),
        description: ''
    }})
    return data
}
