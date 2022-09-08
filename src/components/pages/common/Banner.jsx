import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Banner = (props) => {
  const { t } = useTranslation();
  return (
    <div className="banner">
        <h1>{props.title}</h1>
        <p><NavLink to='/'><i class="fa-solid fa-house"></i>{t('nav.4')}</NavLink> <i class='fa-solid fa-angle-right'></i> {props.title}</p>
    </div>
  )
}

export default Banner