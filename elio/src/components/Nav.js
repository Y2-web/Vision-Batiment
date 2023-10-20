import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import "./Nav.css"
import { Outlet, Link } from "react-router-dom";


function Nav() {

  const [show, handleShow] = useState(false);
  const transitionNavBar = ()  => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
       handleShow(false)
    }
  }

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar);
  return () => {
    window.removeEventListener("scroll", transitionNavBar);
  }
}, [])

  return (
    <div className={`nav ${show && "nav_transition"}`}>
        
        <div className='nav_contents'>
            <div>
            <Link to="/">
            <img 
                className={`nav_logo ${show && "logo_transition"}`}
                src= {logo}
                alt=''
            />
            </Link>
            </div>
            

            <ul className={`liste ${show && "liste_transition"}`}>
                <li> <Link to="/" className="no-link-style">Acceuil</Link></li>
                <li><Link to="/carroussel" className="no-link-style">Nos Réalisations</Link></li>
                <Link to="/contact" className="no-link-style"><button className='nav_button'>Nous Contacter</button></Link>
            </ul>

        </div>
    </div>
  )
}

export default Nav