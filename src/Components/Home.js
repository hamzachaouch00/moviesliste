import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='hom'>
    <h1>WELCOME</h1>
    <Link to="/Movlist"> <button className='but'>Movie liste</button> </Link>
    <div className='home'>
     <img src='https://img.freepik.com/vecteurs-premium/affiche-cinema-realiste-bande-film-seau-pop-corn-bobine-pop-corn-volant-mouvement_208581-1714.jpg' alt='404'/>
    </div>
    
    </div>
  )
}

export default Home
