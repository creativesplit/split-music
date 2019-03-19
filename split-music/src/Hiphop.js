import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import WhiteOnederful from './Tracks/WhiteOnederful';
import ReidBuriedAlive from './Tracks/ReidBuriedAlive';

class Hiphop extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>Hip Hop</h3>
        <ReidBuriedAlive /> 
        <WhiteOnederful />
        </div>

       
    )
  }
}

export default Hiphop;