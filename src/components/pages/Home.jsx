import React from 'react'
import Carousel from './home/carousel'
import Homesec1 from './home/homesec1'
import Homesec2 from './home/homesec2'
import Slider from './home/slider'

const Home = () => {
  return (
    <>
      <Slider/>
      <Carousel />
      <Homesec1 />
      <Homesec2 />
    </>
  )
}

export default Home

