import React from 'react'
import Banner from './common/Banner'
import Aboutsec1 from './about/aboutsec1'
import Aboutsec2 from "./about/aboutsec2"
import Aboutsec3 from "./about/aboutsec3"

const About = () => {
  return (
    <>
      <Banner title="About Page" />
      <Aboutsec1 />
      <Aboutsec2/>
      <Aboutsec3/>
    </>
  )
}

export default About