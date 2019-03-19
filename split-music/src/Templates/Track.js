import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './track.css'

class /*ARTIST/TRACKNAME*/ extends Component {
  render() {
    return (
        <div className='artisttrack-entry'>
        <div className='artisttrack-flex-container'>
        <h2 className='artist-link-container'><Link className='artist-link' type='button' to=/*PATH*/> ARTIST</Link> - TRACK</h2>
          <h3 className='genre'>GENRE</h3>
          <h3 className='date'>DATE POSTED</h3>
        </div>
        <p className='artisttrack-description'> ARTIST / TRACK DESCRIPTION</p>
        <div>
        <ReactPlayer className='player' url=/*TRACK URL*/ />
        </div>
        </div>

       
    )
  }
}

export default /*ARTIST/TRACKNAME*/;