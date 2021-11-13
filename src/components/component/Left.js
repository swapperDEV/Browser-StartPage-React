import React from 'react'
import { Route } from 'react-router-dom';
import {AnimatedSwitch, spring} from 'react-router-transition'
import AppMenu from './AppMenu';
import Options from './Options'

function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

const Left = (props) => {
    return (
    <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper"
    >
        <Route path='/options' render={() => (<Options methodChangeMode={props.method}/>)}/>
        <Route component={AppMenu} atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles}/>
    </AnimatedSwitch>
    )
}

export default Left;