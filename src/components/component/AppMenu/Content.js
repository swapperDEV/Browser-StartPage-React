import React from 'react'
import { Route, Switch } from 'react-router'
import Notes from './Notes'
import Maps from './Maps'
import Weather from './WeatherApp/Weather'
import Calendar from './Calendar'
import Todo from './Todo'

const Content = () => {
    return (
        <Switch className="route-wrapper">
            <Route path='/notes' component={Notes}/>
            <Route path='/weather' component={Weather}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/todo' component={Todo}/>
            <Route component={Maps}/>
        </Switch>
    )
}

export default Content;