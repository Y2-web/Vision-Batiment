import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Realisations from './Realisations'
import Certif from './Certif'
import Gallerie from './Gallerie'
import Footer from './Footer'
import './HomeScreen.css'


function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav></Nav>
        <Banner></Banner>
        <Realisations></Realisations>
        <Certif></Certif>
        <Gallerie></Gallerie>
        <Footer></Footer>
    </div>
  )
}

export default HomeScreen