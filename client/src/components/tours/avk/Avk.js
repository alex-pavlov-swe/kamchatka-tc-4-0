import React from 'react';
import Contact from '../Contact';
import AvkInfo from './AvkInfo';
import AvkDays from './AvkDays';
import AvkGallery from './AvkGallery';

const Avk = () => {
  return (
    <div className="container-fluid" id="tour">
      {/* TOP IMAGE*/}
      <div className="top-image-tour-avk top-image-tour">
        <div className="container h-100">
          <div className="row h-100 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>28 ИЮЛЯ - 09 АВГУСТА 2020</h3>
              <h3>16 - 28 АВГУСТА 2020</h3>
              <h1>Активные Вулканы Камчатки</h1>
              <h4>
                Автомобильный тур к вулканам Толбачик, Ключевской, Мутновский,
                Горелый с однодневными трекингами, морская прогулка
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="row text-center" id="top-info-table">
        <div className="col">
          <p>13 дней</p>
          <p>76 000 рублей</p>
        </div>
        <div className="col">
          <p>Трекинг налегке 5 дней (5 - 12 км в день)</p>
          <p>1500 км на автомобиле</p>
        </div>
        <div className="col">
          <p>В палатке - 8 ночей</p>
          <p>В гостинице - 4</p>
        </div>
        <div className="col">
          <p>Группа - 20 человек</p>
          <p>2 гида</p>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP */}
      <div className="row text-center" id="top-info-text">
        <div className="col-lg-12">
          <p>
            <img
              //src={require('../../../img/tour-Avk/Avk-map.jpg')}
              alt="карта маршрута Камчатка с Севера на Юг"
            />
            Камчатка с Севера на Юг - по мнению многих это самый лучший пеший
            маршрут на Камчатке. За годы его существования в нашей компании это
            подтвердили уже сотни прошедших по нему путешественников. Ключевская
            группа вулканов всегда поражает своими масштабами, красотой и
            разнообразием.
          </p>
          <p>
            Это именно пеший маршрут, нужно будет пройти 75 км за 6 дней по
            абсолютно диким местам без людей, дорог и сотовой связи. Ночевки в
            палатках. Все личные вещи, как и продукты, нужно нести в рюкзаке за
            плечами.
          </p>
          <p>
            На маршруте мы увидим величественную Ключевскую группу вулканов,
            проявления вулканической активности разных лет и тысячелетий,
            шлаковую пустыню, лавовые потоки, поля и пещеры, дымящиеся вершины
            вулканов Ключевской и Безымянный, местных обитателей - медведя,
            лису, сусликов и сурков.
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
            развернуть все вкладки
          </button>
        </div>
      </div>
      {/* DAYS and INFO */}
      <div className="row mb-4">
        <AvkDays />
        <AvkInfo />
      </div>
      <AvkGallery />
      <Contact />
      {/* VIDEO */}
      <div className="row" id="video">
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
  );
};

export default Avk;
