import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    
    <section className='cta'>
      <p className='cta-text'>
        Понравилось увиденное? <br className='sm:block hidden'/> 
        Свяжитесь со мной
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  )
}

export default CTA