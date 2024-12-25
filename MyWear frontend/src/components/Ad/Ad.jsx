import { NavLink } from 'react-router-dom'
import bgc from '../../source/images/ad_img.png'
import './Ad.css'

function Add() {
  return (
    <section className='ad'>
      <div className="ad__container">
        <div className="ad__txt">
          <img src={bgc} alt="Задний фон с успешным мужчиной и машиной" className='ad__img' />
          <h1 className="ad__header">Стиль</h1>
          <h2 className="ad__subheader">Подготовим все для важной встречи за 24 часа</h2>
          <NavLink to="/catalog" className="header__link hover7"><button className="ad__btn">Подробнее &gt;</button></NavLink>
        </div>
      </div>
    </section>
  )
}

export default Add