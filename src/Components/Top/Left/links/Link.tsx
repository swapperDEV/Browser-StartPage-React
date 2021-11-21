import React from 'react'
import Wrapper from '../../../../UI/Wrapper'
import Icon from '../../../../UI/Icon'

const Link = (props:any) => {
    const {methodRemove, name, link, id} = props
    const handleRedirect = () => {
        window.location.href=`http://${link}`
    }
    const handleRemove = () => {
        methodRemove(id)
    }   
    return (
        <Wrapper classes='linked'>
            <Wrapper onClick={handleRedirect}>
                <div><img src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`} alt='icon'/><p>{name}</p></div>
            </Wrapper>
            <Wrapper classes='linkedSetting'>
                <div className='linkedDots'><Icon onClick={handleRemove} classes="fas fa-minus"/></div>
            </Wrapper>
        </Wrapper>
    )
}

export default Link