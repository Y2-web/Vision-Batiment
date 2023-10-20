import React from 'react'
import './Banner.css'
import bannerImage from '../assets/banner.png';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
        <header className="banner" 
            style= {{
                backgroundSize: "cover",
                backgroundImage: `url(${bannerImage})` ,
                backgroundPosition: "center center",
                opacity: 1
            }}
            >
            
            {/* <div className="banner--fadeBottom"></div> */}
        </header>




        <div className="banner_contents">
                <h1 className="banner_title">
                    Nous Construisons Jusqu'au Bout De Vos Rêves
                </h1>

                <p className="banner_text">VISION BATIMENTS est une entreprise tout corps d'état crée en 2021.
Elle intervient dans la construction, la rénovation et l'aménagement d'espaces intérieurs et extérieurs pour les particuliers et les professionnels, en particuliers à Paris et l'Ile-de-France.</p>

                <Link to="/contact"><button className='banner_button'>Nous Contacter</button></Link>
        </div>
    </>

        

  )
}

export default Banner