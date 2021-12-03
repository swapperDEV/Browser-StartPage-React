import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { useContext } from 'react'
import FuncDisplayContext from '../../../../Store/funcdisplay-context'

const Show = () => {
    const displayCtx = useContext(FuncDisplayContext)
    const settings = [{
        name: 'Links',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('links'),
        class: displayCtx.display.links && 'on' 
    },{
        name: 'Search',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('search'),
        class: displayCtx.display.search && 'on' 
    },{
        name: 'Weather',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('weather'),
        class: displayCtx.display.weather && 'on' 
    },{
        name: 'Widget',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('widget'),
        class: displayCtx.display.widget && 'on' 
    },{
        name: 'Photo Info',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('photoinfo'),
        class: displayCtx.display.photoinfo && 'on' 
    },{
        name: 'Quotes',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('quotes'),
        class: displayCtx.display.quotes && 'on' 
    },{
        name: 'Focus',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('focus'),
        class: displayCtx.display.focus && 'on' 
    },{
        name: 'Time Message',
        //@ts-ignore
        onChange: () => displayCtx.changeDisplay('timemessage'),
        class: displayCtx.display.timemessage && 'on' 
    }]
    let list = settings.map((listItem, index) => (
        <span key={index} className={`listLi showLi ${listItem.class}`} onClick={listItem.onChange}>
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