import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './PnauChameleonDomDolla.css'

class PnauChameleonDomDolla extends Component {
  render() {
    return (
        <div className='pnauchameleondomdolla-entry'>
        <div className='pnauchameleondomdolla-flex-container'>
        <h2 className='domdolla-link-container'><Link className='domdolla-link' type='button' to='/domdolla'>Pnau</Link> - Chameleon(Dom Dolla Remix)</h2>
          <h3 className='pnauchameleondomdolla-genre'>House</h3>
          <h3 className='date'>Jan 26</h3>
        </div>
        <p className='pnauchameleondomdolla-description'> ARTIST / TRACK DESCRIPTION</p>
        <div>
        <ReactPlayer className='player' url='https://soundcloud.com/pnau/chameleon-dom-dolla-dub' />
        </div>
        </div>

       
    )
  }
}

export default PnauChameleonDomDolla;