import React from 'react';
import Contact from '../Contact';
import KsuInfo from '../ksu/KsuInfo';
import PatagoniaDays from './PatagoniaDays';
import PatagoniaGallery from './PatagoniaGallery';

const PatagoniaEng = () => {
  return (
    <div className="container-fluid top-image-patagonia" id="tour">
      {/* TOP IMAGE*/}
      <div className="top-image-tour-patagonia top-image-tour">
        <div className="container h-100">
          <div className="row h-100 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>11 - 24 APRIL 2021</h3>
              <h1>Patagonia in Autumn</h1>
              <h4>A journey to the Edge of the World</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="row text-center" id="top-info-table">
        <div className="col">
          <p>14 days</p>
          <p>2800 usd</p>
        </div>
        <div className="col">
          <p>Trekking 5 - 12 km per day</p>
          <p>By bus - 1500 km</p>
        </div>
        <div className="col">
          <p>Tents - 5 nights</p>
          <p>Hotels - 8</p>
        </div>
        <div className="col">
          <p>The group - up to 12</p>
          <p>2 guides</p>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP */}
      <div className="row text-center" id="top-info-text">
        <div className="col-lg-12">
          <p>
            {/*
            <img
              src={require('../../../../img/tour- ksu/ksu-map.jpg')}
              alt="the map"
            />
            */}
            This is our new program to the wonderful mountains of Argentina and
            Chile. We will visit Fitzroy mountain, Perito Moreno Glacier and
            Torres Del Paine national park. The itinerary was designed mostly
            for photographers, we will try visit the most beautiful locations in
            the best time for photography - early in the morning and just before
            the sunset, when the light is the most appropriate. We will also
            have a chance to get to know with charming towns of El Chalten, El
            Calafate and Puerto Natales.
          </p>
        </div>
      </div>
      {/* EXPAND ALL button */}
      <div className="row" id="expand-all">
        <div className="col-sm-12 text-left">
          <button
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target=".collapse"
            aria-expanded="false"
          >
            <i className="fas fa-chevron-right"></i>
            show all details
          </button>
        </div>
      </div>
      {/* DAYS and INFO */}
      <div className="row mb-4">
        <PatagoniaDays />
        <KsuInfo />
      </div>
      <PatagoniaGallery />
      <Contact />
    </div>
  );
};

export default PatagoniaEng;
