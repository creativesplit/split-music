import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import XieDrip from './Tracks/XieDrip';
import MoWhenIWasYoung from './Tracks/MoWhenIWasYoung'

class Electropop extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>Electro Pop</h3>
        <MoWhenIWasYoung />
        </div>

       
    )
  }
}

export default Electropop;