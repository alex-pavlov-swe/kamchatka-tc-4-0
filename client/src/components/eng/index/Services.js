import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              {/*<i className="far fa-4x fa-map mb-4"></i>*/}
              <img
                className="mb-3"
                src={require('../../../img/logo-home-white.jpg')}
                alt="логотип Камчатка-ТК"
                width="250"
              />
              <p className="text-muted mb-0">
                The company was founded in 2008.
              </p>
              <p className="text-muted mb-0">
                Travel Company number 021443 in the Federal Registry.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="far fa-4x fa-thumbs-up mb-4"></i>
              <p className="text-muted mb-0">
                More than 2000 guests from Russia, Europe, Japan, Australia,
                USA, China, Malasya, Singapore have already travelled with us.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="fas fa-4x fa-mountain mb-4"></i>
              <p className="text-muted mb-0">
                We are based in Kamchatka. The team of guides, cooks and drivers
                has been polishing its skills for years. We love Kamchatka and
                what we do here.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="fas fa-4x fa-hiking mb-4"></i>
              <p className="text-muted mb-0">
                We have extensive experience in organisation of trekking tours,
                photography workshops, sea cruises and individual tours of all
                kinds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
