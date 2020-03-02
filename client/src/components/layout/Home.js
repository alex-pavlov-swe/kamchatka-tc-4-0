import React from 'react';
import Masthead from '../index/Masthead';
import Services from '../index/Services';
import TourList from '../index/ToursList';

const Head = () => {
  return (
    <div>
      <Masthead />
      <Services />
      <TourList />
      {/* VIDEO  */}
      <div className="container">
        <div className="row" id="video">
          <div className="col-sm-12" id="main-video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/szKbLn4ssW4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
