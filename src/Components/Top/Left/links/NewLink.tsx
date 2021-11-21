import React, {useState} from 'react'
import Wrapper from '../../../../UI/Wrapper'
import Icon from '../../../../UI/Icon'
import { Fade } from 'react-awesome-reveal'
import { notify } from '../../../../UI/Notification/ErrorNotify'
import validator from 'validator'

const NewLink = (props:any) => {
    const {notExistView, linkCreated, SwitchViewToList} = props
    const [valueName, changeValueName] = useState('')
    const [valueLink, changeValueLink] = useState('')
    const handleValueLink = (e:any) => {
        changeValueLink(e.target.value)
    }
    const handleValueName = (e:any) => {
        changeValueName(e.target.value)
    }
    const validateName = () => {
        if(valueName.length < 3) {
            return false
        } else {
            return true
        }
    }
    const validateLink = () => {
        if(validator.isURL(valueLink)) {
            return true
        } else {
            return false
        }
    }
    const validate = () => {
        if(validateName() === true) {
            if(validateLink() === true) {
                linkCreated(valueName, valueLink)
            } else {
                notify('Not valid link')
            }
        } else {
            notify('Too short link name')
        }
    }
    const handleKeyEnter = (e:any) => {
        if(e.key === 'Enter') {
            validate()
        }
    }
    const returned = () => {
        //@ts-ignore
        let response = JSON.parse(localStorage.getItem('links'))
        if(response != null && response[0] !== undefined && response[0] !== 'undefined') {
            SwitchViewToList()
        } else {
            notExistView()
        }        
    }
    return (
        <Wrapper classes='newLinkView'>
            <Fade duration={400}>
                <Icon classes='fas fa-undo-alt return' onClick={returned}/>
                <Wrapper classes='form'>
                    <label>
                        NAME
                        <input placeholder='link name' onChange={handleValueName} value={valueName}  onKeyPress={handleKeyEnter} maxLength={20}/>
                    </label>
                    <label>
                        LINK
                        <input value={valueLink} onChange={handleValueLink} placeholder='google.pl' maxLength={40} onKeyPress={handleKeyEnter}/>
                    </label>
                    <button className='buttonSubmit1' onClick={validate}>Add Link</button>
                </Wrapper>
            </Fade>
        </Wrapper>
    )
}

export default NewLink