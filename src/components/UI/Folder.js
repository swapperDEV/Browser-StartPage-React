import React from 'react'
import { NavLink } from 'react-router-dom'
import './Folder.css'


const Folder = (props) => {
    const path = `/${props.type}`
    return (
        <NavLink to={path} className='folder'>
            <b className='inFolder'>{props.children}</b>
        </NavLink>
    )
}

export default Folder;