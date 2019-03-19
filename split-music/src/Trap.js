import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import Odeszaloyal from './Tracks/OdeszaLoyal';

class Trap extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>Trap</h3>
        <Odeszaloyal />
        </div>

       
    )
  }
}

export default Trap;