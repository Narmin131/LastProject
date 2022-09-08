import React from 'react'
import Banner from './common/Banner'
import Aboutsec1 from './about/aboutsec1'
import Aboutsec2 from "./about/aboutsec2"
import Aboutsec3 from "./about/aboutsec3"
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner title={t('about.0')} />
      <Aboutsec1 />
      <Aboutsec2/>
      <Aboutsec3/>
    </>
  )
}

export default About