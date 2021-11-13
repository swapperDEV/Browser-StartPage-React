import React from 'react'

const BottomData = (props) => {
    return (
        <>
            <p className='mainTemp'>{props.temp}°</p>
            <p className='unMainTemp'>Feels like {props.feelTemp}°</p>
            <p><i className="fas fa-wind"></i>{props.wind}m/s </p>
            <p><i className="fas fa-tint"></i> {props.humidity}%</p>
        </>
    )
}

export default BottomData;