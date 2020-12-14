import React from 'react';
import Contact from '../Contact';
import BakenInfo from './BakenInfo';
import BakenDays from './BakenDays';
import BakenGallery from './BakenGallery';

const Baken = () => {
  document.title = 'Тур Поход вокруг вулкана Бакенинг';
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-baken" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10"> 
              <h1>Поход вокруг вулкана Бакенинг</h1>
              <h4>Поход по красивейшему и мало посещаемому району Камчатки</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>12 дней</p>
          </div>
          <div className="col">
            <p>Пеший поход с рюкзаком: 10 дней (10 - 18 км в день)</p>
          </div>
          <div className="col">
            <p>В палатке - 9 ночей</p>
            <p>В гостинице - 2</p>
          </div>
          <div className="col">
            <p>Группа - 14 человек</p>
            <p>2 гида</p>
          </div>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP 
      <div id="top-info-text">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <p>
                <img
                  src={require('../../../img/tour-ksu/ksu-map.jpg')}
                  alt="карта Морского Путешествия по Камчатке"
                />
                Поход в районе вулкана Бакенинг.
              </p>
            </div>
          </div>
        </div>
      </div>*/}
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
          <BakenDays />
          <BakenInfo />
        </div>
      </div>
      <div className="container-fluid">
        <BakenGallery />
        <Contact />
      </div>
    </div>
  );
};

export default Baken;
