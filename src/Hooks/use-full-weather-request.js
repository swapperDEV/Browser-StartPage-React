import { API } from '../Store/api';

export const fullWeatherSearch = async (city) => {
    let data
    const URL = API.WEATHER_FULL + city + API.WEATHER_KEY + API.WEATHER_UNITS
    await fetch(URL).then(res => res.json()).then(res => {
    data = res})
    return data
}
