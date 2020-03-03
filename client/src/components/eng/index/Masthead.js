import React from 'react';

const Masthead = () => {
  return (
    <div className="top-image" id="top-image-home">
      <div className="container h-100">
        <div className="row h-100 justify-content-center text-center">
          <div className="col-lg-10">
            <h1 className="text-uppercase text-white font-weight-bold">
              KAMCHATKA TOURS
            </h1>
          </div>
          <div className="col-lg-8 align-bottom m-4">
            <a href="#tours-index">
              <button className="btn btn-info">Choose Itinerary</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
