import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/lang';
import PropTypes from 'prop-types';

const Navbar = ({ lang: { lang }, changeLanguage }) => {
  const changeLanguageHandle = newLang => async dispatch => {
    if (lang !== newLang) {
      localStorage.lang = newLang;
      changeLanguage(newLang);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container">
        <Link
          className="navbar-brand js-scroll-trigger"
          to={lang === 'rus' ? '/#page-top' : '/eng/#page-top'}
        >
          {lang === 'rus' ? 'Турклуб Камчатка' : 'Kamchatka Travel'}
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to={lang === 'rus' ? '/#tours-list' : '/eng/#tours-list'}
              >
                {lang === 'rus' ? 'Все туры' : 'All Tours'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to={lang === 'rus' ? '/about' : '/eng/about'}
              >
                {lang === 'rus' ? 'О Компании' : 'About'}
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link js-scroll-trigger" to="#contact-form">
                {lang === 'rus' ? 'Контакты' : 'Contact'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                href=""
                onClick={changeLanguageHandle('eng')}
                to="/eng"
              >
                Eng
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                href="#contact-form"
                onClick={changeLanguageHandle('rus')}
                to="/"
              >
                Ru
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(mapStateToProps, { changeLanguage })(Navbar);
