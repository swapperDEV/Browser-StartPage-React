import React from 'react';
import '../styles/App.css';
import Background from '../components/UI/Wrapper'
import Main from '../components/component/Main'

const App = (props) => {
  return (
    <Background classes='start'>
        <Main methodChangeMode={props.methodChangeMode}/>
    </Background>
  );
}

export default App;
