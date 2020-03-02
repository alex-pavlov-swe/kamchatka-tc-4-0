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
                src={require('../../../img/tours-index/ksu.jpg')}
                alt=""
                width="100%"
              />
            </a>
            <h3>Kamchatka From the North to the South</h3>
            <h4>14 days, 64 000 rubles</h4>
            <p>
              6-days trekking with a backpack around magnificient Kluchevskaya
              volcanic range, including ascending such volcanoes as Tolabchik,
              Mutnovsky and Gorely
            </p>
          </div>
          {/*<!-- BPK -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/bpk.jpg')}
                alt=""
              />
            </a>
            <h3>Kamchatka Discovery</h3>
            <h4>9 days, 58 000 rubles</h4>
            <p>
              The most popular itinerary in Kamchatka, including volcanoes main
              volcanoes, sea cruise and rafting along the river with salmon and
              bears.
            </p>
          </div>
          {/*<!-- AVK -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="/avk#tour">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/avk.jpg')}
                alt=""
              />
            </a>
            <h3>Kamchatka Active Volcanoes</h3>
            <h4>9 days, 76 000 rubles</h4>
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
                src={require('../../../img/tours-index/mv.jpg')}
                alt=""
                width="100%"
              />
            </Link>
            <h3>Bears and Volcanoes</h3>
            <h4>8 days, 120 000 rubles</h4>
            <p>Наблюдение за медведями на Курильском озере.</p>
          </div>
          {/*<!-- PATAGONIA -->*/}
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-box" href="/patagonia#tour">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/patagonia.jpg')}
                alt=""
              />
            </a>
            <h3>Осенняя Патагония</h3>
            <h4>14 days, 2800 usd</h4>
            <p>Незабываемая поездка в горы Аргентины и Чили.</p>
          </div>
          {/*<!-- PHOTOTOUR -->*/}
          <div className="col-md-6 col-lg-4">
            <Link className="portfolio-box" to="avk">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/bfk.jpg')}
                alt=""
              />
            </Link>
            <h3>Grand Photography Tours</h3>
            <h4>15 days, 139 000 rubles</h4>
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
