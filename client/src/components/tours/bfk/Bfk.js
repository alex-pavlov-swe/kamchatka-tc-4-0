import React from 'react';
import Contact from '../Contact';
import BfkInfo from './BfkInfo';
import BfkDays from './BfkDays';
import BfkGallery from './BfkGallery';

const BfkEng = () => {
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-bfk" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>29 АВГУСТА - 12 СЕНТЯБРЯ 2021</h3>
              <h1>Большой Фототур по Камчатке</h1>
              <h4>
                Самые привлекательные места для фотографов в правильное время -
                Ключевская группа вулканов, Южные вулканы
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>15 дней</p>
            <p>139 000 рублей</p>
          </div>
          <div className="col">
            <p>Треккинг 2-10 км в день</p>
            <p>1500 км на автомобиле</p>
          </div>
          <div className="col">
            <p>В палатке - 9 ночей</p>
            <p>В гостинице - 5</p>
          </div>
          <div className="col">
            <p>Группа - 12 человек</p>
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
          <BfkDays />
          <BfkInfo />
        </div>
      </div>
      <div className="container-fluid">
        <BfkGallery />
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

export default BfkEng;
