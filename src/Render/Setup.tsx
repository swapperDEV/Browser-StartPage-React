import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './styles/Setup.css'
import {useContext} from 'react'
import DataContext from '../Store/data-context'
import NameBox from './Setup/name'
import $ from 'jquery'
import { API } from '../Store/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Setup = (props:any) => {
    const data = useContext(DataContext)
    const [city, changeCity] = useState('')
    const [step, setStep] = useState('name')

    const notify = (text:string) => toast.warn(`${text}`, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const createNotification = (text:string) => {
        notify(text)
    }
    const nameSend = (value:string) => {
        props.sendName(value)
        setStep('city')
    }
    const locationSend = (value:string) => {
        const URL = API.WEATHER_LINK + value + API.WEATHER_KEY
        fetch(URL).then(res => res.json()).then((res:any) => {
            console.log(res);
            if(res.message === 'city not found' || res.message === 'bad query') {
                createNotification('City not found!')
            } else {
                props.sendCity(value, res.coord.lat, res.coord.lon)
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
    <>
        <div className='setupMenu'>
            <div className='iconBox'>
                <i className="fab fa-stumbleupon-circle"></i>
            </div>
            <div className='registerBox'>
                {step ==='name' &&<NameBox placeholder='Your name' text="Hi, what's your name?" maxLength='20' startValue='' method={nameSend} type='name'/>}
                {step === 'city' &&<NameBox placeholder='Your city' text={`${data.name}, where you from?`} maxLength='32' startValue={city} type='city' method={locationSend}/>}
            </div>
        </div>
    </>
)}

export default Setup