import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './XieDrip.css'



class XieDrip extends Component {
  render() {
    return (
        <div className='xiedrip-entry'>
        <div className='xiedrip-flex-container'>
        <h2 className='xie-link-container'><Link className='xie-link' type='button' to='./xie'>Xie</Link> - Drip</h2>
          <h3 className='xiedrip-genre'>Electro Pop</h3>
          <h3 className='xiedrip-date'>Jan 20</h3>
        </div>
        <p className='xiedrip-description'> Xie is an up and coming DJ with an irrestible blend of pop and bass.
        Melting vocals are supported with heavy basslines that signify a new
        direction for pop</p>
        <div>
        <ReactPlayer className='xiedrip-player' url='https://soundcloud.com/xiemusic/drip-2' />
        </div>
        </div>

       
    )
  }
}

export default XieDrip;