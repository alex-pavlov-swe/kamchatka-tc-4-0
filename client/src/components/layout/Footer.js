import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/lang';
import PropTypes from 'prop-types';

const Footer = ({ lang: { lang }, changeLanguage }) => {
  const changeLanguageHandle = newLang => async dispatch => {
    if (lang !== newLang) {
      localStorage.lang = newLang;
      changeLanguage(newLang);
    }
  };
  return (
    <footer className="footer bg-secondary text-center">
      <div className="row">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <p>
            {lang === 'rus'
              ? 'Петропавловск-Камчатский, 2020'
              : 'Petropavlovsk-Kamchatsky, 2020'}
          </p>
        </div>

        <div className="col-lg-4 mb-5 mb-lg-0">
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.facebook.com/alexandrpavlovkamchatka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-facebook-f fa-2x"></i>
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.youtube.com/channel/UCzc9rYT7FfNf2Hyi6PzB0vw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-youtube fa-2x"></i>
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.instagram.com/kamchatkatravel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-instagram fa-2x"></i>
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="http://vkontakte.ru/club20425354"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-fw fa-vk fa-2x"></i>
          </a>
        </div>

        <div className="col-lg-4">
          <p>
            {lang === 'rus'
              ? 'ООО "Туристический Клуб Камчатка"'
              : 'Kamchatka Travel Club, LLC'}
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <p>
          {lang === 'rus'
            ? 'Номер в реестре туроператоров России РТО 021443'
            : 'Federal Travel Agency License 021443'}
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps, { changeLanguage })(Footer);
