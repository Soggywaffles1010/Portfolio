import React from 'react';
import Nav from './components/main_components/nav';
import Game from './components/game';
import Socialproofs from './components/main_components/socialproofs';
import Projects from './components/main_components/projects';
import Collaterals from './components/main_components/collaterals';
import Videoproject from './components/main_components/videoproject';
import Testimonials from './components/main_components/testimonials';


 

const Page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 mx-auto text-white flex flex-col gap-8">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
       

      {/* Content Sections */}
      <div>
        <Game />
      </div>

      <div>
      <Socialproofs/>
      </div>

      {/* Projects */}
      <div id="projects">
        <Projects />
      </div>

      {/* Collaterals */}
      <div id="collaterals">
        <Collaterals />
      </div>

      {/* Movies */}
      <div id="movies">
        <Videoproject />
        
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Page;
