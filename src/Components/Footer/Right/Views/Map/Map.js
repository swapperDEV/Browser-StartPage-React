import React, {useContext, useState} from 'react'
import DataContext from '../../../../../Store/data-context'
import { Map } from "pigeon-maps"

const Maps = () => {
    const dataCtx = useContext(DataContext)
    let lat = dataCtx.lat
    let lon = dataCtx.lon
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

export default Maps