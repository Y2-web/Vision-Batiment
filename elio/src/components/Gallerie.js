import React from 'react'
import './Gallerie.css'
import { Link } from 'react-router-dom'

function Gallerie() {
  return (
    <div className='gallerie'>

        <div className='gallerie1'>

        </div>


        <div className='gallerie2'>
            <h2>Nos Réalisations</h2>
            <Link to='/carroussel' className='no-link-style'><button className='button_R'>Découvrez Les</button></Link>
        </div>

    </div>
  )
}

export default Gallerie