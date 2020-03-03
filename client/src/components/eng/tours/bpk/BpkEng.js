import React from 'react';
import Contact from '../Contact';
import BpkInfo from './BpkInfo';
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
              <h3>23 ИЮЛЯ - 31 ИЮЛЯ</h3>
              <h3>31 ИЮЛЯ - 8 АВГУСТА</h3>
              <h1>Kamchatka Discovery</h1>
              <h4>
                Классическая 9-дневная программа - основные вулканы и сплав по
                реке
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>9 дней</p>
            <p>58 000 рублей</p>
          </div>
          <div className="col">
            <p>Переходы налегке - 4 дня (по 8 - 12 км)</p>
            <p>переезды на авто - 400 км</p>
          </div>
          <div className="col">
            <p>В палатке - 4 ночей</p>
            <p>В гостинице - 4</p>
          </div>
          <div className="col">
            <p>Группа - 16 человек</p>
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
                  src={require('../../../../img/tour-ksu/ksu-map.jpg')}
                  alt="карта маршрута Большое путешествие по Камчатке"
                />
                Большое путешествие по Камчатке - это классическая программа, в
                которую включен довольно стандартный набор экскурсий - три
                вулкана и сплав по реке. Вулканы Мутновский, Горелый и
                Авачинский находятся в относительной близости от
                Петропавловска-Камчатского, поэтому переезды не слишком
                утомительны. Однако это самый настоящие активные вулканы, самые
                посещаемые на полустрове, и это не случайно.
              </p>
              <p>
                Кратер вулкана Мутновский поражает активностью, вулкан Горелый -
                красотой вида на кратерное озеро и окрестности, а Авачинский -
                правильной формой конуса, кратер которого дымится выше облаков.
                На сплаве по реке Быстрой можно увидеть совсем другую Камчатку,
                здесь нет вулканов, зато есть лосось и медведи.
              </p>
              <p>
                В облегченной версии мы заменяем довольно сложное физически
                восхождение на Авачинский вулкан на морскую прогулку.
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
          <BpkDays />
          <BpkInfo />
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
                src="https://www.youtube.com/embed/rW3XBQVO0MQ"
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