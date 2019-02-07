import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './OdeszaLoyal.css'

class OdeszaLoyal extends Component {
  render() {
    return (
        <div className='odeszaloyal-entry'>
        <div className='odeszaloyal-flex-container'>
          <h2 className='odesza-link-container'><Link className='odesza-link' type='button' to='./odesza'>Odesza</Link> - Loyal</h2>
          <h3 className='odeszaloyal-genre'>Trap</h3>
          <h3 className='odeszaloyal-date'>Jan 18</h3>
        </div>
        <p className='odeszaloyal-description'> Odesza has been playing this trap anthem for a full year at their
        live show and just released it. Its no wonder they have been keeping it under
        wraps as it is a monster track.  Loyal is a departure from the typical
        Odesza sound, clean minimal elements, replete with a nice base line, and an injection
        of energy. Check it out below</p>
        <div>
        <ReactPlayer className='odeszaloyal-player' url='https://soundcloud.com/odesza/loyal' />
        </div>
        </div>

       
    )
  }
}

export default OdeszaLoyal;