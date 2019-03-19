import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './MoWhenIWasYoung.css'

class MoWhenIWasYoung extends Component {
  render() {
    return (
        <div className='mowheniwasyoung-entry'>
        <div className='mowheniwasyoung-flex-container'>
        <h2 className='mo-link-container'><Link className='mo-link' type='button' to='/mo'> Mo</Link> - When I was Young</h2>
          <h3 className='mowheniwasyoung-genre'>Electro Pop</h3>
          <h3 className='mowheniwasyoung-date'>Jan 23</h3>
        </div>
        <p className='mowheniwasyoung-description'> Mo really killed it with this one.  Strong vocals over a jazz beat that 
        you can dance to, the Swedish vocalist drops another track that should be in your Friday night rotation </p>
        <div>
        <ReactPlayer className='mowheniwasyoung-player' url='https://soundcloud.com/momomoyouth/when-i-was-young' />
        </div>
        </div>

       
    )
  }
}

export default MoWhenIWasYoung;