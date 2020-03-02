import React from 'react';
import Masthead from '../index/Masthead';
import Services from '../index/Services';
import ToursList from '../index/ToursList';

const HomeEng = () => {
  return (
    <div>
      <Masthead />
      <Services />
      <ToursList />
      {/* VIDEO  */}
      <div className="container">
        <div className="row" id="video">
          <div className="col-sm-12" id="main-video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NBez4S-v5LI"
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

export default HomeEng;
