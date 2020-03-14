import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavbarEng = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/#page-top">
          Турклуб Камчатка
        </a>
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
              <Link className="nav-link js-scroll-trigger" to="/#tours-list">
                Все туры
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                О Компании
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Отзывы
              </a>
            </li>
            <li className="nav-item mr-5">
              <a className="nav-link js-scroll-trigger" href="#contact-form">
                Контакты
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="eng/">
                Eng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact-form">
                Ru
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEng;
