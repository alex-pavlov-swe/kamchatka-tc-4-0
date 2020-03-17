import React from 'react';
import Masthead from '../index/Masthead';
import Services from '../index/Services';
import TourList from '../index/ToursList';
import Contact from '../tours/Contact';
import YoutubePlayer from './YoutubePlayer';

const Head = () => {
  document.title = 'Туры на Камчатку летом 2020';
  return (
    <div>
      <Masthead />
      <Services />
      <TourList />
      <YoutubePlayer src="https://youtu.be/szKbLn4ssW4" />
      <Contact />
    </div>
  );
};

export default Head;
