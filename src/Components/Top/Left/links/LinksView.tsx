import React, {useState, useEffect} from 'react'
import './style/links.css'
import LinkNotExist from './LinkNotExist'
import Wrapper from '../../../../UI/Wrapper'
import NewLink from './NewLink'
import Links from './Links'
const LinksView = () => {
    const [actView, changeView] = useState('LinkNotExist')
    //@ts-ignore
    const [links, changeLinks] = useState<any>(JSON.parse(localStorage.getItem('links')))
    const newLink = () => {
        changeView('NewLink')
    }
    const notExistView = () => {
        changeView('LinkNotExist')
    }
    const linkCreated = (name:string, link:any) => {
        changeView('Links')
        if(links === undefined || links === 'undefined' || links === 'null' || links === null) {
            let allLinks = [{name: name, link: link}]
            changeLinks(allLinks)
            localStorage.setItem('links', JSON.stringify(allLinks))
        } else {
            let allLinks = links
            //@ts-ignore 
            allLinks.push({name: name, link: link})
            changeLinks(allLinks)
            localStorage.setItem('links', JSON.stringify(allLinks))
        }
    }
    const handleReload = (list:any) => {
        changeLinks(list)
    }
    useEffect(() => {
        //@ts-ignore
        let response = JSON.parse(localStorage.getItem('links'))
        if(response != null && response[0] !== undefined && response[0] !== 'undefined') {
            changeView('Links')
        } else {
        }
    }, [])
    const SwitchViewToList = () => {
        changeView('Links')
    }
    return (
        <Wrapper classes='actLinkView'>
            {actView === 'LinkNotExist' && 
                <LinkNotExist newLink={newLink}/>
            }
            {actView === 'NewLink' && 
                <NewLink notExistView={notExistView} linkCreated={linkCreated} SwitchViewToList={SwitchViewToList}/>
            }
            {actView === 'Links' && <Links reloadLinks={handleReload} links={links} method={newLink}/>}
        </Wrapper>
    )
}

export default LinksView