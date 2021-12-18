import React from 'react'
import Wrapper from '../../../../../UI/Wrapper'
import { getIcon } from '../../../../../UI/weatherGetIcon'
import Icon from '../../../../../UI/Icon'

const Daily = (props:any) => {
    const {cityIfInput, inputCity, handleInputCity, setCity, getGps, resetInput, city, editCity, dayData} = props
    return (
        <>
            {cityIfInput ? 
            <Wrapper classes='inputCity'>
                <input value={inputCity} onChange={handleInputCity} className='changeCityName' onKeyPress={setCity}/>
                <Icon classes="fas fa-location-arrow icon" onClick={getGps}/>
                <Icon classes="fas fa-times icon" onClick={resetInput}/>
            </Wrapper>
            :
            <Wrapper>
                <p className='city'>{city}
                    <Icon classes="fas fa-pen edit" onClick={editCity}/>
                </p>
                <p className='description'>{dayData.description}</p> 
            </Wrapper>
            }

            <Wrapper classes='box'>
                <Wrapper classes='tempBox'>
                    {getIcon(dayData.id)}
                    <p className='temp'>{dayData.temp}°</p>
                </Wrapper>
                <Wrapper classes='pressureBox'>
                    <Wrapper>
                        <p>{dayData.pressure} hPa</p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </>
    )
}

export default Daily