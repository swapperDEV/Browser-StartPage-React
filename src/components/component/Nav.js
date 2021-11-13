import React from 'react'
import './styles/Nav.css'

const Nav = (props) => {
    return (
    <nav className='nav'>
        <p className='starting'><a href='https://github.com/swapperDEV'><i className="fab fa-stumbleupon-circle"></i></a></p>
        <p className='centering'>Hi {props.name}!</p>
    </nav>
    )
}

export default Nav;