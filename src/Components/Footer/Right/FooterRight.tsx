import React, {useState, useContext} from 'react'
import Wrapper from '../../../UI/Wrapper'
import View from './View'
import ModalContext from '../../../Store/modal-context'
import FuncDisplayContext from '../../../Store/funcdisplay-context'

const FooterRight = () => {
    const [actView, changeView] = useState<String>('Map')
    const displayCtx = useContext(FuncDisplayContext)
    const ctx = useContext(ModalContext)
    const {widgetDisplay, handleWidgetDisplay} = ctx
    const displayWidget = (types:String) => {
        console.log(types);
        changeView(types)
        if(widgetDisplay !== true) {
            handleWidgetDisplay()
        } else if (widgetDisplay === true && actView === types) {
            handleWidgetDisplay()
        }
    }
    return (
        <Wrapper classes='footer-right'>
            {widgetDisplay && <View actView={actView}/>}
            {displayCtx.display.widget && 
            <Wrapper classes='widgetText'>
                <div className='widgetOpen'>
                    <i className={`fas flag fa-clipboard-list ${actView === 'TodoList' && 'actFlex'}`} onClick={() => displayWidget('TodoList')}></i>
                    <i className={`far flag fa-map ${actView === 'Map' && 'actFlex'}`} onClick={() => displayWidget('Map')}></i>
                </div>
            </Wrapper>
            }
        </Wrapper>
    )
}

export default FooterRight