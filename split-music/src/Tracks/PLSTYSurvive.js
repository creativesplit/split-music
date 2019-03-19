import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './PLSTYSurvive.css'

class PLSTYSurvive extends Component {
  render() {
    return (
        <div className='plstysurvive-entry'>
        <div className='plstysurvive-flex-container'>
        <h2 className='plsty-link-container'><Link className='plsty-link' type='button' to='/plsty'> PLS&TY</Link> - SAINT WKND & MAX - Survive (PLS&TY Remix)</h2>
          <h3 className='plstysurvive-genre'>Progressive House</h3>
          <h3 className='date'>Jan 27</h3>
        </div>
        <p className='plstysurvive-description'> ARTIST / TRACK DESCRIPTION</p>
        <div>
        <ReactPlayer className='player' url='https://soundcloud.com/pls-ty/saint-wknd-max-survive-plsty-remix'/>
        </div>
        </div>

       
    )
  }
}

export default PLSTYSurvive;