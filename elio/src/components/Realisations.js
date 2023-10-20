import React from 'react'
import './Realisations.css'

function Realisations() {
  return (
    <div className='realisations'>
        <h2 className='service_title'>Nos Services</h2>

    <div className='first_range'>
        <div className='service_div'>
            <img className='service' src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt='charpente'></img>
            <h3>Charpenterie</h3>
            <p>...</p>
        </div>

        <div className='service_div'>
            <img className='service' src='https://www.construire-habitat.com/wp-content/uploads/sites/13/2020/10/Apprenez-%C3%A0-r%C3%A9aliser-un-coffrage.jpg' alt='coffrage'></img>
            <h3>Coffrage</h3>
            <p>...</p>
        </div>

        <div className='service_div'>
            <img className='service' src='https://plus.unsplash.com/premium_photo-1663127088568-51cd9319452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80' alt='maconnerie'></img>
            <h3>Maconnerie</h3>
            <p>...</p>
        </div>
    </div>

    <div className='second_range'>
        <div className='service_div'>
            <img className='service' src='https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt='chauffage'></img>
            <h3>Chauffage</h3>
            <p>...</p>
        </div>

        <div className='service_div'>
            <img className='service' src='https://images.unsplash.com/photo-1565049981953-379c9c2a5d48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80' alt='electricité'></img>
            <h3>Electricité</h3>
            <p>...</p>
        </div>

        <div className='service_div'>
            <img className='service' src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxvbWJlcmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' alt='plomberie'></img>
            <h3>Plomberie</h3>
            <p>...</p>
        </div>
    </div>
    </div>
  )
}

export default Realisations