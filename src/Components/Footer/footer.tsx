import React from 'react'
import './Styles/footer.css'
import Wrapper from '../../UI/Wrapper'
import FooterCenter from './Center/FooterCenter'
import FooterLeft from './Left/FooterLeft'
import FooterRight from './Right/FooterRight'

const Footer = () => {
    return (
        <Wrapper classes='footer'>
            <FooterLeft/>
            <FooterCenter/>
            <FooterRight/>
        </Wrapper>
    )
}

export default Footer