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
                  alt="карта маршрута Камчатка с Севера на Юг"
                />
                Камчатка с Севера на Юг - по мнению многих это самый лучший
                пеший маршрут на Камчатке. За годы его существования в нашей
                компании это подтвердили уже сотни прошедших по нему
                путешественников. Ключевская группа вулканов всегда поражает
                своими масштабами, красотой и разнообразием.
              </p>
              <p>
                Это именно пеший маршрут, нужно будет пройти 75 км за 6 дней по
                абсолютно диким местам без людей, дорог и сотовой связи. Ночевки
                в палатках. Все личные вещи, как и продукты, нужно нести в
                рюкзаке за плечами.
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

export default KsuEng;
