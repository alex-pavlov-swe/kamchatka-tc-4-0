import React from 'react';
import Contact from '../Contact';
import OceanInfo from './OceanInfo';
import OceanDays from './OceanDays';
import OceanGallery from './OceanGallery';

const Ocean = () => {
  document.title = 'Тур Морское путешествие по Камчатке';
  return (
    <div id="tour">
      {/* TOP IMAGE */}
      <div className="top-image-tour top-image-tour-ocean" id="top-image-home">
        <div className="container h-75">
          <div className="row h-75 justify-content-center text-center">
            <div className="col-lg-10">
              <h1>Морское путешествие по Камчатке</h1>
              <h4>
                Поход на тримаране к труднодоступным и потрясающе красивым
                местам.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOP INFO TABLE */}
      <div className="container">
        <div className="row text-center" id="top-info-table">
          <div className="col">
            <p>12 дней</p>
          </div>
          <div className="col">
            <p>Трекинг налегке 5 дней (5 - 12 км в день)</p>
            <p>переход по морю - 300 км</p>
          </div>
          <div className="col">
            <p>В палатке - 6 ночей</p>
            <p>В гостинице - 4</p>
          </div>
          <div className="col">
            <p>Группа - 16 человек</p>
            <p>2 гида</p>
          </div>
        </div>
      </div>
      {/* TOP INFO TEXT and MAP */}
      <div id="top-info-text">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <p>
                <img
                  src={require('../../../img/tour-ocean/ocean-map.jpg')}
                  alt="карта Москрого Путешествия по Камчатке"
                />
                Если представить, что нет вулканов, гейзеров и термальных
                источников, на Камчатку все равно стоит приехать, чтобы увидеть
                Тихоокеанское побережье. Красота его, по мнению многих туристов,
                затмевает Долину Гейзеров и вулканы. Полуостров Камчатка
                поднимается из океана, и происходит это, по геологическим
                меркам, очень быстро. В результате этих процессов побережье
                образованно огромными обрывами, торчащими из моря скалами,
                глубокими бухтами, лиманными озерами, отделенными от океана
                тонкой полоской суши. На заднем плане видны заснеженные вулканы.
                В прибрежной зоне можно увидеть много различной живности: нерпы,
                каланы, тюлени, сивучи, косатки, киты, различные виды морских
                птиц. На прибрежных скалах можно наблюдать птичьи базары. На
                морском берегу высока вероятность увидеть медведей, которые
                выходят поискать что-нибудь съедобное, выброшенное морем, или
                половить рыбу, идущую на нерест.
              </p>
              <p>
                В какой месяц лучше смотреть океан? Июль - на море очень
                холодно, надо брать одежду как на зиму, плюс защита от дождя.
                Рыба еще не идет на нерест, и медведи не спустились к океану её
                встречать. Но это самое лучшее время для фотографов. Распадки
                гор еще в снегу, а склоны уже покрыты зеленью. Со скал срывается
                множество водопадов. Август - уже тепло, в солнечную погоду
                многие купаются в океане, рыба прет валом на нерест. Медведей
                можно понаблюдать почти на каждой стоянке. Но прибрежные горы
                немного утратили свою нереальность, снег на склонах растаял,
                водопады иссякли или сильно уменьшились. К югу от Авачинской
                бухты расположено большое количество живописных бухт, лиманных
                озер, обрывистых гор, торчащих из моря скал. По причине того,
                что эти места сравнительно недалеко от г.
                Петропавловска-Камчатского, это направление самое популярное у
                туристов и рыбаков. В этом направлении расположены знаменитые:
                остров Старичков, мыс Кекурный с лежбищем тюленей и сивучей,
                бухты Русская, Вилючинская, Лиственничная и др. Морской тур
                осуществляется на надувных десятиместных моторных тримаранах,
                способных причалить почти в любом месте и заходить в устья рек.
                С собой в туры мы берем набор морских каяков и SUP-досок, на
                которых можно покататься по бухтам, рекам и лиманным озерам.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* EXPAND ALL button */}
      <div className="container">
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
      </div>
      {/* DAYS and INFO */}
      <div className="container-fluid">
        <div className="row mb-4">
          <OceanDays />
          <OceanInfo />
        </div>
      </div>
      <div className="container-fluid">
        <OceanGallery />
        <Contact />
      </div>
      {/* VIDEO */}
      <div id="video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" id="main-video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dj6MSqjKzqM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Kamchatka from the North to the Soth movie"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocean;
