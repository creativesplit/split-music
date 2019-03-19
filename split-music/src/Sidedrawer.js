import React from 'react'
import './Sidedrawer.css'





const SideDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><a href='/'>Hip Hop</a></li>
            <li><a href='/'>House</a></li>
            <li><a href='/'>Electro Pop</a></li>
            <li><a href='/'>Progressive House</a></li>
            <li><a href='/'>Heavy</a></li>
        </ul>
    </nav>
)

export default SideDrawer;