import React from 'react'
import './styles/days.css'
import Wrapper from '../../../../../UI/Wrapper'
import Icon from '../../../../../UI/Icon'

const Day = (props:any) => {
    const {daykey,dayicon, daytempMax, daytempMin} = props
    let name = props.dayday.slice(0, 3).toUpperCase()
    return (
        <>
            <div key={daykey} className='oneOfFiveDays'>
                <p className='dayName'>{name}</p>
                {dayicon}
                <p className='temp'>
                    <p className='max'>{daytempMax.toFixed(0)}° </p>
                    <p className='min'>{daytempMin.toFixed()}° </p>
                </p>
            </div>
        </>
    )
}

export default Day