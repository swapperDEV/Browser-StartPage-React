import React, {useState, useEffect} from 'react'
import './SetUp.css'
import newyork from '../../assets/img/newyork.jpg'
import moscow from '../../assets/img/moscow.jpg'
import code from '../../assets/img/code.jpg'
import Notification from '../UI/Notification'
import ReactDOM from 'react-dom'
import Theme from '../UI/Theme'
import $ from 'jquery'
import { WEATHER_API_KEY as API_KEY, WEATHER_API_LINK as API_LINK, WEATHER_API_UNITS as API_UNITS} from '../../store/api'
let city;
let lat;
let lon;

const SetUp = (props) => {
    const [inputName, changeNameInput] = useState('')
    const [inputCity, changeCityInput] = useState('')
    const [cityActError, changeCityActError] = useState(false)
    const [text, changeText] = useState('')
    const [error, changeError] = useState('')
    const [cityError, changeCityError] = useState('')
    const changeName = (e) => {
        changeNameInput(e.target.value)
    }
    const handleChangeCity = (e) => {
        changeCityInput(e.target.value)
        city = e.target.value
    }
    const actTextMethod = () => {
        changeText(`Active Theme: ${localStorage.getItem("actBg")}`)
    }
    const validatorForm = () => {
        if(inputName.length > 3) {
                testRequest()
        } else {
            return (
                changeError('Too short name!')
            )
        }
    }

    const keyPressed = (e) => {
        if(e.key === 'Enter') {
            validatorForm()
        }
    }

    const testRequest = () => {
        setTimeout(() => {
            changeCityInput(city)
            console.log(cityActError)
            let cityName = city
            let URL = API_LINK + cityName + API_KEY + API_UNITS + '&exclude=daily'
            fetch(URL).then(res=>res.json()).then((res) => {
                if(res.message === 'city not found' || res.message === 'bad query') {
                    changeCityError('Bad city')
                    changeCityActError(true)
                } else {
                    changeCityActError(false)
                    lat = res.coord.lat
                    lon = res.coord.lon
                    if(localStorage.getItem("actBg") !== null) {
                        localStorage.setItem("userName", inputName);
                        localStorage.setItem("userCity", city);
                        localStorage.setItem("userLat", lat);
                        localStorage.setItem("userLon", lon);
                        props.method()
                        } else {
                            changeError('Please choose Theme!')
                        }
                }
            })
        }, 1500)
    }
    const getGps = () => {
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function(location) {
                city = location.city
                lat = location.latitude
                lon = location.longitude
                console.log('Pobrano z gps ' + city,lat,lon)
                changeCityInput(city)
            }
          })
    }

    useEffect(() => {
        getGps()
    },[])

    return (
        <div className='inputDiv'>
            <p>Choose theme</p>
            <div className='themes'>
                <Theme type='NewYork' method={actTextMethod} source={newyork}/>
                <Theme type='Code' method={actTextMethod} source={code}/>
                <Theme type='Moscow' method={actTextMethod} source={moscow}/>
            </div>
            <div className='data'>
                {error !== '' ? ReactDOM.createPortal(<Notification text={error} type={'error'}/>, document.querySelector('#notify')) : null}
                {cityError !== '' ? ReactDOM.createPortal(<Notification text={cityError} type={'error'}/>, document.querySelector('#notify')) : null}
                {text}

                <div className='inputName'>
                    <input value={inputName} maxLength='12' onKeyPress={keyPressed} placeholder='your name' onChange={changeName}/> 
                </div>
                <div className='loc'>
                    <input placeholder='your city' onKeyPress={keyPressed} value={inputCity} onChange={handleChangeCity}/><button onClick={getGps}><i className="fas fa-location-arrow"></i></button>
                </div>
                <div className='confirmDiv'>
                    <button onClick={validatorForm} className='confirm'>Confirm <i className="fas fa-check"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SetUp;
