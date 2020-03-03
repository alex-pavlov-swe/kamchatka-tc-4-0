import React from 'react';
import { Link } from 'react-router-dom';

const ToursList = () => {
  return (
    <div id="tours-list">
      <div className="container">
        <div className="row">
          {/*<!-- KSU -->*/}
          <div className="col-md-6 col-lg-4">
            <Link to="/eng/ksu#tour">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/ksu.jpg')}
                alt=""
                width="100%"
              />
            </Link>
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
            <Link className="portfolio-box" to="/eng/bpk">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/bpk.jpg')}
                alt=""
              />
            </Link>
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
            <Link className="portfolio-box" to="/eng/avk#tour">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/avk.jpg')}
                alt=""
              />
            </Link>
            <h3>Kamchatka Active Volcanoes</h3>
            <h4>9 days, 76 000 rubles</h4>
            <p>
              Classic tour to volcanoes Tolbachik, Kluchevskoy, Mutnovsku and
              Gorely, no backpacks.
            </p>
          </div>
          {/*<!-- MV -->*/}
          <div className="col-md-6 col-lg-4">
            <Link to="/eng/mv">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/mv.jpg')}
                alt=""
                width="100%"
              />
            </Link>
            <h3>Bears and Volcanoes</h3>
            <h4>8 days, 120 000 rubles</h4>
            <p>Observing bears of Kuril Lake in their natural habitat.</p>
          </div>
          {/*<!-- PATAGONIA -->*/}
          <div className="col-md-6 col-lg-4">
            <Link className="portfolio-box" to="/eng/patagonia#tour">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/patagonia.jpg')}
                alt=""
              />
            </Link>
            <h3>Patagonia in Autumn</h3>
            <h4>14 days, 2800 usd</h4>
            <p>Unforgettable trip to the mountains of Argentina and Chile.</p>
          </div>
          {/*<!-- PHOTOTOUR -->*/}
          <div className="col-md-6 col-lg-4">
            <Link className="portfolio-box" to="/eng/bfk">
              <img
                className="img-fluid"
                src={require('../../../img/tours-index/eng/bfk.jpg')}
                alt=""
              />
            </Link>
            <h3>Grand Photography Tour</h3>
            <h4>15 days, 139 000 rubles</h4>
            <p>
              Two weeks special itinerary for photographers, chasing light in
              the most beautiful spots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursList;
