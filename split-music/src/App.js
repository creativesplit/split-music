import React, { Component, } from 'react';
import { Route, Link, Switch, Router } from "react-router-dom";
import './App.css';
import Header1 from './Header1'
import Home from './Home'
import Hiphop from './Hiphop'
import Electropop from './Electropop'
import Progressivehouse from './Progressivehouse'
import Trap from './Trap'
import House from './House'
import OdeszaLoyal from './Tracks/OdeszaLoyal'
import XieDrip from './Tracks/XieDrip'
import Heavy from './Heavy'
import Other from './Other'
import Odesza from './Artists/Odesza'
import Xie from './Artists/Xie'
import ReidBuriedAlive from './Tracks/ReidBuriedAlive';
import SideDrawer from './Sidedrawer';
import BackDrop from './BackDrop'



class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })

  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
    
  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer />
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div className='App' style={{height: '100%'}}>
      <Header1 drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <Switch>
      <Route path='/terrorreidburiedalive' render={() => <ReidBuriedAlive />} />
      <Route path='/odesza' render={() => <Odesza />} />
      <Route path='/xie' render={() => <Xie />} />
      <Route path='/odeszaloyal' render={() => <OdeszaLoyal />} />
      <Route path='/xiedrip' render={() => <XieDrip />} />
      <Route path="/hiphop" render={() => <Hiphop/>}/>
      <Route path="/house" render={() => <House/>} />
      <Route path="/trap" render={() => <Trap />}/>
      <Route path="/progressivehouse" render={() => <Progressivehouse />}/>
      <Route path="/electropop" render={() => <Electropop />} />
      <Route path="/heavy" render={() => <Heavy />} />
      <Route path='/other' render={() => <Other />} />
      <Route path="/" render={() => <Home />} />
      </Switch>
      </div>
    )
  }
}

export default App;

{/* <Route path="/hiphop" render={() => <Hiphop />}/> */}


    
      