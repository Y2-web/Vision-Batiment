import React from 'react'
import './Certif.css'
import qualibat from '../assets/logo_qualibat.png'
import rge from '../assets/label-rge.jpg'
import artisan from '../assets/artisan_confiance.jpg'

function Certif() {
  return (
    <div className='certifs'>

        <h2>Nos Certifications</h2>

        <div className='first_range'>
                <img
                className='label'
                src= {qualibat}
                alt='qualibat'
                />
                <p>Les qualifications professionnelles QUALIBAT constituent la reconnaissance des compétences de l'entreprise, de sa capacité à réaliser des travaux dans une activité donnée, à un niveau de technicité défini.</p>       
        </div>

        <div className='second_range'>
                <img
            className='label'
                src= {rge}
                alt='rge'
                />
                <p>Le label RGE permet d'assurer l'éco-conditionnalité des aides à la rénovation énergétique. En effet, le label RGE est délivré uniquement pour les travaux de rénovation énergétique les plus efficaces, et aux prestataires qui réalisent des travaux de qualité.</p>
        </div>

        <div className='third_range'>
                <img
                className='label'
                src= {artisan}
                alt='artisan de confiance'
                />
                <p>Ces labels agréés sont fiables et des gages de sérieux car ils sont décernés aux professionnels qui respectent les règles imposées par leur métier. Ils garantissent que l'artisan est digne de confiance.</p>
        </div>
 
    </div>
  )
}

export default Certif