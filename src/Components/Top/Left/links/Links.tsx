import React from 'react'
import Link from './Link';
import Wrapper from '../../../../UI/Wrapper';
import { Fade } from 'react-awesome-reveal';
const Links = (props:any) => {
    const {reloadLinks} = props
    let links;
    const handleRemove = (id:any) => {
        console.log(id);
        //@ts-ignore
        let list = JSON.parse(localStorage.getItem('links'))
        list.splice(id, 1)
        localStorage.setItem('links', JSON.stringify(list))
        reloadLinks(list)
    }
    if(props.links !== null) {
        links = props.links.map((e:any, index:any) => {
            return (
                <Link key={index} name={e.name} link={e.link} id={index} methodRemove={handleRemove}/>
            )
        })
    } else {
        links = ''
    }
    return (
        <>
            <Wrapper classes='linkListView'>
                <Fade duration={400}>
                    <Wrapper classes='linkListed'>
                        {links}
                    </Wrapper>
                    <button className='newLink' onClick={() => {props.method()}}>new link</button>
                </Fade>
            </Wrapper>
        </>
    )
}

export default Links