import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/Main.css'
import Image from '../UI/Image'
import Wrapper from '../UI/Wrapper'
import DataContext from '../../store/data-context';
import Nav from './Nav';
import Footer from './Footer';
import Background from '../UI/Wrapper';
import Left from './Left';
import WeatherRight from './AppMenu/WeatherApp/WeatherRight'


const Main = (props) => {
  const [mode, changeMode] = useState('mainDiv darkmode')
  const [optionsMode, changeOptionsMode] = useState(false)
  const ctx = useContext(DataContext)
  useEffect(() => {
    changeMode('mainDiv ' + ctx.color)
  })
  const name  = ctx.name
  const handleOptions = () => {
    changeOptionsMode(!optionsMode)
  }
  return (
    <BrowserRouter>
      <Wrapper classes={mode}>
          <Nav name={name}/>
      
          <Background classes='left'>
            <Left method={props.methodChangeMode}/>
          </Background>

          <Background classes='right'>
            <Switch>
              <Route path='/weather' component={WeatherRight}/>
              <Route component={Image}/>
            </Switch>
          </Background>

          <Background classes='footer'>
            <Footer method={handleOptions}/>
          </Background>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Main;
