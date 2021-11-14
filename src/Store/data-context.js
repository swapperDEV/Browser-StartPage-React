import {createContext} from 'react'

const DataContext = createContext({
    image: '',
    name: '',
    city: '',
    lat: '',
    lon: '',
})

export default DataContext;

