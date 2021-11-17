import { API } from "../Store/api"

export const weatherRequest = async (city:string): Promise<{temp: string}> => {
  if(city === null || city === undefined || city === '') {
    city = 'London'
  }
    console.log(city)
    const URL = API.WEATHER_LINK + city + API.WEATHER_KEY + API.WEATHER_UNITS
    const apiResponse = await fetch(URL);
    const data = await apiResponse.json();
    if(!apiResponse.ok){
      throw data;    
    }
    return {
      temp: data.main.temp
    }
}