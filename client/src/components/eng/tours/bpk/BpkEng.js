import React from 'react';
import Contact from '../Contact';
import KsuInfo from '../ksu/KsuInfo';
import BpkDays from './BpkDays';
import BpkGallery from './BpkGallery';

const BpkEng = () => {
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-bpk" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>JULY 23 - JULY 31</h3>
              <h3>JULY 31 - AUGUST 8</h3>
              <h1>Kamchatka Discovery</h1>
              <h4>9 days program - the most popular volcanoes and rafting</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>9 days</p>
            <p>58 000 rubles</p>
          </div>
          <div className="col">
            <p>Light trekking - 4 days (8 - 12 km)</p>
            <p>By car - 400 km</p>
          </div>
          <div className="col">
            <p>Nights in tents - 4</p>
            <p>Hotel - 4</p>
          </div>
          <div className="col">
            <p>The group - 16 people</p>
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
                Kamchatka Discovery is a classic itinerary in Kamchatka. It
                includes three main volcanoes - Avacha, Mutnovsky and Gorely, as
                well as 3 days rafting along Bystraya river. The crater of
                Mutnovsky volcano amaze by its activity and scale, Gorely - by a
                magnificent view from its top, Avacha - by a beautiful and very
                tall cone, on top of which you fill like flying above the
                clouds. While rafting, we will have a chance to catch salmon and
                to observe Kamchatka brown bear in his natural habitat. In the
                light version of the tour, quite difficult ascending t0 Avacha
                volcano is replaces by a sea cruise to Starichkov island.
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
          <BpkDays />
          <KsuInfo />
        </div>
      </div>
      <div className="container-fluid">
        <BpkGallery />
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
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Kamchatka Discovery movie"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BpkEng;
