import React from 'react';
import Contact from '../Contact';
import KoInfo from './KoInfo';
import KoDays from './KoDays';
import KoGallery from './KoGallery';

const Ko = () => {
  document.title = 'Тур Поход в Парк Налычево';
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-ko" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>15 - 26 СЕНТЯБРЯ 2020</h3>
              <h1>Краски Осени</h1>
              <h4>Осенний поход в природный парк Налычево</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>12 дней</p>
            <p>34 000 рублей</p>
          </div>
          <div className="col">
            <p>Пеший поход с рюкзаком: 8 дней (18 - 24 км в день)</p>
          </div>
          <div className="col">
            <p>В палатке - 3 ночей</p>
            <p>В домиках - 5</p>
          </div>
          <div className="col">
            <p>Группа - 14 человек</p>
            <p>2 гида</p>
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
                  src={require('../../../img/tour-ksu/ksu-map.jpg')}
                  alt="карта Морского Путешествия по Камчатке"
                />
                Поход в парк Налычево.
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
          <KoDays />
          <KoInfo />
        </div>
      </div>
      <div className="container-fluid">
        <KoGallery />
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
                src="https://www.youtube.com/embed/lUOP4oeefMo"
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

export default Ko;
