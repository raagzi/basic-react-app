import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <div classname="nav__contents">
        <a href="/" className='home'>Home</a>
        <a href="/" className='profile'>Profile</a>
       </div>
    </div>
  )
}

export default Nav