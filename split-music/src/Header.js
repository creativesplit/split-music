import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import './Header.css'
import { slide as Menu } from 'react-burger-menu'


class Header extends Component {

  render() {
    return (
        <div>
        <header className='header-wrapper'> 
        <img className='logo' src="https://i.imgur.com/ya49W4U.jpg" height='50' width='70'></img>
        <h1 className='company-name'>SPLIT MUSIC <br/> <h3 className='tagline'>the best new music without an agenda</h3></h1>
        <div className='link-wrapper'>
          <a className='header-link' type='button' href='/hiphop'>Hip Hop</a>
          <a className='header-link' type='button' href='/house'>House</a>
          <a className='header-link' type='button' href='/trap'>Trap</a>
          <a className='header-link' type='button' href='/progressivehouse'>Progressive House</a>
          <a className='header-link' type='button' href='/electropop'> Electro Pop</a>
          <a className='header-link' type='button' href='/heavy'>Heavy</a>
          <a  className='header-link'type='button' href='/'>Home</a>

      {/* </Menu> */}
      </div> 
      </header>
      </div>
    )
  }
}

export default Header;


{/* <Link className='header-link' type='button' to='/'>All Music</Link>
<Link className='header-link' type='button' to='/hiphop'>Hip Hop</Link>
<Link className='header-link' type='button' to='/house'>House</Link>
<Link className='header-link' type='button' to='/trap'>Trap</Link>
<Link className='header-link' type='button' to='/progressivehouse'>Progressive House</Link>
<Link className='header-link' type='button' to='/electropop'> Electro Pop</Link>
<Link className='header-link' type='button' to='/'>Home</Link> */}