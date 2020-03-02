import React from 'react';
import { Link } from 'react-router-dom';

const ToursList = () => {
  return (
    <div id="tours-list">
      <div className="container">
        <div className="row">
          {/*<!-- KSU -->*/}
          <div className="col-md-6 col-lg-4">
            <a href="/ksu#tour">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/ksu.jpg')}
                alt=""
                width="100%"
              />
            </a>
            <h3>Камчатка с Севера на Юг</h3>
            <h4>14 дней, 64 000 рублей</h4>
            <p>
              6-дневный пеший поход c рюкзаком средней сложности по диким местам
              уникальной Ключевской группы вулканов, а также восхождения на
              Толбачик, Мутновский, Горелый.
            </p>
          </div>
          {/*<!-- BPK -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/bpk.jpg')}
                alt=""
              />
            </a>
            <h3>Большое Путешествие по Камчатке</h3>
            <h4>9 дней, 58 000 рублей</h4>
            <p>
              Самый популярный и доступный автомобильный тур на Камчатке -
              вулканы Мутновский и Горелый, сплав по реке Быстрая, а также
              морская прогулка.
            </p>
          </div>
          {/*<!-- AVK -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="/avk#tour">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/avk.jpg')}
                alt=""
              />
            </a>
            <h3>Активные Вулканы Камчатки</h3>
            <h4>9 дней, 76 000 рублей</h4>
            <p>
              Автомобильный тур к вулканам Толбачик, Ключевской, Мутновский,
              Горелый с однодневными трекингами, морская прогулка.
            </p>
          </div>
          {/*<!-- MV -->*/}
          <div className="col-md-6 col-lg-4">
            <Link to="/ksu">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/mv.jpg')}
                alt=""
                width="100%"
              />
            </Link>
            <h3>Медведи и Вулканы</h3>
            <h4>8 дней, 120 000 рублей</h4>
            <p>Наблюдение за медведями на Курильском озере.</p>
          </div>
          {/*<!-- PATAGONIA -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="/patagonia#tour">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/patagonia.jpg')}
                alt=""
              />
            </a>
            <h3>Осенняя Патагония</h3>
            <h4>14 дней, 2800 usd</h4>
            <p>Незабываемая поездка в горы Аргентины и Чили.</p>
          </div>
          {/*<!-- PHOTOTOUR -->*/}
          <div className="col-md-6 col-lg-4">
            <Link className="portfolio-box" to="avk">
              <img
                className="img-fluid"
                src={require('../../img/tours-index/bfk.jpg')}
                alt=""
              />
            </Link>
            <h3>Большой Фототур по Камчатке</h3>
            <h4>15 дней, 139 000 рублей</h4>
            <p>
              Самые привлекательные места для фотографов в правильное время -
              Ключевская группа вулканов, Южные вулканы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursList;
