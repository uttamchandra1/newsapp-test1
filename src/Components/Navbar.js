import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
       <a>
        <span>Home</span>
       </a>
      
       <AnchorLink href='#evnews'><span>Ev News</span></AnchorLink>
        
      
       <a>
        <span>Charging Solutions</span>
       </a>
       <a>
        <span>Goverment Policy</span>
       </a>
       <a>
        <span>Stories</span>
       </a>
       <a>
        <span>Funny Comments</span>
       </a>
    </div>
  )
}

export default Navbar
