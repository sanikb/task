// eslint-disable-next-line no-unused-vars
import React from 'react'
import uponlylogo from '../assets/uponlylogo.png'
import navbgimg from '../assets/navimg.png'
export default function Navbar() {
  return (
    <>
    <div className='navcontainer'>

        <div className="navbox">
            <div className="navlogo">
         <img src={uponlylogo} alt="logo" />
            </div>
            <div className="navlink">
                <a href="#">About Us</a>
                <a href="#">Solution</a>
                <a href="#">Career</a>
                <a href="#">Our Apps</a>
                <a href="#">Product And Pricing</a>
            </div>
        </div>
        
    </div>
  <div className="navcontainer2">
    <div className="navbgimg">
      <img src={navbgimg} alt="navbgimg" />
    </div>
    <div className="nav-content">
      <div className="never">
        <h1>Human Capital Management</h1>
      </div>
      <div className="nev-subhed">
      <p>  Streamline Workforce Management With</p>
      <p>UPONLY One</p>
      </div>
    </div>
  </div>
    </>
  )
}
