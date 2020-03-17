import React, { useEffect } from 'react';
import Masthead from '../index/Masthead';
import Services from '../index/Services';
import ToursList from '../index/ToursList';
import Contact from '../tours/Contact';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../actions/lang';
import PropTypes from 'prop-types';

const HomeEng = ({ lang: { lang }, changeLanguage }) => {
  useEffect(() => {
    changeLanguage('eng');
  }, [changeLanguage]);
  const changeLanguageHandle = newLang => async dispatch => {
    if (lang !== newLang) {
      localStorage.lang = newLang;
      changeLanguage(newLang);
    }
  };
  document.title = 'Tours to Kamchatka in summer 2020';
  return (
    <div>
      <Masthead />
      <Services />
      <ToursList />
      {/* VIDEO  */}
      <div className="container">
        <div className="row" id="video">
          <div className="col-sm-12" id="main-video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NBez4S-v5LI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

HomeEng.propTypes = {
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps, { changeLanguage })(HomeEng);
