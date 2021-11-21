import React from 'react'
import Wrapper from '../../../../UI/Wrapper';
import { Fade } from 'react-awesome-reveal'
const LinkNotExist = (props:any) => {
    const {newLink} = props
    return (
        <Wrapper classes='LinkNotExist'>
            <Fade duration={400}>
                <p className='linkText1'>No links</p>
                <p className='linkText2'>Add your fav sites.</p>
                <button className='linkButton1' onClick={() => {newLink()}}>New link</button>
            </Fade>
        </Wrapper>
    )
}

export default LinkNotExist;