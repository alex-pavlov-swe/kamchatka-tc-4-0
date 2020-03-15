import React from 'react';
import Contact from '../Contact';
import PatagoniaInfo from './PatagoniaInfo';
import PatagoniaDays from './PatagoniaDays';
import PatagoniaGallery from './PatagoniaGallery';

const Patagonia = () => {
  return (
    <div className="container-fluid top-image-patagonia" id="tour">
      {/* TOP IMAGE*/}
      <div className="top-image-tour-patagonia top-image-tour">
        <div className="container h-100">
          <div className="row h-100 justify-content-center text-center">
            <div className="col-lg-10">
              <h3>11 - 24 АПРЕЛЯ 2021</h3>
              <h1>Путешествие на край Земли</h1>
              <h4>
                Пеший поход с рюкзаком по Ключевской группе вулканов, а также
                вулканы Мутновский и Горелый
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="row text-center" id="top-info-table">
        <div className="col">
          <p>14 дней</p>
          <p>2800 usd</p>
        </div>
        <div className="col">
          <p>Пешком 5 - 20 км в день</p>
          <p>1500 км на автобусе</p>
        </div>
        <div className="col">
          <p>В палатках - от 3 до 5 ночей</p>
          <p>В гостинице - 9 - 11 ночей</p>
        </div>
        <div className="col">
          <p>Группа - 12 человек</p>
          <p>2 гида</p>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP */}
      <div className="row text-center" id="top-info-text">
        <div className="col-lg-12">
          <p>
            В апреле 2021 мы снова поедем в Патагонию и приглашаем участвовать в
            нашей программе. Она лучше всего подойдет фотографам, как
            начинающим, так и продвинутым, но будет интересна и обычным
            ценителям волшебных моментов, которые нам преподносит природа.
            Проснуться затемно, идти ночью по сказочному лесу под звездным небом
            в полной тишине, чтобы с лучшей точки увидеть как Солнце на рассвете
            окрашивает вершину Фицроя в ярко-красные тона - это не то же самое
            что приехать сюда на однодневную экскурсию и сделать дежурное фото в
            жестком дневном свете. Мы проведем в районе Фицроя несколько дней,
            имея запас на плохую погоду и возможность оценить красоту этого
            места с разных ракурсов и под разные сорта Аргентинского красного
            вина. Подробности на сайте по ссылке в профиле.
          </p>
        </div>
      </div>
      {/* EXPAND ALL button */}
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
      {/* DAYS and INFO */}
      <div className="row mb-4">
        <PatagoniaDays />
        <PatagoniaInfo />
      </div>
      <PatagoniaGallery />
      <Contact />
    </div>
  );
};

export default Patagonia;
