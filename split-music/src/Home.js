import React, { Component,PropTypes } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import './Allmusic.css'
import {Link} from 'react-router-dom'
import OdeszaLoyal from './Tracks/OdeszaLoyal.js'
import XieDrip from './Tracks/XieDrip.js'

class Home extends Component {
  render() {
    return (
        <div className='Allmusic'>
        <div className='tracks'>
        <XieDrip />
        <OdeszaLoyal />
        </div>
        </div>
    )
  }
}

export default Home;