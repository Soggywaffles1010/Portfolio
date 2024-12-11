import React from 'react'

 
 
 
import Herobuttons from './components/main_components/hero_buttons'
import Hero from './components/main_components/hero'
import Nav from './components/main_components/nav'
import Intro from './components/main_components/intro'
import Object from './components/main_components/object'
import Projects from './components/main_components/projects'
import Collaterals from './components/main_components/collaterals'
import Movie from './components/main_components/movie'
import Socialproofs from './components/main_components/socialproofs'
import Game from './components/game'
 
 

const page = () => {
  return (
    <div className='px-24 text-white  mx-10'>
         
       
     
       
        {/* <Nav/> */}
       
        
      

       
      {/* <Hero/> */}
      {/* <Game/> */}
     <Socialproofs/>
       {/* <Projects/>
       <Collaterals/> */}
     {/* <Movie/> */}
        
        
       
    </div>
  )
}

export default page