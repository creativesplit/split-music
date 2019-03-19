import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import PLSTYSurvive from './Tracks/PLSTYSurvive';

class Progressivehouse extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>Progressive House</h3>
        <PLSTYSurvive />
        </div>

       
    )
  }
}

export default Progressivehouse;