import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './Odesza.css'

class /*ARTIST*/ extends Component {
  render() {
    return (
        <div className='artist-card'>
        <div className='container'>
        <div><h1 className='artist-name'> ARTIST NAME</h1></div>
        <div><img className='artist-photo' src="https://i.imgur.com/CU4hVbb.jpg" ></img></div>
        </div>
        <p className='artist-description'> </p>
        <div>
        <div className='artist-tracks'>
        <ReactPlayer className='artist-player' url='https://soundcloud.com/odesza/loyal' />
        </div>
        <div className='suggested-artists'>
        <h2 className='suggested-artists'>If you like ARTIST, check out these artists</h2>
      
        </div>
        </div>
        </div>

       
    )
  }
}

export default /*ARTIST*/;
