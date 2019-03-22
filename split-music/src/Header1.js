import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header1.css'
import { slide as Menu } from 'react-burger-menu'
import  DrawerToggleButton from './DrawerToggleButton'



const Header1 = props => (

    <div>
        <header className='header-wrapper'> 
            <img className='logo' src="https://i.imgur.com/ya49W4U.jpg" height='50' width='70'></img> 
            <h1 className='company-name'>SPLIT MUSIC <br/> <h3 className='tagline'>the best music without an agenda</h3></h1>
            <nav className='header-nav'>
                <div className='hamburger-button'>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
            </nav>
        </header>
      </div>
    )

export default Header1;
