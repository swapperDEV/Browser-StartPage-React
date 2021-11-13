import React from 'react'
import './Notification.css'

const Notification = (props) => {
    const [time, setTime] = React.useState(10);
    const [view, setView] = React.useState(true)
    React.useEffect(() => {
      if (time > 0) {
        setTimeout(() => setTime(time - 1), 1000);
      } else {
        setView(false)
    }
    });
    const display = <div className='notification'>
        {props.text} {props.type === 'error' ? <i className="fas fa-exclamation-triangle"></i> : null} {time}s
    </div>
    return (
        <>
        {view ? display : null}
        </>
    )
}

export default Notification