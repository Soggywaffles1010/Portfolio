import React from 'react'
import Cooking from './Cooking/cooking'
 
 
 
import Herobuttons from './components/main_components/hero_buttons'
import Hero from './components/main_components/hero'
import Nav from './components/main_components/nav'
import Intro from './components/main_components/intro'
import Object from './components/main_components/object'
import Projects from './components/main_components/projects'
import Collaterals from './components/main_components/collaterals'
import Movie from './components/main_components/movie'
 

const page = () => {
  return (
    <div className='px-24 text-white  mx-10'>
         
       
       
       
       
        <Nav/>
        <div className='z-10'>
        <Herobuttons/>
        </div>
        
      
      {/* <Object/> */}
       
      <Hero/>
       <Intro/>
       <Projects/>
       <Collaterals/>
     <Movie/>
        
        
       
    </div>
  )
}

export default page