import React, {useState} from 'react'
import './styles/search.css'
import Wrapper from '../../../UI/Wrapper'
import Icon from '../../../UI/Icon'
import ddg from '../../../Assets/search/ddg.png'
import Bing from '../../../Assets/search/bing.png'
import google from '../../../Assets/search/google.png'

const SearchSite = [<i><img alt='error' src={Bing} width="20px" height="20px"></img></i>,
<i><img alt='error' src={ddg} width="20px" height="20px"></img></i>,<i><img src={google} width="20px" height="20px" alt='error'></img></i>]

const Search = () => {
    let actSearchSite:any = localStorage.getItem('searchSite')
    actSearchSite = parseInt(actSearchSite)
    if(actSearchSite >= 0) {
    } else {
        actSearchSite = 2
    }
    const [activeSearchSite, changeActiveSearchSite] = useState<any>(actSearchSite)
    const [searchValue, changeSearchValue] = useState('')
    const switchSearchSite = () => {
        if(activeSearchSite !== 2) {
            console.log('sending');
            let act = activeSearchSite + 1
            changeActiveSearchSite(activeSearchSite + 1)
            localStorage.setItem('searchSite', act.toString())
        } else {
            changeActiveSearchSite(0)
            localStorage.setItem('searchSite', '0')
        }
    }
    const handleSearch = (e:any) => {
        if(e.key === 'Enter') {
            if(actSearchSite === 2) {
                window.location.href=`https://www.google.com/search?q=${searchValue}`;
            } else if(actSearchSite === 1) {
                window.location.href=`https://duckduckgo.com/?q=${searchValue}`;
            } else {
                window.location.href=`https://www.bing.com/search?q=${searchValue}`;
            }
        }
    }
    const handleChangeValue = (e:any) => {
        changeSearchValue(e.target.value)
    }
    return (
        <Wrapper classes='searchBox visibleSearch'>
            <p className='searchText'><Icon classes="fas fa-search"/></p>
            <input className='searchInput' value={searchValue} onChange={handleChangeValue} onKeyPress={handleSearch}/>
            <Wrapper classes='searchWeb' onClick={switchSearchSite}>
                {SearchSite[activeSearchSite]}
            </Wrapper>
        </Wrapper>
    )
}

export default Search