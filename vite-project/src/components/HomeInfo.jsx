import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => { 
  return(
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to= {link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
    </Link>
  </div>
  )
  
}


const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Немного обо мне: Привет, я <span className='font-semibold'> Ostin Beers (Квасов Устин) </span> 👋
      <br />
      Студент-разработчик(junior) 
    </h1>
  ),
  2:(
    <InfoBox 
      text="Чуть больше обо мне (кто я, что я, чем занимаюсь)"
      link='/about'
      btnText='Посмотреть'
    />
  ),
  3:(
    <InfoBox 
      text="Здесь можно посмотреть мое портфолио"
      link='/projects'
      btnText='Посмотреть'
    />
  ),
  4:(
    <InfoBox 
      text="Нравится увиденное? Свяжитесь со мной"
      link='/contact'
      btnText='Contact me'
    />
  ),
} 




const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;  
}

export default HomeInfo