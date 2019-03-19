import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './ReidBuriedAlive.css'

class ReidBuriedAlive extends Component {
  render() {
    return (
        <div className='reidburiedalive-entry'>
        <div className='reidburiedalive-flex-container'>
        <h2 className='reid-link-container'><Link className='reid-link' type='button' to='./terrorreid'>Terror Reid</Link> - Buried Alive</h2>
          <h3 className='genre'>Hip Hop</h3>
          <h3 className='date'>Jan 27</h3>
        </div>
        <p className='artisttrack-description'> ARTIST / TRACK DESCRIPTION</p>
        <div>
        <ReactPlayer className='player' url='https://soundcloud.com/terrorreid/buried-alive-feat-eliozie' />
        </div>
        </div>

       
    )
  }
}

export default ReidBuriedAlive;