import React, {useContext, useState } from 'react'
import { Map } from "pigeon-maps"
import DataContext from '../../../store/data-context'

const Maps = () => {
    const ctx = useContext(DataContext)
    let lat = ctx.lat
    let lon = ctx.lon
    let [center, setCenter] = useState([50.879, 4.6997])
    let myCordTable = [lat, lon]
    return (
        <>
            <div className='mapParent'>
                <Map center={center} defaultZoom={11} onBoundsChanged={({center}) => {
                    setCenter(myCordTable)
                }}>
                </Map>
            </div>
        </>
    )
}

export default Maps;