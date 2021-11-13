import React from 'react'

const TopData = (props) => {
    return (
        <>
            <p className='cityName'>{props.city}, {props.country}</p>
            <p className='topInfo'>{props.day} {props.actTime}, {props.weatherDescription}</p>
        </>
    )
}

export default TopData;