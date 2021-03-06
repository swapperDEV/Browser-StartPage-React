import React, {useState, useEffect} from 'react'
import './styles/Setup.css'
import {useContext} from 'react'
import DataContext from '../Store/data-context'
import NameBox from './Setup/name'
import { API } from '../Store/api'
import { notify } from '../UI/Notification/ErrorNotify'
import 'react-toastify/dist/ReactToastify.css';
import { getUserGps } from '../Functions/getGps'
import { getCityFromCord } from '../Functions/getCityFromCord'

const Setup = (props:any) => {
    const { registerCompleted } = props
    const data = useContext(DataContext)
    const [city, changeCity] = useState<string>('')
    const [step, setStep] = useState('name')

    const nameSend = (value:string) => {
        props.sendName(value)
        if(localStorage.getItem('userCity') !== null && localStorage.getItem('userCity') !== undefined && localStorage.getItem('userCity') !== '') {
            setStep('')
            registerCompleted()
        } else {
            setStep('city')
        }
    }
    const locationSend = (value:string) => {
        const URL = API.WEATHER_LINK + value + API.WEATHER_KEY
        fetch(URL).then(res => res.json()).then((res:any) => {
            if(res.message === 'city not found' || res.message === 'bad query') {
                notify('City not found!')
            } else {
                props.sendCity(value, res.coord.lat, res.coord.lon)
                setStep('')
            }
        })
    }
    const getCityFowards = async (lat:number|string, lon:number|string) => {
        let city = await getCityFromCord(lat,lon)
        await changeCity('')
    }
    const getCity = async() => {
        const data = await getUserGps()
        if(data.city === null || data.city === 'null' || data.city === undefined || data.city === 'undefined') {
            let lat = data.lat
            let lon = data.lon
            getCityFowards(lat, lon)
        } else {
        changeCity(data.city)
    }
    }
    useEffect(() => {
        getCity()
        if(localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined && localStorage.getItem('userName') !== '') {
            setStep('city')
        }
    }, [])
    return (
    <>
        <div className='setupMenu'>
            <div className='iconBox'>
                <i className="fab fa-stumbleupon-circle"></i>
            </div>
            <div className='registerBox'>
                {step ==='name' &&<NameBox placeholder='Your name' text="Hi, what's your name?" maxLength='20' startValue='  ' method={nameSend} type='name'/>}
                {step === 'city' &&<NameBox placeholder='Your city' text={`${data.name}, where you from?`} maxLength='32' startValue={city} type='city' method={locationSend}/>}
            </div>
        </div>
    </>
)}

export default Setup