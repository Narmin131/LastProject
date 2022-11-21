import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="banner">
        <h1 data-aos="zoom-out">{props.title}</h1>
        <p data-aos="zoom-out-up"><NavLink to='/'><i class="fa-solid fa-house"></i>{t('nav.4')}</NavLink> <i class='fa-solid fa-angle-right'></i> {props.title}</p>
    </div>
  )
}

export default Banner