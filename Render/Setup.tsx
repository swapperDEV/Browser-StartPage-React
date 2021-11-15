import React, {useState, useEffect} from 'react'
import './styles/Setup.css'
import {useContext} from 'react'
import DataContext from '../Store/data-context'
import NameBox from './Setup/name'
import $ from 'jquery'
import { API } from '../Store/api'

const Setup = (props:any) => {
    const data = useContext(DataContext)
    const [city, changeCity] = useState('')
    const [step, setStep] = useState('name')
    const nameSend = (value:string) => {
        props.sendName(value)
        setStep('city')
    }
    const locationSend = (value:string) => {
        const URL = API.WEATHER_LINK + value + API.WEATHER_KEY
        fetch(URL).then(res => res.json()).then((res:any) => {
            console.log(res);
            if(res.message === 'city not found' || res.message === 'bad query') {
                console.log('error');
            } else {
                props.sendCity(value)
                setStep('')
            }
        })
    }
    const getUserGps = () => {
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function(location:any) {
                changeCity(location.city)
                console.log('Pobrano z gps ' + location.city)
            }
          })
    }
    useEffect(() => {
        getUserGps()
    }, [])
    return (
    <div className='setupMenu'>
        <div className='iconBox'>
            <i className="fab fa-stumbleupon-circle"></i>
        </div>
        <div className='registerBox'>
            {step ==='name' &&<NameBox placeholder='Your name' text="Hello, what's your name?" maxLength='20' startValue='' method={nameSend} type='name'/>}
            {step === 'city' &&<NameBox placeholder='Your city' text={`${data.name}, where you from?`} maxLength='32' startValue={city} type='city' method={locationSend}/>}
        </div>
    </div>
)}

export default Setup