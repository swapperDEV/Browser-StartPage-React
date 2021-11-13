import React, {useState} from 'react'
import './styles/search.css'
import Background from '../../UI/Wrapper'

const Search = () => {
    const [searchValue, changeSearchValue] = useState('')
    const search = () => {
        window.location.href=`https://www.google.com/search?q=${searchValue}`;
    }
    const handleChangeSearchValue = (e) => {
        changeSearchValue(e.target.value)
    }
    const keyPressed = (e) => {
        if(e.key === 'Enter') {
            search()
        }
    }
    return (
    <Background classes='searchGoogle'>
        <div className='google'>
            <i className="fab fa-google"></i>
        </div>
        <input onKeyPress={keyPressed} className='searchGoogleInput' value={searchValue} onChange={handleChangeSearchValue}/>
        <button className='searchGoogleButton' onClick={search}>
            <i className="fas fa-search"></i>
        </button>
    </Background>
    )
}

export default Search;