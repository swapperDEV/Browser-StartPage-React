import {createContext} from 'react'

const DataContext = createContext({
    image: '',
    name: '',
    city: '',
    weatherCity: '',
    updateWeatherCity: () => {},
    lat: '',
    lon: '',
})

export default DataContext;

