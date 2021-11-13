import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import './styles/footer.css'
import ReactDOM from 'react-dom'
import Form from './Form'

const Footer = (props) => {
    const [isSCOne, changeIsSCOne] = useState(false)
    const [isSCTwo, changeIsSCTwo] = useState(false)
    const [isSCThree, changeIsSCThree] = useState(false)
    const [modalVisible, changeVisible] = useState('true')
    const [x, cx] = useState('')
    const closeModal = () => {
        changeVisible(false)
        window.location.href='https://61901d0efbb3de0008666498--blissful-haibt-d7dc3b.netlify.app'

    }
    const createShortCut = (event) => {
        console.log(event.currentTarget.getAttribute('data-name'))
        let id = event.currentTarget.getAttribute('data-name')
        cx(ReactDOM.createPortal(<Form toEdit={id} method={closeModal}/>, document.querySelector('#root')))
        changeVisible(true)
    }
    useEffect(() => {
        if (localStorage.getItem("oneshortcut") !== null) {
            changeIsSCOne(true)
        }
        if (localStorage.getItem("twoshortcut") !== null) {
            changeIsSCTwo(true)
        }
        if (localStorage.getItem("threeshortcut") !== null) {
            changeIsSCThree(true)
        }
    },[])
    const redirectShortCut = (event) => {
        console.log(event.currentTarget.getAttribute('data-name'))
        let id = event.currentTarget.getAttribute('data-name')
        let linkName = id + 'shortcutlink'
        let link = localStorage.getItem(linkName)
        console.log(link)
        window.location.href=`${link}`;
    }
    return (
        <>
            {modalVisible ? x : null}
            <div className='startIcon'>
                {!isSCOne ? <div data-name='one' onClick={createShortCut}><i class="fas fa-plus"></i></div>:<div data-name='one' onClick={redirectShortCut}><i class="fas fa-link"></i></div>}
                {!isSCTwo ? <div data-name='two' onClick={createShortCut}><i class="fas fa-plus"></i></div>:<div data-name='two' onClick={redirectShortCut}><i class="fas fa-link"></i></div>}
                {!isSCThree ? <div data-name='three' onClick={createShortCut}><i class="fas fa-plus"></i></div>:<div data-name='three' onClick={redirectShortCut}><i class="fas fa-link"></i></div>}
            </div>
            <div className='endIcon'>
                <NavLink to='/options' activeClassName='red'>
                    <i onClick={props.method} className="fas fa-cog"></i>
                </NavLink>
            </div>
        </>
    )
}

export default Footer;
