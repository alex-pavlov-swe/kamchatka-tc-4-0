import React from 'react';
import Contact from '../Contact';
import KsuInfo from '../ksu/KsuInfo';
import BfkDays from './BfkDays';
import BfkGallery from './BfkGallery';

const Bfk = () => {
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-bfk" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>AUGUST 29 - SEPTEMBER 12, 2021</h3>
              <h1>Grand Photography Tour</h1>
              <h4>
                The most beautiful places in the right time - Kluchevskaya
                volcanic range and the Sourthen volcanoes.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>15 days</p>
            <p>2390 usd</p>
          </div>
          <div className="col">
            <p>By car - 1500 km</p>
            <p>trekking - 2-10 km per day</p>
          </div>
          <div className="col">
            <p>Nights in tents - 9</p>
            <p>Hotel - 4 nights</p>
          </div>
          <div className="col">
            <p>The group - 12 persons</p>
            <p>2 guides</p>
          </div>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP */}
      <div id="top-info-text">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <p>
                <img
                  src={require('../../../../img/tour-ksu/ksu-map.jpg')}
                  alt="the map"
                />
                We will spend two weeks in the land of volcanoes and bears,
                shooting the most picturesque views in the right time. This
                itinerary was designed specifically for photographers. We will
                bring you to the best photo spots. The most of the time will be
                spent in the area of Kluchevskoy and Tolbachik volcanoes where
                we will be able to shoot the highest and the most active
                volcanoes of Kamchatka peninsula.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* EXPAND ALL button */}
      <div className="container">
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
      </div>
      {/* DAYS and INFO */}
      <div className="container-fluid">
        <div className="row mb-4">
          <BfkDays />
          <KsuInfo />
        </div>
      </div>
      <div className="container-fluid">
        <BfkGallery />
        <Contact />
      </div>
      {/* VIDEO */}
      <div id="video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" id="main-video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NBez4S-v5LI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Kamchatka from the North to the Soth movie"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bfk;
