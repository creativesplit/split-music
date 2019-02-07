import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './Xie.css'

class Xie extends Component {
  render() {
    return (
        <div className='xie-card'>
        <div className='container'>
        <div><h1 className='xie-name'> Xie</h1></div>
        <div><img className='xie-photo' src="https://i.imgur.com/cNSkXyh.jpg" ></img></div>
        </div>
        <p className='xie-description'>Los Angeles-based female producer/DJ, singer, and 
        multimedia artist Xie brings a fresh perspective to electronic music. Drawing 
        inspiration from artists like Kanye West, Gwen Stefani, and Skrillex, she combines 
        her love of Hip Hop, Pop, and Electronic music. With a classical background and 
        worldly appeal, Xie plans to help pave the way for future female producers and artists.
        <br /><br />Xie debutedin 2017 releasing an array of remixes and singles,landing a #1on Hypem 
        with her Billie Eillish remix as well as being named one of the 50 best remixes of 
        2017 by Run The Trap. Most recently, Xie released her first original single 
        “Habits”and was chosen as 10 under the radar artists to discover by High Snobiety. 
        <br /><br />She has received support from Trap Nation, Mr. Suicide Sheep, This Song Is Sick, 
        Cloud Kid, Pop Crush, LadyGunn, EDM Boutique, WonkySensitive, High Kicks & Face Licks, 
        Music You Wanna Listen To, Going Solo, and more </p>
        <div>
        <div className='xie-tracks'>
        <ReactPlayer className='xie-player' url='https://soundcloud.com/xiemusic/drip-2' />
        </div>
        <div className='suggested-artists'>
        <h2 className='suggested-artists'>If you like Xie, check out these artists</h2>
      
        </div>
        </div>
        </div>

       
    )
  }
}

export default Xie;
