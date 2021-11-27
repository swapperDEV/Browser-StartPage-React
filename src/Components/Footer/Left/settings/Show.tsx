import React from 'react'
import { Slide } from 'react-awesome-reveal'
const Show = () => {
    const settings = [{
        name: 'List',
        onChange: ''
    },{
        name: 'Search',
        onChange: ''
    },{
        name: 'Weather',
        onChange: ''
    },{
        name: 'Widget',
        onChange: ''
    },{
        name: 'Photo Info',
        onChange: ''
    },{
        name: 'Quotes',
        onChange: ''
    },{
        name: 'Focus',
        onChange: ''
    },{
        name: 'Time Message',
        onChange: ''
    }]
    let list = settings.map((listItem, index) => (
        <span key={index} className='listLi'>
            <span><p>{listItem.name}</p></span>
            <span className='icon switch'></span>
        </span>
    ))
    return (
        <Slide>
            <p className='settingName'>Show</p>
            <p className='settingDescription'>Visible setting</p>
            <ul className='settingList'>
                {list}
            </ul>
        </Slide>
    )
}



export default Show