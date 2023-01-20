import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Qualification from '../Qualification/Qualification';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';
import Testimonial from '../Testimonial/Testimonial';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <About></About>
          <Skill></Skill>
          <Qualification></Qualification>
          <Portfolio></Portfolio>
          <Services></Services>
          
          <Testimonial></Testimonial>
          <Contact></Contact>

        </div>
    );
};

export default Home;