import React from 'react';
import Contact from '../Contact';
import KsuInfo from '../ksu/KsuInfo';
import AvkDays from './AvkDays';
import AvkGallery from './AvkGallery';

const AvkEng = () => {
  document.title = 'Kamchatka Active Volcanoes';
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-avk" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>28 JULY - 09 AUGUST 2020</h3>
              <h3>16 - 28 AUGUST 2020</h3>
              <h1>Kamchatka Active Volcanoes</h1>
              <h4>
                A tour to the main volcanoes - Tolbachik, Mutnovsky and Gorely
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>13 days</p>
            <p>76 000 rubles</p>
          </div>
          <div className="col">
            <p>Light trekking - 5 days (5 - 12 km)</p>
            <p>1500 km by car</p>
          </div>
          <div className="col">
            <p>Nights in tents - 8</p>
            <p>In a hotel - 4</p>
          </div>
          <div className="col">
            <p>The group - 20 people</p>
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
                “Kamchatka Active Volcanoes” is like “From the North to the
                South” tour but doesn’t require carrying a backpack. This is on
                of the best itineraries in Kamchatka which is proved by time and
                hundreds of our guests in the previous years. We will see
                magnificent Kluchevskaya volcanic range with its multiple active
                and very high volcanoes, solid lava fields, slag cones, volcanic
                desert and wild animals.
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
          <AvkDays />
          <KsuInfo />
        </div>
      </div>
      <div className="container-fluid">
        <AvkGallery />
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

export default AvkEng;
