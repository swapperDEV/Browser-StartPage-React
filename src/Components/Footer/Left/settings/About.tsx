import React from 'react'
import github from '../../../../Assets/github.png'
import { Fade } from 'react-awesome-reveal'
const About = () => {
    return (
        <Fade>
            <p>Thanks for using my Dash <br/>
            Its inspired by Travesy Media </p>
            <a href='https://github.com/swapperDEV/Browser-StartPage-React'><img className='git' alt='error' src={github} width='64' height='64'/></a>
        </Fade>
    )
}

export default About