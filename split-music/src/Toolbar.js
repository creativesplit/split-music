import React from 'react'
import './Toolbar.css'

let toolbar = props => (
    <header className='toolbar'>
      <nav className='toolbar-nav'>
        <div> </div>
        <div className='toolbar-logo'><a href='/'>The LOGO</a></div>
        <div className='toolbar-menu-items'>
            <ul>
                <li><a href='/electropop' className='menu-item'>Electro Pop</a></li>
                <li><a href='/hiphop'>Hip Hop</a></li>
                <li><a href='/heavy'>Heavy</a></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/house'>House</a></li>
                <li><a href='/progressivehouse'>Progressive House</a></li>
                <li><a href='/trap'>Trap</a></li>
                <li><a href='/artists'>Artists</a></li>
            </ul>

        </div>
      </nav>
  
    </header>
  
  
    )

export default toolbar;
  