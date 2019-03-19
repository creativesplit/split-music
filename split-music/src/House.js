import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import PnauChameleonDomDolla from './Tracks/PnauChameleonDomDolla';

class House extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>House</h3>
        <PnauChameleonDomDolla />
        </div>

       
    )
  }
}

export default House;