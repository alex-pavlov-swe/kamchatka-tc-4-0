import React from 'react';
import Contact from '../Contact';
import KsuInfo from './KsuInfo';
import KsuDays from './KsuDays';
import KsuGallery from './KsuGallery';

const KsuEng = () => {
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-ksu" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>06 JULY - 19 JULY 2020</h3>
              <h3>02 AUGUST - 15 AUGUST 2020</h3>
              <h1>Kamchatka From the North to the South</h1>
              <h4>
                A trekking tour around Tolbachik and to the volcanoes of
                Kluchevskaya range
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>14 days</p>
            <p>64 000 rubles</p>
          </div>
          <div className="col">
            <p>75 km trekking in 6 days</p>
            <p>1500 km by car</p>
          </div>
          <div className="col">
            <p>Tents - 9 nights</p>
            <p>Hotel - 4</p>
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
                “Kamchatka from the North to the South” tour is on of the best
                itineraries in Kamchatka which is proved by time and hundreds of
                our guests in the previous years. We will see magnificent
                Kluchevskaya volcanic range with its multiple active and very
                high volcanoes, solid lava fields, slag cones, volcanic desert
                and wild animals. This tour requires carrying a backpack with
                all your belongings, a tent and food for 6 days. This will help
                us to see the most remote and beautiful places.
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
          <KsuDays />
          <KsuInfo />
        </div>
      </div>
      <div className="container-fluid">
        <KsuGallery />
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

export default KsuEng;
