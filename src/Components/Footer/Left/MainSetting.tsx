import React, {useState} from 'react'
import { Slide } from 'react-awesome-reveal'
import Icon from '../../../UI/Icon'
import Wrapper from '../../../UI/Wrapper'
import './style/setting.css'
import About from './settings/About'
import General from './settings/General'
import Show from './settings/Show'
import Clock from './settings/Clock'
const MainSetting = () => {
    const [active, setActive] = useState('General')
    const changeActive = ((which:string) => {
        setActive(which)
    })
    const sections = ['General', 'Show', 'Clock', 'About']
    const sectionList = sections.map((name) => (
        <p key={name} onClick={() => setActive(name)} className={active === name ? 'active' : ''}>{name}</p>
    ))
    return (
        <>
            <Slide duration={200}>
                <Wrapper classes='mainSetting'>
                    <Icon classes="triagle-bottom fas fa-sort-down"></Icon>
                    <div className='settingContent'>
                        <div className='category'>
                            {sectionList}
                        </div>
                        <div className='categoryContent'>
                            {active === 'About' && <About/>}
                            {active === 'Show' && <Show/>}
                            {active === 'Clock' && <Clock/>}
                            {active === 'General' && <General/>}
                        </div>
                    </div>
                </Wrapper>
            </Slide>
        </>
    )
}

export default MainSetting