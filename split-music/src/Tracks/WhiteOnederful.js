import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './WhiteOnederful.css'

class WhiteOnederful extends Component {
  render() {
    return (
        <div className='whiteonederful-entry'>
        <div className='whiteonederful-flex-container'>
        <h2 className='white-link-container'><Link className='white-link' type='button' to='/armaniwhite'> Armani White </Link> - Onederful</h2>
          <h3 className='genre'>Hip Hop</h3>
          <h3 className='date'>Jan 24</h3>
        </div>
        <p className='whiteonederful-description'> ARTIST / TRACK DESCRIPTION</p>
        <div>
        <ReactPlayer className='player' url='https://soundcloud.com/legendbound/onederful' />
        </div>
        </div>

       
    )
  }
}

export default WhiteOnederful;