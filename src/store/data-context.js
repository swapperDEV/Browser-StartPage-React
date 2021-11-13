import {createContext} from 'react'

const DataContext = createContext({
    image: '',
    name: '',
    color: 'darkmode',
    city: '',
    lat: '',
    lon: '',
})

export default DataContext;

