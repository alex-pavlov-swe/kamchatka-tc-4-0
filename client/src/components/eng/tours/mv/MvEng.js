import React from 'react';
import Contact from '../Contact';
import MvInfo from './MvInfo';
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
            <p>14 дней</p>
            <p>180 000 рублей</p>
          </div>
          <div className="col">
            <p>Трекинг: 5 - 12 км в день</p>
            <p>800 км на автомобиле</p>
          </div>
          <div className="col">
            <p>В палатке - 9 ночей</p>
            <p>В гостинице - 4</p>
          </div>
          <div className="col">
            <p>Группа - 10 человек</p>
            <p>1 гид</p>
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
                  alt="карта маршрута Камчатка с Севера на Юг"
                />
                Про маршрут "Активные Вулканы Камчатки" можно сказать примерно
                то же самое что и про маршрут "Камчатка с Севера на Юг". Это
                один из лучший и проверенных временем маршрутов на Камчатке. За
                годы его существования в нашей компании это подтвердили уже
                сотни прошедших по нему путешественников. Ключевская группа
                вулканов всегда поражает своими масштабами, красотой и
                разнообразием.
              </p>
              <p>
                Отличие именно "Активных вулканов" в том что здесь нет пеших
                переходов с рюкзаками. Группу всегда сопровождает Камаз, а все
                походы будут однодневными, с возвращением в лагерь к вечеру.
              </p>
              <p>
                На маршруте мы увидим величественную Ключевскую группу вулканов,
                проявления вулканической активности разных лет и тысячелетий,
                шлаковую пустыню, лавовые потоки, поля и пещеры, дымящиеся
                вершины вулканов Ключевской и Безымянный, местных обитателей -
                медведя, лису, сусликов и сурков.
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
          <MvInfo />
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
                src="https://www.youtube.com/embed/OnZ97O4ATSE"
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