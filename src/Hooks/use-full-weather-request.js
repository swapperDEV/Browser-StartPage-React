import { API } from '../Store/api';

const dayToSearch = () => {
    let day = new Date();
    let nextDay = new Date(day);
    let table = []
    for(let i = 1; i<5; i++) {
        nextDay.setDate(day.getDate() + i);
        let date = nextDay.getFullYear()+'-'+(nextDay.getMonth()+1)+'-'+nextDay.getDate()
        table.push(date)
    }
    return table   
}
const getDateName = (data) => {
    var date = new Date(data);
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let name = weekdays[date.getDay()];
    return name
}
export const fullWeatherSearch = async (city) => {
    let whichUnits = localStorage.getItem('units')
    let URL
    const URLMetric = API.WEATHER_FULL + city + API.WEATHER_KEY + API.WEATHER_UNITS
    const URLImperial = API.WEATHER_FULL + city + API.WEATHER_KEY + API.WEATHER_UNITS_IMPERIAL
    if(city === null) {
        city = 'London'
    }
    let data
    if(whichUnits === 'metric') {
        URL = URLMetric
    } else {
        URL = URLImperial
    }    await fetch(URL).then(res => res.json()).then(res => {
    data = res})
    data = data.list
    let daysReturned = {
        night: [],
        day: [],
        name: [],
    }
    let dayToSearchTable = await dayToSearch()
    if(data !== undefined) {
    await data.map((e) => {
        dayToSearchTable.map((date) => {
            if(e.dt_txt === date + ' 12:00:00') {
            daysReturned.day.push(e)
            let name = getDateName(date)
            daysReturned.name.push(name)
        } 
            if(e.dt_txt === date + ' 00:00:00') {
                daysReturned.night.push(e)}
                return 0
        })
        return 0
    })}
    console.log(daysReturned)
    return daysReturned
}
