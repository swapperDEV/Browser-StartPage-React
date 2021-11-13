import React from 'react'
import ChooseBtn from './ChooseBtn'

const Theme = (props) => {
    return (
        <div className='theme'>
            <img src={props.source} alt='error'/>
            <b>{props.type}</b> <ChooseBtn method={props.method} choose={props.type}/>
        </div>
    )
}
export default Theme;