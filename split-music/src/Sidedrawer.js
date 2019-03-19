import React from 'react'
import './Sidedrawer.css'





const SideDrawer = props => {
    let drawerClasses='side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return(<nav className={drawerClasses}>
        <ul>
            <li><a className='nav-link' type='button' href='/hiphop'>Hip Hop</a></li>
              <li><a className='nav-link' type='button' href='/house'>House</a></li>
              <li><a className='nav-link' type='button' href='/trap'>Trap</a></li>
              <li><a className='nav-link' type='button' href='/progressivehouse'>Progressive House</a></li>
              <li><a className='nav-link' type='button' href='/electropop'> Electro Pop</a></li>
              <li><a className='nav-link' type='button' href='/heavy'>Heavy</a></li>
              <li><a className='nav-link' type='button' href='/other'>Other</a></li>
              <li><a className='nav-link' type='button' href='/'>Home</a></li>
        </ul>
    </nav>
    )
}

export default SideDrawer;