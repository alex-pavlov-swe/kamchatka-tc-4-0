import React from 'react';
import Contact from '../Contact';
import KsuInfo from '../ksu/KsuInfo';
import MvDays from './MvDays';
import MvGallery from './MvGallery';

const MvEng = () => {
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-mv" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10 align-bottom"></div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p id="mv_header">Bears and Volcanoes</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>14 days</p>
            <p>180 000 rubles</p>
          </div>
          <div className="col">
            <p>Trekking: 5 - 12 км per day</p>
            <p>800 by car</p>
          </div>
          <div className="col">
            <p>Nights in tents - 9</p>
            <p>Hotel - 4 nights</p>
          </div>
          <div className="col">
            <p>The group - 10 people</p>
            <p>1 guide</p>
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
                This tour was designed specifically for observing Kamchatka
                brown bear in its natural habitat. We will spend 3 full days on
                the banks of the famous Kuril Lake which is a part of Kronotsky
                Nature Reserve. Kuril Lake is one of the few places in the world
                where we can safely observe huge brown bears fishing salmon and
                paying almost no attention to people. Kuril Lake is a perfect
                place for photographers and everyone who loves observing wild
                nature.
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
              развернуть все вкладки
            </button>
          </div>
        </div>
      </div>
      {/* DAYS and INFO */}
      <div className="container-fluid">
        <div className="row mb-4">
          <MvDays />
          <KsuInfo />
        </div>
      </div>
      <div className="container-fluid">
        <MvGallery />
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
                src="https://www.youtube.com/embed/EVZR9ciwKQQ"
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

export default MvEng;
