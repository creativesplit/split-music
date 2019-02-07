import React, { Component, } from 'react';
import { Route, Link, Switch, Router } from "react-router-dom";
import './App.css';
import Header from './Header'
import Allmusic from './Allmusic'
import Hiphop from './Hiphop'
import Electropop from './Electropop'
import Progressivehouse from './Progressivehouse'
import Trap from './Trap'
import House from './House'
import Heavy from './Heavy'





class App extends Component {
    
  render() {
    return (
      <div className='trick'>
      <Header />
      <Switch>
      <Route path="/hiphop" render={() => <Hiphop/>}/>
      <Route path="/house" render={() => <House/>} />
      <Route path="/trap" render={() => <Trap />}/>
      <Route path="/progressivehouse" render={() => <Progressivehouse />}/>
      <Route path="/electropop" render={() => <Electropop />} />
      <Route path="/" render={() => <Allmusic />} />
      <Route path="/heavy" render={() => <Heavy />} />

      </Switch>
      </div>
    )
  }
}

export default App;

{/* <Route path="/hiphop" render={() => <Hiphop />}/> */}


    
      