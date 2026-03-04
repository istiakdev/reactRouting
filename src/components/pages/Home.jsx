import React from 'react'
import { Banner } from '../layouts/Banner'
import Service from './Service'
import { About } from './About'
import WorkShowcase from '../layouts/WorkShowcase'
import OurCreativeProcess from '../layouts/OurCreativeProcess'
import Blog from './Blog'


export const Home = () => {
  return (
    <>
    <Banner/>
    <Service/>
    <About/>
    <WorkShowcase/>
    <OurCreativeProcess/>
    <Blog/>
    
    </>
  )
}
