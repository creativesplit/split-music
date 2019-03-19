import React, { Component,PropTypes } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import './Home.css'
import {Link} from 'react-router-dom'
import OdeszaLoyal from './Tracks/OdeszaLoyal.js'
import XieDrip from './Tracks/XieDrip.js'
import MoWhenIWasYoung from './Tracks/MoWhenIWasYoung';
import WhiteOnederful from './Tracks/WhiteOnederful'
import PnauChameleonDomDolla from './Tracks/PnauChameleonDomDolla';
import PLSTYSurvive from './Tracks/PLSTYSurvive';
import ReidBuriedAlive from './Tracks/ReidBuriedAlive';

class Home extends Component {
  render() {
    return (
        <div className='landing-page'>
        <div className='tracks'>
        <h3 className='title'>All Music</h3>
        <ReidBuriedAlive />
        <PLSTYSurvive />
        <PnauChameleonDomDolla />
        <WhiteOnederful />
        <MoWhenIWasYoung />
        <XieDrip />
        <OdeszaLoyal />
        </div>
        </div>
    )
  }
}

export default Home;